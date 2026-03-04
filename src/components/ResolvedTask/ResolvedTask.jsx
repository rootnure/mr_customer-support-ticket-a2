import React from "react";
import ContainerTitle from "../Shared/ContainerTitle";
import ResolvedTickets from "./ResolvedTickets";

const ResolvedTask = ({ resolvedTickets }) => {
    return (
        <div>
            <ContainerTitle title="Resolved Task"></ContainerTitle>
            <div className="mt-4 space-y-2">
                {!resolvedTickets.length ? (
                    <p className="text-sm text-slate-500 mt-2">
                        No resolved tasks yet.
                    </p>
                ) : (
                    resolvedTickets.map((tkt) => (
                        <ResolvedTickets
                            key={tkt.id}
                            tkt={tkt}
                        ></ResolvedTickets>
                    ))
                )}
            </div>
        </div>
    );
};

export default ResolvedTask;
