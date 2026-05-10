document.addEventListener('DOMContentLoaded', () => {
  // Clock update
  const timeEl = document.getElementById('clock-time');
  const dateEl = document.getElementById('clock-date');

  function updateClock() {
    const now = new Date();
    const h = now.getHours() % 12 || 12;
    const m = String(now.getMinutes()).padStart(2, "0");
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    if (timeEl) timeEl.textContent = `${h}:${m} ${ampm}`;
    if (dateEl) dateEl.textContent = `${days[now.getDay()]} ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  }

  updateClock();
  setInterval(updateClock, 1000);

  // Start Menu
  const startBtn = document.getElementById('start-button');
  const startMenu = document.getElementById('start-menu');
  const startMenuOverlay = document.getElementById('start-menu-overlay');

  function toggleStartMenu() {
    const isActive = startMenu.classList.contains('active');
    if (isActive) {
      startMenu.classList.remove('active');
      startMenuOverlay.classList.remove('active');
      startBtn.classList.remove('active');
    } else {
      startMenu.classList.add('active');
      startMenuOverlay.classList.add('active');
      startBtn.classList.add('active');
    }
  }

  if (startBtn) startBtn.addEventListener('click', toggleStartMenu);
  if (startMenuOverlay) startMenuOverlay.addEventListener('click', toggleStartMenu);

  // Close start menu when clicking a link
  const startLinks = document.querySelectorAll('.start-menu-link');
  startLinks.forEach(link => {
    link.addEventListener('click', () => {
      startMenu.classList.remove('active');
      startMenuOverlay.classList.remove('active');
      startBtn.classList.remove('active');
    });
  });

  // Projects Tabs
  const tabTech = document.getElementById('tab-technical');
  const tabGraph = document.getElementById('tab-graphic');
  const contentTech = document.getElementById('content-technical');
  const contentGraph = document.getElementById('content-graphic');
  const statusTab = document.getElementById('status-tab-info');

  if (tabTech && tabGraph) {
    tabTech.addEventListener('click', () => {
      tabTech.style.background = 'var(--win-gray)';
      tabTech.style.top = '2px';
      tabTech.style.zIndex = '1';
      tabTech.style.borderColor = 'var(--win-3d-light) var(--win-3d-dark) var(--win-gray) var(--win-3d-light)';

      tabGraph.style.background = 'var(--win-gray-light)';
      tabGraph.style.top = '0px';
      tabGraph.style.zIndex = '0';
      tabGraph.style.borderColor = 'var(--win-3d-light) var(--win-3d-dark) var(--win-3d-dark) var(--win-3d-light)';

      contentTech.style.display = 'grid';
      contentGraph.style.display = 'none';
      statusTab.textContent = '12 projects — click any folder to view details';
    });

    tabGraph.addEventListener('click', () => {
      tabGraph.style.background = 'var(--win-gray)';
      tabGraph.style.top = '2px';
      tabGraph.style.zIndex = '1';
      tabGraph.style.borderColor = 'var(--win-3d-light) var(--win-3d-dark) var(--win-gray) var(--win-3d-light)';

      tabTech.style.background = 'var(--win-gray-light)';
      tabTech.style.top = '0px';
      tabTech.style.zIndex = '0';
      tabTech.style.borderColor = 'var(--win-3d-light) var(--win-3d-dark) var(--win-3d-dark) var(--win-3d-light)';

      contentGraph.style.display = 'block';
      contentTech.style.display = 'none';
      statusTab.textContent = 'Graphic Design Portfolio';
    });
  }

  // Fade-in animation on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.win-window.fade-in').forEach(el => {
    observer.observe(el);
  });

  // Project Data
  window.projectsData = {
    "tedxpup": { "title": "TEDxPUP Official Website", "year": "2026", "tech": ["React.js", "TypeScript", "Typeform"], "type": "Team Project", "fullDescription": "The TEDxPUP Official Website is the central online platform for TEDx events organized by students of the Polytechnic University of the Philippines. It serves as the go-to destination for event information, speaker profiles, and updates for the PUP community and beyond.", "images": [] },
    "awscc-pup-website": { "title": "AWS Cloud Club PUP Official Website", "year": "2026", "tech": ["TypeScript", "Astro", "Python", "CSS"], "type": "Team Project", "fullDescription": "The AWS Cloud Club PUP Official Website is an all-in-one online platform for AWS Cloud Club PUP Manila. It provides members and visitors with information about the club's activities, events, projects, and team, serving as the digital home of the organization.", "images": [] },
    "surroundsense": { "title": "SurroundSense", "year": "2025", "tech": ["Arduino", "C++", "Python"], "type": "Solo Project", "fullDescription": "SurroundSense is a real-time scanning app that maps nearby surroundings using the TF Mini-S LiDAR and MPU6050 gyro sensor. Acting like a digital pen, the system collects distance and orientation data as you move the device, plotting a map of the environment. You can view the result not just in a 2D radar-style map but also in a 3D wireframe style for a more detailed look. Arduino (C++) manages the hardware control, while Python with Pygame handles data processing and visualization.", "images": [{ "src": "./SURROUNDSENSE/SURROUNDSENSE_WELCOME.png", "alt": "SurroundSense Welcome Screen" }, { "src": "./SURROUNDSENSE/SURROUNDSENSE2D.png", "alt": "SurroundSense 2D Mapping" }, { "src": "./SURROUNDSENSE/SURROUNDSENSE_TEST.png", "alt": "SurroundSense Testing" }, { "src": "./SURROUNDSENSE/SURROUNDSENSE3D.png", "alt": "SurroundSense 3D Mapping" }] },
    "project-zero": { "title": "Project Zero", "year": "2025", "tech": ["PHP", "Laravel", "Tailwind CSS", "SQL"], "type": "Solo Project", "fullDescription": "Project Zero is a full-stack job listing platform built with PHP Laravel, styled with Tailwind CSS, and connected to a MySQL database. Made for IT professionals, it links users with companies by finding the right job opportunities that fit their goals, helping them go from zero to career hero.", "images": [{ "src": "./PROJECT ZERO.png", "alt": "Project Zero Dashboard" }] },
    "atimonan": { "title": "Municipal Website of Atimonan, Quezon", "year": "2025", "tech": ["HTML", "CSS", "JavaScript", "Google Apps Script", "Firebase"], "type": "Team Project (★ I lead this project)", "fullDescription": "The Municipal Website of Atimonan, Quezon is a community-focused platform developed by our team to give residents and visitors easy access to local information in one place. The Home page highlights the beauty of Atimonan, showcasing its culture, landmarks, and vibrant community life. The Services section provides access to both barangay and municipal-level assistance, programs, and online transactions, while the News section keeps everyone updated with announcements and events. The About page shares the town's history and introduces its current leaders, and the Contact page lists hotlines and communication channels for emergencies.", "images": [{ "src": "./ATIMONAN/ATIMONAN_LOGIN.png", "alt": "Atimonan Website Login Page" }, { "src": "./ATIMONAN/ATIMONAN_HOME.png", "alt": "Atimonan Website Home Page" }, { "src": "./ATIMONAN/ATIMONAN_SERVICES.png", "alt": "Atimonan Website Services Page" }, { "src": "./ATIMONAN/ATIMONAN_NEWS.png", "alt": "Atimonan Website News Page" }, { "src": "./ATIMONAN/ATIMONAN_ABOUT.png", "alt": "Atimonan Website About Page" }, { "src": "./ATIMONAN/ATIMONAN_CONTACT.png", "alt": "Atimonan Website Contact Page" }] },
    "pokemon-finder": { "title": "Pokemon Finder", "year": "2024", "tech": ["HTML", "CSS", "JavaScript"], "type": "Solo Project", "fullDescription": "Pokémon Finder is a fun web app built using HTML, CSS, and JavaScript. It integrates with a Pokémon API to fetch data and display classic pixel-art Pokémon sprites. Simply search for a Pokémon and the app shows its sprite on screen.", "images": [{ "src": "./POKEMON_FINDER.png", "alt": "Pokemon Finder Dashboard" }] },
    "movieboxd": { "title": "Movieboxd", "year": "2024", "tech": ["PHP", "CSS", "SQL"], "type": "Solo Project", "fullDescription": "Movieboxd is a parody of Letterboxd that explores user authentication, focusing on login and registration with a MySQL database. It demonstrates how the frontend connects to the backend and manages user data.", "images": [{ "src": "./MOVIEBOXD1.png", "alt": "Movieboxd Login" }, { "src": "./MOVIEBOXD2.png", "alt": "Movieboxd Register" }] },
    "digital-business-card": { "title": "Digital Business Card", "year": "2024", "tech": ["HTML", "CSS"], "type": "Solo Project", "fullDescription": "Digital Business Card is a clean and minimal web profile built with HTML and CSS to showcase personal information. Inspired by Tyler, The Creator's iconic ID card from Call Me If You Get Lost.", "images": [{ "src": "./BUSINESS_CARD.png", "alt": "Business Card" }] },
    "straw-hat-pirates": { "title": "Meet the Straw Hat Pirates", "year": "2024", "tech": ["HTML", "CSS"], "type": "Solo Project", "fullDescription": "Meet the Straw Hat Pirates is a wiki-like website built with HTML and CSS, featuring the members of the Straw Hat Pirates from One Piece. Each character is displayed on a card styled after their iconic bounty poster.", "images": [{ "src": "./STRAWHATS.png", "alt": "Straw Hat Pirates" }] },
    "rfid-report-card": { "title": "Arduino-Based RFID System as an Efficient Tracker of the Students' Report Card", "year": "2023", "tech": ["Arduino", "C++"], "type": "Team Project (★ I lead this project)", "fullDescription": "This project is an Arduino-based RFID student tracking system designed to simplify how grades are viewed and shared. When a student taps their RFID card, their grades are instantly shown on an LCD screen for quick access. The system also uses a GSM module to send the results via SMS to both students and parents, ensuring timely updates and promoting transparency.", "images": [{ "src": "./RFID_GRADE.png", "alt": "RFID Grade System" }] },
    "project-yu": { "title": "Project Yú", "year": "2019", "tech": ["Arduino", "C++"], "type": "Team Project", "fullDescription": "Project Yú is an Arduino-based robot designed to assist fishermen in locating areas with higher fish abundance. Powered by a solar panel, it uses a submerged pH level sensor to measure water conditions and a GSM module to send real-time updates directly to fishermen.", "note": "Presented at Division Science and Technology Fair 2019 - Science Innovation Expo", "images": [] },
    "project-talakinesis": { "title": "Project Talakinesis", "year": "2019", "tech": ["Arduino", "C++"], "type": "Team Project", "fullDescription": "Project Talakinesis is an Arduino-based motion-activated lighting system designed to promote efficient energy use. Using a PIR motion sensor, the system detects movement and automatically turns on a light only when needed.", "note": "Presented at 1st Filipino Ideas Expo (2019)", "images": [] },
    "rfid-passport": { "title": "Arduino-Based RFID Technology as an Efficient Way of Passport Verification", "year": "2019", "tech": ["Arduino", "C++"], "type": "Team Project (★ I lead this project)", "fullDescription": "This project introduces an Arduino-based RFID system that revolutionizes passport verification. With just a single tap of an RFID-enabled passport, a passenger's information instantly appears on the screen, eliminating the delays of manual checks.", "images": [] }
  };

  const base = window.ASSET_BASE || "/assets";
  Object.values(window.projectsData).forEach(project => {
    if (project.images) {
      project.images.forEach(img => {
        if (img.src.startsWith("./")) {
          img.src = img.src.replace("./", base + "/");
        } else if (img.src.startsWith("/")) {
          img.src = base + img.src;
        }
      });
    }
  });

  const contentTechRender = document.getElementById('content-technical');
  if (contentTechRender) {
    const projKeys = Object.keys(window.projectsData);
    projKeys.forEach(id => {
      const p = window.projectsData[id];
      const typeText = p.type.includes("lead") ? "[LEAD]" : p.type === "Solo Project" ? "[SOLO]" : "[TEAM]";
      
      const btn = document.createElement('button');
      btn.className = 'project-folder';
      btn.onclick = () => window.openProjectModal(id);
      btn.style.cssText = "background: transparent; border: none; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 5px; padding: 8px; font-family: 'Reddit Mono', monospace;";
      
      btn.innerHTML = `
        <svg viewBox="0 0 48 40" width="48" height="40" style="image-rendering: pixelated;" aria-hidden="true">
          <rect x="0" y="8" width="48" height="30" fill="#FFCC00" />
          <rect x="0" y="8" width="48" height="30" fill="none" stroke="#AA8800" stroke-width="2" />
          <rect x="0" y="2" width="20" height="10" fill="#FFCC00" />
          <rect x="0" y="2" width="20" height="10" fill="none" stroke="#AA8800" stroke-width="2" />
          <rect x="4" y="12" width="40" height="2" fill="#FFE066" opacity="0.6" />
        </svg>
        <span class="fl" style="font-size: 10px; text-align: center; line-height: 1.3; color: var(--win-black); padding: 1px 4px; transition: all 0.1s; word-break: break-word; width: 100%;">${p.title}</span>
        <span style="font-size: 9px; color: var(--win-gray-dark);">${typeText} · ${p.year}</span>
      `;
      contentTechRender.appendChild(btn);
    });
  }

  // Modal logic

  const modalOverlay = document.getElementById('modal-overlay');
  const modalTitle = document.getElementById('modal-title');
  const modalTypeBadge = document.getElementById('modal-type-badge');
  const modalYear = document.getElementById('modal-year');
  const modalTechs = document.getElementById('modal-techs');
  const modalImagesContainer = document.getElementById('modal-images-container');
  const modalImage = document.getElementById('modal-image');
  const modalImageControls = document.getElementById('modal-image-controls');
  const modalPrev = document.getElementById('modal-prev');
  const modalNext = document.getElementById('modal-next');
  const modalImageCount = document.getElementById('modal-image-count');
  const modalDescription = document.getElementById('modal-description');
  const modalNoteContainer = document.getElementById('modal-note-container');
  const modalNote = document.getElementById('modal-note');
  const modalStatusType = document.getElementById('modal-status-type');
  const modalStatusTechCount = document.getElementById('modal-status-tech-count');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  let currentProjectImages = [];
  let currentImageIndex = 0;

  window.openProjectModal = function (projectId) {
    const project = window.projectsData[projectId];
    if (!project) return;

    modalTitle.textContent = project.title;

    const isLead = project.type.includes('lead');
    const isSolo = project.type === 'Solo Project';

    modalTypeBadge.style.background = isLead ? 'var(--win-blue)' : 'var(--win-gray)';
    modalTypeBadge.style.color = isLead ? 'var(--win-white)' : 'var(--win-black)';
    modalTypeBadge.querySelector('span:first-child').textContent = isSolo ? 'SOLO PROJECT' : isLead ? 'TEAM PROJECT — LEAD' : 'TEAM PROJECT';
    modalYear.textContent = project.year;

    modalTechs.innerHTML = '';
    project.tech.forEach(t => {
      const span = document.createElement('span');
      span.className = 'win-button';
      span.style.cssText = 'font-size: 10px; padding: 3px 8px; min-width: auto; cursor: default;';
      span.textContent = t;
      modalTechs.appendChild(span);
    });

    currentProjectImages = project.images || [];
    currentImageIndex = 0;

    if (currentProjectImages.length > 0) {
      modalImagesContainer.style.display = 'block';
      updateModalImage();
      if (currentProjectImages.length > 1) {
        modalImageControls.style.display = 'flex';
      } else {
        modalImageControls.style.display = 'none';
      }
    } else {
      modalImagesContainer.style.display = 'none';
    }

    modalDescription.textContent = project.fullDescription;

    if (project.note) {
      modalNoteContainer.style.display = 'block';
      modalNote.textContent = project.note;
    } else {
      modalNoteContainer.style.display = 'none';
    }

    modalStatusType.textContent = project.type;
    modalStatusTechCount.textContent = `${project.tech.length} tech(s)`;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeProjectModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeProjectModal();
    }
  });

  function updateModalImage() {
    if (currentProjectImages.length === 0) return;
    modalImage.src = currentProjectImages[currentImageIndex].src;
    modalImage.alt = currentProjectImages[currentImageIndex].alt;
    modalImageCount.textContent = `${currentImageIndex + 1} / ${currentProjectImages.length}`;
  }

  if (modalPrev) {
    modalPrev.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
      updateModalImage();
    });
  }

  if (modalNext) {
    modalNext.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % currentProjectImages.length;
      updateModalImage();
    });
  }

  // Preloader removal
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      setTimeout(() => preloader.remove(), 300);
    }
  }, 2000);

  // Chatbot Logic
  const chatTab = document.getElementById('chat-tab');
  const chatTabArrow = document.getElementById('chat-tab-arrow');
  const chatWindow = document.getElementById('chat-window');
  const chatCloseBtn = document.getElementById('chat-close-btn');
  const chatTitlebar = document.getElementById('chat-titlebar');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');

  let messageHistory = [];

  function toggleChat() {
    if (!chatWindow) return;
    const isHidden = chatWindow.style.display === 'none' || chatWindow.style.display === '';
    if (isHidden) {
      chatWindow.style.display = 'flex';
      if (chatTabArrow) chatTabArrow.textContent = '▼';
      if (chatInput) chatInput.focus();
    } else {
      chatWindow.style.display = 'none';
      if (chatTabArrow) chatTabArrow.textContent = '▲';
    }
  }

  if (chatTab) chatTab.addEventListener('click', toggleChat);
  if (chatTitlebar) chatTitlebar.addEventListener('click', toggleChat);
  
  if (chatCloseBtn) {
    chatCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      chatWindow.style.display = 'none';
      if (chatTabArrow) chatTabArrow.textContent = '▲';
    });
  }

  function addChatMessage(role, text) {
    const msgDiv = document.createElement('div');
    msgDiv.style.fontSize = '11px';
    const strong = document.createElement('strong');
    strong.textContent = role === 'user' ? 'You: ' : 'Ask Geinel: ';
    msgDiv.appendChild(strong);
    msgDiv.appendChild(document.createTextNode(text));
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  if (chatForm) {
    chatForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const text = chatInput.value.trim();
      if (!text) return;

      addChatMessage('user', text);
      messageHistory.push({ role: 'user', text });
      chatInput.value = '';
      chatInput.disabled = true;

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: messageHistory })
        });
        
        const data = await response.json();
        
        if (response.ok && data.reply) {
          addChatMessage('assistant', data.reply);
          messageHistory.push({ role: 'assistant', text: data.reply });
        } else {
          addChatMessage('assistant', data.error || 'Error connecting to the chat server.');
        }
      } catch (error) {
        addChatMessage('assistant', 'Error connecting to the chat server.');
      } finally {
        chatInput.disabled = false;
        chatInput.focus();
      }
    });
  }
});
