// OVERLAY
TweenMax.to(".overlay__one", 3.8, {
    delay: 0.1,
    opacity: 0,
    top: "-300%",
    ease: Expo.easeInOut
});


gsap.from('.navbar', 2.5, {
    opacity: 0,
    y: '-40%',
    delay: 2.9,
})

gsap.from('#title__h1', 1.9, {
    opacity: 0,
    y: '100%',
    delay: 1.9
})
// gsap.from('#title__h1-2', 1.9, {
//     opacity: 0,
//     y: '100%',
//     delay: 2.5
// })

gsap.from('.presentation__laptop', 1.9, {
    opacity: 0,
    y: '100%',
    delay: 2.7
})

gsap.from('.video', 2.5, {
    opacity: 0,
    y: '40%',
    delay: 2.9,
})

// gsap.from('#enter-site', 2.9, {
//     opacity: 0,
//     y: '100%',
//     delay: 2.9,
// })





gsap.from('.one', 3.9, {
    opacity: 0,
    delay: 0.6,
})
gsap.from('.two', 3.9, {
    opacity: 0,
    delay: 0.8,
})
gsap.from('.three', 3.9, {
    opacity: 0,
    delay: 1,
})
gsap.from('.four', 3.9, {
    opacity: 0,
    delay: 1.2,
})
gsap.from('.five', 3.9, {
    opacity: 0,
    delay: 1.4,
})
