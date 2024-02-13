import SourcesPageComponent from '../sources-component/sources-page-component';
import SourcesSourceComponent from '../sources-component/sources-source-component/sources-source-component';

function SourcesFURTHERRESEARCH() {
    return (
        <div>
            <h2 id="sources_further-research">Further Research</h2>
            <hr className="header_divider" />

            <ol>
                <SourcesPageComponent
                    page={'further-research'}
                    number={'1'}
                    claim={'Dyslexie Font'}
                    is_sectionheader
                >
                    <ol className="ol_letters">
                        <SourcesPageComponent
                            page={'further-research'}
                            number={'1a'}
                            claim={'Basics of Dyslexie Font'}
                        >
                            <ul>
                                <SourcesSourceComponent
                                    source_name={
                                        'Proven Effect of Dyslexie Font'
                                    }
                                    source_authors={'Dyslexie Font'}
                                    source_link={
                                        'https://www.dyslexiefont.com/en/research/'
                                    }
                                />
                            </ul>
                        </SourcesPageComponent>

                        <SourcesPageComponent
                            page={'further-research'}
                            number={'1b'}
                            claim={'Image of Dyslexie Typeface'}
                        >
                            <ul>
                                <SourcesSourceComponent
                                    source_name={
                                        'For Dyslexics, A Font And A Dictionary That Are Meant To Help'
                                    }
                                    source_authors={'Bill Chappell'}
                                    source_link={
                                        'https://royalacademyeducation.com/dyslexia-font-available-for-free/'
                                    }
                                    source_date={'Nov 2014'}
                                />
                            </ul>
                        </SourcesPageComponent>

                        <SourcesPageComponent
                            page={'further-research'}
                            number={'1c'}
                            claim={'Effectiveness of Dyslexie Font'}
                        >
                            <ul>
                                <SourcesSourceComponent
                                    source_name={
                                        'Dyslexie font does not benefit reading in children with or without dyslexia'
                                    }
                                    source_authors={'Sanne M. Kuster et al.'}
                                    source_link={
                                        'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5934461/'
                                    }
                                    source_date={'2018'}
                                />
                                <SourcesSourceComponent
                                    source_name={
                                        'Do Special Fonts Help People with Dyslexia?'
                                    }
                                    source_authors={
                                        'International Dyslexia Association'
                                    }
                                    source_link={
                                        'https://dyslexiaida.org/do-special-fonts-help-people-with-dyslexia/'
                                    }
                                    source_date={'Jan 2018'}
                                />
                                <SourcesSourceComponent
                                    source_name={
                                        'A Special Font for People with Dyslexia: Does it Work and, if so, why?'
                                    }
                                    source_authors={'Eva Marinus et al.'}
                                    source_link={
                                        'https://www.speld.org.au/files/resources/marinus_et_al_2016_special_font_for_dyslexia.pdf'
                                    }
                                    source_date={'2016'}
                                />
                            </ul>
                        </SourcesPageComponent>
                    </ol>
                </SourcesPageComponent>

                <SourcesPageComponent
                    page={'further-research'}
                    number={'2'}
                    claim={'OpenDyslexic'}
                    is_sectionheader
                >
                    <ol className="ol_letters">
                        <SourcesPageComponent
                            page={'further-research'}
                            number={'2a'}
                            claim={'Basics of OpenDyslexic'}
                        >
                            <ul>
                                <SourcesSourceComponent
                                    source_name={'OpenDyslexic'}
                                    source_authors={'abbiecodes'}
                                    source_link={'https://opendyslexic.org/'}
                                    source_date={''}
                                />
                            </ul>
                        </SourcesPageComponent>

                        <SourcesPageComponent
                            page={'further-research'}
                            number={'2b'}
                            claim={'Image of OpenDyslexic Typeface'}
                        >
                            <ul>
                                <SourcesSourceComponent
                                    source_name={'Dyslexie versus OpenDyslexic'}
                                    source_authors={'Rita'}
                                    source_link={
                                        'https://nycdyslexiaresearch.wordpress.com/2013/03/08/dyslexie-versus-opendyslexic/'
                                    }
                                    source_date={'Mar 2013'}
                                />
                            </ul>
                        </SourcesPageComponent>

                        <SourcesPageComponent
                            page={'further-research'}
                            number={'2c'}
                            claim={'Effectiveness of OpenDyslexic'}
                        >
                            <ul>
                                <SourcesSourceComponent
                                    source_name={
                                        'The effect of a specialized dyslexia font, OpenDyslexic, on reading rate and accuracy'
                                    }
                                    source_authors={
                                        'Jessica J. Wery, Jennifer A. Diliberto'
                                    }
                                    source_link={
                                        'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5629233/'
                                    }
                                    source_date={'Mar 2016'}
                                />
                            </ul>
                        </SourcesPageComponent>
                    </ol>
                </SourcesPageComponent>

                <SourcesPageComponent
                    page={'further-research'}
                    number={'3'}
                    claim={'Bionic Reading'}
                    is_sectionheader
                >
                    <ol className="ol_letters">
                        <SourcesPageComponent
                            page={'further-research'}
                            number={'3a'}
                            claim={'Basics of Bionic Reading'}
                        >
                            <ul>
                                <SourcesSourceComponent
                                    source_name={'Bionic Reading®'}
                                    source_authors={'Bionic Reading AG'}
                                    source_link={
                                        'https://bionic-reading.com/br-method/'
                                    }
                                />

                                <SourcesSourceComponent
                                    source_name={'What is Bionic Reading?'}
                                    source_authors={'Mark Burnell'}
                                    source_link={
                                        'https://theglowstudio.com/what-is-bionic-reading/'
                                    }
                                    source_date={'Mar 2023'}
                                />
                            </ul>
                        </SourcesPageComponent>

                        <SourcesPageComponent
                            page={'further-research'}
                            number={'3b'}
                            claim={'Effectiveness of Bionic Reading'}
                        >
                            <ul>
                                <SourcesSourceComponent
                                    source_name={
                                        'Effectiveness of Bionic Reading: Seductive Hype or Realistic Hope? 5 key questions Answered'
                                    }
                                    source_authors={'Chin Y. Kieu'}
                                    source_link={
                                        'https://www.languageeducatorsassemble.com/bionic-reading/'
                                    }
                                    source_date={'May 2023'}
                                />
                                <SourcesSourceComponent
                                    source_name={
                                        'Does Bionic Reading actually work? We timed over 2,000 readers and the results might surprise you'
                                    }
                                    source_authors={'Daniel Doyon'}
                                    source_link={
                                        'https://blog.readwise.io/bionic-reading-results/'
                                    }
                                    source_date={'Jul 2022'}
                                />
                                <SourcesSourceComponent
                                    source_name={
                                        'Can Bionic Reading make you a speed reader? Not so fast'
                                    }
                                    source_authors={'Lauren M. S. Trakhman'}
                                    source_link={
                                        'https://theconversation.com/can-bionic-reading-make-you-a-speed-reader-not-so-fast-183905'
                                    }
                                    source_date={'Jun 2022'}
                                />
                            </ul>
                        </SourcesPageComponent>
                    </ol>
                </SourcesPageComponent>

                <SourcesPageComponent
                    page={'further-research'}
                    number={'4'}
                    claim={'Plugins & Overlays'}
                    is_sectionheader
                >
                    <ul>
                        <SourcesSourceComponent
                            source_name={
                                'Overlays and Plugins Aren’t the Answer to Accessibility'
                            }
                            source_authors={'Design Domination Podcast'}
                            source_link={
                                'https://creative-boost.com/overlays-and-plugins-arent-the-answer-to-accessibility/'
                            }
                            source_date={'Apr 2020'}
                        />
                        <SourcesSourceComponent
                            source_name={
                                'Do Website Accessibility Plugins Work?'
                            }
                            source_authors={'Grayson Allen'}
                            source_link={
                                'https://careneticdigital.com/do-website-accessibility-plugins-work/'
                            }
                        />
                    </ul>
                </SourcesPageComponent>

                <SourcesPageComponent
                    page={'further-research'}
                    number={'4'}
                    claim={'Libraries'}
                    is_sectionheader
                >
                    <ul>
                        <SourcesSourceComponent
                            source_name={
                                'Practical Accessibility in Web Development'
                            }
                            source_authors={'Maria Korneeva'}
                            source_link={
                                'https://www.heise.de/hintergrund/Practical-Accessibility-in-Web-Development-9200584.html'
                            }
                            source_date={'Aug 2023'}
                        />
                        <SourcesSourceComponent
                            source_name={
                                'Accessibility Support in Web Frameworks'
                            }
                            source_authors={'Michael Longley, Yasmine Elglaly'}
                            source_link={
                                'https://www.researchgate.net/publication/355364446_Accessibility_Support_in_Web_Frameworks'
                            }
                            source_date={'Oct 2021'}
                        />
                        <SourcesSourceComponent
                            source_name={
                                'The state of accessible web UI frameworks'
                            }
                            source_authors={'Darek Kay'}
                            source_link={
                                'https://darekkay.com/blog/accessible-ui-frameworks/'
                            }
                            source_date={'May 2019'}
                        />
                    </ul>
                </SourcesPageComponent>
            </ol>
        </div>
    );
}

export default SourcesFURTHERRESEARCH;
