import React, { useState } from 'react';
import './sources-source-component.css';
import { SourcesSourceComponentProps } from './sources-source-component.props';

const SourcesSourceComponent = ({
    source_name,
    source_date,
    source_authors,
    source_link,
}: SourcesSourceComponentProps) => {
    return (
        <li>
            <a href={source_link} className="bold" target="_blank">
                {source_name}
            </a>{' '}
            {source_date ? (
                <span className="source_date">({source_date}) </span>
            ) : null}
            - {source_authors}
        </li>
    );
};

export default SourcesSourceComponent;
