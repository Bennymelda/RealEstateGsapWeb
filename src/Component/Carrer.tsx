
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const CareerSection: React.FC = () => {

  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 50%',
        toggleActions: 'play reset play reset',
      }
    });

    // Left image slides in from the left
    tl.from('.left-image', {
      x: -150,
      autoAlpha: 0,
      duration: 1.2,
      ease: 'power3.out',
    })

    // Right image slides in from the right
    .from('.right-image', {
      x: 150,
      autoAlpha: 0,
      duration: 1.2,
      ease: 'power3.out',
    }, '<');

  }, { scope: sectionRef });


  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-10 px-6 md:px-12 lg:px-6 font-sans mt-10"
    >

      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">

          <span className="text-xs tracking-[0.2em] text-neutral-400 uppercase font-medium">
            OUR MISSION
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 leading-tight">
            Don't Rent Your Career.
          </h2>

        </div>


        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Image */}
          <div className="md:col-span-4 lg:col-span-4 flex justify-center md:justify-start">

            <div className="left-image relative w-full max-w-[320px] aspect-[3/4] rounded-xl overflow-hidden">

              <img
                src="/real-3.jpg"
                alt="Person raising arm against building"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />

            </div>

          </div>


          {/* Right Content */}
          <div className="md:col-span-8 lg:col-span-8 flex flex-col">

            {/* Large Image */}
            <div className="right-image relative w-full aspect-[16/9] rounded-xl overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200"
                alt="Aerial view of green suburban neighborhood"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />

            </div>


            {/* Description */}
            <div className="w-full flex justify-end mt-8">

              <div className="w-full max-w-[900px]">

                <p className="text-sm font-semibold text-neutral-900 mb-4">
                  Join 82K+ our community! Let's work for the future of work — together.
                </p>

                <p className="text-sm md:text-base text-neutral-500 leading-7">
                  At FIND, our agents don't just work for the brand — they own a
                  part of it. We drive real performance with solutions that learn,
                  adapt, and deliver more value. From marketing to sales, from
                  support to operations, our AI agents help teams move faster,
                  work smarter, and achieve more. Built with Claude, powered by
                  purpose, they don't just assist — they contribute, collaborate,
                  and grow with your business.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CareerSection;

