gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.from("header.header", {
  yPercent: -20,
  opacity: 0,
  duration: 1,
})

tl.from(".hero-page .content .heading-container p", {
  yPercent: 10,
  opacity: 0,
  duration: 1,
})

tl.from(".hero-page .content p.description", {
  yPercent: 10,
  opacity: 0,
  duration: 1,
})

tl.from(".hero-page a.btn", {
  yPercent: 10,
  opacity: 0,
  cursor: 'default',
  duration: 1,
})

tl.from(".hero-page .imgs-container", {
  opacity: 0,
  duration: 1,
})

tl.from(".hero-page .imgs-container .is--ring-dollar, .hero-page .imgs-container .is--ring-music", {
  scrollTrigger: {
    trigger: ".hero-page",
    start: "top top",
    end: "+=2500",
    scrub: 1,
  },
  y: 100,
  duration: 1,
})

tl.from(".hero-page .imgs-container .is--shoes, .hero-page .imgs-container .is--watch", {
  scrollTrigger: {
    trigger: ".hero-page",
    start: "top top",
    end: "+=2500",
    scrub: 1,
  },
  y: -100,
  duration: 1,
})


window.addEventListener('scroll', () => {
  const tl = gsap.timeline();

  if (document.documentElement.scrollTop >= 100) {
    tl.to("header.header", {
      scale: .8,
      opacity: 0,
      yPercent: -100,
      rotationX: 100,
      duration: .5,
    })
    
  } else {
    tl.to("header.header", {
      scale: 1,
      opacity: 1,
      rotationX: 0,
      yPercent: 0,
      duration: .5,
    })
  }
})