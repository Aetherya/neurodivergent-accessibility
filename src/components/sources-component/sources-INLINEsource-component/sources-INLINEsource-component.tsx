import React, { useState } from 'react';
import { SourcesSourceComponentProps } from './sources-INLINEsource-component.props';

const SourcesINLINESourceComponent = ({
    source_name,
    source_date,
    source_authors,
    source_link,
}: SourcesSourceComponentProps) => {
    return (
        <div>
            <a href={source_link} className="bold" target="_blank">
                {source_name}
            </a>{' '}
            {source_date ? (
                <span className="source_date">({source_date}) </span>
            ) : null}
            - {source_authors}
        </div>
    );
};

export default SourcesINLINESourceComponent;
