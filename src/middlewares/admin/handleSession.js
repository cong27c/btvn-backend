const { randomUUID } = require("node:crypto");
const sessionModal = require("../../models/session.model");
const { type } = require("node:os");

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
    date.setDate(date.getDate() + 7);
    res.set("Set-Cookie", `sid=${_sid}; path=/; httpOnly;expires=${date}`);
  }

  req.session = JSON.parse(session.data ?? null) ?? {};

  req.setFlash = (data) => {
    req.session.flash = req.session.flash || [];
    req.session.flash.push({
      type: data.type,
      message: data.message,
    });
  };

  const sessionId = _sid;

  res.on("finish", async () => {
    await sessionModal.update(sessionId, {
      data: JSON.stringify(req.session),
    });
  });

  next();
}

module.exports = handleSession;
