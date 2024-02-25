"use client"
import React, { useEffect } from 'react'
import "./page.css";


export default function Trail() {
    const splitted = "The Nissan Skyline GT-R is a sports car based on the Nissan Skyline range. The first cars named Skyline GT-R were produced between 1969 and 1972 under the model code KPGC10, and enjoyed legendary success in local Japanese touring car racing. This model was followed by a brief production run of second-generation cars, under model code KPGC110, in 1973. After a 16-year hiatus, the GT-R name was revived in 1989 as the BNR32 (R32) Skyline GT-R. This model GT-R proceeded to win the Japanese JTCC Group A series championship four years in a row. The R32 GT-R also had success in the Australian Touring Car Championship helping the R32 Skyline GT-R to victory in 1990 and 1991, until a regulation change excluded the GT-R in 1992. The formidable technology and performance of the R32 GT-R prompted the Australian motoring publication Wheels to nickname the GT-R Godzilla in its July 1989 edition.".split(
        " "
    );

    useEffect(() => {
        if (typeof window === "undefined") return
        const targets = document.querySelectorAll(".target");
        function transitionIt(el: HTMLElement) {
            el.style.transition = "all 0.3s";
            el.style.transform =
                "scaleX(1.1)  skewX(-10deg)";
            el.style.color = "#2c72e3";
        }
        function transitionEndIt(el: HTMLElement) {
            el.style.transition = "all 1.5s";
            el.style.transform = "scaleX(1)  skewX(0deg)";
            el.style.color = "#fff";
        }

        targets.forEach((target) => {
            const el = target as HTMLElement;
            el.addEventListener('mouseenter', () => transitionIt(el))
            el.addEventListener("transitionend", () => transitionEndIt(el));
        })


        return () => {
            targets.forEach((target) => {
                const el = target as HTMLElement;
                el.removeEventListener('mouseenter', () => transitionIt(el))
                el.removeEventListener("transitionend", () => transitionEndIt(el));
            })
        }

    }, [])

    return (
        <div className="container">
            <div className="inner">
                {splitted.map((word, index) => (
                    <span
                        key={index}
                        className={"target"}
                    >
                        {word}&nbsp;&nbsp;
                    </span>
                ))}
            </div>
        </div>
    );
}
