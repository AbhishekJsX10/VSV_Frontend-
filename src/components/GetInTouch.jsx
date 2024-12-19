import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Touch.css";

gsap.registerPlugin(ScrollTrigger);

const GetInTouch = () => {
    const textAreaRef = useRef(null);
    const twoSectionRef = useRef(null);
    const spotlightRef = useRef(null);

    function getDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
        
        // Create and setup spotlight
        const spotlight = document.createElement('div');
        spotlight.classList.add('spotlight');
        spotlight.style.pointerEvents = 'none';
        document.body.appendChild(spotlight);
        spotlightRef.current = spotlight;

        const textArea = textAreaRef.current;
        const chars = textArea.querySelectorAll('.char');
        const twoSection = twoSectionRef.current;

        // Set initial state
        chars.forEach(char => {
            char.style.color = '#000000';
            char.style.transition = 'color 0.3s ease';
        });

        function updateCharsVisibility(scrollProgress) {
            if (!twoSection || !textArea) return;
            
            const sectionRect = twoSection.getBoundingClientRect();
            const spotlightX = sectionRect.left + (sectionRect.width * scrollProgress);
            const spotlightY = sectionRect.top + sectionRect.height / 2;

            spotlight.style.left = `${spotlightX}px`;
            spotlight.style.top = `${spotlightY}px`;

            // Simplified movement for mobile
            if (!isMobile) {
                const scale = 1 + (scrollProgress * 0.2);
                const moveY = scrollProgress * 50;
                textArea.style.transform = `translateY(${moveY}px) scale(${scale})`;
            }

            chars.forEach(char => {
                const rect = char.getBoundingClientRect();
                const charX = rect.left + rect.width / 2;
                const charY = rect.top + rect.height / 2;
                
                const maxDistance = isMobile ? 80 : 150;
                const distance = getDistance(spotlightX, spotlightY, charX, charY);
                
                const progress = Math.max(0, 1 - (distance / maxDistance));
                const colorValue = Math.round(progress * 255);
                char.style.color = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
            });
        }

        // Create ScrollTrigger
        const st = ScrollTrigger.create({
            trigger: twoSection,
            start: isMobile ? 'top 70%' : 'top center',
            end: isMobile ? 'bottom 30%' : 'bottom center',
            scrub: true,
            markers: false,
            onUpdate: (self) => {
                requestAnimationFrame(() => {
                    updateCharsVisibility(self.progress);
                });
            }
        });

        // Force initial update
        setTimeout(() => {
            ScrollTrigger.refresh();
            updateCharsVisibility(0);
        }, 100);

        // Handle window resize
        const handleResize = () => {
            const newIsMobile = window.innerWidth <= 768;
            if (newIsMobile !== isMobile) {
                window.location.reload();
            }
            ScrollTrigger.refresh();
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            st.kill();
            if (spotlight && spotlight.parentNode) {
                spotlight.parentNode.removeChild(spotlight);
            }
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div 
            ref={twoSectionRef} 
            className="two flex justify-center mt-[-1rem] sm:mt-[-3rem] md:mt-4 items-center min-h-[60vh] h-[90vh] md:h-[100vh] z-0 relative bg-transparent"
            data-scroll-section
        >
            <div 
                ref={textAreaRef} 
                className="text-area text-[2.5rem] sm:text-[3rem] md:text-[6rem] font-bold text-[#E6E6E6] text-center mx-auto tracking-tighter"
                style={{ willChange: 'transform' }}
            >
                <span className="char">G</span><span className="char">e</span><span className="char">t</span>
                <span className="char">&nbsp;</span>
                <span className="char">I</span><span className="char">n</span>
                <span className="char">&nbsp;</span>
                <span className="char">T</span><span className="char">o</span><span className="char">u</span><span className="char">c</span><span className="char">h</span>
            </div>
        </div>
    );
};

export default GetInTouch;