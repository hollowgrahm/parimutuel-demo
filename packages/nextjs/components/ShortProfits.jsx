"use client";

import { memo } from "react";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth/useScaffoldReadContract.ts";

export const ShortProfits = () => {
    
    const { data: shortProfits } = useScaffoldReadContract({
        contractName: "Parimutuel",
        functionName: "shortProfits",
        watch: true,
    });

    return (
        <div className="stats bg-primary text-primary-content m-2">
            <div className="stat">
                <div className="stat-title">Short Profits:</div>
                <div className="stat-value">${
                    shortProfits !== undefined 
                    ? shortProfits.toString() / 10 ** 8
                    : "Loading..."}</div>
                <div className="stat-actions"></div>
            </div>
        </div>
    );

};

export default memo(ShortProfits);