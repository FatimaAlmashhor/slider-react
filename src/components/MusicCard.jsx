import React, { useEffect, useState, useRef } from 'react'
import './componenets.css'
const MusicCard = (props) => {
    const { index, current, src, onClick } = props;
    const [active, setactive] = useState("");
    const slide = useRef();

    useEffect(() => {
        if (current === index)
            setactive('slide--current')
        else
            setactive("")
    }, [current, index]);

    const handleClickingOnCard = () => {
        if (current < index) {
            onClick(current + (index - current))
        }
        if (current > index) {
            onClick(current - (current - index))
        }
    }
    const handleMouseMove = (e) => {
        const element = slide.current;
        const r = element.getBoundingClientRect();

        element.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)));
        element.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)));
    }
    const handleMouseLeave = () => {
        slide.current.style.setProperty('--x', 0)
        slide.current.style.setProperty('--y', 0)
    }
    return (
        <div
            ref={slide}
            className={`music-card ${active}`}
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={(e) => handleMouseLeave()}
            onClick={() => handleClickingOnCard()}>
            <div className='slide__image-wrapper' >
                <img className='slide__image' src={src} alt="music" />
            </div>
            <div className='slide__play-btn'>
                Listen
            </div>
            <div className='slide__content'>
                <h3>Song name</h3>
                <small>ِArtist name</small>
            </div>
        </div>
    )
}

export default MusicCard
