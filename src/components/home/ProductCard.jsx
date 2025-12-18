const ProductCard = () => {
    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden group">
            <div className="relative bg-gray-100 h-48 flex items-center justify-center">
                <img
                    src="/product.png"
                    alt="product"
                    className="h-full object-contain"
                />

                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                    ❤️
                </button>

                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-(--primary-red) text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                    Add to Cart
                </button>
            </div>

            <div className="p-3">
                <p className="text-xs text-(--secondary-text) uppercase">
                    Roadster
                </p>
                <h3 className="text-sm font-semibold">
                    Black Solid Round Neck
                </h3>

                <div className="flex items-center gap-2 mt-1">
                    <span className="font-bold">$80</span>
                    <span className="text-sm line-through text-(--secondary-text)">
                        $100
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
