const slides = document.querySelectorAll('.carrousel-slide');
  const leftBtn = document.querySelector('.carrousel-left');
  const rightBtn = document.querySelector('.carrousel-right');
  let idx = 0;
  let isSliding = false;

  function showSlide(n, direction = 0) {
    if (isSliding) return; // éviter double animation
    isSliding = true;

    // cacher tous les slides avec animation
    slides.forEach((slide, i) => {
      slide.classList.remove('active','slide-left','slide-right');
      if (i === idx) {
        // slide sortant
        slide.classList.add(direction > 0 ? 'slide-left' : 'slide-right');
        setTimeout(() => {
          slide.classList.remove('slide-left', 'slide-right');
          slide.style.display = 'none';
        }, 350);
      }
    });

    idx = n;
    // slide entrant
    const incoming = slides[idx];
    incoming.style.display = 'flex';
    setTimeout(() => {
      incoming.classList.add('active');
      isSliding = false;
    }, 35);
  }

  leftBtn.addEventListener('click', () => {
    let oldIdx = idx;
    let newIdx = (idx - 1 + slides.length) % slides.length;
    showSlide(newIdx, -1); // -1 = vers la gauche
  });

  rightBtn.addEventListener('click', () => {
    let oldIdx = idx;
    let newIdx = (idx + 1) % slides.length;
    showSlide(newIdx, 1); // 1 = vers la droite
  });

  // init
  slides.forEach((slide,i)=>{slide.style.display='none';});
  slides[0].style.display='flex';
  slides[0].classList.add('active');