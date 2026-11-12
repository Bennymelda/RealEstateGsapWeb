
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Video() {

  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play reset play reset',
      }
    });

    // Heading comes from the left
    tl.from('.video-title', {
      x: -100,
      autoAlpha: 0,
      duration: 1,
      ease: 'power3.out',
    })

    // Description comes from the right
    .from('.video-description', {
      x: 100,
      autoAlpha: 0,
      duration: 1,
      ease: 'power3.out',
    }, '<')

    // Video comes from the bottom
    .from('.hero-video', {
      y: 100,
      autoAlpha: 0,
      duration: 1.3,
      ease: 'power3.out',
    }, '-=0.5');

  }, { scope: sectionRef });


  return (
    <div ref={sectionRef} className="mt-10 px-6">

      <div className="flex py-5 justify-between flex-col md:flex-row items-start w-full gap-8">

        <p className="video-title text-xl font-semibold">
          FIND - Your Perfect Home
        </p>

      <div className="video-description text-lg max-w-md">
  <span>
    Your life's changing. Don't just find a place - find what's next.
  </span>

  <span className="block mt-3">
    We help you find the right home, with confidence and support at every step.
  </span>
</div>

      </div>

      <video
        src="/uhd_30fps.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="hero-video w-full h-screen object-cover rounded-xl"
      />

    </div>
  );
}

export default Video;
