const ProcessingTicket = ({ tkt, handleResolve }) => {
    const { id, title } = tkt || {};
    return (
        <div className="bg-white rounded-sm p-3">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button
                onClick={() => handleResolve(id)}
                className="btn bg-green-600 text-white w-full"
            >
                Complete
            </button>
        </div>
    );
};

export default ProcessingTicket;
