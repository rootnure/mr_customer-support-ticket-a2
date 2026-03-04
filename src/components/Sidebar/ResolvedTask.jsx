import React from "react";
import ContainerTitle from "../Shared/ContainerTitle";

const ResolvedTask = () => {
    return (
        <div>
            <ContainerTitle title="Resolved Task"></ContainerTitle>
            <p className="text-sm text-slate-500 mt-2">
                No resolved tasks yet.
            </p>
        </div>
    );
};

export default ResolvedTask;
