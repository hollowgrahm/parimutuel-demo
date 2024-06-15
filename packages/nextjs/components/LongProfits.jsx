"use client";

import { memo } from "react";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth/useScaffoldReadContract.ts";

export const LongProfits = () => {
    
    const { data: longProfits } = useScaffoldReadContract({
        contractName: "Parimutuel",
        functionName: "longProfits",
        watch: true,
    });

    return (
        <div className="stats bg-primary text-primary-content m-2">
            <div className="stat">
                <div className="stat-title">Long Profits:</div>
                <div className="stat-value">${
                    longProfits !== undefined 
                    ? longProfits.toString() / 10 ** 8
                    : "Loading..."}</div>
                <div className="stat-actions"></div>
            </div>
        </div>
    );

};

export default memo(LongProfits);