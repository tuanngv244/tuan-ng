"use client";
import { useGSAP } from "@gsap/react";
import { DotLottie } from "@lottiefiles/dotlottie-web";
import gsap from "gsap";
import "@/styles/modules/about.scss";
import SplitType, { TargetElement } from "split-type";

export default function AboutPage() {
  useGSAP(() => {
    new DotLottie({
      autoplay: true,
      loop: true,
      canvas: document.querySelector("#person") as HTMLCanvasElement,
      src: "/json/person.json",
    });

    const mainTl = gsap.timeline();
    const textTl = gsap.timeline();
    const img = document.querySelector(".mesh");
    const title = document.querySelector(".about-page .title");
    const splitTitle = new SplitType(title as TargetElement, {
      types: "chars",
    });

    const init = () => {
      mainTl
        .to(img, {
          scaleY: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power4.inOut",
        })
        .add(() => {
          splitTitle.chars?.forEach((char, index) => {
            textTl.to(char, {
              y: 0,
              duration: `0.3${index}`,
              opacity: 1,
              ease: "power4.out",
            });
          });
        });
    };

    document.addEventListener("loadPage", (event) => {
      init();
    });
  }, []);

  return (
    <main className="container about-page page">
      <div className="content">
        <div className="box-person">
          <canvas id="person" />
        </div>
        <div className="info" data-style="red">
          <h2 className="title">CYAN Nguyen</h2>
          <p className="intro">
            Hi, I'm a Software Engineer from Vietnam. <br />I always want to
            bring great experience to clients. <br />I always try my best in
            every product with my co-workers. It's great to connect with someone
            who shares similar interests!
          </p>
        </div>
      </div>

      <img className="mesh" src="/imgs/mesh-gradient.png" />
    </main>
  );
}
