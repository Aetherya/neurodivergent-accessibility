import React from 'react';
import './source-link-component.css';
import { SourceLinkComponentProps } from './source-link-component.props';
import { Link } from 'react-router-dom';

const SourceLinkComponent = ({
    page,
    number,
    text,
    dark_mode,
}: SourceLinkComponentProps) => {
    return (
        <Link
            to={`/sources#sources_${page}__${number}`}
            className={`source_link ${dark_mode ? 'link__dark' : ''}`}
        >
            {text ? text : number}
        </Link>
    );
};

export default SourceLinkComponent;
