import './tldrmodal-component.css';

const TLDRModalComponent = () => {
    return (
        <div className="TLDRModalComponent__tipwrapper__outer">
            <div className="TLDRModalComponent__tipwrapper">
                <p className="TLDRModalComponent__tip">
                    <span className="bold">Tip:</span>
                    This is a brief explanation of the main point of this
                    section.
                </p>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent pretium velit arcu, eu congue justo sodales eu.
                Pellentesque laoreet consequat aliquam. Nam vel ullamcorper
                eros. <span className="bold">Vestibulum venenatis</span> arcu
                erat, sed blandit arcu bibendum eget. Pellentesque sed feugiat
                quam. Sed lacus diam, cursus nec maximus sed,{' '}
                <span className="bold">mollis vel nisl</span>. Sed at metus vel
                ipsum dignissim sagittis. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Integer
                condimentum diam a interdum lacinia.{' '}
                <span className="bold">
                    Nulla pretium, magna sed fermentum laoreet, nulla lorem
                    pulvinar justo
                </span>
                , eu tempor odio diam in massa.
            </p>

            <br />

            <p>
                Vivamus rutrum orci et enim sodales pellentesque. Integer vitae
                varius turpis. Duis ac metus non risus mollis finibus non eu
                arcu. Sed nisi dui, facilisis sit amet vestibulum quis, pharetra
                vitae arcu. Nam egestas finibus libero, quis commodo turpis
                fringilla at.{' '}
                <span className="bold">
                    Quisque tempus ipsum sit amet leo fringilla venenatis.
                </span>{' '}
                Integer rhoncus ornare hendrerit.
            </p>
        </div>
    );
};

export default TLDRModalComponent;
