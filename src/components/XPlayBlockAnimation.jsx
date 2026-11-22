import React, { useRef, useEffect } from 'react';

// 5x7 Dot-Matrix Font for 'X P L A Y'
const LETTER_MATRICES = {
  X: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  P: [
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
  ],
  L: [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  A: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  Y: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
};

const BRAND_PALETTES = [
  { top: '#67E8F9', bottom: '#06B6D4', glow: '#06B6D4' }, // Glacier Ice Cyan
  { top: '#38BDF8', bottom: '#0284C7', glow: '#0284C7' }, // Electric Azure
  { top: '#7DD3FC', bottom: '#0EA5E9', glow: '#38BDF8' }, // Sky Vibrant
  { top: '#BAE6FD', bottom: '#0284C7', glow: '#67E8F9' }, // Frosted Silver Blue
  { top: '#06B6D4', bottom: '#0369A1', glow: '#06B6D4' }, // Deep Blue Gradient
];

const XPlayBlockAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    const letterOrder = ['X', 'P', 'L', 'A', 'Y'];
    const letterWidth = 5;
    const letterSpacing = 2; // cols between letters

    let targets = [];
    let blocks = [];
    let particles = [];
    let spawnTimer = 0;
    let spawnIndex = 0;
    let state = 'spawning'; // 'spawning' | 'holding' | 'dissolving' | 'pausing'
    let stateTimer = 0;
    let shineProgress = 0;

    const setupTargets = () => {
      targets = [];
      const totalCols =
        letterOrder.length * letterWidth + (letterOrder.length - 1) * letterSpacing;
      const totalRows = 7;

      // Responsive block sizing
      const maxAvailableWidth = Math.min(width - 32, 960);
      const blockSize = Math.max(8, Math.min(22, Math.floor(maxAvailableWidth / totalCols) - 3));
      const gap = Math.max(2, Math.floor(blockSize * 0.22));
      const cellPitch = blockSize + gap;

      const totalGridW = totalCols * cellPitch - gap;
      const totalGridH = totalRows * cellPitch - gap;

      const originX = Math.round((width - totalGridW) / 2);
      const originY = Math.round(height - totalGridH - 18);

      let colOffset = 0;
      letterOrder.forEach((letterChar, lIdx) => {
        const matrix = LETTER_MATRICES[letterChar];
        for (let r = 0; r < 7; r++) {
          for (let c = 0; c < 5; c++) {
            if (matrix[r][c] === 1) {
              const tx = originX + (colOffset + c) * cellPitch;
              const ty = originY + r * cellPitch;
              const palette = BRAND_PALETTES[(lIdx * 3 + r + c) % BRAND_PALETTES.length];
              targets.push({
                x: tx,
                y: ty,
                letterIndex: lIdx,
                row: r,
                col: c,
                size: blockSize,
                palette,
              });
            }
          }
        }
        colOffset += letterWidth + letterSpacing;
      });

      // Sort targets from bottom row upwards for physical stacking
      targets.sort((a, b) => {
        if (b.row !== a.row) return b.row - a.row;
        return a.col - b.col;
      });
    };

    const resetAnimation = () => {
      blocks = [];
      particles = [];
      spawnIndex = 0;
      spawnTimer = 0;
      state = 'spawning';
      stateTimer = 0;
      shineProgress = 0;
    };

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);

      setupTargets();
      resetAnimation();
    };

    handleResize();
    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(canvas);

    // Draw helper for rounded tactile blocks
    const drawBlock = (x, y, size, palette, glowStrength = 0, scale = 1) => {
      ctx.save();
      ctx.translate(x + size / 2, y + size / 2);
      if (scale !== 1) ctx.scale(scale, scale);
      ctx.translate(-size / 2, -size / 2);

      const r = Math.max(2, size * 0.22);

      if (glowStrength > 0) {
        ctx.shadowColor = palette.glow;
        ctx.shadowBlur = Math.min(20, glowStrength * 16);
      } else {
        ctx.shadowColor = 'rgba(2, 132, 199, 0.2)';
        ctx.shadowBlur = 5;
        ctx.shadowOffsetY = 3;
      }

      // Linear Gradient Fill
      const grad = ctx.createLinearGradient(0, 0, size * 0.4, size);
      grad.addColorStop(0, palette.top);
      grad.addColorStop(1, palette.bottom);

      ctx.fillStyle = grad;
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(0, 0, size, size, r);
      } else {
        ctx.rect(0, 0, size, size);
      }
      ctx.fill();

      // Top Glass Highlight
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(1, 1, size - 2, Math.max(2, size * 0.35), [r, r, 0, 0]);
      } else {
        ctx.rect(1, 1, size - 2, Math.max(2, size * 0.35));
      }
      ctx.fill();

      // Delicate Outer Stroke
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      ctx.restore();
    };

    // 60 FPS Render Loop
    let lastTime = performance.now();
    const render = (currentTime) => {
      const dt = Math.min(32, currentTime - lastTime);
      lastTime = currentTime;

      // 100% transparent clear
      ctx.clearRect(0, 0, width, height);

      // 1. Spawning Blocks autonomously from the SKY (Tetris / Arcade Game Style)
      if (state === 'spawning') {
        spawnTimer += dt;
        // Blocks rain down rapidly from the sky: 1 block every 26ms
        if (spawnTimer >= 26 && spawnIndex < targets.length) {
          spawnTimer = 0;
          const target = targets[spawnIndex];
          spawnIndex++;

          blocks.push({
            // Autonomously falls from the sky directly above its target slot
            x: target.x,
            y: -30 - Math.random() * 80,
            vy: 2 + Math.random() * 3,
            gravity: 0.65 + Math.random() * 0.2,
            targetX: target.x,
            targetY: target.y,
            size: target.size,
            palette: target.palette,
            letterIndex: target.letterIndex,
            landed: false,
            bounce: 0,
            scale: 1,
            rotation: 0,
          });
        }

        if (spawnIndex >= targets.length && blocks.every((b) => b.landed)) {
          state = 'holding';
          stateTimer = 0;
        }
      }

      // 2. Holding Logic (Display Fully Assembled "XPLAY")
      if (state === 'holding') {
        stateTimer += dt;
        shineProgress += 0.016;

        // Display assembled word for 2.8 seconds
        if (stateTimer >= 2800) {
          state = 'dissolving';
          stateTimer = 0;
          blocks.forEach((b) => {
            b.vx = (Math.random() - 0.5) * 3;
            b.vy = Math.random() * -2.5 - 0.5;
            b.gravity = 0.38 + Math.random() * 0.2;
            b.rotSpeed = (Math.random() - 0.5) * 0.08;
          });
        }
      }

      // 3. Dissolving / Gravity Drop Logic
      if (state === 'dissolving') {
        stateTimer += dt;
        let anyVisible = false;

        blocks.forEach((b) => {
          b.vy += b.gravity;
          b.x += b.vx;
          b.y += b.vy;
          b.rotation += b.rotSpeed;
          if (b.y < height + 40) anyVisible = true;
        });

        if (!anyVisible || stateTimer > 1800) {
          state = 'pausing';
          stateTimer = 0;
        }
      }

      // 4. Pause before rain begins from sky again
      if (state === 'pausing') {
        stateTimer += dt;
        if (stateTimer >= 350) {
          resetAnimation();
        }
      }

      // 5. Update and Draw Blocks
      blocks.forEach((b) => {
        if (!b.landed && state === 'spawning') {
          b.vy += b.gravity;
          b.y += b.vy;

          if (b.y >= b.targetY) {
            b.y = b.targetY;
            b.landed = true;
            b.bounce = 1;

            // Physical impact sparks
            for (let i = 0; i < 4; i++) {
              particles.push({
                x: b.targetX + b.size / 2,
                y: b.targetY + b.size,
                vx: (Math.random() - 0.5) * 3,
                vy: Math.random() * -2 - 1,
                color: b.palette.top,
                size: 1.5 + Math.random() * 2,
                alpha: 1,
              });
            }
          }
        }

        // Settling bounce upon landing
        let scale = 1;
        if (b.bounce > 0) {
          b.bounce -= 0.06;
          if (b.bounce < 0) b.bounce = 0;
          scale = 1 + Math.sin(b.bounce * Math.PI * 3) * 0.2 * b.bounce;
        }

        // Glow wave calculation
        let glow = 0;
        if (state === 'holding') {
          const letterNorm = b.letterIndex / (letterOrder.length - 1);
          const distToShine = Math.abs(letterNorm - ((shineProgress * 0.7) % 1.4 - 0.2));
          if (distToShine < 0.22) {
            glow = 1 - distToShine / 0.22;
          } else {
            glow = 0.15 + Math.sin(currentTime * 0.003 + b.letterIndex) * 0.12;
          }
        }

        // Soft mirror reflection on floor
        if (b.landed && state !== 'dissolving') {
          ctx.save();
          ctx.globalAlpha = 0.14;
          ctx.translate(0, b.y + b.size * 2 + 2);
          ctx.scale(1, -0.45);
          drawBlock(b.x, 0, b.size, b.palette, 0, scale);
          ctx.restore();
        }

        ctx.save();
        if (state === 'dissolving') {
          ctx.translate(b.x + b.size / 2, b.y + b.size / 2);
          ctx.rotate(b.rotation);
          drawBlock(-b.size / 2, -b.size / 2, b.size, b.palette, 0, 1);
        } else {
          drawBlock(b.x, b.y, b.size, b.palette, glow, scale);
        }
        ctx.restore();
      });

      // 6. Draw Spark Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.12;
        p.alpha -= 0.04;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
        } else {
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="w-full relative select-none overflow-hidden my-3">
      <canvas
        ref={canvasRef}
        className="w-full h-[200px] sm:h-[240px] md:h-[270px] block"
      />
    </div>
  );
};

export default XPlayBlockAnimation;
