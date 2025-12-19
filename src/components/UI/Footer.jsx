const Footer = () => {
    return (
        <footer className="max-w-7xl mx-auto px-4 md:max-w-full md:px-0">
            {/* Subscribe Section */}
            <section className="bg-(--secondary-red) rounded-3xl overflow-hidden md:rounded-none px-3 py-10 text-center">
                <p className="font-bold text-2xl">Stay in the Loop</p>
                <p className="text-(--secondary-text) mt-2">
                    Be the first to know when new products launch.
                </p>
                <form className="flex justify-center items-center gap-2 mt-8">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="px-3 py-4 bg-white rounded-2xl max-w-2xl w-full outline-none"
                    />
                    <button className="bg-(--primary-red) px-3 py-3 rounded-2xl">
                        <img
                            src="/src/assets/icons/send.svg"
                            className="w-8"
                            alt=""
                        />
                    </button>
                </form>
            </section>

            {/* Section Footer Services*/}
            <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-20">
                <div className="flex items-center gap-4">
                    <div className="bg-(--secondary-red) w-fit p-2 rounded-xl">
                        <img
                            src="/src/assets/icons/support.svg"
                            className="w-6"
                            alt=""
                        />
                    </div>
                    <div>
                        <p className="font-bold text-(--primary-text)">
                            Customer Support 24/7
                        </p>
                        <p className="text-(--secondary-text) text-sm">
                            Instant access to perfect support
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-(--secondary-yellow) w-fit p-2 rounded-xl">
                        <img
                            src="/src/assets/icons/truck.svg"
                            className="w-6"
                            alt=""
                        />
                    </div>
                    <div>
                        <p className="font-bold text-(--primary-text)">
                            Free Shipping & Return
                        </p>
                        <p className="text-(--secondary-text) text-sm">
                            Free worldwide shipping on all orders
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-(--secondary-green) w-fit p-2 rounded-xl">
                        <img
                            src="/src/assets/icons/crypto.svg"
                            className="w-6"
                            alt=""
                        />
                    </div>
                    <div>
                        <p className="font-bold text-(--primary-text)">
                            Pay with Crypto
                        </p>
                        <p className="text-(--secondary-text) text-sm">
                            Secure and fast cryptocurrency payments
                        </p>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
