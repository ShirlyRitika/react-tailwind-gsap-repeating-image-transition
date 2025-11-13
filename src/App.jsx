import React, { useEffect, useRef, useState } from "react";
const RepeatingImageTransition = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const gridRef = useRef(null);
  const panelRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const TOTAL_IMAGES = 33;

  const sections = [
    {
      name: "Shane Weber",
      description:
        "effect 01: straight linear paths, smooth easing, clean timing, minimal rotation.",
      items: [
        { title: "Drift — A04", model: "Amelia Hart" },
        { title: "Veil — K18", model: "Irina Volkova" },
        { title: "Ember — M45", model: "Charlotte Byrne" },
        { title: "Gleam — S12", model: "Anastasia Morozova" },
        { title: "Bloom — J29", model: "Eva Ramirez" },
        { title: "Whisper — V87", model: "Milana Petrova" },
        { title: "Trace — Z05", model: "Sofia Clarke" },
        { title: "Flicker — Q62", model: "Elena Ivanova" },
        { title: "Grain — H71", model: "Lydia Moore" },
        { title: "Pulse — B90", model: "Nina Kovacs" },
        { title: "Mist — L36", model: "Clara Voss" },
        { title: "Shard — Y22", model: "Maya Hughes" },
        { title: "Vapor — X79", model: "Alina Becker" },
        { title: "Glow — F13", model: "Harper Ellis" },
        { title: "Flux — N48", model: "Ines Laurent" },
        { title: "Spire — C65", model: "Rhea Singh" },
      ].map((item, i) => ({
        id: i + 1,
        ...item,
        image: `/assets/img${(i % TOTAL_IMAGES) + 1}.webp`,
        steps: 5 + (i % 4),
        clipPathDirection: "left-right",
        rotationRange: 10 + (i % 3) * 3,
        pathMotion: i % 2 === 0 ? "linear" : "sine",
      })),
    },
    {
      name: "Manika Jorge",
      description:
        "effect 02: Adjusts mover count, rotation, timing, and animation feel.",
      items: [
        { title: "Driftwood — W50", model: "Nora Velasquez" },
        { title: "Fold — T81", model: "Leona Park" },
        { title: "Shroud — E26", model: "Camila Rhodes" },
        { title: "Ripple — P34", model: "Isla Marquez" },
        { title: "Fray — U07", model: "Sasha Patel" },
        { title: "Wane — R52", model: "Mira Johansson" },
        { title: "Tide — S33", model: "Tara Quinn" },
        { title: "Rift — G08", model: "Zara Brooks" },
        { title: "Spool — H94", model: "Anika Meyer" },
        { title: "Glitch — M70", model: "Yara Petrov" },
        { title: "Slip — F02", model: "Olivia Cruz" },
        { title: "Husk — C15", model: "Sophie Malik" },
        { title: "Blur — V86", model: "Mina Takahashi" },
        { title: "Fracture — A63", model: "Jade Wilson" },
        { title: "Mote — Y39", model: "Isabel Nunez" },
        { title: "Aura — K21", model: "Elise Romero" },
      ].map((item, i) => ({
        id: 100 + i,
        ...item,
        image: `/assets/img${(i % TOTAL_IMAGES) + 1}.webp`,
        steps: 6 + (i % 3),
        clipPathDirection: "right-left",
        rotationRange: 8 + (i % 5),
        pathMotion: i % 2 === 0 ? "sine" : "linear",
      })),
    },
    {
      name: "Angela Wong",
      description:
        "effect 03: Big arcs, smooth start, powerful snap, slow reveal.",
      items: [
        { title: "Whorl — B45", model: "Mina Carter" },
        { title: "Flicker — D17", model: "Ava Nguyen" },
        { title: "Gleam — Z58", model: "Sophia Martinez" },
        { title: "Shard — J03", model: "Emma Rossi" },
        { title: "Trace — Q29", model: "Nora Hayes" },
        { title: "Crush — W92", model: "Elina Chen" },
        { title: "Veil — X16", model: "Arianna Costa" },
        { title: "Clasp — S84", model: "Yumi Takahashi" },
        { title: "Flint — T66", model: "Lara Novak" },
        { title: "Spire — E49", model: "Nadia Greene" },
        { title: "Plume — N22", model: "Jolie Bauer" },
        { title: "Hollow — B75", model: "Amira Lopez" },
        { title: "Brume — K10", model: "Lana Mendes" },
        { title: "Crave — F37", model: "Isla Laurent" },
        { title: "Quiver — R19", model: "Anya Kuznetsov" },
        { title: "Fathom — L52", model: "Ella Spencer" },
      ].map((item, i) => ({
        id: 200 + i,
        ...item,
        image: `/assets/img${(i % TOTAL_IMAGES) + 1}.webp`,
        steps: 7 + (i % 3),
        clipPathDirection: "left-right",
        rotationRange: 10 + (i % 4),
        pathMotion: i % 2 === 0 ? "sine" : "linear",
      })),
    },
    {
      name: "Kaito Nakamo",
      description:
        "effect 04: Quick upward motion with bold blending and smooth slow reveal.",
      items: [
        { title: "Pulse — D61", model: "Mei Tanaka" },
        { title: "Fade — P42", model: "Aiko Suzuki" },
        { title: "Wisp — T14", model: "Haruna Kim" },
        { title: "Fragment — G77", model: "Kaya Ito" },
        { title: "Spiral — Y24", model: "Nina Mori" },
        { title: "Trace — Z85", model: "Sana Watanabe" },
        { title: "Flare — C11", model: "Mika Kobayashi" },
        { title: "Chasm — R05", model: "Hana Nakamura" },
        { title: "Bloom — N38", model: "Rika Yoshida" },
        { title: "Shard — W20", model: "Ayumi Takahashi" },
        { title: "Mist — S12", model: "Emi Fujita" },
        { title: "Crush — E31", model: "Kumi Yamada" },
        { title: "Ripple — F68", model: "Nao Arai" },
        { title: "Gossamer — A07", model: "Saki Okada" },
        { title: "Floe — K96", model: "Yuka Tanaka" },
        { title: "Shiver — V44", model: "Momo Nishimura" },
      ].map((item, i) => ({
        id: 300 + i,
        ...item,
        image: `/assets/img${(i % TOTAL_IMAGES) + 1}.webp`,
        steps: 5 + (i % 4),
        clipPathDirection: "right-left",
        rotationRange: 12 + (i % 5),
        pathMotion: i % 2 === 0 ? "linear" : "sine",
      })),
    },
  ];

  const handleItemClick = (item, event) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const gridItem = event.currentTarget;
    const rect = gridItem.getBoundingClientRect();

    setSelectedItem(item);

    const movers = [];
    const steps = Math.max(4, item.steps || 6);

    let moveLeftToRight = true;

    if (item.id >= 1 && item.id <= 16) {
      moveLeftToRight = true;
    } else if (item.id >= 100 && item.id <= 116) {
      moveLeftToRight = false;
    } else if (item.id >= 200 && item.id <= 216) {
      moveLeftToRight = true;
    } else if (item.id >= 300 && item.id <= 316) {
      moveLeftToRight = false;
    }

    let startX, endX;

    if (moveLeftToRight) {
      startX = window.innerWidth * -0.3;
      endX = window.innerWidth * 0.3;
    } else {
      startX = window.innerWidth * 1.3;
      endX = window.innerWidth * 0.7;
    }

    const startY = rect.top + rect.height / 2;

    const endY = window.innerHeight * 0.5;

    const panelSideClass = moveLeftToRight ? "flex-row" : "flex-row-reverse";
    if (panelRef.current) {
      panelRef.current.classList.remove("flex-row", "flex-row-reverse");
      panelRef.current.classList.add(panelSideClass);
    }

    for (let i = 0; i < steps; i++) {
      const mover = document.createElement("div");
      mover.className = "mover";

      const tw = Math.round(rect.width * 2.2);
      const th = Math.round(rect.height * 2.2);

      const left = startX - tw / 2;
      const top = startY - th / 2;

      mover.style.cssText = `
        position: fixed;
        left: ${left}px;
        top: ${top}px;
        width: ${tw}px;
        height: ${th}px;
        background-image: url(${item.image});
        background-size: cover;
        background-position: center center;
        pointer-events: none;
        z-index: ${120 + i};
        opacity: 0;
        transform-origin: center;
        will-change: transform, opacity;
      `;

      document.body.appendChild(mover);
      movers.push(mover);
    }

    const otherItems = document.querySelectorAll(".grid-item");
    otherItems.forEach((el) => {
      if (el !== gridItem) {
        el.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 400,
          easing: "ease-in-out",
          fill: "forwards",
        });
      }
    });

    gridItem.animate(
      [
        { transform: "scale(1)", opacity: 1 },
        { transform: "scale(0.85)", opacity: 0 },
      ],
      {
        duration: 550,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );

    movers.forEach((mover, i) => {
      const delay = i * 90;
      const randomXJitter = (Math.random() - 0.5) * 30;
      const randomYJitter = (Math.random() - 0.5) * 25;

      const dx = endX - startX + randomXJitter;
      const dy = endY - startY + randomYJitter;

      const zStart = -350 - Math.random() * 120;
      const zMid = -60 + Math.random() * 30;
      const zEnd = 0;

      const rotation = (Math.random() - 0.5) * (item.rotationRange || 12);

      setTimeout(() => {
        mover.animate(
          [
            {
              opacity: 0,
              transform: `translate3d(0px,0px,${zStart}px) scale(0.9) rotate(0deg)`,
            },
            {
              opacity: 1,
              transform: `translate3d(${dx * 0.45}px,${
                dy * 0.45
              }px,${zMid}px) scale(1.05) rotate(${rotation}deg)`,
            },
            {
              opacity: 1,
              transform: `translate3d(${dx}px,${dy}px,${zEnd}px) scale(1.12) rotate(${rotation}deg)`,
            },
            {
              opacity: 0,
              transform: `translate3d(${dx * 1.18}px,${
                dy * 1.12
              }px,150px) scale(1.25) rotate(${rotation}deg)`,
            },
          ],
          {
            duration: 1300 + i * 40,
            easing: "cubic-bezier(0.65, 0, 0.35, 1)",
            fill: "forwards",
          }
        );
      }, delay);
    });

    const clipPaths = {
      "left-right": ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"],
      "right-left": ["inset(0% 0% 0% 100%)", "inset(0% 0% 0% 0%)"],
    };

    const clipDirection = moveLeftToRight ? "left-right" : "right-left";

    setTimeout(() => {
      if (panelRef.current) {
        panelRef.current.animate(
          [
            { clipPath: clipPaths[clipDirection][0], opacity: 0.6 },
            { clipPath: clipPaths[clipDirection][1], opacity: 1 },
          ],
          {
            duration: 900,
            easing: "cubic-bezier(0.65, 0, 0.35, 1)",
            fill: "forwards",
          }
        );
      }
    }, 700);

    setTimeout(() => {
      movers.forEach((m) => m.remove());
      isAnimatingRef.current = false;
    }, 2600);
  };

  const handlePanelClose = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    if (panelRef.current) {
      panelRef.current.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 600,
        easing: "ease-in-out",
        fill: "forwards",
      });
    }

    setTimeout(() => {
      const items = document.querySelectorAll(".grid-item");
      items.forEach((el, idx) => {
        setTimeout(() => {
          el.animate(
            [
              { opacity: 0, transform: "scale(0.9)" },
              { opacity: 1, transform: "scale(1)" },
            ],
            {
              duration: 600,
              easing: "ease-out",
              fill: "forwards",
            }
          );
        }, idx * 30);
      });

      setTimeout(() => {
        setSelectedItem(null);
        isAnimatingRef.current = false;
      }, 800);
    }, 200);
  };

  useEffect(() => {
    const items = document.querySelectorAll(".grid-item");
    items.forEach((el, idx) => {
      setTimeout(() => {
        el.animate(
          [
            { opacity: 0, transform: "translateY(30px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 800,
            easing: "ease-out",
            fill: "forwards",
          }
        );
      }, idx * 50);
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <main ref={gridRef} className="py-8">
        {sections.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-24">
            <div className="px-8 mb-10">
              <div className="flex items-start justify-between max-w-[1800px] mx-auto">
                <h2 className="text-5xl font-black tracking-tight uppercase">
                  {section.name}
                </h2>
                <p className="text-sm text-right max-w-md mt-4 text-gray-500">
                  {section.description}
                </p>
              </div>
            </div>

            <div className="px-8">
              <div className="grid grid-cols-4 md:grid-cols-8 gap-0 max-w-[1800px] mx-auto">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className="grid-item cursor-pointer group relative aspect-[3/4] overflow-hidden"
                    onClick={(e) => handleItemClick(item, e)}
                    style={{ opacity: 0 }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-white">
                      <p className="text-[10px] font-medium uppercase tracking-wide truncate">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>

      {selectedItem && (
        <div
          ref={panelRef}
          className="fixed inset-0 z-50 bg-white flex items-center justify-between"
          style={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
        >
          <div className="w-1/2 h-full flex items-center justify-center p-12 overflow-hidden">
            <div
              className="relative w-full max-w-[900px] h-[80vh] transition-transform duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)] transform scale-100 hover:scale-[1.02]"
              style={{
                animation: "imageGrow 1.4s ease-out forwards",
              }}
            >
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="w-1/2 h-full flex flex-col justify-end p-12 items-start text-left">
            <div className="mb-8 opacity-100 animate-[fadeUp_1s_ease-out_0.4s_forwards] text-black">
              <h2 className="text-[13px] font-medium tracking-wide lowercase text-black">
                {selectedItem.title}
              </h2>
              <p className="text-[12px] text-gray-600 italic mt-1">
                {selectedItem.model}
              </p>
            </div>
            <button
              onClick={handlePanelClose}
              className="text-xs font-medium uppercase tracking-widest hover:underline transition-all mt-2 text-black"
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RepeatingImageTransition;
