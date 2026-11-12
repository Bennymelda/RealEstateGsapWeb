import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface ServiceCardProps {
title: string;
image: string;
href?: string;
}

const services: ServiceCardProps[] = [
{
title: 'Mortgage Services',
image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
},
{
title: 'Property Management',
image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
},
{
title: 'Construction and Real Estate Development',
image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
},
{
title: 'Real Estate Investment',
image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
},
];

gsap.registerPlugin(ScrollTrigger, useGSAP);
export const ServicesSection: React.FC = () => {

const servicesRef = useRef<HTMLElement | null>(null);

useGSAP(() => {
 // Animate the description first, then the heading
 const headerTimeline = gsap.timeline({
 scrollTrigger: {
 trigger: servicesRef.current,
 start: "top 75%",
 toggleActions: "play reset play reset",
 },
 });

 headerTimeline
 .from(".services-description", {
 x: 60,
 autoAlpha: 0,
 duration: 1.2,
 ease: "power3.out",
 })
 .from(
 ".services-heading",
 {
 x: -60,
 autoAlpha: 0,
 duration: 1.2,
 ease: "power3.out",
 },
 "-=0.3"
 );

 // Animate service cards one after another
 gsap.from(".service-card", {
 y: 70,
 autoAlpha: 0,
 scale: 0.96,
 duration: 1.2,
 stagger: 0.3,
 ease: "power3.out",
 scrollTrigger: {
 trigger: ".services-grid",
 start: "top 80%",
 toggleActions: "play reset play reset",
 },
 });

}, { scope: servicesRef });



return (
<section 
ref={servicesRef}
className="bg-black text-white py-30 px-6 md:px-6 lg:px-6 font-sans">
<div className="max-w-8xl mx-auto">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">

<div>
<h2 className="services-heading text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05]">
Support <br />
<span className="text-[#A2C7FF] font-normal">Beyond Buying</span> <br />
<span className="text-[#A2C7FF] font-normal">and Selling</span>
</h2>
</div>
{/* Right Description & Action Button */} 
 <div className="services-description max-w-md space-y-6"> 
 <p className="text-gray-300 text-sm md:text-base leading-relaxed"> 
 The real estate market never stands still — and neither do we. We provide expert guidance, support beyond the sale, helping you maximize your investment. 
 </p> 

 <a 
 href="#explore" 
 className="inline-flex items-center gap-2 bg-white text-black font-medium text-sm px-6 py-3 rounded-full hover:bg-gray-200 transition-colors duration-200" 
 > 
 <span>Explore Our Services</span> 
 <ArrowRight className="w-4 h-4" /> 
 </a> 
 </div> 
 </div>
 </div> 

 {/* Cards Grid */} 
 <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"> 
 {services.map((service, index) => ( 
 <div 
 key={index} 
 className="service-card relative group h-[420px] rounded-2xl overflow-hidden flex flex-col justify-between p-6 cursor-pointer bg-neutral-900" 
 > 
 {/* Background Image & Overlay */} 
 <img 
 src={service.image} 
 alt={service.title} 
 className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
 /> 
 <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" /> 

 {/* Card Title */} 
 <h3 className="relative z-10 text-xl md:text-2xl font-medium text-white max-w-[85%] leading-tight"> 
 {service.title} 
 </h3> 

 {/* Learn More Button */} 
 <div className="relative z-10"> 
 <button className="inline-flex items-center gap-2 text-xs text-white bg-black/30 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full hover:bg-black/60 transition-all duration-200"> 
 <span>Learn More</span> 
 <ArrowRight className="w-3.5 h-3.5" /> 
 </button> 
 </div> 
 </div> 
 ))} 
 </div> 
 
</section>

);
};

export default ServicesSection; 