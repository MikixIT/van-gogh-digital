/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

export default function Home() {
  useEffect(() => {
    const eyeElement = document.querySelector(".van-gogh-eyes");
    const leftEye = document.querySelector(".left");
    const rightEye = document.querySelector(".right");
    const eyeRect = eyeElement.getBoundingClientRect();
    const leftEyeRect = leftEye.getBoundingClientRect();
    const rightEyeRect = rightEye.getBoundingClientRect();

    const maxX = 6;
    const maxY = 6;

    const animateEyes = (event) => {
      const mousePos = { x: event.clientX, y: event.clientY };
      const angle = Math.atan2(
        mousePos.y - eyeRect.top,
        mousePos.x - eyeRect.left
      );
      const distanceX = Math.min(maxX, Math.max(-maxX, Math.cos(angle) * maxX));
      const distanceY = Math.min(maxY, Math.max(-maxY, Math.sin(angle) * maxY));

      leftEye.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
      rightEye.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
    };

    document.addEventListener("mousemove", animateEyes);

    //// 🛑

    const rows = document.querySelectorAll(".row");
    rows.forEach((row, index) => {
      row.classList.add(`row-${index}`);
    });

    console.log("Elementi .row:", rows);

    gsap.registerPlugin(ScrollTrigger);

    const scrollTriggerSetting = {
      trigger: ".main",
      start: "top 50%",
      toggleActions: "play reverse play reverse",
    };
    const leftXValues = [-800, -900, -400];
    const rightXValues = [800, 900, 400];
    const leftRotationValues = [-30, -20, -35];
    const rightRotationValues = [30, 20, 35];
    const yValues = [100, -130, -400];

    gsap.utils.toArray(".row").forEach((row, index) => {
      const cardLeft = row.querySelector(".left-c");
      const cardRight = row.querySelector(".right-c");

      gsap.to(cardLeft, {
        x: leftXValues[index],
        scrollTrigger: {
          trigger: ".main",
          start: "top center",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;

            cardLeft.style.transform = `translateX(${
              progress * leftXValues[index]
            }px) translateY(${progress * yValues[index]}px) rotate(${
              progress * leftRotationValues[index]
            }deg)`;

            cardRight.style.transform = `translateX(${
              progress * rightXValues[index]
            }px) translateY(${progress * yValues[index]}px) rotate(${
              progress * rightRotationValues[index]
            }deg)`;
          },
        },
      });
    });

    gsap.to(".logo", {
      scale: 1,
      delay: 0.3,
      stagger: 0.5,
      duration: 1.7,
      ease: "linear",
      scrollTrigger: {
        trigger: ".main",
        start: "top 50%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.to(".line p", {
      y: 0,
      stagger: 2.3,
      scale: 1,
      delay: 1.5,
      duration: 2.5,
      ease: "linear",
      scrollTrigger: {
        trigger: ".main",
        start: "top 150%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.to("button", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      delay: 0.65,
      ease: "bounce.out",
      scrollTrigger: scrollTriggerSetting,
    });

    gsap.to(".link", {
      y: 0,
      stagger: 0.1,
      scale: 1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSetting,
    });

    gsap.to(".footer a", {
      duration: 1.5,
      delay: 1,
      stagger: 10,
      opacity: 1,
      ease: "expo.in",
      scrollTrigger: {
        trigger: ".footer",
        start: "top 100%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.to(".name-hero", {
      duration: 1.1,
      opacity: 1,
      ease: "linear",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 4; i++) {
      rows.push(
        <div className="row" key={i}>
          <div className="card left-c">
            <img
              src={`/van-gogh-digital/img-${2 * i - 1}-min.jpg`}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="card right-c">
            <img
              src={`/van-gogh-digital/img-${2 * i}-min.jpg`}
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      );
    }
    return rows;
  };

  return (
    <>
      <ReactLenis root>
        <section className="landing-hero">
          <h1 className="name-hero">Vincent Van Gogh</h1>
          <img
            className="img-hero"
            src="/van-gogh-digital/Vincent-min.jpg"
            alt="Vincent Van Gogh"
          />
          <div className="van-gogh-eyes">
            <span className="left eye"></span>
            <span className="right eye"></span>
          </div>
        </section>
        <section className="main">
          <div className="main-content">
            <div className="logo">
              <img
                src="/van-gogh-digital/Vincent-min.jpg"
                alt="Vincent Van Gogh"
              />
            </div>
            <div className="copy">
              <div className="line">
                <p>
                  “It is looking at things for a long time that ripens you and
                  gives you a deeper meaning.”
                </p>
                <p style={{ fontSize: 18, marginTop: 10 }}>
                  {" "}
                  - Vincent Van Gogh{" "}
                </p>
              </div>
            </div>

            <div className="button">
              <button>
                <Link
                  className="link"
                  href={
                    "https://www.youtube.com/embed/t6NCcZH2Y6w?rel=0&autoplay=1&start=10"
                  }
                >
                  Audio Vision Experience
                </Link>
              </button>
            </div>
          </div>

          {generateRows()}
        </section>

        <section className="footer">
          <Link href={"https://www.vangoghmuseum.nl/en/collection"}>
            Van Gogh Museum
          </Link>
          <footer className="credits">
            Made with{" "}
            <Link
              href={
                "https://www.artistsandillustrators.co.uk/how-to/oil-painting/how-to-paint-like-van-gogh/"
              }
            >
              🖌️
            </Link>{" "}
            and{" "}
            <Link
              href={
                "https://www.vangoghstudio.com/which-paint-colors-did-van-gogh-use/#:~:text=Vincent%20van%20Gogh%20liked%20to,%2C%20red%20ocher%2C%20raw%20sienna."
              }
            >
              🎨
            </Link>{" "}
            by{" "}
            <Link href={"https://www.linkedin.com/in/michaeltorresdev/"}>
              Michael Torres
            </Link>
          </footer>
        </section>
      </ReactLenis>
    </>
  );
}