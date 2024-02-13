import React from 'react';
import './goals.css';

import banner from '../../assets/banner.png';
import Footer from '../../components/footer-component/footer-component';
import Navigation from '../../components/navigation/navigation';
import SourceLinkComponent from '../../components/source-link-component/source-link-component';
import SummaryComponent from '../../components/summary-component/summary-component';

function Goals() {
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
                alt="A girl with headphones on looking at her laptop"
            />

            <div className="content_wrap__outer">
                <div className="content content_wrap__inner">
                    <div className="goals__intro">
                        <h1>
                            Purposes / Goals of neurodiverse web-accessibility
                        </h1>

                        <SummaryComponent time={5}>
                            <p>
                                The objectives or goals a website might fulfil
                                can be sectioned into multiple areas, such as
                                entertainment, education and creation.
                                Neurodiverse people might struggle with these
                                objectives, unless they are addressed by the
                                design and structure of the website.
                            </p>
                        </SummaryComponent>

                        <br />

                        <p>
                            When designing for neurodiverse users, it is
                            important to remember the basic goals the design
                            should convey, or enable the user to do. With these
                            in mind, we can make alterations to the design and
                            its supporting role in the aforementioned goal, that
                            make it easier for neurodiverse users to grasp or
                            engage with.
                        </p>
                    </div>

                    <div>
                        <h2>General Objectives for a Website</h2>
                        <hr className="header_divider" />
                        <p>
                            Generally, in the case of websites, we can - amongst
                            other things - draw upon the following points and
                            functions that a design in the webspace has.
                            <SourceLinkComponent page={'goals'} number={'1'} />
                            <br />
                            For more information on the selection of these
                            points, please see the written thesis.
                        </p>
                        <ol>
                            <li>
                                Getting users to spend time on the website{' '}
                                <span className="bold">(entertainment)</span>,
                            </li>
                            <li>
                                Share information with the user{' '}
                                <span className="bold">(education)</span>,
                            </li>
                            <li>
                                Have users generating content{' '}
                                <span className="bold">(creation)</span>,
                            </li>
                            <li>
                                Getting the user to interact with content{' '}
                                <span className="bold">(engagement)</span>,
                            </li>
                            <li>
                                Drive users to use or buy the product{' '}
                                <span className="bold">
                                    (persuasion / conversion)
                                </span>
                                ,
                            </li>
                            <li>
                                Build trust with the user{' '}
                                <span className="bold">(retention)</span>
                            </li>
                        </ol>
                    </div>

                    <div>
                        <h2>Struggles of neurodiverse users on the Internet</h2>
                        <hr className="header_divider" />

                        <p>
                            Neurodiverse users oftentimes struggle with one or
                            multiple of these points. While the reasons or
                            underlying symptom might be different not only
                            depending on the neurotype, but the individual
                            themselves, it is important to make the webspace at
                            large a friendlier and more comfortable space for
                            these individuals. For this, struggles like the
                            following list have to be addressed:
                        </p>

                        <p className="notice"></p>

                        <ol className="ol_header">
                            <li className="li_header">
                                <h3 className="bold">Entertainment</h3>
                                <ul>
                                    <li>
                                        Users with ADHD have a hard time
                                        directing their attention, making them
                                        either not pay attention at all, or
                                        inversely pay too close attention or for
                                        too long,
                                        <SourceLinkComponent
                                            page={'goals'}
                                            number={'2'}
                                        />
                                    </li>
                                    <li>
                                        Users with ADHD may struggle with
                                        "doomscrolling", and neglect other
                                        aspects in their life by spending too
                                        much time on certain platforms
                                        <SourceLinkComponent
                                            page={'goals'}
                                            number={'3'}
                                        />
                                    </li>
                                </ul>
                            </li>

                            <li className="li_header">
                                <h3 className="bold">Education</h3>
                                <ul>
                                    <li>
                                        Users with Dyslexia may struggle to read
                                        text, or may do so at a slower speed;
                                        hindering their information intake,
                                        <SourceLinkComponent
                                            page={'home'}
                                            number={'5b'}
                                            text="home-5b"
                                        />
                                    </li>
                                    <li>
                                        Users with ADHD may struggle to stay
                                        engaged with long-form content, and have
                                        difficulties retaining information in
                                        certain circumstances,
                                        <SourceLinkComponent
                                            page={'home'}
                                            number={'4b'}
                                            text="home-4b"
                                        />
                                    </li>
                                    <li>
                                        Users with Autism and other neurotypes
                                        may struggle to understand convoluted
                                        text, or require extra clarification to
                                        make the intended instructions or
                                        information clear
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
                                    </li>
                                </ul>
                            </li>

                            <li className="li_header">
                                <h3 className="bold">Creation</h3>
                                <ul>
                                    <li>
                                        Creators with Autism may struggle to
                                        properly convey their own message and
                                        intent, or struggle to engage
                                        neurotypical users,
                                        <SourceLinkComponent
                                            page={'goals'}
                                            number={'4'}
                                        />
                                        <span className="superscript__source">
                                            ,
                                        </span>
                                        <SourceLinkComponent
                                            page={'home'}
                                            number={'3c'}
                                            text="home-3c"
                                        />
                                    </li>
                                    <li>
                                        Neurodiverse creators may struggle to
                                        put out content consistently,
                                        <SourceLinkComponent
                                            page={'goals'}
                                            number={'5'}
                                        />
                                    </li>
                                    <li>
                                        Neurotypical people are not encouraged
                                        to create accessible content, leading
                                        many to not add accessible options, as
                                        even optional tags are hard to navigate
                                        to or require extra time to fill out
                                        <SourceLinkComponent
                                            page={'goals'}
                                            number={'6'}
                                        />
                                    </li>
                                </ul>
                            </li>

                            <li className="li_header">
                                <h3 className="bold">Engagement</h3>
                                <ul>
                                    <li>
                                        Users with Autism may have difficulty
                                        understanding the intent behind certain
                                        content, especially if it was created by
                                        other users,
                                        <SourceLinkComponent
                                            page={'home'}
                                            number={'3c'}
                                            text="home-3c"
                                        />
                                        <span className="superscript__source">
                                            ,
                                        </span>
                                        <SourceLinkComponent
                                            page={'components'}
                                            number={'5'}
                                            text="components-5"
                                        />
                                    </li>
                                    <li>
                                        Users with ADHD may struggle to respond
                                        to others or remember to send out
                                        messages,
                                        <SourceLinkComponent
                                            page={'goals'}
                                            number={'7'}
                                        />
                                    </li>
                                    <li>
                                        Users with visual or audio impairments
                                        might have difficulties reading or
                                        listening to User Generated Content, if
                                        the creator did not add accessibility
                                        options (e.g. because the platform does
                                        not support or encourage it)
                                        <SourceLinkComponent
                                            page={'goals'}
                                            number={'6'}
                                        />
                                    </li>
                                </ul>
                            </li>

                            <li className="li_header">
                                <h3 className="bold">
                                    Persuasion / Conversion
                                </h3>
                                <ul>
                                    <li>
                                        Users with ADHD may be more likely to
                                        engage in impulse-based purchases that
                                        negatively impact their financial
                                        situation
                                        <SourceLinkComponent
                                            page={'goals'}
                                            number={'8'}
                                        />
                                    </li>
                                    <li>
                                        Since neurodivergent people usually
                                        communicate differently than
                                        neurotypical people,
                                        <SourceLinkComponent
                                            page={'goals'}
                                            number={'4'}
                                        />{' '}
                                        the communication used in marketing can
                                        affect neurodivergent members very
                                        differently to neurotypical members as
                                        well.
                                        <br />
                                        Some might be less affected by marketing
                                        campaigns.
                                        <SourceLinkComponent
                                            page={'goals'}
                                            number={'9a'}
                                        />{' '}
                                        On the other hand, some might be way
                                        more sensitive to the marketing
                                        strategies than the neurotypical
                                        counterparts
                                        <SourceLinkComponent
                                            page={'goals'}
                                            number={'9b'}
                                        />
                                    </li>
                                </ul>
                            </li>

                            <li className="li_header">
                                <h3 className="bold">Retention</h3>
                                <ul>
                                    <li>
                                        Users with ADHD may struggle to remember
                                        ongoing subscriptions, and are often
                                        financially impacted by stealthy
                                        renewals
                                        <SourceLinkComponent
                                            page={'home'}
                                            number={'4b'}
                                            text="home-4b"
                                        />
                                    </li>
                                    <li>
                                        Users with ADHD might get hyperfocused
                                        on a specific topic or hobby, but drop
                                        it altogether when out of the
                                        hyperfocused-phase
                                        <SourceLinkComponent
                                            page={'goals'}
                                            number={'10'}
                                        />
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

export default Goals;
