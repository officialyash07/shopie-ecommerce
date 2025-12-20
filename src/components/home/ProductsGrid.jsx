import ProductCard from "./ProductCard";

const ProductsGrid = ({
    products,
    currentPage,
    totalPages,
    totalProducts,
    onPageChange,
    categories,
    filters,
    onFilterChange,
}) => {
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) pages.push(i);
                pages.push("...");
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push("...");
                for (let i = totalPages - 3; i <= totalPages; i++)
                    pages.push(i);
            } else {
                pages.push(1);
                pages.push("...");
                pages.push(currentPage - 1);
                pages.push(currentPage);
                pages.push(currentPage + 1);
                pages.push("...");
                pages.push(totalPages);
            }
        }
        return pages;
    };

    const handleCategoryClick = (categoryId) => {
        onFilterChange({
            ...filters,
            categoryId: categoryId === filters.categoryId ? null : categoryId,
        });
    };

    return (
        <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-xl font-bold">Products</h2>
                    <p className="text-sm text-(--secondary-text)">
                        Found {totalProducts} items
                    </p>
                </div>

                <button className="flex items-center gap-2 border px-4 py-2 rounded-full text-sm md:hidden">
                    <img
                        src="/src/assets/icons/filter.svg"
                        alt=""
                        className="w-5 h-5"
                    />
                    Filter
                </button>
            </div>

            {/* Categories (mobile) */}
            <div className="flex gap-3 overflow-x-auto pb-4 sm:hidden">
                <button
                    onClick={() => handleCategoryClick(null)}
                    className={`px-4 py-2 rounded-full border whitespace-nowrap text-sm ${
                        !filters.categoryId
                            ? "bg-(--primary-red) text-white"
                            : ""
                    }`}
                >
                    All
                </button>
                {categories?.slice(0, 5).map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className={`px-4 py-2 rounded-full border whitespace-nowrap text-sm ${
                            filters.categoryId === category.id
                                ? "bg-(--primary-red) text-white"
                                : ""
                        }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 min-[350px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-8">
                    {getPageNumbers().map((page, index) =>
                        page === "..." ? (
                            <span key={`ellipsis-${index}`}>...</span>
                        ) : (
                            <button
                                key={page}
                                onClick={() => onPageChange(page)}
                                className={`${
                                    currentPage === page
                                        ? "underline font-bold text-(--primary-red)"
                                        : ""
                                }`}
                                style={{
                                    color: "text-(--secondary-text)",
                                    cursor: "pointer",
                                }}
                            >
                                {page}
                            </button>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductsGrid;
