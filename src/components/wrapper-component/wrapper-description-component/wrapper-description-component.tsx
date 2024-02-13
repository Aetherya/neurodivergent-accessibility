import './wrapper-description-component.css';
import { WrapperDescriptionProps } from './wrapper-description-component.props';

const WrapperDescriptionComponent = ({ children }: WrapperDescriptionProps) => {
    return <div className="wrapperComponent__description">{children}</div>;
};

export default WrapperDescriptionComponent;
