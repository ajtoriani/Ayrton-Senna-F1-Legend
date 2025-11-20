const titulo = document.querySelector('.titulo');
const container = document.querySelector('.container');
const imgs = document.querySelector('.imgs');
const videoSenna = document.getElementById('videoSenna');
let vezesTocadas = 0;

videoSenna.addEventListener('ended', contagem => {
  vezesTocadas++;

  if (vezesTocadas > 0) {
    videoSenna.muted = true;
    videoSenna.play();
  }
})

videoSenna.volume = 0.1;

let audioCena = new Audio('./brutal-acabou-pro-beta-globo.mp3');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.8,
};

const observador = new IntersectionObserver((entries, observerador) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      videoSenna.play();
      observador.unobserve(entry.target);
    }
  })
}, options);

observador.observe(videoSenna);

gsap.from(".titulo", {
  duration: 1.2,
  y: -40,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(".container .imgs", {
  duration: 0.9,
  scale: 0.9,
  y: 20,
  opacity: 0,
  stagger: 0.12,
  ease: "back.out(1.2)"
});

gsap.from(".senna", {
  duration: 1,
  y: 20,
  opacity: 0,
  delay: 0.4,
  ease: "power2.out"
});

gsap.to(".sennaCarro", {
  duration: 1.2,
  y: -350,
  ease: "none"
  }
);

gsap.from(".texto-direita", {
  duration: 1,
  y: 20,
  opacity: 0,
  delay: 0.4,
  ease: "power2.out"
});

gsap.from(".texto-esquerda", {
  duration: 1,
  y: 20,
  opacity: 0,
  delay: 0.4,
  ease: "power2.out"
});



