function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }

  // animation
  const aboutSection = document.querySelector('.about-content');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(aboutSection);