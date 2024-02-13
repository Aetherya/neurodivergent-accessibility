import React from 'react';
import './sources-page-component.css';
import { SourcesPageComponentProps } from './sources-page-component.props';

const SourcesPageComponent = ({
    page,
    number,
    claim,
    is_quote,
    is_sectionheader,
    is_inline,
    children,
}: SourcesPageComponentProps) => {
    return (
        <li>
            <span className="anchor" id={`sources_${page}__${number}`}></span>
            <span
                className={`${is_quote ? 'source_claim' : ''} ${
                    is_sectionheader ? 'source__section_title' : ''
                }`}
            >
                {is_inline ? children : claim}
            </span>
            {!is_inline ? children : ''}
        </li>
    );
};

export default SourcesPageComponent;
