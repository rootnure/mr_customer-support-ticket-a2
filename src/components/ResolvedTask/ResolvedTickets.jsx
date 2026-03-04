const ResolvedTickets = ({ tkt }) => {
    const { title } = tkt || {};
    return (
        <div className="p-3 bg-[#E0E7FF] rounded-sm font-semibold">{title}</div>
    );
};

export default ResolvedTickets;
