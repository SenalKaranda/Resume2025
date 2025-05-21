import React, { useRef, useEffect } from "react";

type AssetImages = {
  bird?: HTMLImageElement;
  background?: HTMLImageElement;
  pipe?: HTMLImageElement;
};

interface BlappyFirdGameProps {
  assets?: AssetImages;
}

export const BlappyFirdGame: React.FC<BlappyFirdGameProps> = ({ assets }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Game constants
    const width = 320;
    const height = 480;
    const gravity = 0.05;
    const jump = -3
    const pipeWidth = 50;
    const pipeGap = 120;
    const birdSize = 24;

    // Game state
    let FirdY = height / 2;
    let FirdV = 0;
    let pipes: { x: number; top: number }[] = [];
    let score = 0;
    let gameOver = false;
    let animationId: number;
    let paused = true;
    let started = false;

    // Asset helpers
    const drawFird = (x: number, y: number) => {
      if (assets?.bird) {
        ctx.drawImage(assets.bird, x, y, birdSize, birdSize);
      } else {
        ctx.fillStyle = "#fbbf24";
        ctx.beginPath();
        ctx.arc(x + birdSize / 2, y + birdSize / 2, birdSize / 2, 0, 2 * Math.PI);
        ctx.fill();
      }
    };
    const drawPipe = (x: number, top: number) => {
      if (assets?.pipe) {
        ctx.drawImage(assets.pipe, x, 0, pipeWidth, top);
        ctx.drawImage(assets.pipe, x, top + pipeGap, pipeWidth, height - (top + pipeGap));
      } else {
        ctx.fillStyle = "#22d3ee";
        ctx.fillRect(x, 0, pipeWidth, top);
        ctx.fillRect(x, top + pipeGap, pipeWidth, height - (top + pipeGap));
      }
    };
    const drawBackground = () => {
      if (assets?.background) {
        ctx.drawImage(assets.background, 0, 0, width, height);
      } else {
        ctx.fillStyle = "#bae6fd";
        ctx.fillRect(0, 0, width, height);
      }
    };

    // Add this helper inside useEffect, before draw()
    const drawWrappedText = (
      text: string,
      x: number,
      y: number,
      maxWidth: number,
      lineHeight: number
    ) => {
      const words = text.split(" ");
      let line = "";
      let offsetY = 0;

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          ctx.fillText(line, x, y + offsetY);
          line = words[n] + " ";
          offsetY += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, x, y + offsetY);
    };

    // Helper to generate a new pipe top with constraint
    // minTop: The minimum y position for the top of the gap (pipe opening)
    // maxTop: The maximum y position for the top of the gap (pipe opening)
    const minTop = 40; // Minimum gap starts 40px from the top
    const maxTop = height - pipeGap - 40; // Maximum gap starts 40px from the bottom

    const getConstrainedPipeTop = (prevTop: number | null) => {
      const maxDelta = 60; // maximum allowed change in top between pipes

      let newTop: number;
      if (prevTop === null) {
        // First pipe, random as before
        newTop = Math.random() * (maxTop - minTop) + minTop;
      } else {
        // Constrain the new top to be within maxDelta of prevTop
        const lower = Math.max(minTop, prevTop - maxDelta);
        const upper = Math.min(maxTop, prevTop + maxDelta);
        newTop = Math.random() * (upper - lower) + lower;
      }
      return newTop;
    };

    // Game logic
    const reset = () => {
      FirdY = height / 2;
      FirdV = 0;
      pipes = [];
      score = 0;
      gameOver = false;
      paused = true;
      started = false;
      let prevTop: number | null = null;
      for (let i = 0; i < 3; i++) {
        const top = getConstrainedPipeTop(prevTop);
        pipes.push({
          x: width + i * 180,
          top,
        });
        prevTop = top;
      }
      draw();
    };

    // Mouse move handler for initial paused state
    const handleMouseMove = (e: MouseEvent) => {
      if (paused && !started && canvas) {
        const rect = canvas.getBoundingClientRect();
        // Get mouse Y relative to canvas
        let mouseY = e.clientY - rect.top;
        // Clamp so the bird stays on screen
        mouseY = Math.max(0, Math.min(mouseY, height - birdSize));
        FirdY = mouseY;
        draw();
      }
    };

    const jumpFird = () => {
      if (paused && !gameOver) {
        paused = false;
        started = true;
        animationId = requestAnimationFrame(loop);
        return;
      }
      if (!gameOver) {
        FirdV = jump;
      } else {
        reset();
        // Immediately start the game after reset
        paused = false;
        started = true;
        animationId = requestAnimationFrame(loop);
      }
    };

    const update = () => {
      // Physics
      FirdV += gravity;
      FirdY += FirdV;

      // Pipes
      for (let i = 0; i < pipes.length; i++) {
        let pipe = pipes[i];
        pipe.x -= 2;
        // Recycle pipe
        if (pipe.x + pipeWidth < 0) {
          // Find the rightmost pipe
          const rightmostX = Math.max(...pipes.map(p => p.x));
          // Find the previous pipe's top (the rightmost one)
          const prevPipe = pipes.reduce((rightmost, p) =>
            p.x === rightmostX ? p : rightmost, pipes[0]);
          pipe.x = rightmostX + 180; // maintain spacing
          pipe.top = getConstrainedPipeTop(prevPipe.top);
          score++;
        }
      }

      // Collision
      for (let pipe of pipes) {
        if (
          40 < pipe.x + pipeWidth &&
          40 + birdSize > pipe.x &&
          (FirdY < pipe.top || FirdY + birdSize > pipe.top + pipeGap)
        ) {
          gameOver = true;
        }
      }
      if (FirdY < 0 || FirdY + birdSize > height) gameOver = true;
    };

    const draw = () => {
      drawBackground();
      pipes.forEach((pipe) => drawPipe(pipe.x, pipe.top));
      drawFird(40, FirdY);

      // Score
      ctx.fillStyle = "#0f172a";
      ctx.font = "bold 24px sans-serif";
      ctx.fillText(`Score: ${score}`, 10, 30);

      // Game Over
      if (gameOver) {
        ctx.fillStyle = "#ef4444";
        ctx.font = "bold 32px sans-serif";
        ctx.fillText("Game Over", 60, height / 2);
        ctx.font = "16px sans-serif";
        drawWrappedText(
          "Click or Space to Restart",
          60,
          height / 2 + 30,
          200, // max width
          20   // line height
        );
        paused = true;
      } else if (paused && !started) {
        ctx.fillStyle = "#0ea5e9";
        ctx.font = "bold 28px sans-serif";
        drawWrappedText(
          "Click or Space to Start",
          30,
          height / 2,
          260, // max width
          28   // line height
        );
      }
    };

    const loop = () => {
      if (!paused) {
        update();
        draw();
        if (!gameOver) {
          animationId = requestAnimationFrame(loop);
        }
      }
    };

    // Event listeners
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space") jumpFird();
    };
    const handleClick = () => jumpFird();

    // Start game
    reset();
    animationId = requestAnimationFrame(loop);
    window.addEventListener("keydown", handleKey);
    canvas.addEventListener("mousedown", handleClick);
    canvas.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKey);
      canvas.removeEventListener("mousedown", handleClick);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [assets]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <canvas
        ref={canvasRef}
        width={320}
        height={480}
        style={{
          borderRadius: 12,
          background: "#bae6fd",
          boxShadow: "0 2px 16px #0002",
          margin: "0 auto",
        }}
      />
    </div> 
  );
};