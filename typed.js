<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Srinjay's Portfolio</title>
  <style>
    body { font-family: sans-serif; margin: 0; transition: background 0.3s, color 0.3s; }
    #intro-screen { height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; }
    #portfolio-content.hidden { display: none; }
    .fade-in { opacity: 0; transform: translateY(20px); transition: opacity 1s ease-out, transform 1s ease-out; }
    .fade-in.visible { opacity: 1; transform: translateY(0); }
    .dark-mode { background: #121212; color: #fff; }
    #progress-bar-container { position: fixed; top: 0; left: 0; width: 100%; height: 5px; background: #eee; z-index: 999; }
    #progress-bar { height: 100%; background: #00f; width: 0%; transition: width 0.2s; }
    #back-to-top { position: fixed; bottom: 20px; right: 20px; display: none; padding: 10px; border: none; background: #333; color: #fff; cursor: pointer; border-radius: 5px; opacity: 0; transition: opacity 0.3s; }
    #dark-mode-toggle { position: fixed; top: 10px; right: 10px; padding: 5px 10px; background: #333; color: #fff; border: none; cursor: pointer; }
  </style>
</head>
<body>
  <div id="progress-bar-container"><div id="progress-bar"></div></div>

  <div id="intro-screen">
    <h1>Welcome to Srinjay's Portfolio</h1>
    <button id="open-portfolio">Click to Open Portfolio</button>
  </div>

  <div id="portfolio-content" class="hidden">
    <button id="dark-mode-toggle">Toggle Dark Mode</button>
    <h2 class="fade-in">Hi, I'm <span id="typed-text"></span></h2>
    <section class="fade-in">
      <h3>Certificates</h3>
      <button onclick="toggleCertificates()">Toggle Certificates <span id="toggle-icon">▼</span></button>
      <ul id="certificates-list" class="hidden">
        <li>Certificate 1</li>
        <li>Certificate 2</li>
        <li>Certificate 3</li>
      </ul>
    </section>
    <section class="fade-in">
      <p>This is some more content that fades in as you scroll.</p>
    </section>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
  <script>
    // Typed.js animation
    const typed = new Typed('#typed-text', {
      strings: ['Web Developer.', 'Photographer.', 'Tech Enthusiast.', 'Traveller.', 'Lifelong Learner.'],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });

    // Intro Screen Logic
    document.getElementById('open-portfolio').addEventListener('click', () => {
      document.getElementById('intro-screen').style.display = 'none';
      document.getElementById('portfolio-content').classList.remove('hidden');
      window.scrollTo(0, 0);
    });

    // Certificate Toggle
    function toggleCertificates() {
      const list = document.getElementById('certificates-list');
      const icon = document.getElementById('toggle-icon');
      if (list.classList.contains('hidden')) {
        list.classList.remove('hidden');
        icon.textContent = '▲';
      } else {
        list.classList.add('hidden');
        icon.textContent = '▼';
      }
    }

    // Dark Mode Toggle
    const darkToggle = document.getElementById('dark-mode-toggle');
    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });

    // Scroll Animation
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    fadeElements.forEach(el => observer.observe(el));

    // Progress Bar
    const progressBar = document.getElementById('progress-bar');
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${scrollPercent}%`;
    });

    // Back to Top Button
    const backToTop = document.createElement('button');
    backToTop.id = 'back-to-top';
    backToTop.innerText = '↑';
    document.body.appendChild(backToTop);
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.style.display = 'block';
        backToTop.style.opacity = '1';
      } else {
        backToTop.style.opacity = '0';
        setTimeout(() => (backToTop.style.display = 'none'), 300);
      }
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  </script>
</body>
</html>
