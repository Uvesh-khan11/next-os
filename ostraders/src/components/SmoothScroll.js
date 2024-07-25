'use client'
import Scrollbar from 'smooth-scrollbar';
import { useEffect } from 'react';
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
//   const overscrollOptions = {
//     enable: true,
//     effect: 'glow',
//     damping: 0.1,
//     maxOverscroll: 200,
//     glowColor: '#222a2d',
//   };


const options = {
    damping: 0.07,
}

const Scroll = (props) => {

    useEffect(() => {

        let bodyScrollBar = Scrollbar.init(document.querySelector(".smoothContainer"), options);
        ScrollTrigger.scrollerProxy(document.querySelector(".smoothContainer"), {
            scrollTop(value) {
                if (arguments.length) {
                    bodyScrollBar.scrollTop = value;
                }
                return bodyScrollBar.scrollTop;
            }
        });
        bodyScrollBar.addListener(ScrollTrigger.update);


        // This part is only necessary if you're using ScrollTrigger's markers:
        if (document.querySelector('.gsap-marker-scroller-start')) {
            const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
            bodyScrollBar.addListener(({ offset }) => gsap.set(markers, { marginTop: -offset.y }));
        }
        // End section necessary only if you're using ScrollTrigger's marker

    }, [])



    return null;
}

export default Scroll;