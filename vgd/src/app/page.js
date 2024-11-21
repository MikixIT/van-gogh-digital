"use client";

import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const rows = document.querySelectorAll(".row");
    console.log("Elementi .row:", rows);

    const scrollTriggerSetting = {
      trigger: ".main",
      start: "top 25%",
      toggleActions: "play reverse play reverse",
    };
    const leftXValues = [-800, -900, -400];
    const rightXValues = [800, 900, 400];
    const leftRotationValues = [-30, -20, -35];
    const rightRotationValues = [30, 20, 35];
    const yValues = [100, -150, -400];

    gsap.utils.toArray(".row").forEach((row, index) => {
      const cardLeft = row.querySelector(".left-c");
      const cardRight = row.querySelector(".right-c");

      gsap.to(cardLeft, {
        x: leftXValues[index],
        scrollTrigger: {
          trigger: ".main",
          start: "top center",
          end: "100% bottom",
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
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSetting,
    });

    gsap.to(".line p", {
      y: 0,
      stagger: 0.1,
      scale: 1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSetting,
    });

    gsap.to("button", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: 0.35,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSetting,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div className="row" key={i}>
          <div className="card left-c">
            <img src={`img-${2 * i - 1}.jpg`} alt="" />
          </div>
          <div className="card right-c">
            <img src={`img-${2 * i}.jpg`} alt="" />
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
          <img className="img-hero" src="/Vincent.jpg" alt="Vincent Van Gogh" />
        </section>
        <section className="main">
          <div className="main-content">
            <div className="logo">
              <img src="/Vincent.jpg" alt="" />
            </div>
            <div className="copy">
              <div className="line">
                <p>
                  “It is looking at things for a long time that ripens you and
                  gives you a deeper meaning.”{" "}
                </p>
              </div>
            </div>

            <div className="button">
              <button>
                <Link href={"https://www.youtube.com/watch?v=t6NCcZH2Y6w"}>
                  Enjoy
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
        </section>
      </ReactLenis>
    </>
  );
}
