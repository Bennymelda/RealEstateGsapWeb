
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const image = "./inside-1.jfif";

export default function ChevronRow() {
  const rowRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const chevronRow = rowRef.current?.querySelector(".chevron-row");
      const chevrons = rowRef.current?.querySelectorAll(".chevron");
      const paragraphs = rowRef.current?.querySelectorAll(
        ".identity-text p"
      );

      if (!chevronRow || !chevrons?.length) return;

      // Chevron stagger animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: chevronRow,
          start: "top 80%",
          end: "top 35%",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        chevrons,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "none",
        }
      );

      // Paragraph animations
      if (paragraphs?.length) {
        gsap.fromTo(
          paragraphs,
          {
            color: "#9ca3af",
            opacity: 0.6,
          },
          {
            color: "#111111",
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: rowRef.current,
              start: "top 60%",
              end: "bottom 60%",
              scrub: true,
            },
          }
        );
      }
    },
    { scope: rowRef }
  );

  return (
    <div
      ref={rowRef}
      className="mb-24 md:mb-40 bg-white text-black mt-20 md:mt-30 px-4 sm:px-6 overflow-hidden"
    >
      {/* Heading */}
      <h3 className="text-center text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-4 font-medium tracking-tight">
        This isn't just about real estate.
      </h3>

      {/* Chevron images */}
      <div className="chevron-row flex justify-center overflow-hidden py-4 px-2">

        {[0, 1, 2, 3].map((item) => (
          <div
            key={item}
            className="
              chevron
              h-32 w-28
              sm:h-40 sm:w-36
              md:h-48 md:w-44
              shrink-0
              -ml-5 sm:-ml-6 md:-ml-8
              first:ml-0
              bg-cover bg-center
            "
            style={{
              backgroundImage: `url("${image}")`,
              backgroundSize: "480px 192px",
              backgroundPosition: `${-item * 120}px center`,
              clipPath:
                "polygon(0 0, 50% 0, 100% 50%, 50% 100%, 0 100%, 50% 50%)",
            }}
          />
        ))}

      </div>

      {/* Identity text */}
      <div className="identity-text mt-6 md:mt-5 flex flex-col items-center justify-center text-center gap-1 md:gap-1 px-2">

        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          It's about identity. Progress. Getting unstuck.
        </p>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          You're not just looking for a place — a feeling.
        </p>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
          That reflects who you are and gives you room to grow.
        </p>

      </div>
    </div>
  );
}
