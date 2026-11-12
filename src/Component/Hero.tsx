import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
const heroRef = useRef<HTMLElement | null>(null);

useGSAP(
() => {
const tl = gsap.timeline({
scrollTrigger: {
trigger: heroRef.current,
start: "top top",
end: "+=2000",
scrub: 1,
pin: true,
anticipatePin: 1,
invalidateOnRefresh: true,
},
});

// FIND mask starts hidden

gsap.set(".find-mask", {
autoAlpha: 0,
});

// Subtitle and button fade out 
 tl.to( 
 [".hero-subtitle", ".hero-button"], 
 { 
 opacity: 0, 
 y: -25, 
 duration: 0.4, 
 ease: "none", 
 }, 
 0 
 ); 

 // Heading fades out 
 tl.to( 
 ".hero-title", 
 { 
 opacity: 0, 
 y: -45, 
 duration: 0.7, 
 ease: "none", 
 }, 
 0 
 ); 

 // House moves upward 
 tl.to( 
 ".house-wrapper", 
 { 
 y: -350, 
 duration: 2, 
 ease: "none", 
 }, 
 0.2 
 ); 

 // FIND mask appears over the house

tl.to(
".find-mask",
{
autoAlpha: 1,
duration: 0.5,
ease: "none",
},
1.2
);

// Left cloud moves upward slowly 
 tl.to( 
 ".left-cloud", 
 { 
 y: -180, 
 duration: 2, 
 ease: "none", 
 }, 
 0 
 ); 

 // Right cloud moves upward slowly 
 tl.to( 
 ".right-cloud", 
 { 
 y: -180, 
 duration: 2, 
 ease: "none", 
 }, 
 0 
 ); 

 // Front cloud overlay moves slowly 
 tl.to( 
 ".cloud-overlay", 
 { 
 y: -80, 
 xPercent: -5, 
 duration: 2, 
 ease: "none", 
 }, 
 0 
 ); 
}, 
{ scope: heroRef }

);

return (
<section 
 ref={heroRef} 
 className="hero relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden" 
 > {/* Text */} 
 <div className="hero-content relative z-30 flex flex-col mt-[160px] justify-center items-center"> 

 <p className="hero-title font-semibold mb-2 text-5xl"> 
 Find What Moves You 
 </p> 

 <p className="hero-subtitle text-sm text-gray-800"> 
 Expert agents. Real guidance. A clear path to find what's next. 
 </p> 

 <button className="hero-button bg-black text-white px-8 py-3 mt-4 rounded-full"> 
 Get Started 
 </button> 

 </div> 


 {/* Left Cloud */} 
 <div 
 className="left-cloud absolute inset-0 z-[5] pointer-events-none bg-no-repeat" 
 style={{ 
 backgroundImage: "url('/cloud-3.jpg')", 
 backgroundSize: "cover", 
 backgroundPosition: "left center", 
 maskImage: 
 "linear-gradient(to right, black 0%, black 15%, transparent 65%)", 
 WebkitMaskImage: 
 "linear-gradient(to right, black 0%, black 15%, transparent 65%)", 
 }} 
 /> 


 {/* Right Cloud */} 
 <div 
 className="right-cloud absolute inset-0 z-[5] pointer-events-none bg-no-repeat" 
 style={{ 
 backgroundImage: "url('/cloud-3.jpg')", 
 backgroundSize: "cover", 
 backgroundPosition: "right center", 
 maskImage: 
 "linear-gradient(to left, black 0%, black 15%, transparent 65%)", 
 WebkitMaskImage: 
 "linear-gradient(to left, black 0%, black 15%, transparent 65%)", 
 }} 
 /> 


 {/* House */} 
 <div className="house-wrapper relative z-10 flex justify-center pt-10"> 
 <img 
 src="./house-5-removebg-preview.png" 
 className="house-image w-[700px] max-w-none object-contain" 
 alt="House" 
 /> 
 </div> 


 {/* FIND Text Mask */}

<div className="find-mask absolute inset-0 z-[25] pointer-events-none"> <svg
viewBox="0 0 1440 900"
preserveAspectRatio="xMidYMid slice"
className="w-full h-full"

> 

<defs> 
 <mask id="find-cutout"> 
 {/* White covers everything */} 
 <rect width="100%" height="100%" fill="white" /> 

 {/* Black text creates transparent letters */} 
 <text 
 x="50%" 
 y="30%" 
 textAnchor="middle" 
 dominantBaseline="middle" 
 fontSize="300" 
 fontWeight="900" 
 fontFamily="Arial, sans-serif" 
 fill="black" 
 > 
 FIND 
 </text> 
 <text 
 x="50%" 
 y="45%" 
 textAnchor="middle" 
 dominantBaseline="middle" 
 fontSize="80" 
 fontWeight="900" 
 fontFamily="Arial, sans-serif" 
 fill="black" 
 > 
 REAL ESTATE
 </text>
 </mask> 
</defs> 

{/* This layer will eventually use your hero background */} 
<image

href="/cloud-3.jpg"
width="1440"
height="900"
preserveAspectRatio="xMidYMid slice"
mask="url(#find-cutout)"
/>
</svg>

</div> {/* Front Cloud Overlay */} 
 <div 
 className="cloud-overlay absolute bottom-0 left-0 w-full h-[65%] z-20 pointer-events-none bg-no-repeat" 
 style={{ 
 backgroundImage: "url('/cloud-3.jpg')", 
 backgroundSize: "cover", 
 backgroundPosition: "center bottom", 
 maskImage: 
 "linear-gradient(to top, black 0%, black 65%, transparent 100%)", 
 WebkitMaskImage: 
 "linear-gradient(to top, black 0%, black 65%, transparent 100%)", 
 opacity: 0.95, 
 }} 
 /> 

</section> 
);
};

export default Hero;