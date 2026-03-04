import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
    return (
        <div className="bg-black text-slate-100 text-sm">
            <footer className="px-4 lg:px-0 footer sm:footer-horizontal max-w-7xl mx-auto py-10">
                <aside>
                    <h3 className="text-lg lg:text-2xl font-bold px-0">
                        CS — Ticket System
                    </h3>
                    <p className="w-full lg:max-w-60">
                        Empowering businesses with an organized, reliable, and
                        transparent support ticket management system to deliver
                        exceptional customer service experiences.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    {["About Us", "Our Mission", "Contact Saled"].map(
                        (item) => (
                            <a key={item} className="link link-hover">
                                {item}
                            </a>
                        ),
                    )}
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    {[
                        "Products & Services",
                        "Coustomer Stories",
                        "Download Apps",
                    ].map((item) => (
                        <a key={item} className="link link-hover">
                            {item}
                        </a>
                    ))}
                </nav>
                <nav>
                    <h6 className="footer-title">Information</h6>
                    {["Privacy Policy", "Terms & Conditions", "Join Us"].map(
                        (item) => (
                            <a key={item} className="link link-hover">
                                {item}
                            </a>
                        ),
                    )}
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    {[
                        <>
                            <span className="bg-white rounded-full p-0.5 text-black">
                                <FaXTwitter />
                            </span>{" "}
                            @CS — Ticket System
                        </>,
                        <>
                            <span className="bg-white rounded-full p-0.5 text-black">
                                <FaLinkedinIn />
                            </span>{" "}
                            @CS — Ticket System
                        </>,
                        <>
                            <span className="bg-white rounded-full p-0.5 text-black">
                                <FaFacebookF />
                            </span>{" "}
                            @CS — Ticket System
                        </>,
                        <>
                            <span className="bg-white rounded-full p-0.5 text-black">
                                <IoIosMail />
                            </span>{" "}
                            support@cst.com
                        </>,
                    ].map((item) => (
                        <a
                            key={item}
                            className="flex items-center gap-x-1 link link-hover"
                        >
                            {item}
                        </a>
                    ))}
                    {/* <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a> */}
                </nav>
            </footer>
            <aside className="max-w-7xl mx-auto text-center py-4 border-t border-t-slate-900">
                <p>
                    © {new Date().getFullYear()} CS — Ticket System. All rights
                    reserved.
                </p>
            </aside>
        </div>
    );
};

export default Footer;
