const liquifyTrigger = document.querySelector('.js-liquify-trigger');

const controller = new ScrollMagic.Controller();
 
const sceneAuthorLiquid = new ScrollMagic.Scene({
    triggerElement: liquifyTrigger,
    triggerHook: 'onEnter',
  })
  .setTween('#liquid', 2.5, {
    attr: {
      scale: '0'
    },
    ease: Power4.easeOut,
    delay: 8.5,
  })
  .reverse(false)
  .addTo(controller);

const sceneAuthorTransition = new ScrollMagic.Scene({
    triggerElement: liquifyTrigger,
    triggerHook: 'onEnter',
  })
  .setTween(liquifyTrigger, 3, {
    opacity: 1,
    y: 1,
    ease: Power4.easeOut,
    delay: 1,
  })
  .reverse(false)
  .addTo(controller);