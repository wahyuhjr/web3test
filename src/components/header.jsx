"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GalleryComponent = () => {
    const cardsRef = useRef([]);
    const galleryRef = useRef(null);
    let iteration = 0;

    useEffect(() => {
        const cards = cardsRef.current;
        const spacing = 0.1;
        const snap = gsap.utils.snap(spacing);
        const seamlessLoop = buildSeamlessLoop(cards, spacing);

        const scrub = gsap.to(seamlessLoop, {
            totalTime: 0,
            duration: 0.5,
            ease: "power3",
            paused: true
        });

        const trigger = ScrollTrigger.create({
            start: 0,
            onUpdate(self) {
                if (self.progress === 1 && self.direction > 0 && !self.wrapping) {
                    wrapForward(self);
                } else if (self.progress < 1e-5 && self.direction < 0 && !self.wrapping) {
                    wrapBackward(self);
                } else {
                    scrub.vars.totalTime = snap((iteration + self.progress) * seamlessLoop.duration());
                    scrub.invalidate().restart();
                    self.wrapping = false;
                }
            },
            end: "+=3000",
            pin: galleryRef.current
        });

        function wrapForward(trigger) {
            iteration++;
            trigger.wrapping = true;
            trigger.scroll(trigger.start + 1);
        }

        function wrapBackward(trigger) {
            iteration--;
            if (iteration < 0) {
                iteration = 9;
                seamlessLoop.totalTime(seamlessLoop.totalTime() + seamlessLoop.duration() * 10);
                scrub.pause();
            }
            trigger.wrapping = true;
            trigger.scroll(trigger.end - 1);
        }

        document.querySelector(".next").addEventListener("click", () => scrubTo(scrub.vars.totalTime + spacing));
        document.querySelector(".prev").addEventListener("click", () => scrubTo(scrub.vars.totalTime - spacing));

        return () => {
            trigger.kill();
            scrub.kill();
        };
    }, []);

    function buildSeamlessLoop(items, spacing) {
        // Implementation remains the same as provided
    }

    return (
        <div ref={galleryRef} className="gallery">
            <ul className="cards">
                {[...Array(10)].map((_, i) => (
                    <li key={i} ref={el => cardsRef.current[i] = el}>Card {i + 1}</li>
                ))}
            </ul>
            <button className="prev">Previous</button>
            <button className="next">Next</button>
        </div>
    );
};

export default GalleryComponent;