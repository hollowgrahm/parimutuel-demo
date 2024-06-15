"use client";

import { memo } from "react";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth/useScaffoldReadContract.ts";

export const LongTokens = () => {
    
    const { data: longTokens } = useScaffoldReadContract({
        contractName: "Parimutuel",
        functionName: "longShares",
        watch: true,
    });

    return (
        <div className="stats bg-primary text-primary-content">
            <div className="stat">
                <div className="stat-title">Total Longs:</div>
                <div className="stat-value">{
                    longTokens !== undefined 
                    ? longTokens.toString() / 10 ** 8
                    : "Loading..."}</div>
                <div className="stat-actions"></div>
            </div>
        </div>
    );

};

export default memo(LongTokens);