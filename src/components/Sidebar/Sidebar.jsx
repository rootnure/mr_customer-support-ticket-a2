import ResolvedTask from "./ResolvedTask";
import TaskStatus from "./TaskStatus";

const Sidebar = () => {
    return (
        <div className="space-y-6">
            <TaskStatus></TaskStatus>
            <ResolvedTask></ResolvedTask>
        </div>
    );
};

export default Sidebar;
