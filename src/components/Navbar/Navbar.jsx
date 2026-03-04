const Navbar = () => {
    const navItems = (
        <>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">FAQ</a>
            </li>
            <li>
                <a href="#">Changelog</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            <li>
                <a href="#">Download</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </>
    );

    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar max-w-7xl mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl font-bold">
                        CS -- Ticket System{" "}
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 font-semibold items-center">
                        {navItems}
                        <button className="text-white bg-linear-to-r from-purple-600 to-purple-800 btn flex items-center">
                            <span className="font-extrabold text-xl">+</span>{" "}
                            New Ticket
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
