import linksItems from "./links-data";

const Footer = () => {
    return (
        <footer className="w-full py-[5rem] lg:py-[8rem] bg-primary-light text-white text-center">
            <div className="container">
                <div className="w-full grid grid-cols-2 lg:grid-cols-4 text-start lg:text-center">
                    {
                        linksItems.map(({ id, text, url }) => (
                            <a key={id} href={url} className="my-3 lg:my-2 capitalize text-xl lg:text-2xl">{text}</a>
                        ))
                    }
                </div>
            </div>
        </footer>
    );
};

export default Footer;