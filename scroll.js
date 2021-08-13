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


// PROJETS **************************************************

ScrollTrigger.create({
    trigger: '.coif_1',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coif_1', 1, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.coif_2',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coif_2', 1.3, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.coif_3',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coif_3', 1.6, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.coif_4',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coif_4', 1.9, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.coif_5',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coif_5', 2.1, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.coif_6',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coif_6', 2.4, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.coif_7',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coif_7', 2.7, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.coif_8',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coif_8', 3, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.coif_9',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coif_9', 3.3, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.coif_10',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coif_10', 3.6, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.coif_11',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coif_11', 3.9, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.coif_12',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coif_12', 4.2, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.coif_13',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coif_13', 4.5, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.coif_14',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coif_14', 4.8, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.coif_15',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coif_15', 5.1, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
// *********************************************
ScrollTrigger.create({
    trigger: '.flo_1',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.flo_1', 1, {
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
    animation: gsap.from('.flo_2', 1.3, {
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
    animation: gsap.from('.flo_3', 1.6, {
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
    animation: gsap.from('.flo_5', 2.2, {
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
    animation: gsap.from('.flo_6', 2.5, {
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
    animation: gsap.from('.flo_7', 2.8, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})

// *********************************************

ScrollTrigger.create({
    trigger: '.jo_1',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.jo_1', 1, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.jo_2',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.jo_2', 1.3, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.jo_3',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.jo_3', 1.6, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.jo_4',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.jo_4', 1.9, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.jo_5',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.jo_5', 2.2, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.jo_6',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.jo_6', 2.5, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.jo_7',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.jo_7', 2.8, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
// *********************************************

ScrollTrigger.create({
    trigger: '.lux_1',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.lux_1', 1, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.lux_2',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.lux_2', 1.3, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.lux_3',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.lux_3', 1.6, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.lux_4',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.lux_4', 1.9, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
// *********************************************

ScrollTrigger.create({
    trigger: '.coa_1',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coa_1', 1, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.coa_2',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coa_2', 1.3, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.coa_3',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coa_3', 1.6, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.coa_4',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coa_4', 1.9, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.coa_5',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coa_5', 2.2, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.coa_6',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coa_6', 2.5, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.coa_7',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.coa_7', 2.8, {
                // y: '100%',
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.9,
    }),
    // markers: true
})








// PHOTOS *****************************************************

ScrollTrigger.create({
    trigger: '.one',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.one', 1.6, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.5,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.two',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.two', 2, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 1,
    }),
    // markers: true
})


ScrollTrigger.create({
    trigger: '.three',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.three', 2.4, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 1.5,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.four',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.four', 2.8, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 2,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.five',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.five', 3.2, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 2.5,
    }),
    // markers: true
})




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




ScrollTrigger.create({
    trigger: '.one__3',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.one__3', 1.6, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.5,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.two__3',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.two__3', 2, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.three__3',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.three__3', 2.4, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 1.5,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.four__3',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.four__3', 2.8, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 2,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.five__3',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.five__3', 3.2, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 2.5,
    }),
    // markers: true
})




ScrollTrigger.create({
    trigger: '.one__4',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.one__4', 1.6, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.5,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.two__4',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.two__4', 2, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.three__4',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.three__4', 2.4, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 1.5,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.four__4',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.four__4', 2.8, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 2,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.five__4',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.five__4', 3.2, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 2.5,
    }),
    // markers: true
})




ScrollTrigger.create({
    trigger: '.one__5',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.one__5', 1.6, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 0.5,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.two__5',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.two__5', 2, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.three__5',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.three__5', 2.4, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 1.5,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.four__5',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.four__5', 2.8, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 2,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.five__5',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('.five__5', 3.2, {
                opacity: 0,
                ease: Expo.easeInOut,
                delay: 2.5,
    }),
    // markers: true
})











ScrollTrigger.create({
    trigger: '#title__h3',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    // start: 'top+=-20% 80%',
    // end: 'bottom-=40% 50%',
    animation: gsap.from('#title__h3', 2.5, {
                y: '100%',
                // opacity: 0,
                // ease: Expo.easeInOut,
                delay: 0.5,
    }),
    // markers: true
})












// chaque fois que la fenêtre est mise à jour, nous devons actualiser ScrollTrigger puis mettre à jour LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// une fois que tout est configuré, refresh() ScrollTrigger et mettez à jour LocomotiveScroll car un remplissage peut avoir été ajouté pour l'épinglage, etc.
ScrollTrigger.refresh();
