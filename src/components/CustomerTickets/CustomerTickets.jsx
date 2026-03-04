import ContainerTitle from "../Shared/ContainerTitle";
import NoDataPlaceholder from "../Shared/NoDataPlaceholder";
import Ticket from "./Ticket";

const CustomerTickets = ({
    activeTickets,
    processingTickets,
    setProcessingTickets,
}) => {
    return (
        <>
            <ContainerTitle title="Customer Tickets"></ContainerTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-x-6 lg:gap-y-4 mt-1 lg:mt-4">
                {!activeTickets.length ? (
                    <NoDataPlaceholder msg="No Active Tickets" />
                ) : (
                    activeTickets.map((ticket) => (
                        <Ticket
                            key={ticket.id}
                            ticket={ticket}
                            processingTickets={processingTickets}
                            setProcessingTickets={setProcessingTickets}
                        ></Ticket>
                    ))
                )}
            </div>
        </>
    );
};

export default CustomerTickets;
