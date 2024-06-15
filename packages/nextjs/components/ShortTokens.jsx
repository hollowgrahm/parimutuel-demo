"use client";

import { memo } from "react";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth/useScaffoldReadContract.ts";

export const ShortTokens = () => {
    
    const { data: shortTokens } = useScaffoldReadContract({
        contractName: "Parimutuel",
        functionName: "shortShares",
        watch: true,
    });

    return (
        <div className="stats bg-primary text-primary-content">
            <div className="stat">
                <div className="stat-title">Total Shorts:</div>
                <div className="stat-value">{
                    shortTokens !== undefined 
                    ? shortTokens.toString() / 10 ** 8
                    : "Loading..."}</div>
                <div className="stat-actions"></div>
            </div>
        </div>
    );

};

export default memo(ShortTokens);