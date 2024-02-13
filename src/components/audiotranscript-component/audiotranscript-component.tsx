import React, { useEffect, useRef, useState } from 'react';
import './audiotranscript-component.css';

import audio from '../../assets/transcripttest_closer-nellie_mar.wav';

import AudioTranscriptDivComponent from './audiotranscript-div-component/audiotranscript-div-component';

const toTime = (seconds: number) => {
    return new Date(seconds * 1000).toISOString().substring(14, 19);
};

const transcript = {
    lines: [
        {
            line: "I'm dreaming in dreams",
            startTime: 0,
            endTime: 3,
        },
        {
            line: 'bigger than me',
            startTime: 3,
            endTime: 6,
        },
        {
            line: 'Taking my time',
            startTime: 6,
            endTime: 9,
        },
        {
            line: 'given to me',
            startTime: 9,
            endTime: 12,
        },
    ],
};
const AudioTranscriptComponent = () => {
    const playerRef = useRef<HTMLAudioElement>(null);
    const linesRef = useRef<HTMLDivElement>(null);
    const [transcriptState, setTranscriptState] = useState(true);

    useEffect(() => {
        const curr = playerRef.current;
        const currLines = linesRef.current;
        if (curr && currLines && transcriptState) {
            const onTimeUpdate = () => {
                const activeLine = transcript.lines.findIndex(line => {
                    return (
                        line.endTime >= curr.currentTime &&
                        line.startTime <= curr.currentTime
                    );
                });

                currLines.childNodes.forEach(child =>
                    (child as HTMLElement).classList.remove('active-line'),
                );

                const listElement = currLines.childNodes[
                    activeLine
                ] as HTMLElement;
                if (listElement) {
                    listElement.classList.add('active-line');
                }
            };
            curr.addEventListener('timeupdate', onTimeUpdate);
            return () => curr.removeEventListener('timeupdate', onTimeUpdate);
        }

        if (!transcriptState && currLines) {
            currLines.childNodes.forEach(child =>
                (child as HTMLElement).classList.remove('active-line'),
            );
        }
    }, [transcriptState]);

    return (
        <div className="audioTranscriptComponent__wrapper">
            <div className="audioTranscriptComponent__audio__wrapper">
                <audio controls ref={playerRef} src={audio} />
                <div className="audioTranscriptComponent__audio-button-wrapper">
                    <button
                        id="audioTranscriptComponent__toggleHighlight"
                        onClick={() => setTranscriptState(state => !state)}
                    >
                        Turn {transcriptState ? 'off' : 'on'} transcript
                        highlighting
                    </button>
                </div>
            </div>

            <div
                className="audioTranscriptComponent__transcript"
                ref={linesRef}
            >
                {transcript.lines.map(({ line, startTime }) => (
                    <AudioTranscriptDivComponent
                        timestamp={toTime(startTime)}
                        transcript={line}
                    />
                ))}
            </div>
        </div>
    );
};

export default AudioTranscriptComponent;
