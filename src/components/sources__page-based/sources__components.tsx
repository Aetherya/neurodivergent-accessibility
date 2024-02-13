import SourcesPageComponent from '../sources-component/sources-page-component';
import SourcesSourceComponent from '../sources-component/sources-source-component/sources-source-component';

function SourcesCOMPONENTS() {
    return (
        <div>
            <h2 id="sources_components">Component Library</h2>
            <hr className="header_divider" />

            <ol>
                <SourcesPageComponent
                    page={'components'}
                    number={'1'}
                    claim={'Colour Theory'}
                    is_sectionheader
                >
                    <ul>
                        <SourcesSourceComponent
                            source_name={
                                'User Interface for People with Autism Spectrum Disorders'
                            }
                            source_authors={'Nikolay Pavlov'}
                            source_link={
                                'https://www.researchgate.net/publication/276495184_User_Interface_for_People_with_Autism_Spectrum_Disorders'
                            }
                            source_date={'Jan 2014'}
                        />
                        <SourcesSourceComponent
                            source_name={
                                'Good Background Colors for Readers: A Study of People with and without Dyslexia'
                            }
                            source_authors={'Luz Rello, Jeffrey P. Bigham'}
                            source_link={
                                'https://www.cs.cmu.edu/~jbigham/pubs/pdfs/2017/colors.pdf'
                            }
                            source_date={'Nov 2017'}
                        />
                        <SourcesSourceComponent
                            source_name={
                                'Autism Accessibility Guidelines research project'
                            }
                            source_authors={'hassell inclusion'}
                            source_link={
                                'https://dy55nndrxke1w.cloudfront.net/file/24/E0xBd-SE0PKVva5E0f_ZEHKO6YP/Autism%20Accessibility%20Guidelines%20Research%20Final%20Report%20-%20HI%20for%20National%20Autistic%20Society%20-%20tagged.pdf'
                            }
                            source_date={'Sep 2019'}
                        />
                        <SourcesSourceComponent
                            source_name={
                                'Atypical Color Preference in Children with Autism Spectrum Disorder'
                            }
                            source_authors={
                                'Marine Grandgeorge, Nobuo Masataka'
                            }
                            source_link={
                                'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2016.01976/full'
                            }
                            source_date={'Dec 2016'}
                        />
                    </ul>
                </SourcesPageComponent>

                <li>
                    <span className="source__section_title">Typography</span>
                    <ol className="ol_letters">
                        <SourcesPageComponent
                            page={'components'}
                            number={'2a'}
                            claim={'Font Choice'}
                        >
                            <ul>
                                <SourcesSourceComponent
                                    source_name={'Good Fonts for Dyslexia'}
                                    source_authors={
                                        'Luz Rello, Ricardo Baeza-Yates'
                                    }
                                    source_link={
                                        'https://dyslexiahelp.umich.edu/sites/default/files/good_fonts_for_dyslexia_study.pdf'
                                    }
                                    source_date={'2013'}
                                />
                                <SourcesSourceComponent
                                    source_name={
                                        'How to design visual learning resources for neurodiverse students'
                                    }
                                    source_authors={'Evan Brown'}
                                    source_link={
                                        'https://www.fullfabric.com/articles/how-to-design-visual-learning-resources-for-neurodiverse-students'
                                    }
                                    source_date={'Dec 2023'}
                                />

                                <SourcesSourceComponent
                                    source_name={
                                        'What Is The Best Font for ADHD?'
                                    }
                                    source_authors={'Laly York'}
                                    source_link={
                                        'https://neurodivergent.blog/what-is-the-best-font-for-adhd/'
                                    }
                                    source_date={'Nov 2022'}
                                />
                                <SourcesSourceComponent
                                    source_name={'Will Soward'}
                                    source_authors={
                                        'Considering Typography for Neurotypes'
                                    }
                                    source_link={
                                        'https://www.linkedin.com/pulse/considering-typography-neurotypes-will-soward/'
                                    }
                                    source_date={'Jun 2022'}
                                />
                                <SourcesSourceComponent
                                    source_name={
                                        'Is Comic Sans Easier for Dyslexic Users to Read?'
                                    }
                                    source_authors={'Creative Market'}
                                    source_link={
                                        'https://creativemarket.com/blog/is-comic-sans-easier-for-dyslexic-users-to-read'
                                    }
                                    source_date={'Mar 2021'}
                                />
                                <SourcesSourceComponent
                                    source_name={'Font'}
                                    source_authors={'Will Soward'}
                                    source_link={
                                        'https://neurodiversity.design/principles/font/'
                                    }
                                    source_date={'Nov 2023'}
                                />
                            </ul>
                        </SourcesPageComponent>

                        <SourcesPageComponent
                            page={'components'}
                            number={'2b'}
                            claim={'Font Styling'}
                        >
                            <ul>
                                <SourcesSourceComponent
                                    source_name={
                                        'Dyslexia Fonts: Which fonts best support dyslexic learners with reading?'
                                    }
                                    source_authors={'Hannah Lawrence'}
                                    source_link={
                                        'https://www.twinkl.com/blog/dyslexia-fonts-which-fonts-best-support-dyslexic-learners-with-reading'
                                    }
                                />
                                <SourcesSourceComponent
                                    source_name={'Typography'}
                                    source_authors={'Will Soward'}
                                    source_link={
                                        'https://neurodiversity.design/principles/typography/'
                                    }
                                    source_date={'Nov 2023'}
                                />
                                <SourcesSourceComponent
                                    source_name={
                                        'Web design for neurodiversity: Creating a more inclusive web'
                                    }
                                    source_authors={'Kalina Tyrkiel'}
                                    source_link={
                                        'https://www.wix.com/studio/blog/what-is-neurodiversity-in-web-design'
                                    }
                                    source_date={'Feb 2021'}
                                />
                                <SourcesSourceComponent
                                    source_name={'Dyslexia Style Guide.'}
                                    source_authors={
                                        'British Dyslexia Association'
                                    }
                                    source_link={
                                        'https://www2.worc.ac.uk/disabilityanddyslexia/content_images/BDA_Dyslexia_Style_Guide.pdf'
                                    }
                                />
                            </ul>
                        </SourcesPageComponent>
                    </ol>
                </li>

                <SourcesPageComponent
                    page={'components'}
                    number={'3'}
                    claim={'Time Blindness'}
                    is_sectionheader
                >
                    <ul>
                        <SourcesSourceComponent
                            source_name={
                                'Time Perception is a Focal Symptom of Attention-Deficit/Hyperactivity Disorder in Adults'
                            }
                            source_authors={'Simon Weissenberger et al.'}
                            source_link={
                                'https://www.researchgate.net/publication/353252580_Time_Perception_is_a_Focal_Symptom_of_Attention-DeficitHyperactivity_Disorder_in_Adults'
                            }
                            source_date={'Jul 2021'}
                        />
                    </ul>
                </SourcesPageComponent>

                <SourcesPageComponent
                    page={'components'}
                    number={'4'}
                    claim={'Neurodiverse Communication'}
                    is_sectionheader
                >
                    <ul>
                        <SourcesSourceComponent
                            source_name={
                                'IS THAT CLEAR?: Effective communication in a neurodiverse world'
                            }
                            source_authors={
                                'Kathryn Alevizos, Joe Butlet, Zanne Gaynor'
                            }
                            source_link={
                                'https://www.goodreads.com/en/book/show/55614175'
                            }
                            source_date={'Sep 2020'}
                        />

                        <SourcesSourceComponent
                            source_name={
                                'Lost in Translation: The Social Language Theory of Neurodivergence'
                            }
                            source_authors={'Janae Elisabeth'}
                            source_link={
                                'https://autietraumageek.medium.com/lost-in-translation-the-social-language-theory-of-neurodivergence-part-1-of-2-1963ba0073c5'
                            }
                            source_date={'May 2020'}
                        />

                        <SourcesSourceComponent
                            source_name={
                                'Making Content Accessible to a Neurodivergent Audience: A Guide for Technical Writers'
                            }
                            source_authors={'Team Tucows'}
                            source_link={
                                'https://storiesfromtheherd.com/making-content-accessible-to-a-neurodivergent-audience-a-guide-for-technical-writers-1965668372e'
                            }
                            source_date={'Jun 2023'}
                        />

                        <SourcesSourceComponent
                            source_name={
                                'Verbal creativity in autism: comprehension and generation of metaphoric language in high-functioning autism spectrum disorder and typical development'
                            }
                            source_authors={'Anat Kasirer, Nira Mashal'}
                            source_link={
                                'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4128218/'
                            }
                            source_date={'Aug 2014'}
                        />
                    </ul>
                </SourcesPageComponent>

                <SourcesPageComponent
                    page={'components'}
                    number={'5'}
                    claim={'Tone Indicators'}
                    is_sectionheader
                >
                    <ul>
                        <SourcesSourceComponent
                            source_name={'tone indicators'}
                            source_authors={'anonymous'}
                            source_link={'https://toneindicators.carrd.co/'}
                        />
                        <SourcesSourceComponent
                            source_name={
                                'Analysing The Meaning Of Tone Indicators By Neurodivergent Community in Twitter'
                            }
                            source_authors={
                                'Maria F. Christanti, Pru B. Mardani, Khansa A. Fadhila'
                            }
                            source_link={
                                'https://ijssrr.com/journal/article/view/118'
                            }
                            source_date={'Jan 2022'}
                        />
                        <SourcesSourceComponent
                            source_name={
                                'How do Neurodivergent People Engage with Tone in Digital Spaces? - A Study on the Written Expression of Tone and Intent'
                            }
                            source_authors={'Sydney Hadden'}
                            source_link={
                                'https://keep.lib.asu.edu/system/files/c7/Hadden_asu_0010N_22931.pdf'
                            }
                            source_date={'May 2023'}
                        />
                    </ul>
                </SourcesPageComponent>

                <SourcesPageComponent
                    page={'components'}
                    number={'6'}
                    claim={'Audio-Visual Input'}
                    is_sectionheader
                >
                    <ul>
                        <SourcesSourceComponent
                            source_name={
                                'Audiovisual Multisensory Integration and Evoked Potentials in Young Adults With and Without Attention-Deficit/Hyperactivity Disorder'
                            }
                            source_authors={'Heather S. McCracken et al.'}
                            source_link={
                                'https://www.frontiersin.org/articles/10.3389/fnhum.2019.00095/full'
                            }
                            source_date={'Mar 2019'}
                        />
                        <SourcesSourceComponent
                            source_name={
                                'Unveiling Technorelief: Enhancing Neurodiverse Collaboration with Media Capabilities'
                            }
                            source_authors={'Maylis Saigot'}
                            source_link={
                                'https://arxiv.org/ftp/arxiv/papers/2310/2310.00949.pdf'
                            }
                        />
                    </ul>
                </SourcesPageComponent>

                <SourcesPageComponent
                    page={'components'}
                    number={'7'}
                    claim={'Video Captions'}
                    is_sectionheader
                >
                    <ul>
                        <SourcesSourceComponent
                            source_name={
                                '"Hey, Can You Add Captions?": The Critical Infrastructuring Practices of Neurodiverse People on TikTok'
                            }
                            source_authors={
                                'Ellen Simpson, Samantha Dalal, Bryan Semaan'
                            }
                            source_link={
                                'https://www.researchgate.net/publication/366247320_Hey_Can_You_Add_Captions_The_Critical_Infrastructuring_Practices_of_Neurodiverse_People_on_TikTok'
                            }
                            source_date={'Dec 2022'}
                        />
                        <SourcesSourceComponent
                            source_name={'Closed Captions and Neurodivergence'}
                            source_authors={'Allison Murray-Nikkel'}
                            source_link={
                                'https://empirecaptions.com/closed-captions-and-neurodivergence/'
                            }
                            source_date={'Dec 2021'}
                        />
                    </ul>
                </SourcesPageComponent>
            </ol>
        </div>
    );
}

export default SourcesCOMPONENTS;
