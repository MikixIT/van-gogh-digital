"use client";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
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

      gsap.to(left - c, {
        x: leftXValues[index],
        scrollTrigger: {
          trigger: ".main",
          start: "top center",
          end: "150% borrom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;

            cardLeft.style.transform = `traslateX(${
              progress * leftXValues[index]
            }px traslateY${progress * yValues[index]}px rotae(${
              progress * leftRotationValues[index]
            }deg))`;

            cardRight.style.transform = `traslateX(${
              progress * rightXValues[index]
            }px traslateY${progress * yValues[index]}px rotae(${
              progress * rightRotationValues[index]
            }deg))`;
          },
        },
      });
    });

    gsap.to(".logo", {
      scale: 1,
      duration: 0.5,
      ease: "power1.out",
    });
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
          <img src="/Vincent.jpg" alt="Vincent Van Gogh" />
        </section>
        <section className="main">
          <div className="main-content">
            <div className="logo">
              <img src="/Vincent.jpg" alt="" />
            </div>
            <div className="copy">
              <div className="line">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
              <div className="line">
                <p>
                  Temporibus harum in debitis eum rem. A natus aperiam autem
                </p>
              </div>
              <div className="line">
                <p>
                  Temporibus harum in debitis eum rem. A natus aperiam autem
                </p>
              </div>
            </div>

            <div className="button">
              <button>Colorfull</button>
            </div>
          </div>

          {generateRows()}
        </section>

        <section className="footer">
          <Link href={"#"}>Link here</Link>
        </section>
      </ReactLenis>
    </>
  );
}
