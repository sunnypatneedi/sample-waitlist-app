import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    spread: 100,
    ticks: 100,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  // Multiple bursts for a better effect
  fire(0.25, { angle: 60, spread: 55, startVelocity: 55 });
  fire(0.2, { angle: 120, spread: 55, startVelocity: 55 });
  fire(0.35, { angle: 90, spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
};
