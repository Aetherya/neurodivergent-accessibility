import './wrapper-component.css';
import { WrapperProps } from './wrapper-component.props';

const WrapperComponent = ({ sectionTitle, children, id }: WrapperProps) => {
    return (
        <div className="wrapperComponent" id={id}>
            {
                // Section Title
            }
            <h3 className="wrapperComponent__title">{sectionTitle}</h3>

            <div className="wrapperComponent__flex">{children}</div>
        </div>
    );
};

export default WrapperComponent;
