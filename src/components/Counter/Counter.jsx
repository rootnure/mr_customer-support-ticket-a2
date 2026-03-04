import Count from "./Count";

const Counter = ({ processingTickets, resolvedTickets }) => {
    return (
        <div className="grid grid-cols-2 gap-2 lg:gap-4">
            {/* In progress */}
            <Count
                title="In-Progress"
                className="from-purple-800 to-purple-500"
                value={processingTickets.length}
            ></Count>
            {/* Resolve */}
            <Count
                title="Resolved"
                className="from-green-500 to-green-800"
                value={resolvedTickets.length}
            ></Count>
        </div>
    );
};

export default Counter;
