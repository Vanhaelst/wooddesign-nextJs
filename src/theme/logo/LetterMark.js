import React from 'react';

const LetterMark = ({ fill, height, width }) => (
    <svg viewBox="0 0 163 104" xmlns="http://www.w3.org/2000/svg" height={height} width={width} >
        <polygon
            fill={fill}
            points="153.96 5.36 135.05 53.16 109.61 0 63.44 22.4 81.93 62.28 99.93 101.21 125.37 101.21 162.05 8.51"
        />
        <polygon
            fill={fill}
            points="87.08 14.06 71.61 53.16 46.16 0 0 22.39 18.49 62.27 36.49 101.2 61.93 101.2 98.61 8.5"
        />
    </svg>
)

export default LetterMark;