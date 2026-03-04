import ResolvedTask from "../ResolvedTask/ResolvedTask";
import TaskStatus from "../TaskStatus/TaskStatus";

const Sidebar = ({ processingTickets, handleResolve, resolvedTickets }) => {
    return (
        <div className="space-y-6 max-h-96 lg:max-h-max overflow-y-auto">
            <TaskStatus
                processingTickets={processingTickets}
                handleResolve={handleResolve}
            ></TaskStatus>
            <ResolvedTask resolvedTickets={resolvedTickets}></ResolvedTask>
        </div>
    );
};

export default Sidebar;
