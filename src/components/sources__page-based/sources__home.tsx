import SourcesPageComponent from '../sources-component/sources-page-component';
import SourcesSourceComponent from '../sources-component/sources-source-component/sources-source-component';

function SourcesHOME() {
    return (
        <div>
            <h2 id="sources_home">Home</h2>
            <hr className="header_divider" />

            <ol className="sources__outer_ol">
                <SourcesPageComponent
                    page={'home'}
                    number={'1'}
                    claim={"'Neurodiversity' explained"}
                    is_sectionheader
                >
                    <ul>
                        <SourcesSourceComponent
                            source_name={'What is Neurodiversity?'}
                            source_authors={'Genius Within'}
                            source_link={
                                'https://geniuswithin.org/what-is-neurodiversity/'
                            }
                        />
                        <SourcesSourceComponent
                            source_name={'An Introduction to Neurodiversity'}
                            source_authors={'Richard Harvey'}
                            source_link={
                                'https://www.ara.co.uk/wp-content/uploads/2023/03/An-Introduction-to-Neurodiversity.pdf'
                            }
                        />
                        <SourcesSourceComponent
                            source_name={
                                'Understanding Neurodiversity - A Guide to Specific Learning Differences'
                            }
                            source_authors={
                                'British Dyslexia Association et al.'
                            }
                            source_link={
                                'https://cdn.bdadyslexia.org.uk/uploads/documents/Dyslexia/A_Guide_to_SpLD_2nd_ed.pdf?v=1554931179'
                            }
                        />
                    </ul>
                </SourcesPageComponent>

                <SourcesPageComponent
                    page={'home'}
                    number={'2'}
                    claim={"'Neurodiversity' as an Umbrella Term"}
                    is_sectionheader
                >
                    <ul>
                        <SourcesSourceComponent
                            source_name={'Neurodiversity: An Overview'}
                            source_authors={'the education hub'}
                            source_link={
                                'https://theeducationhub.org.nz/wp-content/uploads/2020/06/Neurodiversity-An-overview.pdf'
                            }
                            source_date={'2019'}
                        />
                        <SourcesSourceComponent
                            source_name={'What is neurodiversity?'}
                            source_authors={
                                'The Institution of Engineering and Technology'
                            }
                            source_link={
                                'https://www.theiet.org/neurodiversity-in-engineering-and-technology/what-is-neurodiversity/#ref5'
                            }
                        />
                    </ul>
                </SourcesPageComponent>

                <li>
                    <span className="source__section_title">
                        Autism Spectrum Disorder (ASD)
                    </span>
                    <ol className="ol_letters">
                        <SourcesPageComponent
                            page={'home'}
                            number={'3a'}
                            claim={'What is... Autism'}
                        >
                            <ul>
                                <SourcesSourceComponent
                                    source_name={
                                        'From the CDC: Understanding Autism Spectrum Disorder'
                                    }
                                    source_authors={
                                        'Deborah Christensen, Jennifer Zubler'
                                    }
                                    source_link={
                                        'https://stacks.cdc.gov/view/cdc/107387'
                                    }
                                    source_date={'Oct 2020'}
                                />
                                <SourcesSourceComponent
                                    source_name={'Autism Overview'}
                                    source_authors={
                                        'Judith Miles, Rebecca McCathren'
                                    }
                                    source_link={
                                        'https://www.researchgate.net/publication/228533616_Autism_overview'
                                    }
                                    source_date={'Jan 2005'}
                                />
                            </ul>
                        </SourcesPageComponent>

                        <SourcesPageComponent
                            page={'home'}
                            number={'3b'}
                            claim={'The Past of Aspergers Syndrome'}
                        >
                            <ul>
                                <SourcesSourceComponent
                                    source_name={
                                        'When Asperger’s Disorder came out'
                                    }
                                    source_authors={
                                        'Chkoe Gamlin, Psychiatria Danubina'
                                    }
                                    source_link={
                                        'https://www.psychiatria-danubina.com/UserDocsImages/pdf/dnb_vol29_noSuppl%203/dnb_vol29_noSuppl%203_214.pdf'
                                    }
                                    source_date={'2017'}
                                />
                                <SourcesSourceComponent
                                    source_name={
                                        'Hans Asperger’s Nazi collusion'
                                    }
                                    source_authors={
                                        'Simon Baron-Cohen, Macmillan Publishers Ltd.'
                                    }
                                    source_link={
                                        "https://docs.autismresearchcentre.com/papers/2018_Baron-Cohen_The-Truth-About-Hans-Asperger's-Nazi-Collusion.pdf"
                                    }
                                    source_date={'May 2018'}
                                />
                                <SourcesSourceComponent
                                    source_name={
                                        "Why Asperger's Syndrome Is No Longer an Official Diagnosis"
                                    }
                                    source_authors={
                                        'Lisa Jo Rudy, verywellhealth'
                                    }
                                    source_link={
                                        'https://www.verywellhealth.com/does-asperger-syndrome-still-exist-259944'
                                    }
                                    source_date={'Dec 2023'}
                                />
                            </ul>
                        </SourcesPageComponent>

                        <SourcesPageComponent
                            page={'home'}
                            number={'3c'}
                            claim={'Web Accessibility for Autistic Users'}
                        >
                            <ul>
                                <SourcesSourceComponent
                                    source_name={
                                        'Web Accessibility for those on the Autistic Spectrum'
                                    }
                                    source_authors={'Cheryl L'}
                                    source_link={
                                        'https://medium.com/@cheryll.leungg/web-accessibility-for-those-on-the-autistic-spectrum-cc0654b91e1'
                                    }
                                    source_date={'May 2019'}
                                />
                            </ul>
                        </SourcesPageComponent>
                    </ol>
                </li>

                <li>
                    <span className="source__section_title">
                        Attention-Deficit/Hyperactivity Disorder (ADHD)
                    </span>
                    <ol className="ol_letters">
                        <SourcesPageComponent
                            page={'home'}
                            number={'4a'}
                            claim={'What is... ADHD'}
                        >
                            <ul>
                                <SourcesSourceComponent
                                    source_name={
                                        'Attention-Deficit/Hyperactivity Disorder'
                                    }
                                    source_authors={
                                        'Kelly C. Lee, Jamie Kneebusch'
                                    }
                                    source_link={
                                        'https://www.accp.com/docs/bookstore/acsap/ac2022b3_sample.pdf'
                                    }
                                    source_date={'2022'}
                                />
                                <SourcesSourceComponent
                                    source_name={
                                        'What is Attention Deficit Disorder?'
                                    }
                                    source_authors={
                                        'Essex Partnership University'
                                    }
                                    source_link={
                                        'https://eput.nhs.uk/media/pg3hls5c/attention-deficit-disorder-information-leaflet-for-parents.pdf'
                                    }
                                />
                            </ul>
                        </SourcesPageComponent>

                        <SourcesPageComponent
                            page={'home'}
                            number={'4b'}
                            claim={
                                'Symptoms and Difficulties for people with ADHD'
                            }
                        >
                            <ul>
                                <SourcesSourceComponent
                                    source_name={
                                        'Attention-Deficit/Hyperactivity Disorder in Adults: What You Need to Know'
                                    }
                                    source_authors={
                                        'National Institute of Mental Health'
                                    }
                                    source_link={
                                        'https://infocenter.nimh.nih.gov/sites/default/files/2021-12/attention-deficit-hyperactivity-disorder-in-adults-what-you-need-to-know_0.pdf'
                                    }
                                    source_date={''}
                                />
                                <SourcesSourceComponent
                                    source_name={
                                        'Attention-Deficit Hyperactivity Disorder (ADHD) in Adults'
                                    }
                                    source_authors={
                                        'Wolfgang Retz, Rachel G. Klein'
                                    }
                                    source_link={
                                        'https://www.brainmaster.com/software/pubs/brain/ADHD%20in%20Adults%20WRetz%20RGKlein.pdf'
                                    }
                                    source_date={'2010'}
                                />
                            </ul>
                        </SourcesPageComponent>

                        <SourcesPageComponent
                            page={'home'}
                            number={'4c'}
                            claim={'Web Accessibility for Users with ADHD'}
                        >
                            <ul>
                                <SourcesSourceComponent
                                    source_name={'ADHD and web accessibility'}
                                    source_authors={'Sophie Ragas'}
                                    source_link={
                                        'https://elevenways.be/en/articles/adhd-and-web-accessibility'
                                    }
                                    source_date={'Mar 2023'}
                                />
                            </ul>
                        </SourcesPageComponent>
                    </ol>
                </li>

                <li>
                    <span className="source__section_title">Dyslexia</span>
                    <ol className="ol_letters">
                        <SourcesPageComponent
                            page={'home'}
                            number={'5a'}
                            claim={'What is... Dyslexia'}
                        >
                            <ul>
                                <SourcesSourceComponent
                                    source_name={'Dyslexia Informational Paper'}
                                    source_authors={
                                        'North Dakota Department of Public Instruction'
                                    }
                                    source_link={
                                        'https://www.nd.gov/dpi/sites/www/files/documents/Academic%20Support/Dyslexia%20Info.%20Paper.2022.pdf'
                                    }
                                    source_date={'Feb 2022'}
                                />

                                <SourcesSourceComponent
                                    source_name={'Dyslexia Basics'}
                                    source_authors={
                                        'The International Dyslexia Association'
                                    }
                                    source_link={
                                        'https://app.box.com/s/1h4c6zrqcqsrgzds7u934xdjki8fl71i'
                                    }
                                    source_date={'2020'}
                                />
                            </ul>
                        </SourcesPageComponent>

                        <SourcesPageComponent
                            page={'home'}
                            number={'5b'}
                            claim={'Characteristics of Dyslexia'}
                        >
                            <ul>
                                <SourcesSourceComponent
                                    source_name={
                                        'The Handy Little Guide to Dyslexia'
                                    }
                                    source_authors={'Joanna Nijakowska'}
                                    source_link={
                                        'https://www.english.com/4aJpzQe5ynumrv3j/assets/2019/03/Dyslexia-in-the-classroom_web_compressed.pdf'
                                    }
                                    source_date={''}
                                />

                                <SourcesSourceComponent
                                    source_name={'About Dyslexia - Fact Sheet'}
                                    source_authors={
                                        'Department for Education (Government of South Australia)'
                                    }
                                    source_link={
                                        'https://www.education.sa.gov.au/docs/support-and-inclusion/practice-guidance/dyslexia-practice-guidance-fact-sheet.pdf'
                                    }
                                />
                            </ul>
                        </SourcesPageComponent>

                        <SourcesPageComponent
                            page={'home'}
                            number={'5c'}
                            claim={'Web Accessibility for Dyslexic Users'}
                        >
                            <ul>
                                <SourcesSourceComponent
                                    source_name={
                                        'Digital Accessibility - Dyslexia'
                                    }
                                    source_authors={'Harvard University'}
                                    source_link={
                                        'https://accessibility.huit.harvard.edu/disabilities/dyslexia'
                                    }
                                />

                                <SourcesSourceComponent
                                    source_name={
                                        'Improving Websites for Users with Dyslexia'
                                    }
                                    source_authors={'UserWay'}
                                    source_link={
                                        'https://userway.org/blog/improving-websites-for-users-with-dyslexia/'
                                    }
                                />
                            </ul>
                        </SourcesPageComponent>
                    </ol>
                </li>

                <li>
                    <span className="source__section_title">Dyspraxia</span>
                    <ol className="ol_letters">
                        <SourcesPageComponent
                            page={'home'}
                            number={'6a'}
                            claim={'What is... Dyspraxia'}
                        >
                            <ul>
                                <SourcesSourceComponent
                                    source_name={
                                        'Giving a Face to a Hidden Disorder: The Impact of Dyspraxia'
                                    }
                                    source_authors={'Debi J. Stansell'}
                                    source_link={
                                        'https://files.eric.ed.gov/fulltext/EJ967468.pdf'
                                    }
                                    source_date={'2007'}
                                />

                                <SourcesSourceComponent
                                    source_name={
                                        'Developmental Dyspraxia—Implications for the Child, Family and School'
                                    }
                                    source_authors={
                                        'Nsisong A. Udoh, Cornelius C. Okoro'
                                    }
                                    source_link={
                                        'https://hrmars.com/papers_submitted/467/developmental-dyspraxiaimplications-for-the-child-family-and-school.pdf'
                                    }
                                    source_date={'Sep 2023'}
                                />

                                <SourcesSourceComponent
                                    source_name={'Dyspraxia Information Sheet'}
                                    source_authors={
                                        'Cornwell Dyslexia Association'
                                    }
                                    source_link={
                                        'https://www.dyslexiacornwall.org.uk/wp-content/uploads/2016/09/3-Dyspraxia-info-sheet-2012.pdf'
                                    }
                                />
                            </ul>
                        </SourcesPageComponent>

                        <SourcesPageComponent
                            page={'home'}
                            number={'6b'}
                            claim={'Web Accessibility for Users with Dyspraxia'}
                        >
                            <ul>
                                <SourcesSourceComponent
                                    source_name={
                                        'Web Accessibility, Dyspraxia, & Supporting Neurodiversity Online'
                                    }
                                    source_authors={'Owen-James Young'}
                                    source_link={
                                        'https://reciteme.com/news/web-accessibility-dyspraxia-supporting-neurodiversity-online/'
                                    }
                                    source_date={'Nov 2020'}
                                />

                                <SourcesSourceComponent
                                    source_name={'Dyspraxia and Video Games'}
                                    source_authors={'Laura Dale'}
                                    source_link={
                                        'https://access-ability.uk/2022/04/25/dyspraxia-and-video-games/'
                                    }
                                    source_date={'Apr 2022'}
                                />
                            </ul>
                        </SourcesPageComponent>
                    </ol>
                </li>

                <SourcesPageComponent
                    page={'home'}
                    number={'7'}
                    claim={'Comorbidities'}
                    is_sectionheader
                >
                    <ul>
                        <SourcesSourceComponent
                            source_name={
                                'ASD and ADHD Comorbidity: What Are We Talking About?'
                            }
                            source_authors={
                                'Camille Hours, Christophe Recasense, Jean-Marc Baleyte'
                            }
                            source_link={
                                'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8918663/'
                            }
                            source_date={'Feb 2022'}
                        />

                        <SourcesSourceComponent
                            source_name={
                                'Mental health in autistic adults: A rapid review of prevalence of psychiatric disorders and umbrella review of the effectiveness of interventions within a neurodiversity informed perspective'
                            }
                            source_authors={'Eleanor Curnow et al.'}
                            source_link={
                                'https://pubmed.ncbi.nlm.nih.gov/37440543/'
                            }
                            source_date={'Jul 2023'}
                        />
                    </ul>
                </SourcesPageComponent>

                <SourcesPageComponent
                    page={'home'}
                    number={'8'}
                    claim={'Defining the Scope of Neurodiversity'}
                    is_sectionheader
                >
                    <ul>
                        <SourcesSourceComponent
                            source_name={
                                "Why you're probably not Neurodivergent | Revisiting Neurodiversity"
                            }
                            source_authors={'Stephannie Bethel'}
                            source_link={
                                'https://www.stephaniebethany.com/blog/why-youre-probably-not-neurodivergent-revisiting-neurodiversity'
                            }
                            source_date={'May 2021'}
                        />

                        <SourcesSourceComponent
                            source_name={'Is Anxiety Neurodivergent?'}
                            source_authors={'Ethan Cohen'}
                            source_link={
                                'https://www.charliehealth.com/post/is-anxiety-neurodivergent'
                            }
                            source_date={'Jul 2023'}
                        />

                        <SourcesSourceComponent
                            source_name={'Is OCD Neurodivergent?'}
                            source_authors={'Nicholas Furnari'}
                            source_link={
                                'https://www.choosingtherapy.com/is-ocd-neurodivergent/'
                            }
                            source_date={'Dec 2023'}
                        />
                    </ul>
                </SourcesPageComponent>

                <SourcesPageComponent
                    page={'home'}
                    number={'9'}
                    claim={
                        'General Tips on Neurodiverse Accessibility on the Web'
                    }
                    is_sectionheader
                >
                    <ul>
                        <SourcesSourceComponent
                            source_name={
                                'Making Information Accessible for Neurodivergent People: A new guide'
                            }
                            source_authors={'The Advonet Group'}
                            source_link={
                                'https://leedsautismaim.org.uk/2021/04/09/making-information-accessible-for-neurodivergent-people-a-new-guide/'
                            }
                            source_date={'Apr 2021'}
                        />
                        <SourcesSourceComponent
                            source_name={
                                'Digital Accessibility and Neurodiversity: Designing for Our Unique and Varied Brains'
                            }
                            source_authors={'WCAG'}
                            source_link={
                                'https://wcag.com/blog/digital-accessibility-and-neurodiversity/'
                            }
                            source_date={'May 2022'}
                        />
                    </ul>
                </SourcesPageComponent>
            </ol>
        </div>
    );
}

export default SourcesHOME;
