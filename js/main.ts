// Integrity Software - Main TypeScript Engine
// Typewriter Engine, Mobile Drawer, Horizontal Carousels, Scroll Reveal & Hero Slider

interface SliderItem {
  title: string;
  icon: string;
}

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Navigation Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const mobileLinks = document.querySelectorAll<HTMLElement>('.mobile-nav-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('is-open');
      if (isOpen) {
        mobileDrawer.classList.remove('is-open');
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
      } else {
        mobileDrawer.classList.add('is-open');
        mobileToggle.innerHTML = '<i class="fas fa-times"></i>';
      }
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('is-open');
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }


  // 2. Hardware Accelerated Scroll Reveal (Intersection Observer API)
  const revealElements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach((el) => revealObserver.observe(el));


  // 3. Typewriter & Overwriting Engine with Executive Impact & Scale Phrases
  const phrases: string[] = [
    "Tu Empresa MYPE",
    "Escalar tus Ventas",
    "Ventas en WhatsApp",
    "Optimizar tus Procesos",
    "Digitalizar tu Negocio",
    "Automatizar Operaciones"
  ];

  const dynamicTextEl = document.getElementById('dynamic-text');
  let phraseIndex = 0;
  let charIndex = phrases[0].length;
  let isDeleting = true;
  let typingSpeed = 2000;

  function typeLoop(): void {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
      typingSpeed = 45;
    } else {
      charIndex++;
      typingSpeed = 90;
    }

    if (dynamicTextEl) {
      dynamicTextEl.textContent = currentPhrase.substring(0, charIndex);
    }

    if (!isDeleting && charIndex >= currentPhrase.length) {
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex <= 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 350;
    }

    setTimeout(typeLoop, typingSpeed);
  }

  setTimeout(typeLoop, typingSpeed);


  // 4. Hero Automated Software & Systems Slider (Fade Transitions)
  const sliderImages = document.querySelectorAll<HTMLElement>('.slider-img');
  const sliderDots = document.querySelectorAll<HTMLElement>('.slider-dot');
  const sliderTitleEl = document.getElementById('slider-badge-title');
  const sliderIconEl = document.getElementById('slider-badge-icon');

  const sliderData: SliderItem[] = [
    {
      title: "Arquitectura & Software Empresarial",
      icon: "fas fa-laptop-code"
    },
    {
      title: "Desarrollo de Código TypeScript & Dashboards",
      icon: "fas fa-code"
    },
    {
      title: "Sistemas ERP, CRM & Ventas MYPE",
      icon: "fas fa-chart-line"
    }
  ];

  let currentSlide = 0;
  let sliderInterval: NodeJS.Timeout | null = null;

  function goToSlide(index: number): void {
    if (!sliderImages.length) return;

    sliderImages.forEach((img, i) => {
      if (i === index) {
        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
    });

    sliderDots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    if (sliderTitleEl && sliderData[index]) {
      sliderTitleEl.textContent = sliderData[index].title;
    }
    if (sliderIconEl && sliderData[index]) {
      sliderIconEl.innerHTML = `<i class="${sliderData[index].icon}"></i>`;
    }

    currentSlide = index;
  }

  function nextSlide(): void {
    let nextIndex = (currentSlide + 1) % sliderImages.length;
    goToSlide(nextIndex);
  }

  function startSlider(): void {
    sliderInterval = setInterval(nextSlide, 3500);
  }

  if (sliderImages.length > 0) {
    startSlider();

    sliderDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        if (sliderInterval) clearInterval(sliderInterval);
        goToSlide(index);
        startSlider();
      });
    });
  }


  // 5. Generic Horizontal Scroll Carousel Helper Engine
  function setupHorizontalCarousel(trackId: string, prevBtnId: string, nextBtnId: string, dotsContainerId: string): void {
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    const dotsContainer = document.getElementById(dotsContainerId);

    if (!track) return;

    const cardItems = track.querySelectorAll<HTMLElement>('.carousel-card-item');
    if (!cardItems.length) return;

    // Build indicator dots
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      cardItems.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.classList.add('carousel-indicator-dot');
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
          const cardWidth = cardItems[0].offsetWidth + 28;
          track.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
        });
        dotsContainer.appendChild(dot);
      });
    }

    const dots = dotsContainer ? dotsContainer.querySelectorAll<HTMLElement>('.carousel-indicator-dot') : [];

    function updateActiveDot(): void {
      if (!track) return;
      const cardWidth = cardItems[0].offsetWidth + 28;
      const scrollIndex = Math.round(track.scrollLeft / cardWidth);
      dots.forEach((d, idx) => {
        if (idx === scrollIndex) {
          d.classList.add('active');
        } else {
          d.classList.remove('active');
        }
      });
    }

    track.addEventListener('scroll', updateActiveDot);

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const cardWidth = cardItems[0].offsetWidth + 28;
        track.scrollBy({ left: -cardWidth * 1.2, behavior: 'smooth' });
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const cardWidth = cardItems[0].offsetWidth + 28;
        track.scrollBy({ left: cardWidth * 1.2, behavior: 'smooth' });
      });
    }
  }

  // Initialize Services Horizontal Carousel
  setupHorizontalCarousel('services-track', 'services-prev', 'services-next', 'services-dots');

  // Initialize Testimonials Horizontal Carousel
  setupHorizontalCarousel('testimonials-track', 'testimonials-prev', 'testimonials-next', 'testimonials-dots');


  // 6. Solutions Showcase Tab Switcher
  const tabBtns = document.querySelectorAll<HTMLElement>('.tab-btn');
  const tabPanes = document.querySelectorAll<HTMLElement>('.tab-pane');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach((b) => b.classList.remove('active'));
      tabPanes.forEach((p) => p.classList.remove('active'));

      btn.classList.add('active');
      if (targetTab) {
        const activePane = document.getElementById(targetTab);
        if (activePane) {
          activePane.classList.add('active');
        }
      }
    });
  });


  // 7. Interactive Contact Form Handler with Feedback Status
  const contactForm = document.getElementById('contact-form') as HTMLFormElement | null;
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e: Event) => {
      e.preventDefault();

      const nameEl = document.getElementById('c-fullname') as HTMLInputElement | null;
      const telEl = document.getElementById('c-tel') as HTMLInputElement | null;
      const interestSelect = document.getElementById('c-interest') as HTMLSelectElement | null;

      const name = nameEl ? nameEl.value : '';
      const tel = telEl ? telEl.value : '';
      const interestText = interestSelect && interestSelect.selectedIndex >= 0
        ? interestSelect.options[interestSelect.selectedIndex].text
        : '';

      const waMsg = encodeURIComponent(`Hola Integrity Software (RUC 20609874125), mi nombre es ${name}. Quisiera cotizar el servicio: ${interestText}. Mi número es: ${tel}`);
      const waUrl = `https://wa.me/51900000000?text=${waMsg}`;

      if (formStatus) {
        formStatus.style.display = 'block';
        formStatus.innerHTML = `
          <div style="background: #dcfce7; color: #15803d; border: 1px solid #86efac; padding: 16px; border-radius: 8px; margin-bottom: 24px; font-weight: 600;">
            <i class="fas fa-check-circle"></i> ¡Solicitud generada con éxito! Redirigiendo a atención directa por WhatsApp...
          </div>
        `;
      }

      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 1000);
    });
  }

});
