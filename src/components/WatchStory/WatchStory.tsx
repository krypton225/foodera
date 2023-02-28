import { Parallax1 } from "../../data/Photos";

const WatchStory = () => {
    return (
        <div className="w-full min-h-[10rem] h-[36rem] relative py-20 text-center bg-cover bg-center"
            style={{ backgroundImage: `url('${Parallax1}')` }}>
            <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%]">
                <p className="w-[90%] md:w-[60%] lg:w-[68%] mx-auto text-2xl md:text-3xl lg:text-5xl text-primary-light font-medium">
                    When a man's stomach is full it makes no difference whether he is rich or poor
                </p>

                <p className="w-[90%] lg:w-[55%] mt-9 mx-auto text-base lg:text-lg text-slate-600 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates nobis corporis at iste voluptate tempore ab voluptatem a!
                    Odio ex rerum laudantium non eos minima recusandae.
                </p>
            </div>
        </div>
    );
};

export default WatchStory;