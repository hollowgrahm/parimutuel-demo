"use client";

import { memo } from "react";
import { useAccount } from "wagmi";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth/useScaffoldWriteContract.ts";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth/useScaffoldReadContract.ts";

export const Balance = () => {

    const {address: userAddress} = useAccount();

    const { data: balance } = useScaffoldReadContract({
        contractName: "Parimutuel",
        functionName: "balance",
        args: [userAddress],
        watch: true,
    });

    const { writeContractAsync: writeAsync } = useScaffoldWriteContract("Parimutuel");

    return (
        <div className="stats bg-primary text-primary-content m-2 max-w-xs">
            <div className="stat ">
                <div className="stat-title">User Balance:</div>
                <div className="stat-value">${
                    balance !== undefined 
                    ? balance.toString() / 10 ** 8
                    : "0"}
                </div>
                <div className="stat-actions">
                <button className="btn btn-sm btn-success"
                onClick={async () => {
                    try {
                        await writeAsync({
                            functionName: "faucet"
                        });
                    } catch (e) {
                        console.error("Error using faucet:", e);
                        }
                    }}
                > Faucet </button>
                </div>
            </div>
        </div>
    );

    
};

export default memo(Balance);