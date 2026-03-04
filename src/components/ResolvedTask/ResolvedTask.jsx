import ContainerTitle from "../Shared/ContainerTitle";
import NoDataPlaceholder from "../Shared/NoDataPlaceholder";
import ResolvedTickets from "./ResolvedTickets";

const ResolvedTask = ({ resolvedTickets }) => {
    return (
        <div>
            <ContainerTitle title="Resolved Task"></ContainerTitle>
            <div className="mt-4 space-y-2">
                {!resolvedTickets.length ? (
                    <NoDataPlaceholder msg="No resolved tasks yet" />
                ) : (
                    resolvedTickets.map((tkt) => (
                        <ResolvedTickets
                            key={tkt.id}
                            tkt={tkt}
                        ></ResolvedTickets>
                    ))
                )}
            </div>
        </div>
    );
};

export default ResolvedTask;
