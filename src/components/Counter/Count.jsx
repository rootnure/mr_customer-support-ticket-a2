import "./Count.css";
const Count = ({ className, title, value }) => {
    return (
        <div className={`w-full rounded-lg bg-linear-to-r ${className}`}>
            <div className="bg-vector mx-8">
                <div className="bg-vector2">
                    <div className="text-center text-white py-10">
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <h1 className="text-5xl font-semibold mt-2">{value}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Count;
