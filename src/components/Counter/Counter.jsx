import Count from "./Count";

const Counter = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-4">
            {/* In progress */}
            <Count
                title="In-Progress"
                className="from-purple-800 to-purple-500"
                value={0}
            ></Count>
            {/* Resolve */}
            <Count
                title="Resolved"
                className="from-green-500 to-green-800"
                value={0}
            ></Count>
        </div>
    );
};

export default Counter;
