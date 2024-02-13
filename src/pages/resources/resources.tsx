import banner from '../../assets/banner2.png';
import Footer from '../../components/footer-component/footer-component';
import Navigation from '../../components/navigation/navigation';
import SourcesINLINESourceComponent from '../../components/sources-component/sources-INLINEsource-component/sources-INLINEsource-component';
import SourcesSourceComponent from '../../components/sources-component/sources-source-component/sources-source-component';
import SummaryComponent from '../../components/summary-component/summary-component';

function Resources() {
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
                        link: '/resources',
                        text: 'Resources',
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
                alt="A girl sitting in bed looking at her laptop. She has a cup in her hand"
            />

            <div className="content_wrap__outer">
                <div className="content content_wrap__inner">
                    <div>
                        <h1>Resources</h1>

                        {/* <SummaryComponent time={0}>
                            <p className="component__summary__title">
                                Summary:
                            </p>
                            <p>
                                TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT
                                TEXT TEXTTEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                                TEXT TEXT TEXT TEXT TEXT TEXT TEXTTEXT TEXT TEXT
                                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                                TEXT TEXT TEXT TEXT TEXT TEXTTEXT TEXT TEXT TEXT
                                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                                TEXT TEXT TEXT TEXT
                            </p>
                        </SummaryComponent> */}

                        <br />

                        <p>
                            When designing accessible websites, it can sometimes
                            be difficult to find the correct practices to ensure
                            that the website can be comfortable accessed by as
                            many userbases as possible. Below, I have compiled a
                            list of helpful resources that offer tips and
                            checking systems for both neurodiverse as well as
                            blind/deaf accessibility.
                        </p>

                        <h2>General Support</h2>
                        <hr className="header_divider" />

                        <ul>
                            <li>
                                <SourcesINLINESourceComponent
                                    source_name={'Neurodiversity Design System'}
                                    source_authors={
                                        'Focused on specifically neurodiverse accessibility, the NDS provides an extensive design library with explanations'
                                    }
                                    source_link={
                                        'https://neurodiversity.design/'
                                    }
                                />
                            </li>
                            <li>https://wordstotime.com/</li>
                        </ul>

                        <p>uwu</p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

export default Resources;
