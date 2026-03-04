import React from "react";

const NoDataPlaceholder = ({ msg }) => {
    return (
        <div>
            <p className="text-sm text-slate-600 mt-2 italic">{msg}</p>
        </div>
    );
};

export default NoDataPlaceholder;
