'use client'
import React, { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';

const ScrollToTop = () => {

    useEffect(() => {

        const scrollbar = Scrollbar.get(document.querySelector('.smoothContainer'));


        const progressPath = document.querySelector('.progress-wrap path');
        const pathLength = progressPath.getTotalLength();
        progressPath.style.transition = 'none';
        progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = 'stroke-dashoffset 10ms linear';

       
        const updateProgress = () => {
            const scroll = scrollbar.scrollTop;
            const height = scrollbar.limit.y;
            const progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        };

        updateProgress();
        scrollbar.addListener(updateProgress);

        const offset = 50;
        const duration = 550;
        const scrollButton = document.querySelector('.progress-wrap');

        scrollbar.addListener(() => {
            if (scrollbar.scrollTop > offset) {
                scrollButton.classList.add('active-progress');
            } else {
                scrollButton.classList.remove('active-progress');
            }
        });

        return () => {
            scrollbar.removeListener(updateProgress);
            scrollbar.removeListener(() => {
                if (window.scrollY > offset) {
                    scrollButton.classList.add('active-progress');
                } else {
                    scrollButton.classList.remove('active-progress');
                }
            });
        };
    }, []);

    // Scroll to top when button is clicked
    const scrollToTop = () => {
        const scrollbar = Scrollbar.get(document.querySelector('.smoothContainer'));
        scrollbar.scrollTo(0, 0, 300);
    };

    return (
        <div className="progress-wrap" onClick={scrollToTop}>
            <i className=' fa-solid fa-arrow-up'></i>
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
        </div>
    );
};

export default ScrollToTop;
