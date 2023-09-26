import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import VanillaTilt from "vanilla-tilt";

const specsAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imgElems = gsap.utils.toArray(
    ".specs-outer-container .img-container img"
  );

  let mm = gsap.matchMedia();

  mm.add("(min-width: 999.1px)", () => {
    imgElems.forEach((img) => {
      gsap.set(img, { autoAlpha: 0, clipPath: "circle(0% at 50% 50%)" });
      gsap.to(img, {
        autoAlpha: 1,
        duration: 2,
        clipPath: "circle(100% at 50% 50%)",
        scrollTrigger: {
          trigger: img,
          start: "top 85%",
          once: true,
        },
        onStart: () => {
          VanillaTilt.init(img, {
            max: 20,
            speed: 400,
            perspective: 500,
          });
        },
      });
    });
  });

  mm.add("(max-width: 999px)", () => {
    imgElems.forEach((img) => {
      gsap.set(img, { autoAlpha: 0, clipPath: "circle(0% at 50% 50%)" });
      gsap.to(img, {
        autoAlpha: 1,
        duration: 2,
        clipPath: "circle(100% at 50% 50%)",
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
          end: "top 75%",
          once: true,
        },
      });
    });
  });
};

export default specsAnimation;
