import gsap from "gsap";

export function createOpeningTimeline(
  dot: HTMLDivElement,
  ring: HTMLDivElement,
) {
  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.4,
  });

  tl.fromTo(
    ring,
    {
      scale: 1,
      opacity: 0.6,
    },
    {
      scale: 140,
      opacity: 0,
      duration: 4,
      ease: "power2.out",
    },
  );

  tl.to(
    dot,
    {
      scale: 1.35,
      duration: 0.18,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    },
    0,
  );

  return tl;
}
