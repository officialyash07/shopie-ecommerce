import ProductCard from "./ProductCard";

const ProductsGrid = () => {
    return (
        <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-xl font-bold">Products</h2>
                    <p className="text-sm text-(--secondary-text)">
                        Found 145 items
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
                {["All", "Women", "Men", "Kids"].map((cat) => (
                    <button
                        key={cat}
                        className="px-4 py-2 rounded-full border whitespace-nowrap text-sm"
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 min-[350px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, i) => (
                    <ProductCard key={i} />
                ))}
            </div>
        </div>
    );
};

export default ProductsGrid;
