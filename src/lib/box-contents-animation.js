import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import VanillaTilt from "vanilla-tilt";

const boxContentsAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  const boxContent = gsap.utils.toArray(
    ".box-contents-container .contents-container"
  );

  mm.add("(min-width: 999.1px)", () => {
    boxContent.forEach((content) => {
      const boxImg = gsap.utils.toArray(content.querySelector("img"));

      boxImg.forEach((img) => {
        gsap.set(img, {
          y: "-150%",
          transition: "transform 1.5s ease-in-out",
        });

        gsap.to(img, {
          y: 0,
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            scrub: true,
          },
        });
      });
    });
  });

  mm.add("(max-width: 999px)", () => {
    const boxImg1 = document.querySelector(
      ".box-contents-container .contents-container img[alt='iPhone 15 Pro']"
    );
    const boxImg2 = document.querySelector(
      ".box-contents-container .contents-container img[alt='USB-C Charger Cable']"
    );

    gsap.set(boxImg1, { x: "-150%", autoAlpha: 0 });
    gsap.set(boxImg2, { x: "150%", autoAlpha: 0 });

    gsap.to(boxImg1, {
      x: 0,
      autoAlpha: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: boxImg1,
        start: "top 90%",
        end: "top 75%",
        once: true,
      },
    });
    gsap.to(boxImg2, {
      x: 0,
      autoAlpha: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: boxImg2,
        start: "top 90%",
        end: "top 75%",
        once: true,
      },
    });
  });
};

export default boxContentsAnimation;
