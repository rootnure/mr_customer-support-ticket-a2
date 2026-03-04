import React from "react";
import ContainerTitle from "../Shared/ContainerTitle";
import ProcessingTicket from "./ProcessingTicket";
import NoDataPlaceholder from "../Shared/NoDataPlaceholder";

const TaskStatus = ({ processingTickets, handleResolve }) => {
    return (
        <div>
            <ContainerTitle title="Task Status"></ContainerTitle>
            <div className="mt-4 space-y-3">
                {!processingTickets.length ? (
                    <NoDataPlaceholder msg="Select a ticket to add to Task Status" />
                ) : (
                    processingTickets.map((tkt) => (
                        <ProcessingTicket
                            key={tkt.id}
                            tkt={tkt}
                            handleResolve={handleResolve}
                        ></ProcessingTicket>
                    ))
                )}
            </div>
        </div>
    );
};

export default TaskStatus;
