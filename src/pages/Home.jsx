import { useState } from "react";
import Hero from "../components/home/Hero";
import ProductsGrid from "../components/home/ProductsGrid";
import Filters from "../components/home/Filters";

import { useProducts, useCategories } from "../hooks/useProducts";

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({
        categoryId: null,
        price_min: null,
        price_max: null,
    });
    const productsPerPage = 10;

    const { data, isLoading, isError } = useProducts(filters);
    const { data: categories, isLoading: categoriesLoading } = useCategories();

    if (isLoading || categoriesLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Failed to load Products.</p>;
    }

    // Filter categories up to and including Miscellaneous
    const filteredCategories =
        categories?.slice(
            0,
            categories.findIndex(
                (cat) => cat.name.toLowerCase() === "miscellaneous"
            ) + 1
        ) || [];

    // Calculate pagination
    const totalProducts = data?.length || 0;
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        setCurrentPage(1); // Reset to first page when filters change
    };

    return (
        <div id="homepage" className="py-3">
            <Hero />
            {/* Shop Display Section */}
            <section className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Sidebar */}
                    <Filters
                        categories={filteredCategories}
                        filters={filters}
                        onFilterChange={handleFilterChange}
                    />

                    {/* Products */}
                    <ProductsGrid
                        products={currentProducts}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        totalProducts={totalProducts}
                        onPageChange={handlePageChange}
                        categories={filteredCategories}
                        filters={filters}
                        onFilterChange={handleFilterChange}
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;
