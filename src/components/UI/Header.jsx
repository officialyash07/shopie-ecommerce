import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="max-w-7xl mx-auto border-b border-b-(--light-grey) shadow-2xs px-4 py-4">
            <nav className="relative">
                {/* ================= MOBILE HEADER ================= */}
                <div className="flex items-center justify-between md:hidden">
                    {/* Toggle */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        className="p-1 text-2xl"
                    >
                        ☰
                    </button>

                    {/* Brand */}
                    <NavLink to="/" className="flex items-center gap-2">
                        <img
                            src="/logo-transparent.png"
                            alt="Shopie Logo"
                            className="w-9 h-9"
                        />
                        <span className="font-bold text-(--secondary-text)">
                            Shopie
                        </span>
                    </NavLink>

                    {/* Icons */}
                    <div className="flex items-center gap-2 relative">
                        {/* Search */}
                        <div className="relative">
                            <button
                                onClick={() =>
                                    setShowMobileSearch((prev) => !prev)
                                }
                                className="p-1"
                            >
                                <img
                                    src="/src/assets/icons/search.svg"
                                    alt="search"
                                    className="w-7 h-7"
                                />
                            </button>

                            {showMobileSearch && (
                                <input
                                    type="search"
                                    placeholder="Search..."
                                    autoFocus
                                    className="absolute bg-white right-0 top-full mt-2 w-55 rounded-md border border-gray-300 px-3 py-2 text-sm z-50"
                                />
                            )}
                        </div>

                        {/* Cart */}
                        <button className="p-1">
                            <img
                                src="/src/assets/icons/bag.svg"
                                alt="cart"
                                className="w-7 h-7"
                            />
                        </button>
                    </div>
                </div>

                {/* ================= MOBILE MENU (FIX) ================= */}
                {menuOpen && (
                    <div className="md:hidden mt-4 pt-4">
                        <ul className="flex flex-col gap-4">
                            <li>
                                <NavLink
                                    to="/"
                                    onClick={() => setMenuOpen(false)}
                                    className="block font-medium text-(--secondary-text)"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/shop"
                                    onClick={() => setMenuOpen(false)}
                                    className="block font-medium text-(--secondary-text)"
                                >
                                    Shop
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/men"
                                    onClick={() => setMenuOpen(false)}
                                    className="block font-medium text-(--secondary-text)"
                                >
                                    Men
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/women"
                                    onClick={() => setMenuOpen(false)}
                                    className="block font-medium text-(--secondary-text)"
                                >
                                    Women
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )}

                {/* ================= DESKTOP HEADER ================= */}
                <div className="hidden md:flex items-center gap-6">
                    {/* Brand */}
                    <NavLink to="/" className="flex items-center gap-2">
                        <img
                            src="/logo-transparent.png"
                            alt="Shopie Logo"
                            className="w-10 h-10"
                        />
                        <span className="font-bold text-(--secondary-text)">
                            Shopie
                        </span>
                    </NavLink>

                    {/* Nav Links */}
                    <ul className="flex items-center gap-5 mr-auto">
                        {["Home", "Shop", "Men", "Women"].map((item) => (
                            <li key={item}>
                                <NavLink
                                    to={
                                        item === "Home"
                                            ? "/"
                                            : `/${item.toLowerCase()}`
                                    }
                                    className="font-medium text-(--secondary-text) hover:text-(--primary-text)"
                                >
                                    {item}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Search */}
                    <div className="relative">
                        <input
                            type="search"
                            placeholder="Search"
                            className="w-55 rounded-md border border-gray-300 px-3 py-2 pr-9 text-sm"
                        />
                        <button className="absolute right-2 top-2">
                            <img
                                src="/src/assets/icons/search.svg"
                                alt="search"
                                className="w-5 h-5"
                            />
                        </button>
                    </div>

                    {/* Cart */}
                    <button className="p-1">
                        <img
                            src="/src/assets/icons/bag.svg"
                            alt="cart"
                            className="w-7 h-7"
                        />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
