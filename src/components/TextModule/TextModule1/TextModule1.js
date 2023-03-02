import React from 'react'
import PropTypes from 'prop-types';


const TextModule1 = (props) => {
    const {
        heading,
        description
    } = props
    return (
        <div>
            <div className="w-full h-full bg-[#FDD3B3] px-10 py-5 flex flex-col">
                <h1 className="text-3xl font-bold text-gray-600 text-center">{heading}</h1>
                <p className="text-black content-start items-center text-center py-2">{description}</p>
            </div>
        </div>
    )
}

TextModule1.prototype = {
    heading: PropTypes.string,
    description: PropTypes.string
};
TextModule1.defaultProps = {
    heading:"Perfect Fit",
    description:"Bring out your festive personality with poise and maximise comfort by 'opting for a size larger than usual for wider feet.' Mix comfort and style with ease with the Maroon Studded Heels."
}

export default TextModule1