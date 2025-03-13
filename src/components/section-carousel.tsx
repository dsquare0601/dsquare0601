"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SectionCarouselProps {
  children: React.ReactNode[];
  setSection: (sectionId: string) => void;
  currentSection: string;
}

export function SectionCarousel({
  children,
  setSection,
  currentSection,
}: SectionCarouselProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionIndex = children.findIndex(
      (child) => (child as React.ReactElement).props.id === currentSection
    );
    if (sectionIndex !== -1 && sectionIndex !== activeSection) {
      goToSection(sectionIndex);
    }
  }, [currentSection]);

  const goToSection = (index: number) => {
    if (isTransitioning || index === activeSection) return;
    setIsTransitioning(true);
    setActiveSection(index);

    const sectionElement = children[index] as React.ReactElement;
    const sectionId = sectionElement.props.id;
    setSection(sectionId);

    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastScroll = 0;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = (e: WheelEvent) => {
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
      clearTimeout(scrollTimeout);
    };
  }, [activeSection, children.length, isTransitioning]);

  return (
    <div
      ref={containerRef}
      className="h-[calc(100vh-4rem)] relative overflow-hidden"
    >
      {children.map((child, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out",
            index === activeSection ? "z-10" : "z-0"
          )}
          style={{
            transform: `translateY(${(index - activeSection) * 100}%)`,
          }}
        >
          {child}
        </div>
      ))}

      {/* Navigation dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSection(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === activeSection
                ? "bg-primary h-4"
                : "bg-muted hover:bg-primary/50"
            )}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
