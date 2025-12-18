import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 md:max-w-full md:px-0">
            <div className="bg-(--secondary-red) rounded-3xl overflow-hidden md:rounded-none">
                <div className="max-w-7xl mx-auto flex flex-col min-[450px]:flex-row items-center">
                    {/* LEFT CONTENT */}
                    <div className="w-full md:w-1/2 p-6 md:p-12">
                        {/* Badge */}
                        <span className="inline-block bg-white text-(--primary-red) text-xs font-semibold px-4 py-1 rounded-md">
                            NEW SEASON
                        </span>

                        {/* Heading */}
                        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-(--primary-text) leading-tight">
                            Summer <br />
                            Collection
                        </h1>

                        {/* Description */}
                        <p className="mt-4 text-(--secondary-text) text-sm md:text-base">
                            Up to 50% off on new arrivals.
                        </p>

                        {/* CTA */}
                        <button className="mt-6 bg-(--primary-red) hover:bg-[#ff5c4d] text-white font-semibold px-8 py-3 rounded-full shadow-md transition">
                            Shop Now
                        </button>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-full md:w-1/2 bg-(--secondary-red) flex justify-center items-end">
                        <img
                            src="/src/assets/images/model.jpg"
                            alt="Summer Collection Model"
                            className="max-h-105 object-contain rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
