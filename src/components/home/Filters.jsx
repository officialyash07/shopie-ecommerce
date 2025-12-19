const Filters = () => {
    return (
        <aside className="hidden md:block w-64 shrink-0">
            <div className="space-y-8">
                {/* Category */}
                <div>
                    <h3 className="font-semibold mb-3">Category</h3>
                    <ul className="space-y-2 text-sm text-(--secondary-text)">
                        <li className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="accent-(--primary-red) "
                            />
                            All Category
                        </li>
                        <li className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="accent-(--primary-red)"
                            />
                            Men
                        </li>
                        <li className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="accent-(--primary-red)"
                            />
                            Women
                        </li>
                        <li className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="accent-(--primary-red)"
                            />
                            Couple
                        </li>
                    </ul>
                </div>

                {/* Size */}
                <div>
                    <h3 className="font-semibold mb-3">Size</h3>
                    <div className="flex flex-wrap gap-2">
                        {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                            <button
                                key={size}
                                className="w-10 h-10 border rounded-lg text-sm hover:bg-(--primary-red) hover:text-white transition ease-in"
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Colors */}
                <div>
                    <h3 className="font-semibold mb-3">Colours</h3>
                    <div className="flex flex-wrap gap-3">
                        {["red", "blue", "yellow", "green", "purple"].map(
                            (color) => (
                                <span
                                    key={color}
                                    className={`w-6 h-6 rounded-full bg-${color}-500`}
                                />
                            )
                        )}
                    </div>
                </div>

                {/* Ratings */}
                <div>
                    <h3 className="font-semibold mb-3">Ratings</h3>
                    <div className="space-y-2 text-sm">
                        <label className="flex items-center gap-2">
                            <input type="radio" /> ⭐⭐⭐⭐⭐
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" /> ⭐⭐⭐⭐☆
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" /> ⭐⭐⭐☆☆
                        </label>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Filters;
