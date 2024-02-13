import { PropsWithChildren } from 'react';

export type SourcesPageComponentProps = {
    page: string;
    number: string;
    claim: string;
    is_quote?: boolean;
    is_sectionheader?: boolean;
    is_inline?: boolean;
} & PropsWithChildren;
