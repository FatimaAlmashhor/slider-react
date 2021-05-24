import React, { useState } from 'react'
import MusicCard from './MusicCard';
import { musics } from '../Data'
const SliderList = () => {
    const [current, setcurrent] = useState(0)
    const [direction, setdirection] = useState(0)

    const wrapperTransform = {
        'transform': `translateX(-${current * (100 / musics.length)}%)`
    }
    const bgImg = {
        'opacity': '0.7',
        '-webkit-transform': 'perspective(1000px) translate3d(0px, 0px, 0px) rotate3d(1, 1, 1, 0deg)',
        'transform': 'perspective(1000px) translate3d(0px, 0px, 0px) rotate3d(1, 1, 1, 0deg)',
        'backgroundImage': `url(${musics[current].src})`
    }
    const handleCurrentChanging = (newCurrent) => {
        setcurrent(newCurrent)
    }
    return (
        <div className='music-list'>
            {/* <img className='music-list__bg-img' src={musics[current].src} alt='bg' /> */}
            {/* <img className=' music-list__bg-img tilt__front' src={musics[current].src} alt='s' /> */}
            <img className=' music-list__bg-img tilt__back' src={musics[current].src} alt='s' />
            <div className='music-list-all' style={wrapperTransform}>
                {musics.map(element =>
                    <MusicCard
                        current={current}
                        key={element.id}
                        index={element.id}
                        src={element.src}
                        onClick={handleCurrentChanging}
                    />
                )}
            </div>
        </div>
    )
}

export default SliderList
