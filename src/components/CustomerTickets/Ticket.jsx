import { CiCalendarDate } from "react-icons/ci";
import { BsCircleFill } from "react-icons/bs";
import { useState } from "react";
import { toast } from "react-toastify";

const Ticket = ({ ticket }) => {
    const { title, status, description, id, priority, customer, createdAt } =
        ticket || {};
    const [currentStatus, setCurrentStatus] = useState(status);

    const handleTicketClick = () => {
        if (currentStatus === "Open") {
            setCurrentStatus("In-Progress");
            toast.info(`"${title}" Submitted for Processing`);
        } else {
            toast.warn("Ticket Already in Processing");
        }
    };
    return (
        <div
            onClick={handleTicketClick}
            className="p-4 bg-white rounded-lg space-y-2 hover:scale-105 transition-transform duration-300"
        >
            <div className="flex justify-between items-center">
                <h4 className="text-xl font-semibold" title={title}>
                    {title.length > 30 ? title.slice(0, 28) + "..." : title}
                </h4>
                <span
                    className={`flex items-center gap-x-1 px-2 py-1 text-sm rounded-full font-semibold ${currentStatus === "Open" ? "bg-green-200 text-green-800" : "bg-amber-100 text-amber-600"}`}
                >
                    <BsCircleFill /> {currentStatus}
                </span>
            </div>
            <p className="text-base text-justify">
                {description.length > 100
                    ? description.slice(0, 95) + "..."
                    : description}
            </p>
            <div className="flex justify-between items-center text-sm">
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
