import React, { useContext, useEffect, useRef } from "react";
import "./About.css";
import photo from "../assets/photo.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { context } from "../store/Context";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  let { timeLine } = useContext(context);
  useEffect(() => {});
  useGSAP(() => {
    gsap.to(".uncoverAnimation", {
      width: "0%",
      stagger: 0.4,
      scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 25%",
      },
    });
  });
  return (
    <section
      id="about"
      className="min-h-[100dvh] py-5 flex flex-col gap-5  justify-center items-center bg-[#112D41]"
    >
      <h1 className="text-[3.5rem] font-semibold relative text-center text-white">
        About <span className="text-[#00ABF0]">Me</span>
        <span className="uncoverAnimation"></span>
      </h1>
      <div className="photo mt-2 relative">
        <span className="uncoverAnimation"></span>
        <img
          src={photo}
          alt="Tariq"
          className="w-[280px] h-[280px] object-cover rounded-full z-50"
        />
      </div>
      <h3 className="text-3xl text-white font-bold relative">
        Website Developer
        <span className="uncoverAnimation"></span>
      </h3>
      <p className="w-[90%] md:w-[70%] text-white text-center relative leading-loose">
        <span className="uncoverAnimation"></span>I am working as a front-end
        developer for the last 1 and half years having strong command over HTML, CSS,
        Javascript, and frameworks such as Bootstrap 4/5 and React Js and I also have
         worked with the backend with firebase.
      </p>
    </section>
  );
};

export default About;
