import React, { use } from 'react';

const Main = ({ticketResponse}) => {
    const csTickets = use(ticketResponse);
    console.log(csTickets);
    return (
        <div>
            <h1>Main Layout</h1>
        </div>
    );
};

export default Main;