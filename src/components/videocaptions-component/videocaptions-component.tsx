import React, { useState } from 'react';
import './videocaptions-component.css';
import avatar from '../../assets/icon_avatar.png';
import Draggable from 'react-draggable'; // Both at the same time

import indicator_play from '../../assets/indicator_play.png';
import indicator_volume from '../../assets/indicator_volume.png';
import indicator_captions from '../../assets/indicator_captions.png';
import indicator_settings from '../../assets/indicator_settings.png';
import indicator_fullscreen from '../../assets/indicator_fullscreen.png';
import TooltipComponent from '../tooltip-component/tooltip-component';

const VideoCaptionsComponent = () => {
    const [showCaptions, setShowCaptions] = useState(true);
    return (
        <div className="videoCaptionsComponent__video">
            {showCaptions ? (
                <Draggable bounds="parent">
                    <div className="videoCaptionsComponent__video__captions">
                        This is what customizable <br />
                        captions will look like.
                    </div>
                </Draggable>
            ) : null}

            <div className="videoCaptionsComponent__video__top">
                <img
                    src={avatar}
                    className="videoCaptionsComponent__avatar non-interactive"
                    alt="Placeholder for a Social Media Avatar"
                />
                <p className="non-interactive">Video Title</p>
            </div>

            <div className="videoCaptionsComponent__video__bottomwrapper">
                <hr className="non-interactive" />

                <div className="videoCaptionsComponent__video__bottom">
                    <div className="videoCaptionsComponent__video__bottomleft">
                        <img
                            src={indicator_play}
                            className="videoCaptionsComponent__icons non-interactive"
                            alt="A Placeholder for a Play Button, often found in a Video Player"
                        />

                        <img
                            src={indicator_volume}
                            className="videoCaptionsComponent__icons non-interactive"
                            alt="A Placeholder for a Volume Button, often found in a Video Player"
                        />
                    </div>

                    <div className="videoCaptionsComponent__video__bottomright">
                        <TooltipComponent
                            tooltip_description={`Turn ${
                                showCaptions ? 'off' : 'on'
                            } captions`}
                        >
                            <button
                                className="videoCaptionComponent__caption-button"
                                aria-label="toggle-captions"
                                onClick={() => setShowCaptions(state => !state)}
                            >
                                <img
                                    src={indicator_captions}
                                    className="videoCaptionsComponent__icons indicator-captions"
                                    alt="A Placeholder for a Closed Caption Button, often found in a Video Player"
                                />
                            </button>
                        </TooltipComponent>

                        <img
                            src={indicator_settings}
                            className="videoCaptionsComponent__icons non-interactive"
                            alt="A Placeholder for a Settings Button, often found in a Video Player"
                        />

                        <img
                            src={indicator_fullscreen}
                            className="videoCaptionsComponent__icons non-interactive"
                            alt="A Placeholder for a Fullscreen Button, often found in a Video Player"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCaptionsComponent;
