// Scroll Progress & Timeline Animation
window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  const progressBar = document.getElementById("scroll-progress");
  if (progressBar) {
    progressBar.style.width = scrollPercent + "%";
  }

  // Update Timeline Progress
  const timelineProgress = document.getElementById("timeline-progress");
  const processoSec = document.getElementById("processo");
  if (timelineProgress && processoSec) {
    const rect = processoSec.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      const secProgress = Math.min(100, Math.max(0, ((window.innerHeight - rect.top) / rect.height) * 100));
      timelineProgress.style.width = secProgress + "%";
    }
  }
});
