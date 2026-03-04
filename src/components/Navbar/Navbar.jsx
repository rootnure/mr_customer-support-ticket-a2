import { FaPlus } from "react-icons/fa6";
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
                    <a className="btn btn-ghost text-2xl font-bold px-0">
                        CS — Ticket System
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 font-semibold items-center">
                        {navItems}
                        <button className="text-white bg-linear-to-r from-purple-800 to-purple-600 btn flex items-center">
                            <FaPlus />
                            New Ticket
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
