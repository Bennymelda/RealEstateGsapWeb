import React, { useState } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
export const TestimonialSection: React.FC = () => {

const testimonials = [
{
id: 1,
name: "Sarah M.",
role: "Home Buyer",
image: "./real-13.jpg",
rating: 5,
message:
"Finding my dream home was easier than I ever imagined. From our very first conversation, the team took the time to understand exactly what I was looking for, including my preferred location, budget, and lifestyle. They guided me through every step, answered all my questions, and made what could have been a stressful experience feel completely seamless. I'm truly grateful for the experience and couldn't recommend them enough!",
},
{
id: 2,
name: "James R.",
role: "Property Investor",
image: "./real-11.jpg",
rating: 4,
message:
"Investing in property can be overwhelming, especially when you're trying to find the right opportunity. The team made the entire process straightforward by providing helpful insights, understanding my investment goals, and presenting properties that actually matched what I needed. Their professionalism, attention to detail, and willingness to help made all the difference. I'm very pleased with the outcome and look forward to working with them again.",
},
{
id: 3,
name: "Emily T.",
role: "First-Time Buyer",
image: "./real-14.jpg",
rating: 5,
message:
"As a first-time home buyer, I had so many questions and wasn't entirely sure where to begin. Thankfully, the team made me feel comfortable and supported throughout the entire journey. From the initial property viewing to understanding the paperwork and finally receiving my keys, every step was handled with care and professionalism. They truly listened to what I wanted and helped me find a place I can proudly call home. ",
},
];

const [activeIndex, setActiveIndex] = useState(0);
const sectionRef = React.useRef<HTMLElement | null>(null);

const activeTestimonial = testimonials[activeIndex];

useGSAP(() => {
const timeline = gsap.timeline({
onComplete: () => {
setActiveIndex((prev) => (prev + 1) % testimonials.length);
},
});

timeline
.fromTo(
".testimonial-slide",
{
x: 60,
autoAlpha: 0,
},
{
x: 0,
autoAlpha: 1,
duration: 0.8,
ease: "power3.out",
}
)
.to(".testimonial-slide", {
x: -60,
autoAlpha: 0,
duration: 0.7,
ease: "power2.in",
delay: 4,
});

return () => timeline.kill();
}, {
scope: sectionRef,
dependencies: [activeIndex],
revertOnUpdate: true,
});

useGSAP(() => {
 // Split heading into individual characters
 const split = new SplitText(".testimonial-heading", {
 type: "chars",
 });

 // Animate heading characters
 gsap.from(split.chars, {
 y: 80,
 autoAlpha: 0,
 rotateX: -90,
 stagger: 0.03,
 duration: 0.8,
 ease: "back.out(1.7)",
 scrollTrigger: {
 trigger: ".testimonial-heading",
 start: "top 80%",
 toggleActions: "play reset play reset",
 },
 });

 // Reveal testimonial content on scroll
 gsap.from(".testimonial-content", {
 y: 70,
 autoAlpha: 0,
 duration: 1.2,
 ease: "power3.out",
 scrollTrigger: {
 trigger: ".testimonial-content",
 start: "top 80%",
 toggleActions: "play reset play reset",
 },
 });

 return () => split.revert();
}, {
 scope: sectionRef,
});
return (
<section 
ref={sectionRef} className="bg-[#F4F7FB] text-gray-900 py-16 px-6 md:px-12 lg:px-20 font-sans">
<div className="max-w-9xl mx-auto">
{/* Section Header */}
<h2 className="testimonial-heading text-4xl md:text-6xl font-normal tracking-tight leading-tight mb-12">
 Don't Take Our Word For it.
</h2>



{/* Content Layout */}

{/* Content Layout */}

<div className="testimonial-content overflow-hidden"> 
 <div 
 key={activeTestimonial.id} 
 className="testimonial-slide grid grid-cols-1 lg:grid-cols-11 gap-8 items-center" 
 > 
 {/* Left Image */} 
 <div className="lg:col-span-6 rounded-xl overflow-hidden h-[400px] md:h-[450px]"> 
 <img 
 src={activeTestimonial.image} 
 alt={activeTestimonial.name} 
 className="w-full h-full object-cover object-top" 
 /> 
</div> {/* Right Testimonial Content */} 
<div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:pl-6"> 
 <p className="text-gray-700 text-base md:text-lg leading-relaxed italic"> 
 "{activeTestimonial.message}" 
 </p> 

 <div> 
 <h3 className="font-semibold text-lg text-gray-900"> 
 {activeTestimonial.name} 
 </h3> 

 <p className="text-sm text-gray-500 mb-3"> 
 {activeTestimonial.role} 
 </p> 

 {/* Star Rating */} 
 {/* Star Rating */}

<div className="flex items-center gap-1 text-amber-400"> 
 {[...Array(activeTestimonial.rating)].map((_, i) => ( 
 <Star key={i} className="w-4 h-4 fill-current" /> 
 ))} 
</div> 
 </div> 
 </div> 
 </div> 
</div> </div> 
{/* Testimonial Navigation */}
<div className="flex items-center justify-center gap-3 mt-8">
 {testimonials.map((testimonial, index) => (
 <button
 key={testimonial.id}
 type="button"
 onClick={() => setActiveIndex(index)}
 aria-label={`Show testimonial ${index + 1}`}
 aria-current={activeIndex === index ? "true" : undefined}
 className={`h-3 rounded-full transition-all duration-500 ${
 activeIndex === index
 ? "w-8 bg-gray-900"
 : "w-3 bg-gray-300 hover:bg-gray-500"
 }`}
 />
 ))}
</div>

</section>

);
};

export default TestimonialSection; 