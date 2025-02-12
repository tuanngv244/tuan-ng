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

    subTl.to(loadDOM, {
      scale: 4,
      duration: 2,
      ease: "power4.inOut",
    });
    mainTl.add(subTl).add(() => {
      mainTl.to(loadDOM, {
        opacity: 0,
        visibility: "hidden",
        duration: 0.2,
        ease: "power4.inOut",
      });
    });
  }, []);

  return <div className="load-page"></div>;
}
