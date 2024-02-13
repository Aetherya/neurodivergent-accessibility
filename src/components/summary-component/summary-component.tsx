import './summary-component.css';

import timer from '../../assets/icon_clock.png';
import { SummaryComponentProps } from './summary-component.props';

const SummaryComponent = ({ time, children }: SummaryComponentProps) => {
    return (
        <div className="component__summary__wrapper">
            <div className="component__summary">
                <img
                    src={timer}
                    className="component__summary__image"
                    alt="A clock icon"
                />
                Estimated Reading Time:{' '}
                <span className="bold">{time} mins</span>
            </div>
            <br />
            <p className="component__summary__title">Summary:</p>
            {children}
        </div>
    );
};

export default SummaryComponent;
