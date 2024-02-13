import { PropsWithChildren } from 'react';

export type WrapperProps = {
    sectionTitle: string;
    id?: string;
} & PropsWithChildren;
