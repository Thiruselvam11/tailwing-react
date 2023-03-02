import React from 'react'
import PropTypes from 'prop-types';


const TextModule1 = (props) => {
    const {
        heading,
        description
    } = props
    return (
        <div>
            <div className="weaverz-ai-w-12/12 weaverz-ai-bg-[#FDD3B3] weaverz-ai-px-10 weaverz-ai-py-5 weaverz-ai-flex weaverz-ai-flex-col">
                <h1 className="weaverz-ai-text-3xl weaverz-ai-font-bold weaverz-ai-text-gray-600 weaverz-ai-text-center">{heading}</h1>
                <p className="weaverz-ai-text-black weaverz-ai-content-start weaverz-ai-items-center weaverz-ai-text-center py-2">{description}</p>
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