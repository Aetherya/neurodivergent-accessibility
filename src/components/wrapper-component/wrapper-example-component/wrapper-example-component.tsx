import './wrapper-example-component.css';
import { WrapperExampleProps } from './wrapper-example-component.props';

const WrapperExampleComponent = ({ children }: WrapperExampleProps) => {
    return (
        <div className="wrapperComponentExample">
            <div className="wrapperComponent__example">{children}</div>
        </div>
    );
};

export default WrapperExampleComponent;
