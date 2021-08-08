// OVERLAY
TweenMax.to(".first", 3.8, {
    delay: 0.1,
    opacity: 0,
    top: "-200%",
    ease: Expo.easeInOut
});




gsap.from('#title__h1', 1.9, {
    y: '100%',
    delay: 2.5
})

gsap.to('.fa-times-circle', 0.9, {
    x: '200%',
    delay: 2.5
})

gsap.from('video', 1.9, {
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 2.5,
})

gsap.from('figcaption', 1.9, {
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 2.9,
})




gsap.from('.button', 1.9, {
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 1.2,
})