import React from 'react';
import { useState } from 'react';
import './tooltip-component.css';
import { TooltipComponentProps } from './tooltip-component.props';

const TooltipComponent = ({
    children,
    tooltip_description,
}: TooltipComponentProps) => {
    const [hover, setHover] = useState('');

    const showButton = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        setHover('tooltipComponent__tip__show');
    };

    const hideButton = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        setHover('');
    };

    return (
        <div className="tooltipComponent__wrapper">
            <div className={`tooltipComponent__tip ${hover}`}>
                <span>{tooltip_description}</span>
                <div className="tooltipComponent__tip__after"></div>
            </div>

            <div
                onMouseEnter={e => showButton(e)}
                onMouseLeave={e => hideButton(e)}
            >
                {children}
            </div>
        </div>
    );
};

export default TooltipComponent;
