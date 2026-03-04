import React from "react";
import ContainerTitle from "../Shared/ContainerTitle";

const TaskStatus = () => {
    return (
        <div>
            <ContainerTitle title="Task Status"></ContainerTitle>
            <p className="text-sm mt-2 text-slate-500">
                Select a ticket to add to Task Status
            </p>
        </div>
    );
};

export default TaskStatus;
