import "./style.css";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import zero from "/assets/zero.png";
import first from "/assets/first.png";
import second from "/assets/second.png";
import third from "/assets/third.png";

Splitting();

// Lenis smooth scrolling
let lenis;

// Initialize Lenis smooth scrolling
const initSmoothScrolling = () => {
  lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
  });

  lenis.on("scroll", () => ScrollTrigger.update());

  const scrollFn = (time) => {
    lenis.raf(time);
    requestAnimationFrame(scrollFn);
  };

  requestAnimationFrame(scrollFn);
};

document.getElementById(
  "zero"
).style.background = `url(${zero}) no-repeat center center fixed`;
document.getElementById(
  "first"
).style.background = `url(${first}) no-repeat center center fixed`;
document.getElementById(
  "second"
).style.background = `url(${second}) no-repeat center center fixed`;
document.getElementById(
  "third"
).style.background = `url(${third}) no-repeat center center fixed`;

const firstTitle = document.querySelector(".first__title");
const firstLeftPara = document.querySelector(".first__left__para");
const firstRightPara = document.querySelector(".first__right__para");
const secondTitle = document.querySelector(".second__title");
const secondLeftPara = document.querySelector(".second__left__para");
const thirdTitle = document.querySelector(".third__title");
const thirdLeftPara = document.querySelector(".third__left__para");

const scroll = () => {
  function firstSheetTitle() {
    const chars = firstTitle.querySelectorAll(".char");

    gsap.fromTo(
      chars,
      {
        "will-change": "opacity, transform",
        opacity: 0,
        scale: 0.6,
        rotationZ: () => gsap.utils.random(-30, 30),
      },
      {
        ease: "power4",
        opacity: 1,
        scale: 1,
        rotation: 0,
        stagger: 0.4,
        scrollTrigger: {
          trigger: firstTitle,
          start: "center+=20% bottom",
          end: "+=50%",
          scrub: true,
        },
      }
    );
  }

  function firstSheetLeftPara(choosen) {
    gsap.fromTo(
      choosen,
      {
        transformOrigin: "0% 50%",
        rotate: 0,
      },
      {
        ease: "none",
        rotate: 0,
        scrollTrigger: {
          trigger: choosen,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      choosen.querySelectorAll(".word"),
      {
        "will-change": "opacity",
        opacity: 0.1,
      },
      {
        ease: "none",
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: choosen,
          start: "top bottom-=20%",
          end: "center top+=20%",
          scrub: true,
        },
      }
    );
  }

  function secondSheetTitle() {
    const chars = secondTitle.querySelectorAll(".char");

    gsap.fromTo(
      chars,
      {
        "will-change": "opacity",
        opacity: 0,
        filter: "blur(20px)",
      },
      {
        duration: 0.25,
        ease: "power1.inOut",
        opacity: 1,
        filter: "blur(0px)",
        stagger: { each: 0.01, from: "random" },
        scrollTrigger: {
          trigger: secondTitle,
          start: "top bottom",
          end: "center center",
          toggleActions: "play resume resume reset",
        },
      }
    );
  }

  function thirdSheetTitle() {
    const chars = thirdTitle.querySelectorAll(".char");

    gsap.fromTo(
      chars,
      {
        "will-change": "opacity, transform",
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: "50% 0%",
      },
      {
        duration: 1,
        ease: "back.inOut(2)",
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: 0.03,
        scrollTrigger: {
          trigger: thirdTitle,
          start: "center bottom+=50%",
          end: "bottom top+=40%",
          scrub: true,
        },
      }
    );
  }

  function thirdSheetLeftPara(choosen) {
    gsap.fromTo(
      choosen,
      {
        transformOrigin: "0% 50%",
        rotate: 0,
      },
      {
        ease: "none",
        rotate: 0,
        scrollTrigger: {
          trigger: choosen,
          start: "top bottom",
          end: "top top+=50%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      choosen.querySelectorAll(".word"),
      {
        "will-change": "opacity",
        opacity: 0.2,
      },
      {
        ease: "none",
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: choosen,
          start: "top bottom-=20%",
          end: "center top+=20%",
          scrub: true,
        },
      }
    );
  }

  firstSheetTitle();
  firstSheetLeftPara(firstLeftPara);
  firstSheetLeftPara(firstRightPara);
  secondSheetTitle();
  firstSheetLeftPara(secondLeftPara);
  thirdSheetTitle();
  thirdSheetLeftPara(thirdLeftPara);
};

initSmoothScrolling();
scroll();
