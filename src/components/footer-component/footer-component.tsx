import './footer-component.css';

const Footer = () => {
    return (
        <div className="FooterComponent__wrapper">
            <p className="FooterComponent__basedon">
                Based on the bachelor thesis and research by Vivien Kurokoshi
            </p>
            <a href="/sources">List of Sources</a>
        </div>
    );
};

export default Footer;
