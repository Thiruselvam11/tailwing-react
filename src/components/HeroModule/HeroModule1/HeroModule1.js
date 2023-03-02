import React from 'react'
import PropTypes from 'prop-types';

const HeroModule1 = (props) => {
    const {
        heading,
        description,
        imgSrc
    } = props
    return (
            <div class='w-full h-full flex flex-col-reverse bg-[#e9e9e9] md:flex-row justify-center'>
                <div class='w-full flex justify-center flex-col px-3 py-2 self-center flex-wrap sm:w-full md:w-2/4'>
                    <h1 class="w-full font-bold text-left py-5">Timeless and comfy</h1>
                    <p class="w-full text-left font-normal"> A symphony of beautiful earthy shades with an open toe,
                        Maroon Studded Heels made of PU leather are sustainable, super comfortable and super stylish.</p>
                </div>
                <div class='w-full bg-black justify-center flex-col sm:w-full md:w-2/4'>
                    <img src="https://syndicationv2.weaveroo.io/cai-01/en/maroon-studded-heels/1/image/1c38cfab-1810-464c-8d2a-95d2b08110fb.webp" />
                </div>
            </div>


        // <div className='w-full bg-white py-16 px-4'>
        //     <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        //         <img className='w-[500px] mx-auto my-4' src={imgSrc} alt='/' />
        //         <div className='flex flex-col justify-center'>
        //             <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>{heading}</h1>
        //             <p>
        //                 {description}
        //             </p>

        //         </div>
        //     </div>
        // </div>
    )
}

export default HeroModule1