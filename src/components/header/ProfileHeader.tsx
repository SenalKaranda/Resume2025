import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from '../ThemeToggle';
import React, { useRef, useState, useEffect } from "react";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { resumeData } from '@/data/resumeData';
import { BlappyFirdGame } from '../BlappyFird';

export function ProfileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-6">
      <div className="flex items-center gap-4">
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogTrigger asChild>
            <button>
              <Avatar className="h-20 w-20 border-2 border-primary/10">
                <AvatarImage src={`${import.meta.env.BASE_URL}studying.png`} alt="Profile" />
                <AvatarFallback>SK</AvatarFallback>
              </Avatar>
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Blappy Fird</AlertDialogTitle>
              <AlertDialogDescription>
                <BlappyFirdGame />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setIsOpen(false)}>
                  Close
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <div>
          <h1 className="text-2xl font-bold">{resumeData.name}</h1>
          <p className="text-muted-foreground">{resumeData.title}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="secondary">Available for Work</Badge>
            <Badge variant="outline">Remote / Hybrid</Badge>
            <Badge variant="destructive">Virginia, USA</Badge>
          </div>
        </div>
      </div>
      <div className="flex gap-2 w-full md:w-auto justify-between md:justify-end">
        <ThemeToggle />
      </div>
    </div>
  );
}

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val));
}

export function SecretCube() {
  const [rotation, setRotation] = useState({ x: 30, y: 30 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  const animationRef = useRef<number>();
  const velocityRef = useRef(velocity);
  // Controls how much velocity is retained each frame (closer to 1 = more retention, less friction)
  const velocityDamping = 0.985;

  useEffect(() => {
    velocityRef.current = velocity;
  }, [velocity]);

  // Handle drag
  useEffect(() => {
    if (!dragging) return;

    const onMouseMove = (e: MouseEvent) => {
      if (!lastPos.current) return;
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      setRotation((r) => ({
        x: clamp(r.x - dy * 0.7, -90, 90),
        y: r.y + dx * 0.7,
      }));
      setVelocity({ x: dy * 0.2, y: dx * 0.2 });
      lastPos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      setDragging(false);
      lastPos.current = null;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [dragging]);

  // Inertia animation
  useEffect(() => {
    if (dragging) return;
    let running = true;
    const animate = () => {
      setRotation((r) => ({
        x: clamp(r.x + velocityRef.current.x, -90, 90),
        y: r.y + velocityRef.current.y,
      }));
      velocityRef.current = {
        x: Math.abs(velocityRef.current.x) < 0.01 ? 0 : velocityRef.current.x * velocityDamping,
        y: Math.abs(velocityRef.current.y) < 0.01 ? 0 : velocityRef.current.y * velocityDamping,
      };
      setVelocity(velocityRef.current);
      if (
        (Math.abs(velocityRef.current.x) > 0.01 ||
          Math.abs(velocityRef.current.y) > 0.01) &&
        running
      ) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      running = false;
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [dragging]);

  // Cube faces
  const faceStyle =
    "absolute w-20 h-20 flex items-center justify-center text-white text-lg font-bold bg-gradient-to-br from-zinc-300/80 to-zinc-500/80 border border-white/20";
  return (
    <div
      className="flex justify-center items-center min-h-[200px] aspect-square select-none"
      style={{ perspective: "600px" }}
    >
      <div
        className="relative w-20 h-20"
        style={{
          transformStyle: "preserve-3d",
          cursor: dragging ? "grabbing" : "grab",
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: dragging ? "none" : "box-shadow 0.2s",
          boxShadow: dragging
            ? "0 0 0 2px #818cf8"
            : "0 2px 16px 0 rgba(0,0,0,0.2)",
        }}
        onMouseDown={(e) => {
          setDragging(true);
          lastPos.current = { x: e.clientX, y: e.clientY };
        }}
      >
        {/* Front */}
        <div className={faceStyle} style={{ transform: "rotateY(0deg) translateZ(40px)" }} />
        {/* Back */}
        <div className={faceStyle} style={{ transform: "rotateY(180deg) translateZ(40px)" }} />
        {/* Right */}
        <div className={faceStyle} style={{ transform: "rotateY(90deg) translateZ(40px)" }} />
        {/* Left */}
        <div className={faceStyle} style={{ transform: "rotateY(-90deg) translateZ(40px)" }} />
        {/* Top */}
        <div className={faceStyle} style={{ transform: "rotateX(90deg) translateZ(40px)" }} />
        {/* Bottom */}
        <div className={faceStyle} style={{ transform: "rotateX(-90deg) translateZ(40px)" }} />
      </div>
    </div>
  );
}
