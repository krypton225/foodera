import linksItems from "./links-data";
import socialDataItems from "./social-data";

const Footer = () => {
    return (
        <footer className="w-full py-[5rem] lg:py-[8rem] bg-primary-light text-white text-center">
            <div className="container">
                <div className="w-full lg:max-w-[35rem] mx-0 lg:mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        linksItems.map(({ id, text, url }) => (
                            <a key={id} href={url} className="my-3 lg:my-2 capitalize text-xl lg:text-2xl">{text}</a>
                        ))
                    }
                </div>

                <div className="mt-12">
                    {
                        socialDataItems.map(({ id, iconClassName, url, titleText }) => (
                            <a key={id} href={url} title={titleText} className="text-2xl lg:text-3xl" target="_blank" aria-label={titleText}>
                                <i className={iconClassName}></i>
                            </a>
                        ))
                    }
                </div>

                <p className="mt-16 text-lg">
                    &copy; 2021. Foodera. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;