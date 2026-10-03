
"use client";

import { education } from "@/app/data/Education";
import { useEffect, useRef } from "react";

export function ProgressViewPortComponent() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const connectorsRef = useRef<(HTMLDivElement | null)[]>([]);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);

  /*
   * Distance between education items.
   */
  const STEP_VH = 28;

  /*
   * Exact scroll length:
   * viewport + distance required to move
   * from first item to last item.
   */
  const sectionHeightVh =
    100 +
    Math.max(
      education.length - 1,
      0
    ) *
      STEP_VH;

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;

    if (!section || !viewport) return;

    const itemCount = Math.max(
      education.length,
      1
    );

    let targetProgress = 0;
    let smoothProgress = 0;

    let viewportHeight =
      viewport.clientHeight;

    let step =
      viewportHeight *
      (STEP_VH / 100);

    /* =========================================================
     * HELPERS
     * ======================================================= */

    const clamp = (
      value: number,
      min = 0,
      max = 1
    ) => {
      return Math.min(
        Math.max(value, min),
        max
      );
    };

    const smoothStep = (
      value: number
    ) => {
      const t = clamp(value);

      return (
        t *
        t *
        (3 - 2 * t)
      );
    };

    /* =========================================================
     * RESIZE
     * ======================================================= */

    const resize = () => {
      viewportHeight =
        viewport.clientHeight;

      step =
        viewportHeight *
        (STEP_VH / 100);

      step = Math.min(
        Math.max(step, 140),
        280
      );
    };

    /* =========================================================
     * SCROLL
     * ======================================================= */

    const updateScroll = () => {
      const rect =
        section.getBoundingClientRect();

      const scrollDistance = Math.max(
        section.offsetHeight -
          viewport.clientHeight,
        1
      );

      targetProgress = clamp(
        -rect.top / scrollDistance
      );
    };

    /* =========================================================
     * UPDATE UI
     * ======================================================= */

    const updateItems = (
      progress: number
    ) => {
      const totalSpan =
        Math.max(
          itemCount - 1,
          0
        ) * step;

      const timelineOffset =
        progress * totalSpan;

      /* -------------------------------------------------------
       * Timeline rail
       * ----------------------------------------------------- */

      const rail =
        viewport.querySelector(
          "[data-timeline-rail]"
        ) as HTMLDivElement | null;

      if (rail) {
        rail.style.top = `${
          viewportHeight / 2 -
          timelineOffset
        }px`;

        rail.style.height = `${Math.max(
          totalSpan,
          1
        )}px`;
      }

      /* -------------------------------------------------------
       * Education items
       * ----------------------------------------------------- */

      education.forEach(
        (_, index) => {
          const item =
            itemRefs.current[index];

          const card =
            cardsRef.current[index];

          const connector =
            connectorsRef.current[
              index
            ];

          const node =
            nodesRef.current[index];

          if (!item) return;

          const top =
            viewportHeight / 2 +
            index * step -
            timelineOffset;

          item.style.top = `${top}px`;

          item.style.visibility =
            top < -250 ||
            top >
              viewportHeight + 250
              ? "hidden"
              : "visible";

          /* ---------------------------------------------------
           * Focus
           * ------------------------------------------------- */

          const nodeProgress =
            itemCount <= 1
              ? 0
              : index /
                (itemCount - 1);

          const distance =
            Math.abs(
              progress -
                nodeProgress
            );

          const rawFocus =
            1 -
            distance / 0.22;

          const focus =
            smoothStep(rawFocus);

          const isActive =
            distance < 0.11;

          /* ---------------------------------------------------
           * CARD
           * ------------------------------------------------- */

          if (card) {
            /*
             * Keep inactive cards readable.
             */
            const opacity =
              0.72 +
              focus * 0.28;

            const scale =
              1 +
              focus * 0.028;

            card.style.opacity =
              opacity.toFixed(3);

            card.style.transform = `
              translateX(${focus * 8}px)
              scale(${scale})
            `;

            /*
             * Very subtle white glass surface.
             * Keeps the card visible against a white page.
             */
            const backgroundOpacity =
              0.48 +
              focus * 0.16;

            card.style.background = `
              rgba(
                255,
                255,
                255,
                ${backgroundOpacity}
              )
            `;

            const borderOpacity =
              0.14 +
              focus * 0.32;

            card.style.borderColor = `
              rgba(
                8,
                47,
                73,
                ${borderOpacity}
              )
            `;

            /*
             * Small shadow only around the card.
             */
            card.style.boxShadow =
              focus > 0.05
                ? `
                  0 18px 40px -30px
                  rgba(
                    15,
                    23,
                    42,
                    ${0.18 + focus * 0.22}
                  ),

                  inset 0 1px 0
                  rgba(
                    255,
                    255,
                    255,
                    ${0.65 + focus * 0.2}
                  )
                `
                : `
                  0 10px 30px -28px
                  rgba(
                    15,
                    23,
                    42,
                    0.12
                  )
                `;

            card.style.backdropFilter =
              `blur(${
                8 + focus * 4
              }px)`;

            card.dataset.active =
              isActive
                ? "true"
                : "false";
          }

          /* ---------------------------------------------------
           * NODE
           * ------------------------------------------------- */

          if (node) {
            const nodeScale =
              1 +
              focus * 0.75;

            node.style.transform = `
              translate(-50%, -50%)
              scale(${nodeScale})
            `;

            node.style.background =
              isActive
                ? "#0f172a"
                : "#0891b2";

            node.style.boxShadow =
              isActive
                ? `
                  0 0 0 4px
                  rgba(
                    8,
                    145,
                    178,
                    0.12
                  ),

                  0 0 20px
                  rgba(
                    8,
                    145,
                    178,
                    0.45
                  )
                `
                : `
                  0 0 8px
                  rgba(
                    8,
                    145,
                    178,
                    ${0.2 + focus * 0.25}
                  )
                `;
          }

          /* ---------------------------------------------------
           * CONNECTOR
           * ------------------------------------------------- */

          if (connector) {
            connector.style.opacity =
              (
                0.24 +
                focus * 0.76
              ).toFixed(3);

            connector.style.transform = `
              translateY(-50%)
              scaleX(${0.3 + focus * 0.7})
            `;

            connector.style.boxShadow =
              focus > 0.1
                ? `
                  0 0 12px
                  rgba(
                    8,
                    145,
                    178,
                    ${focus * 0.35}
                  )
                `
                : "none";
          }
        }
      );
    };

    /* =========================================================
     * ANIMATION
     * ======================================================= */

    let animationFrame = 0;

    const animate = () => {
      animationFrame =
        requestAnimationFrame(
          animate
        );

      smoothProgress +=
        (
          targetProgress -
          smoothProgress
        ) *
        0.10;

      if (
        Math.abs(
          targetProgress -
            smoothProgress
        ) < 0.00005
      ) {
        smoothProgress =
          targetProgress;
      }

      updateItems(
        smoothProgress
      );
    };

    /* =========================================================
     * INITIALIZE
     * ======================================================= */

    resize();
    updateScroll();
    updateItems(0);
    animate();

    window.addEventListener(
      "scroll",
      updateScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      resize
    );

    const resizeObserver =
      new ResizeObserver(() => {
        resize();
        updateScroll();
        updateItems(
          smoothProgress
        );
      });

    resizeObserver.observe(
      viewport
    );

    /* =========================================================
     * CLEANUP
     * ======================================================= */

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "scroll",
        updateScroll
      );

      window.removeEventListener(
        "resize",
        resize
      );

      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-clip
        bg-transparent
      "
      style={{
        height: `${100}vh`,
      }}
    >
      {/* ===================================================
       * STICKY VIEWPORT
       * ================================================= */}

      <div
        ref={viewportRef}
        className="
          sticky
          top-0
          h-[100svh]
          min-h-[560px]
          w-full
          overflow-hidden
          bg-transparent
        "
      >
        {/* =================================================
         * ATMOSPHERE
         * =============================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
          "
        >
          <div
            className="
              absolute
              left-[-8%]
              top-[12%]
              h-[420px]
              w-[420px]
              rounded-full
              bg-cyan-400/[0.02]
              blur-[130px]
            "
          />

          <div
            className="
              absolute
              bottom-[-10%]
              right-[-7%]
              h-[440px]
              w-[440px]
              rounded-full
              bg-indigo-500/[0.02]
              blur-[140px]
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[260px]
              w-[260px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-cyan-300/[0.012]
              blur-[100px]
            "
          />
        </div>

        {/* =================================================
         * HEADER
         * =============================================== */}

        <div
          className="
            absolute
            left-6
            top-8
            z-30
            sm:left-8
            md:left-12
            lg:left-16
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-cyan-700
                shadow-[0_0_10px_rgba(14,116,144,0.5)]
              "
            />

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.45em]
                text-cyan-800
                sm:text-xs
              "
            >
              Journey
            </p>
          </div>

          <h2
            className="
              mt-3
              bg-gradient-to-r
              from-slate-950
              via-cyan-800
              to-indigo-800
              bg-clip-text
              text-4xl
              font-extrabold
              tracking-[-0.045em]
              text-transparent
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Education
          </h2>

          <div className="mt-5 flex items-center gap-2">
            <div
              className="
                h-px
                w-20
                bg-gradient-to-r
                from-cyan-700
                via-indigo-700
                to-transparent
              "
            />

            <div
              className="
                h-1
                w-1
                rounded-full
                bg-cyan-700
              "
            />
          </div>
        </div>

        {/* =================================================
         * HTML TIMELINE
         * ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-10
          "
        >
          {/* Vertical rail */}
          <div
            data-timeline-rail
            className="
              absolute
              left-1/2
              top-1/2
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-slate-400/80
              to-transparent
            "
            style={{
              height: "1px",
            }}
          >
            <div
              className="
                absolute
                left-1/2
                top-0
                h-full
                w-px
                -translate-x-1/2
                bg-gradient-to-b
                from-transparent
                via-cyan-700/70
                to-transparent
              "
            />
          </div>

          {/* Education items */}
          <div
            className="
              relative
              mx-auto
              h-full
              w-full
              max-w-7xl
            "
          >
            {education.map(
              (item, index) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[
                      index
                    ] = el;
                  }}
                  className="
                    absolute
                    left-1/2
                    w-[48%]
                    -translate-y-1/2
                    pl-7

                    sm:w-[46%]
                    sm:pl-8

                    md:w-[44%]
                    md:pl-12

                    lg:w-[40%]
                    lg:pl-16

                    will-change-transform
                  "
                  style={{
                    top: "50%",
                  }}
                >
                  {/* Node */}
                  <div
                    ref={(el) => {
                      nodesRef.current[
                        index
                      ] = el;
                    }}
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-3
                      w-3
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-cyan-700
                      transition-colors
                      duration-300
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-[-4px]
                        rounded-full
                        border
                        border-cyan-700/30
                      "
                    />
                  </div>

                  {/* Connector */}
                  <div
                    ref={(el) => {
                      connectorsRef.current[
                        index
                      ] = el;
                    }}
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-px
                      w-7
                      origin-left
                      -translate-y-1/2
                      bg-gradient-to-r
                      from-cyan-800
                      via-cyan-700
                      to-transparent

                      will-change-transform

                      sm:w-8
                      md:w-12
                      lg:w-16
                    "
                  />

                  {/* Card */}
                  <div
                    ref={(el) => {
                      cardsRef.current[
                        index
                      ] = el;
                    }}
                    className="
                      relative
                      w-full
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-900/[0.12]
                      bg-white/[0.60]
                      px-5
                      py-4
                      backdrop-blur-xl
                      will-change-transform

                      md:px-6
                      md:py-5
                    "
                    data-active="false"
                  >
                    {/* Top highlight */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-x-5
                        top-0
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-cyan-700/45
                        to-transparent
                      "
                    />

                    {/* Inner glow */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-8
                        -top-8
                        h-24
                        w-24
                        rounded-full
                        bg-cyan-500/[0.025]
                        blur-2xl
                      "
                    />

                    {/* Number */}
                    <div
                      className="
                        absolute
                        right-4
                        top-4
                        text-[9px]
                        font-bold
                        tracking-[0.25em]
                        text-slate-700/35

                        md:right-5
                        md:top-5
                      "
                    >
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </div>

                    {/* Level */}
                    <span
                      className="
                        relative
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.28em]
                        text-cyan-800

                        md:text-xs
                      "
                    >
                      {item.level}
                    </span>

                    {/* School */}
                    <h3
                      className="
                        relative
                        mt-2
                        max-w-xl
                        text-base
                        font-bold
                        leading-tight
                        tracking-tight
                        text-slate-950

                        sm:text-lg
                        md:text-xl
                        lg:text-2xl
                      "
                    >
                      {item.school}
                    </h3>

                    {/* Location */}
                    <div
                      className="
                        relative
                        mt-3
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <span
                        className="
                          h-px
                          w-5
                          bg-gradient-to-r
                          from-cyan-800
                          to-indigo-700/40
                        "
                      />

                      <p
                        className="
                          text-xs
                          font-medium
                          text-slate-700

                          md:text-sm
                        "
                      >
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* =================================================
         * SCROLL INDICATOR
         * ================================================= */}

        <div
          className="
            absolute
            bottom-7
            left-6
            z-30
            sm:left-8
            md:left-12
            lg:left-16
          "
        >
          <div
            className="
              flex
              items-center
              gap-4
              opacity-80
            "
          >
            <div className="relative h-10 w-px overflow-hidden bg-slate-900/15">
              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-1/2
                  animate-pulse
                  bg-gradient-to-b
                  from-cyan-700
                  to-transparent
                "
              />
            </div>

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.35em]
                text-slate-700
              "
            >
              Scroll
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

