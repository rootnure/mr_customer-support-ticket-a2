import ResolvedTask from "../ResolvedTask/ResolvedTask";
import TaskStatus from "../TaskStatus/TaskStatus";

const Sidebar = ({ processingTickets, handleResolve, resolvedTickets }) => {
    return (
        <div className="space-y-6">
            <TaskStatus
                processingTickets={processingTickets}
                handleResolve={handleResolve}
            ></TaskStatus>
            <ResolvedTask resolvedTickets={resolvedTickets}></ResolvedTask>
        </div>
    );
};

export default Sidebar;
