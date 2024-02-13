import './sources.css';

import banner from '../../assets/banner5.png';
import Footer from '../../components/footer-component/footer-component';
import Navigation from '../../components/navigation/navigation';
import SourcesPageComponent from '../../components/sources-component/sources-page-component';
import SourcesSourceComponent from '../../components/sources-component/sources-source-component/sources-source-component';
import SourcesHOME from '../../components/sources__page-based/sources__home';
import SourcesGOALS from '../../components/sources__page-based/sources__goals';
import SourcesFURTHERRESEARCH from '../../components/sources__page-based/sources__further-research';
import SourcesCOMPONENTS from '../../components/sources__page-based/sources__components';
import SourcesASSETS from '../../components/sources__page-based/sources__assets';

function Sources() {
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
                alt="A guy sitting on a couch, looking at his laptop"
            />

            <div className="content_wrap__outer">
                <div className="content content_wrap__inner">
                    <h1>List of Sources</h1>
                    {
                        // Home
                    }
                    <SourcesHOME />

                    {
                        // Goals
                    }
                    <SourcesGOALS />

                    {
                        // Further Research
                    }
                    <SourcesFURTHERRESEARCH />

                    {
                        // Component Library
                    }
                    <SourcesCOMPONENTS />

                    {
                        // Assets
                    }
                    <SourcesASSETS />
                </div>
            </div>

            <Footer />
        </main>
    );
}

export default Sources;
