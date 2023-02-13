import React from 'react';
import './slide.css';

const Slide = () => {
    const colors = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJ5-Wv8ObDeAAq0vOS63rYcWGeDwCI-9-ow&usqp=CAU", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteiWOtcKdaDmX4XYaxyBqtSpAHoyHCillYQ&usqp=CAU", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-reK8l-UQknuNBw5qJmn2FgVAuyo9Fsu5bw&usqp=CAU"];
    const delay = 2500;

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((val, index) => (
                    <div
                        className="slide"
                        key={index}
                    >
                        <img className='innerimg' src={val} alt='img'/>
                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slide
