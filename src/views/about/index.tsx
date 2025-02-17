"use client";
import { useGSAP } from "@gsap/react";
import { DotLottie } from "@lottiefiles/dotlottie-web";
import gsap from "gsap";
import "@/styles/modules/about.scss";
import SplitType, { TargetElement } from "split-type";
import CustomEase from "gsap/CustomEase";
import ImageTrail from "@/components/molecules/ImageTrail";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(CustomEase);

export default function AboutPage() {
  const imgs = [
    "/imgs/img-intro-1.jpg",
    "/imgs/img-intro-2.jpg",
    "/imgs/img-intro-3.jpg",
    "/imgs/img-intro-4.jpg",
    "/imgs/img-intro-5.jpg",
    "/imgs/img-intro-6.jpg",
    "/imgs/img-intro-7.jpg",
  ];

  useGSAP(() => {
    new DotLottie({
      autoplay: true,
      loop: true,
      canvas: document.querySelector("#person") as HTMLCanvasElement,
      src: "/json/person.json",
    });

    CustomEase.create(
      "hop2",
      "M0,0 C0.078,0.617 0.114,0.716 0.255,0.828 0.373,0.922 0.561,1 1,1"
    );

    const mainTl = gsap.timeline();
    const textTl = gsap.timeline();
    const img = document.querySelector(".mesh");
    const title = document.querySelector(".about-page .title");
    const intro = document.querySelector(".about-page .intro");
    const boxImages = document.querySelector(".about-page .box-imgs");
    const splitTitle = new SplitType(title as TargetElement, {
      types: "chars",
    });
    const splitIntro = new SplitType(intro as TargetElement, {
      types: "lines",
    });
    const splitIntroWork = new SplitType(splitIntro.lines as TargetElement, {
      types: "words",
    });

    const init = () => {
      mainTl
        .to(img, {
          scaleY: 1,
          opacity: 1,
          duration: 1,
          ease: "power4.inOut",
        })
        .add(() => {
          textTl
            .to(splitTitle.chars, {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              // ease: "hop2",
              stagger: 0.1,
            })
            .to(
              `.about-page .info .word, .about-page .info .call, .about-page .info .email,  .about-page .info .label`,
              {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "hop2",
                stagger: 0.1,
              }
            )
            // .to(call, {
            //   y: 0,
            //   opacity: 1,
            //   duration: 0.4,
            //   ease: "hop2",
            // })
            .to(boxImages, {
              y: 0,
              opacity: 1,
              scaleY: 1,
              duration: 0.4,
              ease: "hop2",
            });
        });
    };

    document.addEventListener("loadPage", (event) => {
      init();
    });
  }, []);

  return (
    <main className=" about-page page">
      <div className="content">
        <div className="box-person">
          <canvas id="person" />
        </div>
        <div className="info" data-style="red">
          <h2 className="title">CYAN NGUYEN</h2>
          <p className="intro">
            Creating great web experiences is my primary focus. I ensure each
            project leaves users with a feel-good sensation through meticulous
            attention to detail and user-centric design principles. <br />
            When I'm not immersed in web development and design, you can find me
            sharing insights about my journey on YouTube, jogging, listening
            music, or tending to my cherished houseplants.
          </p>
          <div className="over-hidden">
            <a className="call hover-line" href="#">
              BOOK A CALL
            </a>
          </div>
          <div className="box-imgs">
            <p className="view">Drag to view my journal</p>
            <ImageTrail items={imgs} key={1} variant={1} />
          </div>

          <div className="contact-info">
            <div className="over-hidden">
              <p className="label">For further inquiries</p>
            </div>
            <div className="over-hidden">
              <a
                className="email hover-line"
                href="mailto:tuanngv24.4@gmail.com"
              >
                tuanngv24.4@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <img className="mesh" src="/imgs/mesh-gradient.png" />
    </main>
  );
}
