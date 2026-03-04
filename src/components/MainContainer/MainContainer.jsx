import React from "react";
import Counter from "../Counter/Counter";
import CustomerTickets from "../CustomerTickets/CustomerTickets";

const MainContainer = ({ ticketResponse }) => {
    return (
        <div className="max-w-7xl mx-auto py-16">
            {/* counter */}
            <Counter></Counter>
            {/* customer ticket & sidebar */}
            <div className="pt-12 grid grid-cols-1 lg:grid-cols-4">
                {/* customer tickets */}
                <div className="col-span-3">
                    <CustomerTickets
                        ticketResponse={ticketResponse}
                    ></CustomerTickets>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;
