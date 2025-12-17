import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [showMobileSearch, setShowMobileSearch] = useState(false);

    return (
        <header className="w-[1280px] mx-auto">
            <nav className="navbar navbar-expand-md bg-body-tertiary">
                <div className="container-xl position-relative">
                    {/* MOBILE HEADER */}
                    <div className="d-flex d-md-none align-items-center w-100">
                        {/* Left: Toggle */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Center: Brand */}
                        <NavLink to="/" className="navbar-brand mx-auto d-flex align-items-center gap-2">
                            <img
                                src="/logo-transparent.png"
                                alt="Shopie Logo"
                                style={{ width: "36px", height: "36px" }}
                            />
                            <span className="fw-bold text-secondary">Shopie</span>
                        </NavLink>

                        {/* Right: Search + Cart */}
                        <div className="d-flex align-items-center gap-2 position-relative">
                            {/* Search Wrapper */}
                            <div className="position-relative">
                                <button
                                    className="btn p-0"
                                    type="button"
                                    onClick={() => setShowMobileSearch((prev) => !prev)}
                                >
                                    <img
                                        src="/src/assets/icons/search.svg"
                                        alt="search"
                                        style={{ width: "28px", height: "28px" }}
                                    />
                                </button>

                                {/* Search Input (Appears under icon) */}
                                {showMobileSearch && (
                                    <input
                                        className="form-control position-absolute mt-2"
                                        style={{
                                            right: 0,
                                            top: "100%",
                                            width: "220px",
                                            zIndex: 1050,
                                        }}
                                        type="search"
                                        placeholder="Search..."
                                        autoFocus
                                    />
                                )}
                            </div>

                            {/* Cart Icon */}
                            <button className="btn p-0" type="button">
                                <img
                                    src="/src/assets/icons/bag.svg"
                                    alt="cart"
                                    style={{ width: "28px", height: "28px" }}
                                />
                            </button>
                        </div>
                    </div>

                    {/* DESKTOP + COLLAPSED MENU */}
                    <div className="collapse navbar-collapse mt-2 mt-md-0" id="navbarSupportedContent">
                        {/* Desktop Brand */}
                        <NavLink to="/" className="navbar-brand d-none d-md-flex align-items-center gap-2">
                            <img
                                src="/logo-transparent.png"
                                alt="Shopie Logo"
                                style={{ width: "40px", height: "40px" }}
                            />
                            <span className="fw-bold text-secondary">Shopie</span>
                        </NavLink>

                        {/* Nav Links */}
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <NavLink end to="/" className="nav-link">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/shop" className="nav-link">
                                    Shop
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/men" className="nav-link">
                                    Men
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/women" className="nav-link">
                                    Women
                                </NavLink>
                            </li>
                        </ul>

                        {/* Desktop Search */}
                        <form className="position-relative me-3 d-none d-md-block">
                            <input className="form-control" type="search" placeholder="Search" />
                            <button
                                className="btn position-absolute end-0 top-0 p-0 mt-1 me-1"
                                type="button"
                                style={{ width: "30px", height: "30px" }}
                            >
                                <img
                                    src="/src/assets/icons/search.svg"
                                    alt="search"
                                    style={{ width: "30px", height: "30px" }}
                                />
                            </button>
                        </form>

                        {/* Desktop Cart */}
                        <button className="btn p-0 d-none d-md-block" type="button">
                            <img src="/src/assets/icons/bag.svg" alt="cart" style={{ width: "30px", height: "30px" }} />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
