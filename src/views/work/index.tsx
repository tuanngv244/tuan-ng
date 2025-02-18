"use client";

//@ts-ignore
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "@/styles/modules/work.scss";

import "@splidejs/react-splide/css";
import "@splidejs/splide/css";

import "@splidejs/react-splide/css/core";
import SplitType, { TargetElement } from "split-type";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

export default function WorkPage() {
  useGSAP(() => {
    const mainTl = gsap.timeline();
    const textTl = gsap.timeline();
    const titles = document.querySelectorAll(".work-page .slide-item .title");
    titles.forEach((title) => {
      const splitTitle = new SplitType(title as TargetElement, {
        types: "chars",
      });
    });

    const curItem = document.querySelector(
      ".work-page .splide-item-1"
    ) as Element;
    const img = curItem.querySelector(".content .img");
    const title = curItem.querySelectorAll(".content .title .char");

    CustomEase.create(
      "hop",
      "M0, 0 C0.355,0.22 0.448,0.079 0.5,0.5 0.542,0.846 0.615,1 1,1"
    );

    setTimeout(() => {
      mainTl
        .to(img, {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          duration: 2,
          ease: "hop",
          delay: 1,
        })
        .add(() => {
          textTl.to(title, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            // ease: "hop2",
            stagger: 0.1,
          });
        });
    }, 200);
  });

  const works = [
    {
      name: "ASAM Securities Corporation",
      date: "15-01-2025",
      img: "/imgs/img-intro-1.jpg",
      link: "http://uathomepage.asamvn.com.vn/",
    },
    {
      name: "MES AX Campus",
      date: "05-10-2024",
      img: "/imgs/img-intro-3.jpg",
      link: "http://uathomepage.asamvn.com.vn/",
    },
    {
      name: "Dothing",
      date: "12-06-2024",
      img: "/imgs/img-intro-4.jpg",
    },
    {
      name: "Headlights",
      date: "12-04-2024",
      img: "/imgs/img-intro-7.jpg",
    },
  ];

  const _onSlideChange = (splide: any, newIndex: number, oldIndex: number) => {
    const curItem = document.querySelector(
      ".work-page .splide-item-" + (splide.index + 1)
    ) as Element;
    const img = curItem?.querySelector(".content .img");
    const title = curItem?.querySelectorAll(".content .title .char");

    const oldItem = document.querySelector(
      ".work-page .splide-item-" + (oldIndex + 1)
    ) as Element;
    const oldImg = oldItem?.querySelector(".content .img");
    const oldTitle = oldItem?.querySelectorAll(".content .title .char");

    const mainTl = gsap.timeline();
    const prevTl = gsap.timeline();
    const textTl = gsap.timeline();

    CustomEase.create(
      "hop",
      "M0, 0 C0.355,0.22 0.448,0.079 0.5,0.5 0.542,0.846 0.615,1 1,1"
    );

    mainTl
      .to(img, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 2,
        ease: "hop",
      })
      .add(() => {
        textTl.to(title, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.1,
        });
      });

    prevTl
      .to(oldImg, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        duration: 0.5,
        ease: "hop",
      })
      .to(oldTitle, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1,
      });
  };

  return (
    <main className="work-page page">
      <Splide
        options={{
          direction: "ttb",
          wheel: true,
          drag: false,
          releaseWheel: true,
          wheelSleep: 500,
          perPage: 1,
          perMove: 1,
          height: "50vh",
          width: "100%",
          // type: "loop",
          pagination: false,
          arrows: false,
        }}
        hasTrack={false}
        aria-label="..."
        onMove={_onSlideChange}
      >
        <SplideTrack>
          {works.map((work, index) => (
            <SplideSlide key={index}>
              <div className={`slide-item splide-item-${index + 1}`}>
                <div className="content">
                  <img className="img" src={work.img} />
                  <h3 className="title">{work.name}</h3>
                </div>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>

        {/* <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">Prev</button>
          <button className="splide__arrow splide__arrow--next">Next</button>
        </div> */}
      </Splide>
    </main>
  );
}
