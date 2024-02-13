import React from 'react';
import './further-research.css';

import banner from '../../assets/banner4.png';

import dyslexiefont from '../../assets/dyslexiefont__example.jpg';
import opendyslexia from '../../assets/opendyslexic__example.jpg';
import bionic_reading from '../../assets/bionic_reading__example.png';

import Footer from '../../components/footer-component/footer-component';
import Navigation from '../../components/navigation/navigation';
import SummaryComponent from '../../components/summary-component/summary-component';
import SourceLinkComponent from '../../components/source-link-component/source-link-component';

function FurtherResearch() {
    return (
        <main>
            <Navigation
                links={[
                    {
                        link: '/',
                        text: 'Home',
                    },
                    {
                        link: '/goals',
                        text: 'Goals',
                    },
                    {
                        link: '/further-research',
                        text: 'Further Research',
                    },
                    {
                        link: '/components',
                        text: 'Component Library',
                    },
                ]}
            />

            <img
                src={banner}
                className="banner"
                alt="Two young adults sitting on a bench outside looking at a laptop"
            />

            <div className="content_wrap__outer">
                <div className="content content_wrap__inner">
                    <div>
                        <h1>Further Research</h1>
                        <SummaryComponent time={9}>
                            <p>
                                Some companies and individuals offer services
                                and tools that are meant to make accessible
                                web-development easier and quicker. However,
                                this page looks at the shortcomings of such
                                methods, focusing on fonts and Plugins that are
                                marketed as accessible solutions for
                                neurodivergent users.
                            </p>
                        </SummaryComponent>

                        <br />

                        <div>
                            <h2>Accessible Fonts</h2>
                            <hr className="header_divider" />
                            <p>
                                In order to improve accessibility for those with
                                vision impairments as well as dyslexia and ADHD,
                                multiple fonts and styling choices have been
                                proposed by different companies and individuals.
                                Unfortunately, the effectiveness of each font
                                has either been disproven or is still under
                                review, which makes its inclusion in any designs
                                risky, if not detrimental to the intended
                                effect.
                            </p>

                            <div>
                                <h3>Dyslexia-Friendly Fonts</h3>

                                <div>
                                    <h4>Dyslexie</h4>

                                    <div className="content__image__wrapper__vertical">
                                        <img
                                            src={dyslexiefont}
                                            className="content__image__vertical"
                                        />
                                    </div>

                                    <p>
                                        <a href="https://www.dyslexiefont.com/">
                                            Dyslexie Font
                                        </a>{' '}
                                        by Christian Boer is a proprietary font
                                        that features unique letter shapes meant
                                        to more easily distinguish between very
                                        similar letters. As a humanist font, it
                                        positions itself closer to a
                                        handwriting-type font, which
                                        strategically positioned imperfections
                                        and stroke differences to further
                                        differentiate between letters.
                                        <SourceLinkComponent
                                            page={'components'}
                                            number={'1a'}
                                        />
                                    </p>

                                    <br />

                                    <p>
                                        The effectiveness of Dyslexie Font has
                                        been previously studied, however the
                                        results were underwhelming or
                                        negligible. For some dyslexic readers,
                                        the font was too unusual and
                                        non-standardised, which made it hard for
                                        them to properly read without spending
                                        extensive time getting used to the
                                        unique shapes and quirks of this font.
                                        <SourceLinkComponent
                                            page={'components'}
                                            number={'1b'}
                                        />
                                    </p>

                                    <p>
                                        Additionally, Dyslexie Font is a
                                        proprietary font that many users and
                                        designers do not have access to or are
                                        willing to spend money on, especially
                                        when the research into it have shown its
                                        effectiveness to be inconsequential. Due
                                        to this, it has not found its way into
                                        standardised accessibility practices,
                                        further preventing dyslexic users from
                                        getting acquainted with the font.
                                    </p>
                                </div>

                                <div>
                                    <h4>OpenDyslexic</h4>

                                    <div className="content__image__wrapper__vertical">
                                        <img
                                            src={opendyslexia}
                                            className="content__image__vertical"
                                        />
                                    </div>

                                    <p>
                                        <a href="https://opendyslexic.org/">
                                            OpenDyslexic
                                        </a>{' '}
                                        by Abelardo Gonzalez is a free
                                        alternative featuring a very similar
                                        typeface to that of Dyslexie Font. It
                                        also tries to clear up differences
                                        between similar-looking letters by
                                        giving each letter varying stroke widths
                                        and emphasising the baseline of most
                                        letters. Its varying thickness also
                                        leads to a natural bolding-effect on the
                                        letters, adding to the visual
                                        distinctiveness.
                                        <SourceLinkComponent
                                            page={'components'}
                                            number={'2a'}
                                        />
                                    </p>

                                    <br />

                                    <p>
                                        Like Dyslexie Font, OpenDyslexic's
                                        effectiveness has been somewhat
                                        disproven by recent research attempts.
                                        However, anecdotal input from some users
                                        seems to suggest that the font might
                                        have a positive impact on some
                                        individuals, although it seems to be
                                        negated by the difficulties it poses for
                                        other groups and disabilities.
                                        <SourceLinkComponent
                                            page={'components'}
                                            number={'2b'}
                                        />
                                        <br />
                                        What sets OpenDyslexic apart from
                                        Dyslexie font is in no doubt the fact
                                        that it is OpenSource, which allows
                                        users and providers to test the font
                                        without committing to a high price tag.
                                        However, uses of this font are still
                                        very limited, resulting in similar
                                        issues of under-exposure to potential
                                        dyslexic clients and users. Combined
                                        with the strain it can put on other
                                        visually impaired users, as well as the
                                        potential for sensory overloading
                                        readers, it is unlikely that this font
                                        will be universally adopted. This makes
                                        using it risky as well, since it is such
                                        a stark deviation from the current
                                        design norms that autistic and dyslexic
                                        audiences might be used to.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 id="bionic-fonts">Bionic Font</h3>

                                <div className="content__image__wrapper__vertical">
                                    <img
                                        src={bionic_reading}
                                        className="content__image__vertical"
                                    />
                                </div>

                                <p>
                                    <a href="https://bionic-reading.com/">
                                        Bionic Reading®
                                    </a>{' '}
                                    by Renato Casutt is a tool that allows the
                                    user to customise the font styling of a
                                    given text in order to improve reading
                                    speed. It mainly revolves around bolding the
                                    first couple letters of each word, which
                                    helps people skimming content or trying to
                                    speed-read, as the brain is supposed to more
                                    quickly read the words unconsciously as the
                                    conscious part of the brain does.
                                    <SourceLinkComponent
                                        page={'components'}
                                        number={'3a'}
                                    />
                                </p>

                                <p>
                                    While these customisations could
                                    theoretically make it easier for those with
                                    ADHD and certain forms of dyslexia to read
                                    and parse text, its effectiveness has yet to
                                    be proven, and has in some cases even be
                                    disproven. Additionally - similar to other
                                    proposed dyslexia fonts - it can also
                                    decrease readability for others, including
                                    other people with differing symptoms of
                                    dyslexia.
                                    <SourceLinkComponent
                                        page={'components'}
                                        number={'3b'}
                                    />
                                </p>
                                <br />
                                <p>
                                    As the research into this style of reading
                                    is still limited, and the effectiveness has
                                    yet to be proven substantial enough to
                                    implement across the web, it's currently not
                                    a universal standard. As such, implementing
                                    such a font at the current moment might
                                    prove more detrimental, as on top of the
                                    potential detrimental effects to dyslexic
                                    users, other neurodivergent groups are also
                                    negatively affected. For example, the
                                    routine and comfort-seeking needs of
                                    autistic individuals could be overwhelmed by
                                    this non-standardised font change.
                                    <SourceLinkComponent
                                        page={'home'}
                                        number={'3a'}
                                        text="home-3a"
                                    />
                                    <br />
                                    Additionally, the frequent usage of bolded
                                    and emphasised sections can overload those
                                    with input sensitivities.
                                </p>
                            </div>
                        </div>

                        <div className="spacer"></div>

                        <div>
                            <h2>Plugins and Extensions</h2>
                            <hr className="header_divider" />

                            <h3>Plugins, Overlays and Extensions</h3>
                            <p>
                                There are a dozen of different options and
                                resources that advertise themselves to provide
                                accessible solutions to a neurodivergent user
                                base - with either an installation on the
                                provider's end via Plugins and overlays, or on
                                the user-side via extensions. For designers and
                                developers, these solutions seem to help
                                massively, as they do not need to spend time
                                researching the best accessibility methods
                                themselves, or spend time making every aspect of
                                a website customizable. These tools can usually
                                also be installed later on in the design
                                process, reducing the chances that certain
                                sections or designs have to be changed later on
                                to make them more accessible for its users.
                            </p>

                            <br />

                            <p>
                                While the customisation for users and
                                time-saving measures for developers are
                                certainly helpful, the usage of such Plugins has
                                been widely criticized. Due to the tools
                                meddling with the code in ways a programmer
                                might not, there is a risk that the tool might
                                mess with other external accessibility
                                solutions, such as Screen Readers. The tools can
                                also not solve improper hierarchies and
                                structures, or make written text passages easier
                                to understand.
                                <SourceLinkComponent
                                    page={'components'}
                                    number={'4'}
                                />
                            </p>

                            <br />

                            <p>
                                By using external plugins, website providers
                                also run the risk that changing their website,
                                updating their services or otherwise
                                continuously using the product might turn into
                                incompatibilities or the tool breaking.
                                Providers are responsible to keep their own
                                tools as well as the plugin up to date, and
                                continuously make sure that they synergise well
                                with one another.
                                <SourceLinkComponent
                                    page={'components'}
                                    number={'4'}
                                />
                            </p>

                            <h3>Libraries</h3>

                            <p>
                                It is important to distinguish between Plugins
                                and libraries in this case. While Plugins are
                                installed at any point during the deployment
                                phase, libraries are used during the
                                developmental stage.
                            </p>

                            <br />

                            <p>
                                Plugins usually provide a closed-off codebase
                                that modifies the website after it's been
                                shipped. They can sometimes be accessed by users
                                in order to provide customisability.
                                <br />
                                Libraries on the other hand are tools used by
                                developers internally, that provide them access
                                to APIs and other automations that can speed up
                                the development process.
                            </p>

                            <br />

                            <p>
                                In the context of neurodiverse accessibility,
                                focused libraries can still provide a huge
                                improvement for developers and users alike.
                                While they also automate certain processes, it
                                is often the developer that can tweak their
                                behaviour, or use them in focused areas to
                                improve singular aspects of the website.
                                <SourceLinkComponent
                                    page={'components'}
                                    number={'5'}
                                />{' '}
                                This is very different from the up-tick in
                                Plugins, which usually provide an "all-in-one"
                                solution to its customer base.
                                <br />
                                A common use-case is found in Text To Speech
                                applications, however Libraries and Open Source
                                Tools for developers can also provide testing
                                resources, that automatically evaluate the
                                website for potential accessibility
                                shortcomings. However, it is important to note
                                that fully relying on such tests can also be
                                detrimental, as some issues might not be
                                properly detected by these programs.
                                <SourceLinkComponent
                                    page={'components'}
                                    number={'5'}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

export default FurtherResearch;
