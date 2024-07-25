import Lottie from 'react-lottie';
import * as animationData from '../assets/car Loading.json'
import { useEffect, useState } from "react";


const Loading = (props) => {


    // useEffect(() => {
    //     const hasPlayedVideo = sessionStorage.getItem('hasPlayedVideo');
    //     if (window.location.pathname === "/" && !hasPlayedVideo) {
    //         props.setStart(true);
    //     } else {
    //         props.setStart(false);
    //     }
    // }, []);

    useEffect(() => {
        if (props.start) {
            const timer = setTimeout(() => {
                if (props.setStart) {
                    props.setStart(false); // If you have a prop to manage the start state outside
                }
            }, 6000);

            // Cleanup the timer if the component unmounts before the timer completes
            return () => clearTimeout(timer);
        }
    }, [props.start, props]);


    return (
        <>
            <div className={`loading ${props.start ? '' : 'stop'}`}>
                <video
                    muted={true}
                    loop={true}
                    playsInline={true}
                    autoPlay={true}
                    preload="auto"
                    data-stop="true"
                >
                    <source src="/images/OS Loading.mp4" type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default Loading


// <Lottie
//                         options={defaultOptions}
//                         height={300}
//                         width={300}
//                         isStopped={isStopped}
//                         isPaused={isPaused}
//                     />