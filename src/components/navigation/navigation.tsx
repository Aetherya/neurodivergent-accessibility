import { NavigationProps } from './navigation.props';
import './navigation.css';

const Navigation = ({ links }: NavigationProps) => (
    <nav className="navigation">
        <div className="navigation__elements">
            {links.map(({ link, text }, index) => (
                <>
                    <a href={link} className="navigation__item">
                        {text}
                    </a>
                    {index !== links.length - 1 ? (
                        <span className="navigation__divider"></span>
                    ) : null}
                </>
            ))}
        </div>

        <hr className="navigation__hr" />
    </nav>
);

export default Navigation;
