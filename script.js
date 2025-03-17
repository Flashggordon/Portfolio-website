function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}



        // GSAP Animation
        gsap.fromTo(".message span", 
            { y: 50, opacity: 0 },
            { 
              y: 0, 
              opacity: 1, 
              duration: 3,
              ease: "back.out(5.7)", 
              stagger: 0.5,
              repeat: -1,             // Infinite repetitions
              yoyo: true,             // Animates forward then reverses
              repeatDelay: 1          // Optional pause between repetitions
            }
        );
  