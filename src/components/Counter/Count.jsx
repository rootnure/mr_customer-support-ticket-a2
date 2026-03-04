import "./Count.css";
const Count = ({ className, title, value }) => {
    return (
        <div className={`w-full rounded-lg bg-linear-to-r ${className}`}>
            <div className="bg-vector">
                <div className="bg-vector2">
                    <div className="text-center text-white py-2 lg:py-16">
                        <h3 className="text-base lg:text-2xl font-semibold">
                            {title}
                        </h3>
                        <h1 className="text-4xl lg:text-6xl font-semibold mt-2">
                            {value}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Count;
