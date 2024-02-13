import SourcesPageComponent from '../sources-component/sources-page-component';
import SourcesSourceComponent from '../sources-component/sources-source-component/sources-source-component';

function SourcesRESOURCES() {
    return (
        <div>
            <h2 id="sources_resources">Resources</h2>
            <hr className="header_divider" />

            <ol>
                <SourcesPageComponent
                    page={'resources'}
                    number={'1'}
                    claim={''}
                >
                    <ul>
                        <SourcesSourceComponent
                            source_name={''}
                            source_authors={''}
                            source_link={''}
                            source_date={''}
                        />
                    </ul>
                </SourcesPageComponent>
            </ol>
            {/*
                    OPTION 1
                    <SourcesPageComponent
                        page={'goals'}
                        number={''}
                        claim={''}
                        is_inline
                    >
                        <SourcesINLINESourceComponent
                            source_name={''}
                        source_authors={''}
                        source_link={''}
                        source_date={''}
                        />
                    </SourcesPageComponent>

                    OPTION TWO
                    <SourcesSourceComponent
                        source_name={''}
                        source_authors={''}
                        source_link={''}
                        source_date={''}
                    />

                    OPTION THREE
                    <SourcesPageComponent
                        page={'goals'}
                        number={''}
                        claim={''}
                        is_sectionheader
                    >
                        <ul>
                            <SourcesSourceComponent
                                source_name={''}
                                source_authors={''}
                                source_link={''}
                                source_date={''}
                            />
                        </ul>
                    </SourcesPageComponent>
                */}
        </div>
    );
}

export default SourcesRESOURCES;
