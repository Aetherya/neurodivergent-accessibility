import React from 'react';
import './toneindicator-component.css';
import avatar from '../../assets/icon_avatar.png';
import img_upload from '../../assets/icon_gallery.png';
import emoji_picker from '../../assets/icon_emojis.png';
import scheduler from '../../assets/icon_schedule.png';

import emoji_gen from '../../assets/emoji_happy.png';
import emoji_sarcasm from '../../assets/emoji_unamused.png';
import emoji_misc from '../../assets/emoji_misc.png';
import TooltipComponent from '../tooltip-component/tooltip-component';

const ToneIndicatorComponent = () => {
    return (
        <div className="toneIndicatorComponent__wrapper">
            <div className="toneIndicatorComponent__body">
                <img
                    src={avatar}
                    className="toneIndicatorComponent__avatar non-interactive"
                    alt="Placeholder for a Social Media Avatar"
                />
                <p className="non-interactive">Content Placeholder...</p>
            </div>

            <div>
                <div className="toneIndicatorComponent__suggestions">
                    <TooltipComponent tooltip_description="My post is meant to be genuine, lighthearted or happy">
                        <div className="toneIndicatorComponent__suggestion">
                            <img src={emoji_gen} alt="A laughing emoji" />
                            <span>happy</span>
                        </div>
                    </TooltipComponent>

                    <TooltipComponent tooltip_description="My post is meant to be sarcastic or cynical">
                        <div className="toneIndicatorComponent__suggestion">
                            <img src={emoji_sarcasm} alt="An annoyed emoji" />
                            <span>sarcastic</span>
                        </div>
                    </TooltipComponent>

                    <TooltipComponent tooltip_description="Add a different tone indicator!">
                        <div className="toneIndicatorComponent__suggestion">
                            <img
                                src={emoji_misc}
                                alt="Two emojis, suggesting multiple options and moods"
                            />
                            <span className="bold">...</span>
                        </div>
                    </TooltipComponent>
                </div>

                <hr />

                <div className="toneIndicatorComponent__footer">
                    <div className="toneIndicatorComponent__footer__left">
                        <img
                            src={img_upload}
                            className="non-interactive"
                            alt="A placeholder for a gallery button, often found in social media post-designs"
                        />
                        <img
                            src={emoji_picker}
                            className="non-interactive"
                            alt="A placeholder for an emoji picker, often found in social media post-designs"
                        />
                        <img
                            src={scheduler}
                            className="non-interactive"
                            alt="A placeholder for a scheduling option, often found in social media post-designs"
                        />
                    </div>

                    <div className="toneIndicatorComponent__footer__right non-interactive">
                        <p>Publish</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToneIndicatorComponent;
