
// Lenis scroll Initialisation with Gsap
const lenis = new Lenis({
  smooth: true
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
gsap.registerPlugin(ScrollTrigger);

lenis.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    return arguments.length ? lenis.scrollTo(value) : lenis.scroll;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.body.style.transform ? "transform" : "fixed"
});



// show up the div while scrolling
gsap.utils.toArray(".text-on-scroll").forEach((el) => {
  const speed = parseFloat(el.getAttribute("anim-speed")) || 1;

  gsap.from(el, {
    y: 50 * speed,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      end: "top 30%",
      scrub: true
    }
  });
});



ScrollTrigger.addEventListener('refresh', () => lenis.update());
ScrollTrigger.refresh();