import Counter from "../Counter/Counter";
import CustomerTickets from "../CustomerTickets/CustomerTickets";
import Sidebar from "../Sidebar/Sidebar";

const MainContainer = ({ ticketResponse }) => {
    return (
        <div className="max-w-7xl mx-auto py-16">
            {/* counter */}
            <Counter></Counter>

            {/* customer ticket & sidebar */}
            <div className="pt-12 grid grid-cols-1 lg:grid-cols-4 gap-x-6">
                {/* customer tickets */}
                <div className="col-span-3 order-2 lg:order-1">
                    <CustomerTickets
                        ticketResponse={ticketResponse}
                    ></CustomerTickets>
                </div>

                {/* sidebar */}
                <div className="order-1 lg:order-2">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;
