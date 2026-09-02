// Custom Cursor & Magnetic Buttons
document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.getElementById("cursor");
  const follower = document.getElementById("cursor-follower");

  if (window.innerWidth > 768 && cursor && follower) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      follower.style.left = e.clientX + "px";
      follower.style.top = e.clientY + "px";
    });

    const hoverables = document.querySelectorAll("a, button, .servico-item, .diferencial-card");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(2)";
        follower.style.transform = "translate(-50%, -50%) scale(1.5)";
      });
      el.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        follower.style.transform = "translate(-50%, -50%) scale(1)";
      });
    });
  }
});
