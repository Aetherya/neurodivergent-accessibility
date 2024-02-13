import React, { useState } from 'react';
import './components.css';

import banner from '../../assets/banner3.png';

import menu from '../../assets/icon_menu.png';
import warning from '../../assets/icon_warning.png';

import generaldesign from '../../assets/icon_design.png';
import written from '../../assets/icon_writing.png';
import multimedia from '../../assets/icon_images.png';
import miscellaneous from '../../assets/icon_misc.png';

import WrapperComponent from '../../components/wrapper-component/wrapper-component';

import ColourSchemeComponent from '../../components/colourscheme-component/colourscheme-component';
import ToneIndicatorComponent from '../../components/toneindicator-component/toneindicator-component';
import TLDRModalComponent from '../../components/tldrmodal-component/tldrmodal-component';
import AudioTranscriptComponent from '../../components/audiotranscript-component/audiotranscript-component';
import VideoCaptionsComponent from '../../components/videocaptions-component/videocaptions-component';
import WrapperExampleComponent from '../../components/wrapper-component/wrapper-example-component/wrapper-example-component';
import WrapperDescriptionComponent from '../../components/wrapper-component/wrapper-description-component/wrapper-description-component';
import Link from '../../components/link/link';
import Navigation from '../../components/navigation/navigation';
import Footer from '../../components/footer-component/footer-component';
import SourceLinkComponent from '../../components/source-link-component/source-link-component';
import SummaryComponent from '../../components/summary-component/summary-component';

function ComponentShowcase() {
    const [showMenu, setShowMenu] = useState(false);

    const Nav = () => (
        <>
            <div className="components__left-navigation__inner">
                <div className="component__category__wrapper">
                    <span className="component__category__navigation">
                        <img
                            src={generaldesign}
                            className="component__category__navigation__img"
                            alt="An Art Palette with Brush"
                        />
                        General Design Choices
                    </span>
                    <Link text="Colour Choices" link="#colour_choices" />
                    <Link text="Font Decisions" link="#font_decisions2" />
                    <Link text="Font Styling" link="#font_styling" />
                </div>

                <div className="component__category__wrapper">
                    <span className="component__category__navigation">
                        <img
                            src={written}
                            className="component__category__navigation__img"
                            alt="A Notepad with a Pen"
                        />
                        Written Content
                    </span>
                    <Link text="Summary Sections" link="#summary_sections" />
                    <Link
                        text="Communication and Writing"
                        link="#communication_and_writing"
                    />
                    <Link text="Tip Modal & Text Emphasis" link="#tip_modal" />
                    <Link text="Tone Indicators" link="tone_indicators" />
                </div>

                <div className="component__category__wrapper">
                    <span className="component__category__navigation">
                        <img
                            src={multimedia}
                            className="component__category__navigation__img"
                            alt="A stack of images reminiscent of a Phone Gallery"
                        />
                        Multimedia Content
                    </span>
                    <Link text="Audio Transcripts" link="#audio_transcripts" />
                    <Link text="Video Captions" link="#video_captions" />
                </div>

                <div className="component__category__wrapper">
                    <span className="component__category__navigation">
                        <img
                            src={miscellaneous}
                            className="component__category__navigation__img"
                            alt="Multiple dots and squares, suggesting multiple different options"
                        />
                        Miscellaneous Improvements
                    </span>
                    <Link
                        text="General Design Choices"
                        link="#misc_general_designs"
                    />
                    <Link text="Written Content" link="#misc_written_content" />
                    <Link text="Multimedia Content" link="#misc_multimedia" />
                </div>
            </div>

            {showMenu ? (
                <div className="components__left-nav-button-wrapper">
                    <button
                        className="components__left-nav-button--mobile"
                        onClick={() => setShowMenu(state => !state)}
                    >
                        <img
                            src={menu}
                            alt="Three lines stacked on top of each other, suggesting a hidden menu can be opened with it"
                            className="components__left-nav-button__icon"
                        />
                    </button>
                </div>
            ) : null}
        </>
    );

    return (
        <main className="components">
            {!showMenu ? (
                <button
                    className="components__left-nav-button"
                    onClick={() => setShowMenu(state => !state)}
                >
                    <img
                        src={menu}
                        alt="Three lines stacked on top of each other, suggesting that the hidden menu can be closed with it"
                        className="components__left-nav-button__icon"
                    />
                </button>
            ) : null}

            <div className="components__wrapper">
                <nav
                    className="components__left-navigation components__left-navigation--desktop"
                    role="navigation"
                    aria-label="Main"
                >
                    <Nav />
                </nav>
                {showMenu ? (
                    <nav
                        className="components__left-navigation components__left-navigation--mobile"
                        role="navigation"
                        aria-label="Main"
                    >
                        {<Nav />}
                    </nav>
                ) : null}

                <div className="components__right">
                    <header className="components__header">
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
                    </header>

                    <img
                        src={banner}
                        className="banner"
                        alt="Two people studying with in-ear headphones in. They are sitting with their backs to each other."
                    />

                    <div className="content_wrap__outer">
                        <div className="content_wrap__inner">
                            <div className="components__header-wrapper">
                                <h1>
                                    Component Library for Neurodiverse
                                    Accessibility
                                </h1>

                                <p>
                                    The following improvements showcased below
                                    are not only taken the goals of website
                                    designers and the struggles of neurodiverse
                                    users under consideration, but also are
                                    created in an ethical, user-focused
                                    approach.
                                </p>
                            </div>

                            <h2
                                id="general-design-choices"
                                className="component__category"
                            >
                                General Design Choices
                            </h2>
                            <hr className="components__header_divider" />

                            {
                                // Colour Scheme
                            }
                            <WrapperComponent
                                sectionTitle="Colour Choices"
                                id="colour_choices"
                            >
                                <WrapperExampleComponent>
                                    <ColourSchemeComponent />
                                </WrapperExampleComponent>

                                <WrapperDescriptionComponent>
                                    <p>
                                        Colour Theory plays an important part in
                                        UI/UX design as a whole, and it is a
                                        vital component in conveying moods,
                                        highlighting content and creating a
                                        pleasant viewing experience in general.
                                        <br />
                                        However, when designing for
                                        neurodivergent users, it is very
                                        important to be careful of potentially
                                        triggering colour schemes, or otherwise
                                        clashing themes that might make the
                                        content harder to read.
                                        <SourceLinkComponent
                                            page={'components'}
                                            number={'1'}
                                        />
                                    </p>

                                    <ul>
                                        <li>
                                            A good contrast is important in
                                            making things legible and having
                                            them stand out from one another.
                                        </li>
                                        <li>
                                            It's best to avoid very saturated or
                                            bright colours, as they can be very
                                            unpleasant for neurodiverse people
                                            to look at.
                                        </li>
                                        <li>
                                            For autistic people, reds and
                                            yellows can be very triggering -
                                            especially if they are also
                                            saturated. It's better to use beige,
                                            tan or more orange looking hues to
                                            achieve the intended effect instead.
                                        </li>
                                        <li>
                                            Neutral Colours are generally well
                                            accepted, but a lot of
                                            neurodivergent people report that
                                            they particularly like the use of
                                            pastel purple or muted blues and
                                            greens as well.
                                        </li>
                                    </ul>
                                </WrapperDescriptionComponent>
                            </WrapperComponent>

                            {
                                // General Font Choice
                            }
                            <WrapperComponent
                                sectionTitle="Font Decisions"
                                id="font_decisions"
                            >
                                <WrapperExampleComponent>
                                    <div>
                                        <h4 className="wrapperComponent__example__title">
                                            ❌ Poor font choices:
                                        </h4>
                                        <div className="fontchoices__wrapper">
                                            <p
                                                className="fontchoices"
                                                id="fontchoice__tnr"
                                            >
                                                Times New Roman
                                            </p>
                                            <p
                                                className="fontchoices"
                                                id="fontchoice__lucida"
                                            >
                                                Lucida Handwriting
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="wrapperComponent__example__title">
                                            ✔️ Good font choices:
                                        </h4>
                                        <div className="fontchoices__wrapper">
                                            <p
                                                className="fontchoices"
                                                id="fontchoice__arial"
                                            >
                                                Arial
                                            </p>
                                            <p
                                                className="fontchoices"
                                                id="fontchoice__opensans"
                                            >
                                                Open Sans
                                            </p>
                                            <p
                                                className="fontchoices"
                                                id="fontchoice__comicsans"
                                            >
                                                Comic Sans
                                            </p>
                                        </div>
                                    </div>
                                </WrapperExampleComponent>

                                <WrapperDescriptionComponent>
                                    <p>
                                        Especially when dealing with people that
                                        have impaired vision (partial blindness,
                                        astigmatism, etc.), it is important to
                                        make text large and distinguishable
                                        enough to read. The same applies to
                                        those with dyslexia as well, and we can
                                        use the same accessibility methods to
                                        make the reading experience a bit easier
                                        for them.
                                        <SourceLinkComponent
                                            page={'components'}
                                            number={'2a'}
                                        />
                                    </p>

                                    <ul>
                                        <li>
                                            Generally, it is better to use
                                            sans-serif fonts, as the serifs -
                                            which can appear quite different
                                            depending on the font - can cause
                                            confusion for dyslexic readers.
                                        </li>
                                        <li>
                                            A good font for dyslexic readers
                                            typically has a high x-height,
                                            meaning the space between the
                                            baseline and the base of the
                                            ascenders.
                                        </li>
                                        <li>
                                            Some dyslexic users prefer so-called
                                            "humanist" fonts, which are, amongst
                                            other things, characterised by
                                            unique letter shapes between similar
                                            letters, such as 'b' and 'd'.
                                        </li>
                                        <li>
                                            Some of the best fonts as suggested
                                            by dyslexic users are Arial, Comic
                                            Sans and Open Sans, but similar
                                            looking fonts might also be
                                            considered.
                                        </li>
                                    </ul>
                                </WrapperDescriptionComponent>
                            </WrapperComponent>

                            {
                                // Font Styling
                            }
                            <WrapperComponent
                                sectionTitle="Font Styling"
                                id="font_styling"
                            >
                                <WrapperExampleComponent>
                                    <div>
                                        <h4 className="wrapperComponent__example__title">
                                            ❌ Poor font styling:
                                        </h4>
                                        <div className="font_styling__bad">
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Donec eleifend eget felis nec
                                                consequat. Donec ut ipsum sed
                                                leo scelerisque pellentesque.
                                                Suspendisse at accumsan leo,
                                                vitae euismod massa.
                                            </p>
                                            <p>
                                                Orci varius natoque penatibus et
                                                magnis dis parturient montes,
                                                nascetur ridiculus mus.
                                                Pellentesque egestas nulla
                                                lobortis ex accumsan, vel
                                                sodales magna malesuada. Vivamus
                                                quis dictum nulla.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="wrapperComponent__example__title">
                                            ✔️ Easily readable font styling:
                                        </h4>
                                        <div className="font_styling__good">
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Donec eleifend eget felis nec
                                                consequat. Donec ut ipsum sed
                                                leo scelerisque pellentesque.
                                                Suspendisse at accumsan leo,
                                                vitae euismod massa.
                                            </p>
                                            <br />
                                            <p>
                                                Orci varius natoque penatibus et
                                                magnis dis parturient montes,
                                                nascetur ridiculus mus.
                                                Pellentesque egestas nulla
                                                lobortis ex accumsan, vel
                                                sodales magna malesuada. Vivamus
                                                quis dictum nulla.
                                            </p>
                                        </div>
                                    </div>
                                </WrapperExampleComponent>

                                <WrapperDescriptionComponent>
                                    <p>
                                        Even after choosing a readable font, it
                                        is important to properly style it to aid
                                        with readability and clarity:
                                        <SourceLinkComponent
                                            page={'components'}
                                            number={'2a'}
                                        />
                                        <span className="superscript__source">
                                            ,
                                        </span>
                                        <SourceLinkComponent
                                            page={'components'}
                                            number={'2b'}
                                        />
                                    </p>

                                    <ul>
                                        <li>
                                            A larger font size massively
                                            improves the readability for users
                                            with vision impairments, but also
                                            for those with ADHD and dyslexia. A
                                            good font size for normal text seems
                                            to be around 16px, with a good size
                                            difference to headers and titles.
                                        </li>
                                        <li>
                                            It is advisable to have good letter
                                            spacing / tracking, in order to
                                            avoid the letters to melt into one
                                            another in the eye of a dyslexic
                                            person. This helps them see the
                                            individual letter shapes better, and
                                            makes the shape of the word clearer.
                                        </li>
                                        <li>
                                            Additionally, a high line height /
                                            spacious leading will help dyslexic
                                            users to read and understand each
                                            line more easily, and avoid them
                                            potentially jumping into the wrong
                                            line. Anything around or above 1.5
                                            or 150% is usually recommended.
                                        </li>
                                        <li>
                                            In the same vein, having good
                                            spacing between each paragraph will
                                            help guide users to the correct
                                            continuation. It's also important to
                                            avoid paragraphs that are too long.
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            Users with ADHD might appreciate
                                            emphasised and highlighted content
                                            that can inform them of the basic
                                            concepts of a longer text. However,
                                            italic and underlined content can
                                            confuse users with dyslexia.
                                            Therefore, it is advisable to only
                                            bold content when it needs to be
                                            accentuated.
                                        </li>
                                        <li>
                                            Additionally, it is best to avoid
                                            highlighting content with colours
                                            alone, as this can negatively impact
                                            those with vision impairments. If
                                            colours are used (such as for e.g.
                                            hyperlinks), it's best to pair the
                                            highlight with other highlighting
                                            methods.
                                        </li>
                                    </ul>

                                    <div className="introduction__disclaimerwrapper">
                                        <img
                                            src={warning}
                                            className="introduction__disclaimericon"
                                            alt="A warning symbol"
                                        />
                                        <div>
                                            <p className="introduction__disclaimer">
                                                There exist some font options
                                                that advertise themselves as
                                                being helpful to neurodiverse
                                                readers. However, these font
                                                choices do not seem to be
                                                helpful across the board, and
                                                for some users might actually
                                                impede their ability to read the
                                                text.
                                                <br />
                                                <br />
                                                You can find more information on
                                                these fonts and their effects on
                                                neurodivergent users{' '}
                                                <a href="/further-research#bionic-fonts">
                                                    in our section on Bionic
                                                    Fonts
                                                </a>
                                                .
                                            </p>
                                        </div>
                                    </div>
                                </WrapperDescriptionComponent>
                            </WrapperComponent>

                            <h2
                                id="written-content"
                                className="component__category"
                            >
                                Written Content
                            </h2>
                            <hr className="components__header_divider" />

                            {
                                // Article Summaries
                            }
                            <WrapperComponent
                                sectionTitle="Summary Sections"
                                id="summary_sections"
                            >
                                <WrapperExampleComponent>
                                    <SummaryComponent time={9}>
                                        <p>
                                            Neurodiversity is a term describing
                                            multiple neurodevelopmental
                                            disorders, such as Autism, ADHD,
                                            Dyslexia and more.
                                        </p>
                                        <br />
                                        <p>
                                            While they are all different, they
                                            share similar difficulties when
                                            browsing the Internet. These range
                                            from difficulties reading longer
                                            text, to requiring intuitive,
                                            standardised design elements in
                                            order to feel comfortable.
                                        </p>
                                    </SummaryComponent>
                                </WrapperExampleComponent>

                                <WrapperDescriptionComponent>
                                    For people with difficulties focusing and
                                    those having problems reading longer texts,
                                    having the ability to quickly skim the text
                                    or read a shortened summary can be very
                                    helpful in order to convey the necessary
                                    information.
                                    <ul>
                                        <li>
                                            People with ADHD and Dyslexia will
                                            be able to take away the main points
                                            of an article at a glance
                                        </li>
                                        <li>
                                            If the summary or general topic
                                            seems interesting (hyperfocus), or
                                            other neurodiverse people (such as
                                            those with Autism) are trying to
                                            access the information, the actual
                                            article will still provide detailed
                                            information and anecdotes, and add
                                            the lesser important details.
                                        </li>
                                        <li>
                                            An estimated reading time can
                                            additionally help neurodiverse users
                                            what kind of timeframe they are
                                            about to invest in - especially
                                            since e.g. people with ADHD can
                                            suffer from 'time blindness', making
                                            it hard to make accurate estimations
                                            on how long tasks might take.
                                            <SourceLinkComponent
                                                page={'components'}
                                                number={'3'}
                                            />
                                        </li>
                                    </ul>
                                </WrapperDescriptionComponent>
                            </WrapperComponent>

                            {
                                // Language
                            }
                            <WrapperComponent
                                sectionTitle="Communication and Writing"
                                id="communication_and_writing"
                            >
                                <WrapperExampleComponent>
                                    <div className="communication__wrapper">
                                        <div>
                                            <h4 className="wrapperComponent__example__title">
                                                ❌ Abstruse, convoluted
                                                language:
                                            </h4>

                                            <blockquote>
                                                A report was written by a
                                                representative of the UK
                                                government about the importance
                                                and necessary standardisation of
                                                accessibility in the digital
                                                space.
                                            </blockquote>
                                        </div>

                                        <div>
                                            <h4 className="wrapperComponent__example__title">
                                                ✔️ Easily understood language:
                                            </h4>
                                            <blockquote>
                                                The UK government wrote a report
                                                about why accessible designs are
                                                important, and how a universal
                                                standard could help people
                                                navigate the Internet.
                                            </blockquote>
                                        </div>
                                    </div>
                                </WrapperExampleComponent>

                                <WrapperDescriptionComponent>
                                    Multiple disorders under the neurodiverse
                                    umbrella can benefit from having clear
                                    language that features short sentences and
                                    easy to understand vocabulary:
                                    <SourceLinkComponent
                                        page={'components'}
                                        number={'4'}
                                    />
                                    <ul>
                                        <li>
                                            Concise sentences shorten the amount
                                            of text dyslexic readers have to
                                            decipher, making it take less energy
                                            and time to grasp the same or
                                            similar meanings, and focusing on
                                            the important parts of the message.
                                        </li>
                                        <li>
                                            Readers with ADHD appreciate shorter
                                            texts, as it will encourage them to
                                            read the entire paragraph instead of
                                            skimming over it.
                                        </li>
                                        <li>
                                            Clear, easy language helps users
                                            with Autism and ADHD to more quickly
                                            understand the meaning and intent of
                                            a message, and it requires less time
                                            to 'translate' difficult words to
                                            make sense for them.
                                        </li>
                                        <li>
                                            Using active language (
                                            <span className="italic__example">
                                                "they wrote [...]"
                                            </span>{' '}
                                            instead of{' '}
                                            <span className="italic__example">
                                                "[...] was written by them."
                                            </span>
                                            ) helps avoid misunderstandings and
                                            confusion, and highlights the
                                            subject for readers.
                                            <br />
                                            If the subject can be omitted, other
                                            sentence structures (
                                            <span className="italic__example">
                                                "There was a report [...]"
                                            </span>
                                            ) can convey the important
                                            information.
                                        </li>
                                        <li>
                                            People with Autism can struggle with
                                            metaphors or idioms, and might not
                                            grasp language that is too
                                            figurative or ornate. It is
                                            therefore better to either not use
                                            them, or properly explain their
                                            meaning to neurodiverse readers.
                                        </li>
                                    </ul>
                                </WrapperDescriptionComponent>
                            </WrapperComponent>

                            {
                                // Tips Modal
                            }
                            <WrapperComponent
                                sectionTitle="Tip Modal and Text Emphasis"
                                id="tip_modal"
                            >
                                <WrapperExampleComponent>
                                    <TLDRModalComponent />
                                </WrapperExampleComponent>

                                <WrapperDescriptionComponent>
                                    Similar to an article-wide summary,
                                    in-section summaries and tip modals can help
                                    summarise sections or give further
                                    explanation on particular topics.
                                    <SourceLinkComponent
                                        page={'components'}
                                        number={'4'}
                                    />
                                    <ul>
                                        <li>
                                            Tip Modals can help to give tips to
                                            the reader, or provide them with
                                            potentially further research
                                            opportunities. This is especially
                                            appreciated by users with Autism or
                                            hyperfocused ADHD individuals, who
                                            might want to take a deep-dive into
                                            certain topics.
                                        </li>
                                        <li>
                                            The modals can also be used as a
                                            summary, or to invite the reader to
                                            ask further questions.
                                        </li>
                                        <li>
                                            In order to keep individuals with
                                            ADHD focused, they might also
                                            provide interactive content, such as
                                            survey or quiz-like questions for
                                            the section it is paired to.
                                        </li>
                                        <li>
                                            In-Text emphasis can help people
                                            with ADHD and Dyslexia to focus on
                                            the important parts of the message.
                                            It is however important to not rely
                                            on italics or underlines to
                                            emphasise text - especially when it
                                            is used frequently.
                                            <SourceLinkComponent
                                                page={'components'}
                                                number={'2b'}
                                            />
                                        </li>
                                    </ul>
                                </WrapperDescriptionComponent>
                            </WrapperComponent>

                            {
                                // Tone Indicators
                            }
                            <WrapperComponent
                                sectionTitle="Tone Indicators"
                                id="tone_indicators"
                            >
                                <WrapperExampleComponent>
                                    <ToneIndicatorComponent />
                                </WrapperExampleComponent>

                                <WrapperDescriptionComponent>
                                    Users with Autism can struggle to understand
                                    the intent of messages or grasp the meaning
                                    of certain language, especially over text.
                                    For a couple of years, neurodivergent
                                    communities have therefore establishes 'tone
                                    indicators', which quickly categorise a
                                    sentence or paragraph into different moods
                                    and intents, such as 'sarcasm', 'joke', or
                                    'serious'.
                                    <SourceLinkComponent
                                        page={'components'}
                                        number={'4'}
                                    />
                                    <span className="superscript__source">
                                        ,
                                    </span>
                                    <SourceLinkComponent
                                        page={'components'}
                                        number={'5'}
                                    />
                                    <br />
                                    Unfortunately, tone indicators have not been
                                    universally adopted, and especially
                                    neurotypical users have shown an
                                    indifference towards the topic, even though
                                    they are reported to significantly aid
                                    neurodiverse readers.
                                    <ul>
                                        <li>
                                            To counteract this indifference,
                                            platforms should make it easier for
                                            especially neurotypical users to add
                                            tone indicators with a click.
                                        </li>
                                        <li>
                                            Having tone indicators be a built-in
                                            function also makes it easier for
                                            screen readers and other
                                            accessibility methods to properly
                                            interpret the tags.
                                        </li>
                                        <li>
                                            Built-in tone indicators could also
                                            allow neurodivergent users to
                                            quickly get a reminder on what a
                                            certain tag or indicator means or
                                            'translates to' - for example by
                                            offering a tooltip or help menu that
                                            gives examples.
                                        </li>
                                        <li>
                                            Tone Indicators could also be used
                                            to filter content, allowing users
                                            with ADHD or those sensitive to
                                            certain moods or topics (e.g.
                                            empathy disorder) to personalise and
                                            tweak the content they see.
                                        </li>
                                    </ul>
                                </WrapperDescriptionComponent>
                            </WrapperComponent>

                            <h2
                                id="multimedia-content"
                                className="component__category"
                            >
                                Multimedia Content
                            </h2>
                            <hr className="components__header_divider" />

                            {
                                // Audio Transcripts
                            }
                            <WrapperComponent
                                sectionTitle="Audio Transcripts"
                                id="audio_transcripts"
                            >
                                <WrapperExampleComponent>
                                    <AudioTranscriptComponent />
                                </WrapperExampleComponent>

                                <WrapperDescriptionComponent>
                                    People with ADHD might both struggle to
                                    focus on longer text, but they similarly can
                                    struggle with long, slow recordings. For
                                    other groups, such as those with dyslexia or
                                    hard of seeing, audio form content can be
                                    quite helpful - same for those hard of
                                    seeing with text.
                                    <br />
                                    Providing both an audio and visual component
                                    is a great example of how multiple
                                    neurodiverse experiences can be targeted and
                                    improved at the same time.
                                    <SourceLinkComponent
                                        page={'components'}
                                        number={'6'}
                                    />
                                    <ul>
                                        <li>
                                            Highlighting the current audio
                                            section in the text allows those
                                            with ADHD and those hard of hearing
                                            to use both senses at the same time,
                                            making it easier to parse the
                                            meaning.
                                        </li>
                                        <li>
                                            The animations can also help people
                                            with ADHD to stay focused and
                                            engaged, especially if the recording
                                            is longer.
                                        </li>
                                        <li>
                                            Visually seeing the transcript of a
                                            given audio file - especially if
                                            supplemented with timestamps - can
                                            help listeners skim the content and
                                            particularly listen to the parts
                                            that are the most interesting or
                                            helpful to them.
                                        </li>
                                        <li>
                                            The highlighting of a current
                                            section sadly can also negatively
                                            impact those with Autism, and in
                                            some cases even those with ADHD, due
                                            to the animations. It can also
                                            impair dyslexic readers or those
                                            with colour blindness.
                                            <br />
                                            Therefore, it is good to keep the
                                            ability open to remove such
                                            animations and highlights.
                                        </li>
                                        <li>
                                            Not everyone has the time to record
                                            their articles in an appealing and
                                            engaging audio file. Using
                                            technologies such as Text To Speech
                                            can automate the process, and
                                            additionally allow users to
                                            customize the voice, reading speed
                                            and intonations based on preferences
                                            or need.
                                        </li>
                                        <li>
                                            Enabling transcripts for audio
                                            recordings can also limit the amount
                                            of sensory input the neurodivergent
                                            user gets, which can prevent e.g.
                                            autistic users from getting
                                            overloaded and overwhelmed.
                                        </li>
                                    </ul>
                                </WrapperDescriptionComponent>
                            </WrapperComponent>

                            {
                                // Video Captions
                            }
                            <WrapperComponent
                                sectionTitle="Video Captions"
                                id="video_captions"
                            >
                                <WrapperExampleComponent>
                                    <VideoCaptionsComponent />
                                </WrapperExampleComponent>

                                <WrapperDescriptionComponent>
                                    Video Captions - whether auto-generated or
                                    provided by the uploader - are already a
                                    well-established accessibility feature on
                                    e.g. YouTube, but they are still not
                                    inherently implemented by other video
                                    websites like Twitch. This leads to content
                                    creators using their own built-in captions,
                                    like we can see with Twitch or TikTok.
                                    However, due to them being baked into the
                                    video, they are not easily accessible for
                                    screen readers, and can suffer when the user
                                    views them in low quality or has low
                                    streaming speeds.
                                    <br />
                                    Not only that, but in order for captions to
                                    be effective for neurodivergent users, the
                                    website has to provide several important
                                    customisation options.
                                    <SourceLinkComponent
                                        page={'components'}
                                        number={'7'}
                                    />
                                    <ul>
                                        <li>
                                            Viewers with ADHD can easily be
                                            distracted - both by the captions
                                            when they want to focus on the
                                            video, but also by the video when
                                            they want to focus on the captions.
                                            It's therefore important to have the
                                            ability to turn captions off.
                                        </li>
                                        <li>
                                            Similarly, it's important to be able
                                            to move captions around in case they
                                            block important parts of the video.
                                            Moving them e.g. into the middle of
                                            the screen can also reduce the
                                            amount of time it takes for the eyes
                                            to travel, allowing users with ADHD
                                            to more easily multitask and focus
                                            on both inputs at once.
                                        </li>
                                        <li>
                                            In order to help those hard of
                                            seeing, it's important that captions
                                            can have interchangeable colours or
                                            the ability to change the opacity of
                                            the background box.
                                        </li>
                                        <li>
                                            Other features, such as the ability
                                            to change the font size, letter
                                            spacing, or width of the captions
                                            box, can also be worthwhile
                                            customisation options to give to
                                            neurodiverse and impaired users.
                                        </li>
                                    </ul>
                                </WrapperDescriptionComponent>
                            </WrapperComponent>

                            <h2
                                id="miscellaneous-improvements"
                                className="component__category"
                            >
                                Miscellaneous Improvements
                            </h2>
                            <hr className="components__header_divider" />

                            {
                                // Misc General
                            }
                            <WrapperComponent
                                sectionTitle="Other Helpful Design Choices"
                                id="misc_general_designs"
                            >
                                <div className="components__miscellaneous__description">
                                    <p>
                                        When designing for neurodivergent
                                        audiences, it's important to put the
                                        focus on the important elements of the
                                        page. This means that for example the
                                        background should be kept simple, and
                                        preferably with a limited colour scheme.
                                        <SourceLinkComponent
                                            page={'home'}
                                            number={'9'}
                                            text="home-9"
                                        />
                                        <br />
                                        Additionally, the same goes for media
                                        integrations, which could be potentially
                                        distracting for users. Therefore, it's
                                        important to avoid media that
                                        automatically plays on page load or by
                                        scrolling a certain distance.
                                        <SourceLinkComponent
                                            page={'home'}
                                            number={'4c'}
                                            text="home-4c"
                                        />
                                        <span className="superscript__source">
                                            ,
                                        </span>
                                        <SourceLinkComponent
                                            page={'home'}
                                            number={'9'}
                                            text="home-9"
                                        />
                                    </p>

                                    <br />

                                    <p>
                                        Ideally, the website should either have
                                        a limited amount of animations, or offer
                                        its users a way to turn off animations.
                                        This prevents neurodivergent users from
                                        getting overwhelmed or distracted.
                                        <SourceLinkComponent
                                            page={'home'}
                                            number={'3c'}
                                            text="home-3c"
                                        />
                                        <span className="superscript__source">
                                            ,
                                        </span>
                                        <SourceLinkComponent
                                            page={'home'}
                                            number={'9'}
                                            text="home-9"
                                        />
                                    </p>

                                    <br />

                                    <p>
                                        One thing that can harm various
                                        neurodivergent groups is the
                                        implementation of timers. These can be
                                        e.g. having to buy tickets in a given
                                        timespan, offering time limited sales,
                                        or only giving a specific amount of time
                                        to fill out a survey or a quiz.
                                        <br />
                                        For users with ADHD, timers can be a
                                        distraction and the stress can lead to
                                        executive dysfunction in a given
                                        situation. Those with dyslexia or
                                        dyspraxia might have difficulties
                                        performing a given task in the set
                                        time-frame already, and so it's
                                        important to be cognisant of the extra
                                        time or help they might need.
                                        <SourceLinkComponent
                                            page={'home'}
                                            number={'4c'}
                                            text="home-4c"
                                        />
                                        <span className="superscript__source">
                                            ,
                                        </span>
                                        <SourceLinkComponent
                                            page={'home'}
                                            number={'6b'}
                                            text="home-6b"
                                        />
                                        <span className="superscript__source">
                                            ,
                                        </span>
                                        <SourceLinkComponent
                                            page={'home'}
                                            number={'9'}
                                            text="home-9"
                                        />
                                    </p>
                                </div>
                            </WrapperComponent>

                            {
                                // Misc Writing / Content
                            }
                            <WrapperComponent
                                sectionTitle="Other Written / Content Improvements"
                                id="misc_written_content"
                            >
                                <div className="components__miscellaneous__description">
                                    <p>
                                        In order to improve the predictability
                                        of a website, the hierarchy and content
                                        structure should be kept the same across
                                        pages, and follow the web design
                                        standards. This means that "h" tags
                                        should be used in the correct order, and
                                        text should be nested in "p" tags.
                                        <SourceLinkComponent
                                            page={'home'}
                                            number={'3c'}
                                            text="home-3c"
                                        />
                                        <span className="superscript__source">
                                            ,
                                        </span>
                                        <SourceLinkComponent
                                            page={'home'}
                                            number={'9'}
                                            text="home-9"
                                        />
                                    </p>

                                    <br />

                                    <p>
                                        Predictability and clarity can be
                                        further improved by putting special
                                        attention to buttons and clickable
                                        elements. They should be clearly
                                        labelled with an indicator of their
                                        function. For example, "Click Here" is
                                        not sufficient, even if the surrounding
                                        text explains the function of a button.
                                        It is better to label the button itself.
                                        <SourceLinkComponent
                                            page={'home'}
                                            number={'3c'}
                                            text="home-3c"
                                        />
                                        <span className="superscript__source">
                                            ,
                                        </span>
                                        <SourceLinkComponent
                                            page={'home'}
                                            number={'9'}
                                            text="home-9"
                                        />
                                    </p>

                                    <br />

                                    <p>
                                        In order to keep the attention of users
                                        with ADHD, as well as simplify and
                                        explain the written content for autistic
                                        and dyslexic users, images should be
                                        used to underline or frame the content.
                                        However, it is important to use images
                                        sparingly, and strategically pick those
                                        that enhance or visualise a given
                                        section. This balance is important to
                                        not distract users, and to keep the
                                        focus on the text.
                                        <SourceLinkComponent
                                            page={'home'}
                                            number={'3c'}
                                            text="home-3c"
                                        />
                                        <span className="superscript__source">
                                            ,
                                        </span>
                                        <SourceLinkComponent
                                            page={'home'}
                                            number={'4c'}
                                            text="home-4c"
                                        />
                                        <span className="superscript__source">
                                            ,
                                        </span>
                                        <SourceLinkComponent
                                            page={'home'}
                                            number={'9'}
                                            text="home-9"
                                        />
                                        <br />
                                        When using images, it's also important
                                        to properly label them with "alt" tags,
                                        as this will allow Screen Readers to
                                        properly convey the image to a vision
                                        impaired user.
                                    </p>
                                </div>
                            </WrapperComponent>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </main>
    );
}

export default ComponentShowcase;
