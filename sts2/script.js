// Scroll-spy: highlight the nav link matching the section in view.
(function () {
  const links = Array.from(document.querySelectorAll(".navlinks a"));
  const sections = links
    .map(l => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length || !("IntersectionObserver" in window)) return;

  const byId = new Map();
  links.forEach(l => byId.set(l.getAttribute("href").slice(1), l));

  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        const link = byId.get(e.target.id);
        if (!link) return;
        if (e.isIntersecting) {
          links.forEach(l => l.classList.remove("active"));
          link.classList.add("active");
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach(s => io.observe(s));
})();

// Subtle parallax on hero for polish.
(function () {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  hero.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
  });
})();
