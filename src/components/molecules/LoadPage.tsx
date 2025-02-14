"use client";
import "@/styles/global.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import EaselPlugin from "gsap/EaselPlugin";
import { usePathname } from "next/navigation";
gsap.registerPlugin(EaselPlugin);

export default function LoadPage() {
  const pathname = usePathname();
  useGSAP(() => {
    if (pathname === "/") return;
    const mainTl = gsap.timeline();
    const subTl = gsap.timeline();
    const loadDOM = document.querySelector(".load-page");
    const page = document.querySelector(".page");
    // const img = document.querySelector(".mesh");

    subTl.to(loadDOM, {
      scale: 4,
      duration: 1.5,
      ease: "power4.inOut",
    });
    // .to(img, {
    //   scaleY: 0,
    //   opacity: 0,
    //   ease: "power1.inOut",
    // });

    mainTl.add(subTl).add(() => {
      mainTl
        .to(loadDOM, {
          opacity: 0,
          visibility: "hidden",
          duration: 0.2,
        })
        .to(page, {
          opacity: 1,
          visibility: "visible",
          ease: "power4.inOut",
        });

      const loadPageEvent = new CustomEvent("loadPage", {
        detail: { message: "Hello, this is a custom event!" },
      });
      document.dispatchEvent(loadPageEvent);
      // .to(img, {
      //   scaleY: 1,
      //   opacity: 1,
      //   ease: "power2.inOut",
      // });
    });
  }, [pathname]);

  return <div className="load-page"></div>;
}
