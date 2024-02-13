import { LinkProps } from './link.props';
import './link.css';

const Link = ({ link, text }: LinkProps) => (
    <a className="link" href={link}>
        {text}
    </a>
);

export default Link;
