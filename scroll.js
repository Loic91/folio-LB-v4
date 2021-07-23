gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true
});
// chaque fois que Locomotive Scroll se met à jour, dire à ScrollTrigger de se mettre à jour également (positionnement de synchronisation)
locoScroll.on("scroll", ScrollTrigger.update);

// dire à ScrollTrigger d'utiliser ces méthodes proxy pour l'élément ".smooth-scroll" puisque Locomotive Scroll détourne des choses
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // nous n'avons pas besoin de définir un scrollLeft car nous ne faisons défiler que verticalement.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll gère les choses de manière complètement différente sur les appareils mobiles - il ne transforme même pas du tout le conteneur! Donc, pour obtenir le bon comportement et éviter les tracas, nous devons épingler les choses avec la position: fixe sur mobile. Nous le détectons en vérifiant s'il y a une transformation appliquée au conteneur (l'élément contrôlé par LocomotiveScroll).
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});

ScrollTrigger.create({
    trigger: '.flo_1',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.flo_1', 1.9, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.flo_2',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.flo_2', 1.9, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.flo_3',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.flo_3', 1.9, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.flo_4',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.flo_4', 1.9, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.flo_5',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.flo_5', 1.9, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.flo_6',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.flo_6', 1.9, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.flo_7',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.flo_7', 1.9, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})

// *************************************

ScrollTrigger.create({
    trigger: '.one__2',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.one__2', 1.6, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.5,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.two__2',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.two__2', 2, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.three__2',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.three__2', 2.4, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 1.5,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.four__2',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.four__2', 2.8, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 2,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.five__2',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.five__2', 3.2, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 2.5,
    }),
    // markers: true
})










// chaque fois que la fenêtre est mise à jour, nous devons actualiser ScrollTrigger puis mettre à jour LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// une fois que tout est configuré, refresh() ScrollTrigger et mettez à jour LocomotiveScroll car un remplissage peut avoir été ajouté pour l'épinglage, etc.
ScrollTrigger.refresh();
