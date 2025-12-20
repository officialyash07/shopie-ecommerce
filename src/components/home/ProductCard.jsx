const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden group">
            <div className="relative bg-gray-100 h-48 flex items-center justify-center">
                <img
                    src={product.images[0]}
                    alt="product"
                    className="h-full w-100 object-cover"
                />
            </div>

            <div className="p-3">
                <p className="text-xs text-(--secondary-text) uppercase">
                    {product.category.name}
                </p>
                <h3 className="text-sm font-semibold">{product.title}</h3>

                <div className="flex items-center gap-2 mt-1">
                    <span className="font-bold">${product.price}</span>
                    <span className="text-sm line-through text-(--secondary-text)">
                        ${product.price + product.price * 0.2}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
