import React from "react";
import ContainerTitle from "../Shared/ContainerTitle";
import ProcessingTicket from "./ProcessingTicket";

const TaskStatus = ({ processingTickets, handleResolve }) => {
    return (
        <div>
            <ContainerTitle title="Task Status"></ContainerTitle>
            <div className="mt-4 space-y-3">
                {!processingTickets.length ? (
                    <p className="text-sm mt-2 text-slate-500">
                        Select a ticket to add to Task Status
                    </p>
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
