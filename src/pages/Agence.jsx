import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Agence = () => {
  //reference for elemt
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imgArray = [
    "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
    "https://images.unsplash.com/photo-1761839258513-099c3121d72d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1773332611528-566f16120979?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1776345013776-98646ac3332d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1773332611573-5e5bfa8e5de5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODN8fHxlbnwwfHx8fHw%3D",
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      // y: 450,
      ease: "none",
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: "top 28%",
        end: "top -100%",
        scrub: true,
        pin: true,
        onUpdate: function (elem) {
          // console.log("hurrayy!!!");
          const imageIndex = Math.floor(elem.progress * imgArray.length);
          imageRef.current.src = imgArray[imageIndex];
        },
      },
    });
  });

  return (
    <div>
      <div className="section1">
        <div
          ref={imageDivRef}
          className="absolute h-[20vw] w-[15vw] rounded-3xl overflow-hidden   top-40 left-[30vw]"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt=""
          />
        </div>

        <div className=" relative font-[font2]">
          <div className="mt-[55vh]">
            <h1 className="text-[19vw] leading-[17vw]  text-center">
              SEVEN7Y <br />
              TWO
            </h1>
          </div>
          <div className="pl-[40%] mt-20">
            <p className=" text-4xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re
              inquisitive and open-minded, and we make sure creativity crowds
              out ego from every corner. A brand is a living thing, with values,
              a personality and a story. If we ignore that, we can achieve
              short-term success, but not influence that goes the distance. We
              bring that perspective to every brand story we help tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section2"></div>
    </div>
  );
};

export default Agence;
