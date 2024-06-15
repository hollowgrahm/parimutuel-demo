"use client";

import { memo } from "react";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth/useScaffoldReadContract.ts";

export const CurrentPrice = () => {
    
    const { data: currentPrice } = useScaffoldReadContract({
        contractName: "Parimutuel",
        functionName: "currentPrice",
        watch: true,
    });

    return (
        <div className="stats bg-primary text-primary-content m-2">
            <div className="stat">
                <div className="stat-title">Current Price:</div>
                <div className="stat-value">${
                    currentPrice !== undefined 
                    ? currentPrice.toString() / 10 ** 8
                    : "Loading..."}
                </div>
                <div className="stat-actions"></div>
            </div>
        </div>
    );
};

export default memo(CurrentPrice);