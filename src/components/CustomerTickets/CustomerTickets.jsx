import { use } from "react";
import ContainerTitle from "../Shared/ContainerTitle";
import Ticket from "./Ticket";

const CustomerTickets = ({ ticketResponse }) => {
    const { data: csTickets } = use(ticketResponse);
    return (
        <>
            <ContainerTitle title="Customer Tickets"></ContainerTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-x-6 lg:gap-y-4 mt-1 lg:mt-4">
                {csTickets.map((ticket) => (
                    <Ticket key={ticket.id} ticket={ticket}></Ticket>
                ))}
            </div>
        </>
    );
};

export default CustomerTickets;
