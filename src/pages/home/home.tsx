import './home.css';

import banner from '../../assets/hero_image.png';

import warning from '../../assets/icon_warning.png';

import autism from '../../assets/storyset_autism.png';
import dyslexia from '../../assets/storyset_dyslexia.png';
import neurodiversity from '../../assets/storyset_misc.png';

import Navigation from '../../components/navigation/navigation';
import Footer from '../../components/footer-component/footer-component';
import SourceLinkComponent from '../../components/source-link-component/source-link-component';
import SummaryComponent from '../../components/summary-component/summary-component';

function Home() {
    return (
        <main className="Home">
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
                alt="A girl looking at her phone"
            />
            <div className="hero_header">
                <div>
                    <h1 className="hero_headline">
                        Neurodiverse Accessibility
                        <br />
                        in Website Design
                    </h1>
                </div>

                <span className="hero_subtitle">
                    A thesis and research project
                    <br />
                    by Vivien Kurokoshi
                </span>

                <hr className="hero_header__hr" />
            </div>
            <div className="content_wrap__outer">
                <div className="content content_wrap__inner">
                    <SummaryComponent time={9}>
                        <p>
                            Neurodiversity is a term describing multiple
                            neurodevelopmental disorders, such as Autism, ADHD,
                            Dyslexia and more.
                        </p>
                        <br />
                        <p>
                            While they are all different, they share similar
                            difficulties when browsing the Internet. These range
                            from difficulties reading longer text, to requiring
                            intuitive, standardised design elements in order to
                            feel comfortable.
                        </p>
                    </SummaryComponent>

                    <p>
                        This website aims to broadcast information about
                        neurodiversity and how a neurodivergent user base might
                        inform design decisions in the webspace.
                        <br />
                        It also serves as a showcase that makes use of the tips
                        and ideas described here, in order to provide
                        neurodivergent users with a comfortable and safe
                        browsing experience.
                    </p>

                    <div>
                        <h2>'Neurodiversity' explained</h2>
                        <hr className="header_divider" />
                        <div className="storyset__wrapper">
                            <iframe
                                className="introduction__intro-video"
                                src="https://www.youtube-nocookie.com/embed/8YHom6Xs0oQ?si=bO0YiPQHKHeuyQeA"
                                title="What is Neurodiversity - YouTube Video by Twinkl Educational Publishing"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            />
                        </div>
                        <p>
                            Neurodiversity describes the diversity of
                            neurotypes, and is commonly used to described groups
                            of people that are <i>diverging</i> from the
                            "neurotypical" experience.
                            <SourceLinkComponent page={'home'} number={'1'} />
                        </p>
                        <br />
                        <p>
                            'Neurodiversity' describes an umbrella term that
                            encompasses multiple conditions, such as:
                            <SourceLinkComponent page={'home'} number={'2'} />
                        </p>
                        <ul>
                            <li>
                                <a href="#autism" className="bold">
                                    Autism
                                </a>
                            </li>
                            <li>
                                <a href="#adhd" className="bold">
                                    ADHD
                                </a>
                            </li>
                            <li>
                                Learning disabilities, such as{' '}
                                <a href="#dyslexia" className="bold">
                                    Dyslexia
                                </a>
                            </li>
                            <li>
                                Motor Skill related disabilities, such as{' '}
                                <a href="#dyslexia" className="bold">
                                    Dyspraxia
                                </a>
                            </li>
                            <li>
                                <a href="#miscellaneous" className="bold">
                                    Other neurodevelopmental disorders
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 id="autism">Autism</h3>

                        <div className="storyset__wrapper">
                            <img
                                src={autism}
                                className="storyset_icon"
                                alt="A woman sitting in a chair looking at her phone. Floating around her, there are a bunch of emojis with different expressions."
                            />
                        </div>

                        <p>
                            Autism Spectrum Disorder (ASD) is an umbrella term
                            referring to multiple characteristics and symptoms
                            that have been attributed to the general 'Autism'
                            disorder.
                            <SourceLinkComponent page={'home'} number={'3a'} />
                            <br />
                            Before the term was removed from the DSM due to its
                            limited diagnostic criterium and the controversial
                            history of its namesake, characteristics that are
                            now attributed to Autism were diagnosed under
                            'Asperger's Syndrome'.
                            <SourceLinkComponent page={'home'} number={'3b'} />
                        </p>
                        <br />
                        <p>
                            ASD is defined by difficulties with social settings
                            and communication, but share similar looking
                            symptoms to ADHD and OCD, such as hyperfocused
                            interests and repeating behaviours and routines.
                            <SourceLinkComponent page={'home'} number={'3a'} />
                        </p>
                        <br />
                        <p>
                            Due to their difficulties managing social situations
                            and their need for routine and predictability,
                            Autistic users benefit from standardised designs
                            that easily communicate their functions and systems.
                            They appreciate clear language - or in the case of
                            User Generated Content - additional pointers that
                            explain the mood or intention of a given passage.
                            <SourceLinkComponent page={'home'} number={'3c'} />
                            <span className="superscript__source">,</span>
                            <SourceLinkComponent page={'home'} number={'9'} />
                        </p>
                    </div>

                    <div>
                        <h3 id="adhd">ADHD</h3>
                        <p>
                            Attention-Deficit/Hyperactivity Disorder (ADHD) is a
                            dual-type diagnosis that is sectioned into a
                            (predominantly) "inattentive", "hyperactive /
                            impulsive" or "combined" type. It was also
                            previously known as "ADD", before changes were made
                            to the DSM to include the hyperactive / impulsive
                            type to the criteria.
                            <SourceLinkComponent page={'home'} number={'4a'} />
                        </p>
                        <br />
                        <p>
                            Depending on the diagnosed type, people with ADHD
                            struggle with directing their focus and attention,
                            and sustaining it for longer periods of time. Some
                            also have difficulties letting their focus
                            ('hyperfixation') go. They have difficulties
                            starting or ending tasks, and are easily distracted,
                            which can make them forgetful or not very perceptive
                            of their own actions or surroundings.
                            <SourceLinkComponent page={'home'} number={'4b'} />
                        </p>
                        <br />
                        <p>
                            These symptoms can lead people with ADHD to roughly
                            skim content or to not internalise the information
                            they are taking in. This can lead users with ADHD to
                            skip longer content altogether, especially if they
                            contain lengthy or difficult to understand words and
                            phrases. While some stimulation will keep their
                            attention, too much movement or change (such as via
                            notifications or animations) can be distracting for
                            users with ADHD.
                            <SourceLinkComponent page={'home'} number={'4c'} />
                            <span className="superscript__source">,</span>
                            <SourceLinkComponent page={'home'} number={'9'} />
                        </p>
                    </div>

                    <div>
                        <h3 id="dyslexia">Dyslexia</h3>

                        <div className="storyset__wrapper">
                            <img
                                src={dyslexia}
                                className="storyset_icon"
                                alt="A woman holding a larger than life feathered pen, writing a message on a large notepad. There is a speech bubble, but the letters inside are all jumbled and in different sizes, suggesting confusion"
                            />
                        </div>

                        <p>
                            Dyslexia is a learning disability that makes it
                            difficult for affected persons to attain reading
                            capabilities. Even after gaining the ability to
                            read, dyslexic people often struggle to do so
                            fluently or for prolonged periods of time.
                            <SourceLinkComponent page={'home'} number={'5a'} />
                        </p>
                        <br />
                        <p>
                            The disorder is often described as not seeing the
                            letters and words as they appear for neurotypical
                            people, but rather recognise them based on their
                            shapes, the physical space and length a word takes
                            up, or having to 'decode' texts. Such limitations
                            also affect their ability to spell words properly,
                            or to retain information properly, as the majority
                            of their processing energy is spent on deciphering
                            the words, and they have difficulties parsing the
                            meaning of longer texts.
                            <SourceLinkComponent page={'home'} number={'5b'} />
                        </p>
                        <br />
                        <p>
                            As the main difficulties for dyslexic people lie
                            with text, it's important to use fonts that have a
                            recognizable, distinct but also standardised look,
                            so that dyslexic people can easier recognise the
                            shape of words. To that end, the font should also be
                            big enough to easily be deciphered, while having
                            enough space around each letter and line, so that
                            dyslexic people can more easily focus on singular
                            words. Adding options for Text To Speech or
                            multimedia alternatives also enables dyslexic users
                            to more easily parse the information that a written
                            text is trying to convey.
                            <SourceLinkComponent page={'home'} number={'5c'} />
                            <span className="superscript__source">,</span>
                            <SourceLinkComponent page={'home'} number={'9'} />
                        </p>
                    </div>

                    <div>
                        <h3 id="dyspraxia">Dyspraxia</h3>
                        <p>
                            Dyspraxia is a disorder describing impairments in
                            motor skills and coordination. It can make it
                            difficult for the affected person to perform
                            intricate or precise tasks or movements, and it can
                            make it harder to learn motor skill-related skills,
                            such as riding a bike.
                            <SourceLinkComponent page={'home'} number={'6a'} />
                        </p>
                        <br />
                        <p>
                            Dyspraxia occurs because of a disconnect between the
                            brain and the rest of the body. As a result,
                            problems in other areas - such as language and
                            perception - might also occur in people with
                            dyspraxia. As with most neurodivergent groups,
                            people with dyspraxia might also have other
                            conditions in and even outside the same umbrella.
                            <SourceLinkComponent page={'home'} number={'6a'} />
                        </p>
                        <br />
                        <p>
                            As accurate, exact movements are a major problem for
                            people with dyspraxia, website design should be sure
                            to not require precise or quick inputs. Buttons and
                            Links should be rather large, so that people with
                            dyspraxia have an easier time navigating the
                            website. Stressful situations might further impair
                            their motor skills, so they should be avoided in
                            website designs (such as timers to buy something or
                            complete a form).
                            <SourceLinkComponent page={'home'} number={'6b'} />
                            <span className="superscript__source">,</span>
                            <SourceLinkComponent page={'home'} number={'9'} />
                        </p>
                    </div>

                    <div>
                        <h3 id="miscellaneous">Miscellaneous Disabilities</h3>

                        <div className="storyset__wrapper">
                            <img
                                src={neurodiversity}
                                className="storyset_icon"
                                alt="A group of people with different ethnicities and ages, posing together. Some are waving their hands"
                            />
                        </div>

                        <p>
                            Apart from the aforementioned group of neurodiverse
                            experiences, multiple other conditions often share
                            the same overarching mantle and struggle with
                            similar issues. Additionally, other conditions and
                            disorders equally benefit neurodiverse
                            accessibility, despite not strictly being part of
                            the umbrella term - such as those with hearing or
                            vision impairments.
                        </p>

                        <h4>Comorbidities</h4>
                        <p>
                            A lot of neurodivergent people struggle with one or
                            more comorbidities - either other categories under
                            the neurodiverse umbrella, but also outside that
                            scope. As such, their symptoms and accessibility
                            needs may change or present differently, depending
                            on the constellation of disabilities and
                            difficulties.
                            <SourceLinkComponent page={'home'} number={'7'} />
                        </p>
                        <h4>
                            Accessibility is important for Neurotypical people
                            too
                        </h4>
                        <p>
                            Even if a person does not fall under the
                            neurodiverse umbrella, they might struggle with
                            singular or isolated symptoms and issues that might
                            hinder their day to day. As such, even neurotypical
                            people can benefit from accessible web design -
                            especially if the design also addresses predatory
                            dark patterns.
                        </p>

                        <br />

                        <div className="introduction__disclaimerwrapper">
                            <img
                                src={warning}
                                className="introduction__disclaimericon"
                                alt="A warning symbol"
                            />
                            <div>
                                <p className="introduction__disclaimer">
                                    Some resources and researchers suggest the
                                    inclusion of certain mental illnesses such
                                    as OCD, schizoaffective disorder or
                                    conditions such as antisocial personality
                                    disorder to be a part of the neurodivergent
                                    community.
                                </p>

                                <br />

                                <p>
                                    As the inclusion of such disorders is still
                                    a controversial topic, they were not
                                    considered for this study
                                    <SourceLinkComponent
                                        page={'home'}
                                        number={'8'}
                                    />{' '}
                                    - however it is important to note that even
                                    if they are not neurodiversities in the
                                    official sense, they might appear as
                                    comorbidities in neurodivergent users.
                                    <SourceLinkComponent
                                        page={'home'}
                                        number={'7'}
                                    />
                                    <br />
                                    Therefore, it is important to consider how
                                    neurodivergent web accessibility might
                                    impact those with mental health issues and
                                    other disabilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

export default Home;
