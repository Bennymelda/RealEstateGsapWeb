import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const HowWeHelpSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const buyMaskRef = useRef<HTMLDivElement>(null);
  const sellMaskRef = useRef<HTMLDivElement>(null);
  const rentMaskRef = useRef<HTMLDivElement>(null);
  const buyTitleRef = useRef<HTMLHeadingElement>(null);
  const sellTitleRef = useRef<HTMLHeadingElement>(null);
  const rentTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const buyUnderline = buyTitleRef.current?.querySelector('.title-underline') as HTMLElement | null;
    const sellUnderline = sellTitleRef.current?.querySelector('.title-underline') as HTMLElement | null;
    const rentUnderline = rentTitleRef.current?.querySelector('.title-underline') as HTMLElement | null;

    const ctx = gsap.context(() => {
      // Initial state: all overlays are covered
      gsap.set(
        [
          buyMaskRef.current,
          sellMaskRef.current,
          rentMaskRef.current,
        ],
        { yPercent: 0 }
      );

      const underlineTargets = [buyUnderline, sellUnderline, rentUnderline].filter(
        (element): element is HTMLElement => element instanceof HTMLElement
      );

      if (underlineTargets.length > 0) {
        gsap.set(underlineTargets, {
          scaleX: 0,
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
          end: '+=1500',
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      // STEP 1: BUY opens
      tl.to(buyMaskRef.current, {
        yPercent: -100,
        duration: 1,
        ease: 'none',
      });

      // BUY underline appears
      if (buyUnderline) {
        tl.to(buyUnderline, {
          scaleX: 1,
          duration: 0.6,
          ease: 'none',
        }, '<0.4');
      }

      // Give BUY time to remain visible
      tl.to({}, { duration: 0.8 });

      // STEP 2: BUY closes, SELL opens
      tl.addLabel('sellTransition');

      tl.to(
        buyMaskRef.current,
        {
          yPercent: 0,
          duration: 1.5,
          ease: 'none',
        },
        'sellTransition+=0.4'
      );

      tl.to(
        sellMaskRef.current,
        {
          yPercent: -100,
          duration: 1.5,
          ease: 'none',
        },
        'sellTransition+=0.4'
      );

      if (buyUnderline) {
        // BUY underline disappears
        tl.to(
          buyUnderline,
          {
            scaleX: 0,
            duration: 0.5,
          },
          'sellTransition+=0.4'
        );
      }

      if (sellUnderline) {
        // SELL underline appears
        tl.to(
          sellUnderline,
          {
            scaleX: 1,
            duration: 1.5,
            ease: 'none',
          },
          'sellTransition+=0.4'
        );
      }

      // Give SELL time to remain visible
      tl.to({}, { duration: 0.8 });

      // STEP 3: SELL closes, RENT opens
      tl.addLabel('rentTransition');

      tl.to(
        sellMaskRef.current,
        {
          yPercent: 0,
          duration: 1.5,
          ease: 'none',
        },
        'rentTransition+=0.4'
      );

      tl.to(
        rentMaskRef.current,
        {
          yPercent: -100,
          duration: 1.5,
          ease: 'none',
        },
        'rentTransition+=0.4'
      );

      if (sellUnderline) {
        // SELL underline disappears
        tl.to(
          sellUnderline,
          {
            scaleX: 0,
            duration: 0.9,
          },
          'rentTransition+=0.4'
        );
      }

      if (rentUnderline) {
        // RENT underline appears
        tl.to(
          rentUnderline,
          {
            scaleX: 1,
            duration: 1.5,
            ease: 'none',
          },
          'rentTransition+=0.4'
        );
      }

      // Give RENT time to remain visible
      tl.to({}, { duration: 0.8 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
   







  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-black text-white flex flex-col justify-between py-8 px-6 md:px-12 lg:px-20 font-sans"
    >
      {/* HEADER */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-center">

        <span className="text-sm font-medium text-gray-400 tracking-wider uppercase">
          Services
        </span>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-right mt-2 md:mt-0">
          How <span className="text-[#A2C7FF] font-normal">FIND</span>
          <br />
          Can Help You
        </h2>
      </div>

      {/* SERVICE ROWS */}
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-center gap-4 my-auto">

        {/* BUY ROW */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-[320px] md:h-[360px] rounded-2xl overflow-hidden bg-neutral-900 px-8">

          {/* BUY IMAGE */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop"
              alt="Luxury architecture"
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* BUY REVEALED CONTENT */}
          <div className="lg:col-span-5 relative z-10 flex items-center gap-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/40 text-sm font-medium">
              1
            </span>

            <p className="text-sm md:text-base text-gray-100 leading-relaxed max-w-md">
              Buy smarter with expert agents who understand your needs,
              find the best properties, and help you save time and money.
              Get the best deals, in the right locations, with complete confidence.
            </p>
          </div>

          {/* BUY TITLE */}
          <div className="lg:col-span-7 relative z-10 flex items-center justify-end gap-6">
            <h3
  ref={buyTitleRef}
  className="text-6xl md:text-8xl font-medium tracking-tight text-white relative"
>
  Buy
  <span className="title-underline absolute left-0 -bottom-2 w-full h-[3px] bg-white scale-x-0 origin-left" />
</h3>

            <ArrowRight className="w-10 h-10 text-white" />
          </div>

          {/* BUY BLACK OVERLAY */}
          <div
            ref={buyMaskRef}
            className="absolute inset-0 bg-black z-20 flex items-center flex-col md:flex-row justify-between px-8"
          >
            <div className="flex items-center gap-6">
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/40 text-sm font-medium">
                1
              </span>

              <p className="text-sm md:text-base text-gray-400 max-w-md">
                Buy smarter with expert agents who understand your needs,
                find the best properties, and help you save time and money.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <h3 className="text-6xl md:text-8xl font-medium tracking-tight text-white">
                Buy
              </h3>

              <ArrowRight className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>

        {/* SELL ROW */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-[320px] md:h-[360px] rounded-2xl overflow-hidden bg-neutral-900 px-8">

          {/* SELL IMAGE */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
              alt="Luxury real estate"
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* SELL REVEALED CONTENT */}
          <div className="lg:col-span-5 relative z-10 flex items-center gap-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/40 text-sm font-medium">
              2
            </span>

            <p className="text-sm md:text-base text-gray-100 leading-relaxed max-w-md">
              Sell fast, sell high. Your listings get premium exposure,
              reach serious buyers, and close deals faster with our
              powerful marketing tools and expert support.
            </p>
          </div>

          {/* SELL TITLE */}
          <div className="lg:col-span-7 relative z-10 flex items-center justify-end gap-6">
        <h3
  ref={sellTitleRef}
  className="text-6xl md:text-8xl font-medium tracking-tight text-white relative"
>
  Sell
  <span className="title-underline absolute left-0 -bottom-2 w-full h-[3px] bg-white origin-left scale-x-0" />
</h3>

            <ArrowRight className="w-10 h-10 text-white" />
          </div>

          {/* SELL BLACK OVERLAY */}
          <div
            ref={sellMaskRef}
            className="absolute inset-0 bg-black z-20 flex items-center justify-between px-8"
          >
            <div className="flex items-center gap-6">
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/40 text-sm font-medium">
                2
              </span>

              <p className="text-sm md:text-base text-gray-400 max-w-md">
                Sell fast, sell high. Your listings get premium exposure,
                reach serious buyers, and close deals faster.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <h3 className="text-6xl md:text-8xl font-medium tracking-tight text-white">
                Sell
              </h3>

              <ArrowRight className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>



         {/* Rent ROW */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-[320px] md:h-[360px] rounded-2xl overflow-hidden bg-neutral-900 px-8">

          {/* Rent IMAGE */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop"
              alt="Luxury architecture"
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Rent REVEALED CONTENT */}
          <div className="lg:col-span-5 relative z-10 flex items-center gap-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/40 text-sm font-medium">
              3
            </span>

            <p className="text-sm md:text-base text-gray-100 leading-relaxed max-w-md">
              Access hidden rentals before they hit the market through,
              agents who knows every landlord in town, with decades of NYG experiene.
              We unlock the best deal you wont find online.
            </p>
          </div>

          {/* BUY TITLE */}
          <div className="lg:col-span-7 relative z-10 flex items-center justify-end gap-6">
          <h3
  ref={rentTitleRef}
  className="text-6xl md:text-8xl font-medium tracking-tight text-white relative"
>
  Rent
  <span className="title-underline absolute left-0 -bottom-2 w-full h-[3px] bg-white origin-left scale-x-0" />
</h3>

            <ArrowRight className="w-10 h-10 text-white" />
          </div>

          {/* Rent BLACK OVERLAY */}
          <div
            ref={rentMaskRef}
            className="absolute inset-0 bg-black z-20 flex items-center justify-between px-8"
          >
            <div className="flex items-center gap-6">
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/40 text-sm font-medium">
                3
              </span>

              <p className="text-sm md:text-base text-gray-400 max-w-md">
                Access hidden rentals before they hit the market through,
              agents who knows every landlord in town, with decades of NYG experiene.
              We unlock the best deal you wont find online.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <h3 className="text-6xl md:text-8xl font-medium tracking-tight text-white">
                Rent
              </h3>

              <ArrowRight className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
        
      </div>

      <div className="max-w-7xl mx-auto w-full" />
    </section>
  );
};

export default HowWeHelpSection;
  