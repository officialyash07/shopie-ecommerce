import Hero from "../components/home/Hero";
import ProductsGrid from "../components/home/ProductsGrid";
import Filters from "../components/home/Filters";

const Home = () => {
    return (
        <div id="homepage" className="py-3">
            <Hero />
            {/* Shop Display Section */}
            <section className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Sidebar */}
                    <Filters />

                    {/* Products */}
                    <ProductsGrid />
                </div>
            </section>
        </div>
    );
};

export default Home;
