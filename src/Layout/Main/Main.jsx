import React, { use } from "react";
import Navbar from "../../components/Navbar/Navbar";
import MainContainer from "../../components/MainContainer/MainContainer";

const Main = ({ ticketResponse }) => {
    const { data: csTickets } = use(ticketResponse);
    console.log(csTickets);
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>

            {/* counter, tickets & sidebar container */}
            <MainContainer></MainContainer>

            {/* footer */}
        </div>
    );
};

export default Main;
