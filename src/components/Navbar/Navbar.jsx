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
    const newTktBtn = (
        <button className="text-white bg-linear-to-r from-purple-800 to-purple-600 btn flex items-center">
            <FaPlus />
            New Ticket
        </button>
    );

    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar max-w-7xl mx-auto">
                <div className="flex-1">
                    <h3 className="text-lg lg:text-2xl font-bold px-0">
                        CS — Ticket System
                    </h3>
                </div>
                <div className="flex-none">
                    <ul className="menu hidden lg:flex menu-horizontal px-1 font-semibold items-center">
                        {navItems}
                        {newTktBtn}
                    </ul>
                    <span className="lg:hidden">{newTktBtn}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
