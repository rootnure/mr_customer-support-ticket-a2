import React, { use } from 'react';
import Navbar from '../../components/Navbar/Navbar';

const Main = ({ticketResponse}) => {
    const {data: csTickets} = use(ticketResponse);
    console.log(csTickets);
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>

            {/* counter */}

            {/* tickets & sidebar */}

            {/* footer */}
        </div>
    );
};

export default Main;