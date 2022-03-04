console.log(677757);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".box",
      start: "center center",
      end: "bottom top",
      //   markers: true,
      scrub: true,
      pin: true,
    },
  })
  .to(".test", 0.5, { opacity: 0 })
  .to(".t2", 0.5, { opacity: 0 }, "-=0.75");
// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: ".box",
//       start: "center center",
//       end: "bottom top",
//       markers: true,
//       scrub: true,
//       pin: true,
//     },
//   })
//   .from(".t2", { x: innerWidth * 1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".svg_container",
      start: "center center",
      end: "bottom top",
      //   markers: true,
      scrub: true,
      pin: true,
    },
  })
  .from("#text_group", { y: 50, opacity: 0 })
  .to("#text_group", { duration: 10, y: 0, opacity: 1 })
  .to("#string_group", {
    duration: 10,
    x: innerWidth * -0.1,
    opacity: 0,
  })
  .to("#content_group", { duration: 100, x: innerWidth * 0.1, opacity: 0 })
  .to("#number_group", { duration: 100, x: innerWidth * -0.1, opacity: 0 })
  .to("#boolean_group", { duration: 100, x: innerWidth * 0.1, opacity: 0 })
  .to("#date_group", { duration: 100, x: innerWidth * -0.1, opacity: 0 })
  .to("#email_group", { duration: 100, x: innerWidth * 0.1, opacity: 0 })
  .to("#password_group", { duration: 100, x: innerWidth * -0.1, opacity: 0 })
  .to("#json-group", { duration: 100, x: innerWidth * 0.1, opacity: 0 });
