import React from 'react';
import './audiotranscript-div-component.css';
import { ATDivComponentProps } from './audiotranscript-div-component.props';

const AudioTranscriptDivComponent = ({
    timestamp,
    transcript,
}: ATDivComponentProps) => {
    return (
        <div className="audioTranscriptDivComponent__wrapper">
            <p className="" id={timestamp}>
                {timestamp}
            </p>
            <p>{transcript}</p>
        </div>
    );
};

export default AudioTranscriptDivComponent;
