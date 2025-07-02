const { randomUUID } = require("node:crypto");
const sessionModal = require("../../models/session.model");
// 1 Tạo ra session ID (sid) => bằng một chuỗi ngẫu nhiên , ko trùng lặp
// 2. Gửi phản hồi (server -> client) yêu cầu browser tạo ra cookie sid=xxx
// 3. lấy sid từ cookie để xác định client
async function handleSession(req, res, next) {
  let _sid = req.cookies.sid;
  let session = _sid && (await sessionModal.findById(req.cookies.sid));

  if (!session) {
    _sid = randomUUID();
    const date = new Date();
    session = await sessionModal.create({ sid: _sid });
    sessionModal.create({ sid: _sid });

    date.setDate(date.getDate() + 1);
    res.set("Set-Cookie", `sid=${_sid}; path=/; httpOnly;expires=${date}`);
  }

  let sessionData = JSON.parse(session.data ?? null) ?? {};

  res.session = {
    get(key) {
      return sessionData[key] ?? null;
    },
    set(key, value) {
      sessionData[key] = value;
      sessionModal.update(_sid, {
        data: JSON.stringify(sessionData),
      });
    },
  };

  next();
}

module.exports = handleSession;
