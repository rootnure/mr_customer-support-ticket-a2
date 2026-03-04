import { use, useState } from "react";
import Counter from "../Counter/Counter";
import CustomerTickets from "../CustomerTickets/CustomerTickets";
import Sidebar from "../Sidebar/Sidebar";
import { toast } from "react-toastify";

const MainContainer = ({ ticketResponse }) => {
    const { data: csTickets } = use(ticketResponse);
    const [processingTickets, setProcessingTickets] = useState([]);
    const [activeTickets, setActiveTickets] = useState(csTickets ?? []);
    const [resolvedTickets, setResolvedTickets] = useState([]);

    const handleResolve = (tktID) => {
        const currResolvedTkt =
            processingTickets.find((tkt) => tkt.id === tktID) || {};
        if (currResolvedTkt) {
            // success notificaiton
            toast.success(
                `"${currResolvedTkt.title ?? "Ticket"}" Has Being Resolved`,
                { autoClose: 4000 },
            );
            // add to resolved list
            setResolvedTickets([...resolvedTickets, currResolvedTkt]);
        }

        // remove resolved ticket from the list
        const presentActiveTickets = activeTickets.filter(
            (tkt) => tkt.id !== tktID,
        );
        setActiveTickets([...presentActiveTickets]);

        // remove from Tast Status
        const remainingProcessingTickets = processingTickets.filter(
            (tkt) => tkt.id !== tktID,
        );
        setProcessingTickets([...remainingProcessingTickets]);
    };
    return (
        <div className="max-w-7xl mx-auto py-16">
            {/* counter */}
            <Counter
                processingTickets={processingTickets}
                resolvedTickets={resolvedTickets}
            ></Counter>

            {/* customer ticket & sidebar */}
            <div className="pt-12 grid grid-cols-1 lg:grid-cols-4 gap-x-6">
                {/* customer tickets */}
                <div className="col-span-3 order-2 lg:order-1">
                    <CustomerTickets
                        activeTickets={activeTickets}
                        processingTickets={processingTickets}
                        setProcessingTickets={setProcessingTickets}
                    ></CustomerTickets>
                </div>

                {/* sidebar */}
                <div className="order-1 lg:order-2">
                    <Sidebar
                        handleResolve={handleResolve}
                        resolvedTickets={resolvedTickets}
                        processingTickets={processingTickets}
                    ></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;
