import { CiCalendarDate } from "react-icons/ci";
import { BsCircleFill } from "react-icons/bs";
import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Ticket = ({ ticket }) => {
    const { title, status, description, id, priority, customer, createdAt } =
        ticket || {};
    const [currentStatus, setCurrentStatus] = useState(status);

    const handleTicketClick = () => {
        if (currentStatus === "Open") {
            setCurrentStatus("In-Progress");
            toast.success("Added To In Progress");
        } else {
            toast.warn("Already Processing");
        }
    };
    return (
        <div
            onClick={handleTicketClick}
            className="p-4 bg-white rounded-lg space-y-2"
        >
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <div className="flex justify-between items-center">
                <h4 className="text-xl font-semibold" title={title}>
                    {title.length > 30 ? title.slice(0, 25) + "..." : title}
                </h4>
                <span
                    className={`flex items-center gap-x-1 px-2 py-1 text-sm rounded-full ${currentStatus === "Open" ? "bg-green-200 text-green-600" : "bg-amber-100 text-amber-600"}`}
                >
                    <BsCircleFill /> {currentStatus}
                </span>
            </div>
            <p className="text-lg text-justify">
                {description.length > 100
                    ? description.slice(0, 95) + "..."
                    : description}
            </p>
            <div className="flex justify-between text-sm items-center">
                <div className="flex gap-x-2 font-semibold">
                    <span className="text-slate-600">#{id}</span>
                    <span
                        className={`uppercase ${priority === "High" ? "text-red-500" : priority === "Medium" ? "text-yellow-500" : "text-green-600"}`}
                    >
                        {priority} Priority
                    </span>
                </div>
                <div className="flex gap-x-3 text-slate-700">
                    <span>{customer}</span>
                    <span className="flex items-center">
                        <span className="text-lg">
                            <CiCalendarDate />
                        </span>{" "}
                        {createdAt}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Ticket;
