
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Talk to a Real Human.",
    description:
      "Tell us what you're looking for, your budget, and what matters most. We'll connect you with an expert who listens and understands your needs.",
  },
  {
    number: "02",
    title: "Get Clarity.",
    description:
      "We help you explore the right options, understand your choices, and find a property that fits your lifestyle, budget, and future plans.",
  },
  {
    number: "03",
    title: "Move Forward.",
    description:
      "From property visits to final decisions, we're with you every step of the way, making your journey simpler and more confident.",
  },
];

const StepsSection = () => {

  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {

    // Main heading animation
    const headingTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.steps-heading',
        start: 'top 80%',
        toggleActions: 'play reset play reset',
      }
    });

    headingTl.from('.heading-line-one', {
      x: -120,
      autoAlpha: 0,
      duration: 1.2,
      ease: 'power3.out',
    })

    .from('.heading-line-two', {
      x: -120,
      autoAlpha: 0,
      duration: 1.2,
      ease: 'power3.out',
    }, '-=0.8')

    .from('.steps-button', {
      y: 30,
      autoAlpha: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.5');


    // Individual paragraph animations
    gsap.utils.toArray<HTMLElement>('.step-item').forEach((step) => {

      gsap.from(step, {
        y: 70,
        autoAlpha: 0,
        duration: 1,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: step,
          start: 'top 85%',
          toggleActions: 'play reset play reset',
        },
      });

    });

  }, { scope: sectionRef });


  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-6 md:px-6 lg:px-6 py-10"
    >

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

        {/* Left Content */}
        <div className="flex flex-col items-start">

          <h2 className="steps-heading text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight text-[#152d3a]">

            <span className="heading-line-one inline-block">
              <strong>Real Estate,</strong>
            </span>

            <br />

            <span className="heading-line-two inline-block">
              Rewired.
            </span>

          </h2>

          <button className="steps-button mt-10 px-7 py-3 rounded-full bg-black text-white text-sm font-medium flex items-center gap-4 hover:bg-[#294c5d] transition-colors">
            Start Your Search
            <span>→</span>
          </button>

        </div>


        {/* Right Content */}
        <div className="flex flex-col">

          <div className="mb-5">
            <p className="text-sm text-[#526d79]">Steps</p>
          </div>


          {/* Steps */}
          <div className="flex flex-col gap-12">

            {steps.map((step) => (

              <div key={step.number} className="step-item group">

                <p className="text-lg md:text-xl leading-relaxed text-[#152d3a]">

                  <span className="font-semibold">
                    {step.title}
                  </span>{' '}

                  <span className="font-light text-[#526d79]">
                    {step.description}
                  </span>

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default StepsSection;
