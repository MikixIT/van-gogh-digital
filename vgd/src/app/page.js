"use client";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

export default function Home() {
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
