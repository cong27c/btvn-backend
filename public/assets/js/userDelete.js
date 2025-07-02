document.addEventListener("DOMContentLoaded", () => {
  const isEditPage = document.getElementById("editUserForm") !== null;

  document.querySelectorAll(".delete-item").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();

      const userId = btn.getAttribute("data-id");
      const userName = btn.getAttribute("data-name");

      if (confirm(`Bạn có chắc chắn muốn xóa người dùng ${userName} ko ?`)) {
        try {
          const res = await fetch(`/admin/users/${userId}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (res.ok) {
            isEditPage
              ? (window.location.href = "/admin/users")
              : btn.closest("tr").remove();
          } else {
            const data = await res.json();
            alert(data.message || "Xóa thất bại");
          }
        } catch (error) {
          alert("Lỗi khi gủi yêu cầu xóa");
        }
      }
    });
  });
});
