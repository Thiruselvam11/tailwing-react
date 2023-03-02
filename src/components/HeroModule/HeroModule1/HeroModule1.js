import React from 'react'
import PropTypes from 'prop-types';

const HeroModule1 = (props) => {
    const {
        heading,
        description,
        imgSrc
    } = props
    return (
        <section>
            <div className='flex flex-row'>
                <div className='w-2/4 flex justify-center flex-col'>
                    <h1>Timeless and comfy</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='w-2/4 justify-center flex-col'>
                    <img src="https://syndicationv2.weaveroo.io/cai-01/en/maroon-studded-heels/1/image/1c38cfab-1810-464c-8d2a-95d2b08110fb.webp" />
                </div>
            </div>
        </section>
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