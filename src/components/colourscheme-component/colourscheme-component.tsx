import './colourscheme-component.css';

const ColourSchemeComponent = () => {
    return (
        <div className="colourSchemeComponent__wrapper">
            {
                // "Bad" Colours
            }
            <div>
                <h4 className="wrapperComponent__example__title">
                    ❌ Straining colour choices*:
                </h4>
                <div className="colourSchemeComponent__bad">
                    <div className="colourSchemeComponent__bad__inner">
                        <div
                            className="colourSchemeComponent__colour"
                            id="bad__colour1"
                        ></div>
                        <p>
                            <span className="colourSchemeComponent__colour__hash bold">
                                #
                            </span>
                            FFFFFF
                        </p>
                    </div>

                    <div className="colourSchemeComponent__bad__inner">
                        <div
                            className="colourSchemeComponent__colour"
                            id="bad__colour2"
                        ></div>
                        <p>
                            <span className="colourSchemeComponent__colour__hash bold">
                                #
                            </span>
                            ECB22E
                        </p>
                    </div>

                    <div className="colourSchemeComponent__bad__inner">
                        <div
                            className="colourSchemeComponent__colour"
                            id="bad__colour3"
                        ></div>
                        <p>
                            <span className="colourSchemeComponent__colour__hash bold">
                                #
                            </span>
                            E01E5A
                        </p>
                    </div>

                    <div className="colourSchemeComponent__bad__inner">
                        <div
                            className="colourSchemeComponent__colour"
                            id="bad__colour4"
                        ></div>
                        <p>
                            <span className="colourSchemeComponent__colour__hash bold">
                                #
                            </span>
                            36C5F0
                        </p>
                    </div>

                    <div className="colourSchemeComponent__bad__inner">
                        <div
                            className="colourSchemeComponent__colour"
                            id="bad__colour5"
                        ></div>
                        <p>
                            <span className="colourSchemeComponent__colour__hash bold">
                                #
                            </span>
                            4A154B
                        </p>
                    </div>
                </div>
            </div>

            {
                // "Good" Colours
            }
            <div>
                <h4 className="wrapperComponent__example__title">
                    ✔️ Lightweight, clear colour choices*:
                </h4>
                <div className="colourSchemeComponent__good">
                    <div className="colourSchemeComponent__good__inner">
                        <div
                            className="colourSchemeComponent__colour"
                            id="good__colour1"
                        ></div>
                        <p>
                            <span className="colourSchemeComponent__colour__hash bold">
                                #
                            </span>
                            F4EDE4
                        </p>
                    </div>

                    <div className="colourSchemeComponent__good__inner">
                        <div
                            className="colourSchemeComponent__colour"
                            id="good__colour2"
                        ></div>
                        <p>
                            <span className="colourSchemeComponent__colour__hash bold">
                                #
                            </span>
                            FED4BE
                        </p>
                    </div>

                    <div className="colourSchemeComponent__good__inner">
                        <div
                            className="colourSchemeComponent__colour"
                            id="good__colour3"
                        ></div>
                        <p>
                            <span className="colourSchemeComponent__colour__hash bold">
                                #
                            </span>
                            C05B8C
                        </p>
                    </div>

                    <div className="colourSchemeComponent__good__inner">
                        <div
                            className="colourSchemeComponent__colour"
                            id="good__colour4"
                        ></div>
                        <p>
                            <span className="colourSchemeComponent__colour__hash bold bold">
                                #
                            </span>
                            78D7DD
                        </p>
                    </div>

                    <div className="colourSchemeComponent__good__inner">
                        <div
                            className="colourSchemeComponent__colour"
                            id="good__colour5"
                        ></div>
                        <p>
                            <span className="colourSchemeComponent__colour__hash bold bold">
                                #
                            </span>
                            7C2852
                        </p>
                    </div>
                </div>
            </div>

            <cite>
                <span className="bold">*</span> Both colour schemes were taken
                from the{' '}
                <a href="https://brand.slackhq.com/color">
                    Slack Branding Guidelines
                </a>
                .
            </cite>
        </div>
    );
};

export default ColourSchemeComponent;
