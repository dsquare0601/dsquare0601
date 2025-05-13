"use client";

import React, { useEffect, useRef, useState, TouchEvent } from "react";
import { cn } from "@/lib/utils";

interface SectionCarouselProps {
  children: React.ReactNode[];
  setSection: (section: string) => void;
  currentSection: string;
  isScrollLocked?: boolean;
}

export function SectionCarousel({
  children,
  setSection,
  currentSection,
  isScrollLocked,
}: SectionCarouselProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);
  const [touchStartTime, setTouchStartTime] = useState<number>(0);
  const [touchMovePosition, setTouchMovePosition] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 80;
  const minSwipeVelocity = 0.5; // pixels per millisecond

  useEffect(() => {
    const sectionIndex = children.findIndex((child: any) => {
      if (React.isValidElement<{ id: string }>(child)) {
        return child.props.id === currentSection;
      }
    });
    if (sectionIndex !== -1 && sectionIndex !== activeSection) {
      goToSection(sectionIndex);
    }
  }, [currentSection]);

  const goToSection = (index: number) => {
    if (isTransitioning || index === activeSection) return;
    setIsTransitioning(true);
    setActiveSection(index);

    const sectionElement = children[index] as React.ReactElement<{
      id: string;
    }>;
    const sectionId = sectionElement.props.id;
    setSection(sectionId);

    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastScroll = 0;

    const handleScroll = (e: WheelEvent) => {
      if (isScrollLocked) return;

      e.preventDefault();

      if (isTransitioning) return;

      const now = Date.now();
      if (now - lastScroll < 500) return;
      lastScroll = now;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = activeSection + direction;

      if (nextSection >= 0 && nextSection < children.length) {
        goToSection(nextSection);
      }
    };

    container.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, [activeSection, children.length, isTransitioning, isScrollLocked]);

  const handleTouchStart = (e: TouchEvent) => {
    e.preventDefault();
    setTouchStart(e.targetTouches[0].clientY);
    setTouchStartTime(Date.now());
    setTouchMovePosition(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    setTouchEnd(e.targetTouches[0].clientY);
    setTouchMovePosition(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (isScrollLocked || isTransitioning) return;

    const swipeDistance = touchStart - touchEnd;
    const swipeTime = Date.now() - touchStartTime;
    const velocity = Math.abs(swipeDistance) / swipeTime;

    if (
      Math.abs(swipeDistance) > minSwipeDistance ||
      velocity > minSwipeVelocity
    ) {
      const direction = swipeDistance > 0 ? "up" : "down";
      const currentIndex = children.findIndex(
        (child) => (child as any).props.id === currentSection,
      );

      setIsTransitioning(true);
      if (direction === "up" && currentIndex < children.length - 1) {
        goToSection(currentIndex + 1);
      } else if (direction === "down" && currentIndex > 0) {
        goToSection(currentIndex - 1);
      }

      setTimeout(() => setIsTransitioning(false), 800);
    }

    setTouchStart(0);
    setTouchEnd(0);
    setTouchStartTime(0);
    setTouchMovePosition(0);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[calc(100vh-4rem)] touch-none overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children.map((child, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 h-full w-full transition-transform duration-800 ease-out will-change-transform",
            index === activeSection ? "z-10" : "z-0",
          )}
          style={{
            transform: `translateY(${(index - activeSection) * 100}%)`,
          }}
        >
          {child}
        </div>
      ))}

      {/* Navigation dots */}
      <div className="fixed top-1/2 right-6 z-50 flex -translate-y-1/2 flex-col gap-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSection(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300",
              index === activeSection
                ? "bg-primary h-4"
                : "bg-muted hover:bg-primary/50",
            )}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
