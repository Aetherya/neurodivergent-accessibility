import SourcesPageComponent from '../sources-component/sources-page-component';
import SourcesSourceComponent from '../sources-component/sources-source-component/sources-source-component';

function SourcesASSETS() {
    return (
        <div>
            <h2 id="sources_home">Assets</h2>
            <hr className="header_divider" />

            <p>
                All assets were obtained in accordance to the respective Usage
                License by the following hosting platforms and providers:
            </p>

            <ol className="sources__outer_ol">
                <SourcesPageComponent
                    page={'assets'}
                    number={'1'}
                    claim={'Icons / Favicon'}
                    is_sectionheader
                >
                    {' '}
                    from{' '}
                    <a href="https://www.freepikcompany.com/legal#nav-flaticon-agreement">
                        Flaticon
                    </a>
                    <ol className="ol_letters">
                        <li>Favicon</li>
                        <ul>
                            <SourcesSourceComponent
                                source_name={'Favicon'}
                                source_authors={'freepik'}
                                source_link={
                                    'https://www.flaticon.com/free-icon/web-design_5334532'
                                }
                            />
                        </ul>

                        <li>UI Elements</li>
                        <ul>
                            <SourcesSourceComponent
                                source_name={'Warning Icon'}
                                source_authors={'freepik'}
                                source_link={
                                    'https://www.flaticon.com/free-icon/warning-sign_4842436'
                                }
                            />
                            <SourcesSourceComponent
                                source_name={'Clock Icon'}
                                source_authors={'freepik'}
                                source_link={
                                    'https://www.flaticon.com/free-icon/clock_2924574'
                                }
                            />
                            <SourcesSourceComponent
                                source_name={'Hamburger Icon'}
                                source_authors={'Mayor Icons'}
                                source_link={
                                    'https://www.flaticon.com/free-icon/hamburger_7580385'
                                }
                            />
                            <SourcesSourceComponent
                                source_name={'Palette'}
                                source_authors={'Hilmy Abiyyu A.'}
                                source_link={
                                    'https://www.flaticon.com/free-icon/art-studies_5404889'
                                }
                            />
                            <SourcesSourceComponent
                                source_name={'Writing Icon'}
                                source_authors={'freepik'}
                                source_link={
                                    'https://www.flaticon.com/free-icon/edit_3597088'
                                }
                            />
                            <SourcesSourceComponent
                                source_name={'Gallery Icon'}
                                source_authors={'Kiranshastry'}
                                source_link={
                                    'https://www.flaticon.com/free-icon/gallery_833367'
                                }
                            />
                            <SourcesSourceComponent
                                source_name={'Misc Icon'}
                                source_authors={'Phoenix Group'}
                                source_link={
                                    'https://www.flaticon.com/free-icon/option_3018978'
                                }
                            />
                        </ul>

                        <li>Social Post Mock-Up</li>
                        <ul>
                            <SourcesSourceComponent
                                source_name={'Avatar Icon'}
                                source_authors={'Senapedia'}
                                source_link={
                                    'https://www.flaticon.com/free-icon/user-avatar_5423237'
                                }
                            />
                            <SourcesSourceComponent
                                source_name={'Smiling Icon'}
                                source_authors={'icon mania'}
                                source_link={
                                    'https://www.flaticon.com/free-icon/smiley_10252268'
                                }
                            />
                            <SourcesSourceComponent
                                source_name={'Happy Icon'}
                                source_authors={'freepik'}
                                source_link={
                                    'https://www.flaticon.com/free-icon/smiley_5501973'
                                }
                            />
                            <SourcesSourceComponent
                                source_name={'Sarcastic Icon'}
                                source_authors={'freepik'}
                                source_link={
                                    'https://www.flaticon.com/free-icon/suspicious_7621034'
                                }
                            />
                            <SourcesSourceComponent
                                source_name={'Emojis Icon'}
                                source_authors={'Us and Up'}
                                source_link={
                                    'https://www.flaticon.com/free-icon/happy-face_8082336'
                                }
                            />
                            <SourcesSourceComponent
                                source_name={'Gallery Icon'}
                                source_authors={'iamkikirizky'}
                                source_link={
                                    'https://www.flaticon.com/free-icon/gallery_12964526'
                                }
                            />
                            <SourcesSourceComponent
                                source_name={'Schedule Icon'}
                                source_authors={'freepik'}
                                source_link={
                                    'https://www.flaticon.com/free-icon/schedule_4270649'
                                }
                            />
                        </ul>

                        <li>Video Player Mock-Up</li>
                        <ul>
                            <SourcesSourceComponent
                                source_name={'Play Icon'}
                                source_authors={'Icon mania'}
                                source_link={
                                    'https://www.flaticon.com/free-icon/play_12794491'
                                }
                            />
                            <SourcesSourceComponent
                                source_name={'Volume Icon'}
                                source_authors={'freepik'}
                                source_link={
                                    'https://www.flaticon.com/free-icon/volume_7566455'
                                }
                            />
                            <SourcesSourceComponent
                                source_name={'Captions Icon'}
                                source_authors={'Icon mania'}
                                source_link={
                                    'https://www.flaticon.com/free-icon/cc_12794398'
                                }
                            />
                            <SourcesSourceComponent
                                source_name={'Setting Icon'}
                                source_authors={'shin_icons'}
                                source_link={
                                    'https://www.flaticon.com/free-icon/setting_9218716'
                                }
                            />
                        </ul>
                    </ol>
                </SourcesPageComponent>

                <SourcesPageComponent
                    page={'assets'}
                    number={'2'}
                    claim={'Stock Images'}
                    is_sectionheader
                >
                    {' '}
                    from <a href="https://www.pexels.com/license/">Pexels</a>
                    <ul>
                        <SourcesSourceComponent
                            source_name={'Home Hero Image'}
                            source_authors={'Monstera Production'}
                            source_link={
                                'https://www.pexels.com/photo/cheerful-female-browsing-smartphone-at-home-5302941/'
                            }
                        />
                        <SourcesSourceComponent
                            source_name={'Goals Hero'}
                            source_authors={'Ivan Samkov'}
                            source_link={
                                'https://www.pexels.com/photo/photo-of-woman-taking-notes-4458554/'
                            }
                        />
                        {/* <SourcesSourceComponent
                            source_name={'Resources Hero'}
                            source_authors={'Vlada Karpovich'}
                            source_link={
                                'https://www.pexels.com/photo/thoughtful-woman-with-cup-of-drink-browsing-laptop-in-bed-4050406/'
                            }
                        /> */}
                        <SourcesSourceComponent
                            source_name={'Further Research Hero'}
                            source_authors={'Armin Rimoldi'}
                            source_link={
                                'https://www.pexels.com/photo/positive-young-men-working-on-laptop-5553727/'
                            }
                        />
                        <SourcesSourceComponent
                            source_name={'Component Library Hero'}
                            source_authors={'Charlotte May'}
                            source_link={
                                'https://www.pexels.com/de-de/foto/mann-und-frau-sitzen-auf-grunem-gras-5965898/'
                            }
                        />
                        <SourcesSourceComponent
                            source_name={'Sources Hero'}
                            source_authors={'Katrin Bolovtsova'}
                            source_link={
                                'https://www.pexels.com/photo/photo-of-man-sitting-on-sofa-4048769/'
                            }
                        />
                    </ul>
                </SourcesPageComponent>

                <SourcesPageComponent
                    page={'assets'}
                    number={'3'}
                    claim={'Illustrations'}
                    is_sectionheader
                >
                    {' '}
                    from <a href="https://storyset.com/terms">Storyset</a>
                    <ul>
                        <SourcesSourceComponent
                            source_name={'Info: Autism'}
                            source_authors={'freepik'}
                            source_link={
                                'https://storyset.com/illustration/world-emoji-day/bro'
                            }
                        />
                        <SourcesSourceComponent
                            source_name={'Info: Dyslexia'}
                            source_authors={'freepik'}
                            source_link={
                                'https://storyset.com/illustration/poetry/amico'
                            }
                        />
                        <SourcesSourceComponent
                            source_name={'Info: Diversity'}
                            source_authors={'freepik'}
                            source_link={
                                'https://storyset.com/illustration/community/pana'
                            }
                        />
                    </ul>
                </SourcesPageComponent>

                <SourcesPageComponent
                    page={'assets'}
                    number={'4'}
                    claim={'Additional Assets'}
                    is_sectionheader
                >
                    <ul>
                        <SourcesSourceComponent
                            source_name={
                                'What is Neurodiversity? | A Quick Guide to Neurodiversity for Educators | Twinkl'
                            }
                            source_authors={'Twinkl Educational Publishing'}
                            source_link={
                                'https://www.youtube.com/watch?v=8YHom6Xs0oQ'
                            }
                        />
                        <SourcesSourceComponent
                            source_name={
                                'Audio Transcript File: Closer by Nellie Mar'
                            }
                            source_authors={'saavane'}
                            source_link={
                                'https://pixabay.com/music/pop-country-pop-song-closer-by-nellie-mar-138503/'
                            }
                        />
                    </ul>
                </SourcesPageComponent>
            </ol>
        </div>
    );
}

export default SourcesASSETS;
