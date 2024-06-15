"use client";

import { memo, useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth/useScaffoldReadContract.ts";
import OpenShort from "./OpenShort.jsx"; // Import the OpenShort component

export const ShortPosition = () => {
  const [margin, setMargin] = useState(0);
  const [shortsData, setShortsData] = useState(null);

  const { writeContractAsync: writeAsync } = useScaffoldWriteContract("Parimutuel");

  const { address: userAddress } = useAccount();

  const { data: shorts } = useScaffoldReadContract({
    contractName: "Parimutuel",
    functionName: "shorts",
    args: [userAddress],
    watch: true,
  });

  useEffect(() => {
    if (shorts && shorts[0]) {
      setShortsData({
        margin: Number(shorts[1]) / 10 ** 8,
        leverage: Number(shorts[2]) / 10 ** 8,
        entry: Number(shorts[4]) / 10 ** 8,
        liquidation: Number(shorts[5]) / 10 ** 8,
        profit: Number(shorts[6]) / 10 ** 8,
        shares: Number(shorts[7]) / 10 ** 8,
        funding: shorts[8].toString(),
      });
    } else {
      setShortsData(null);
    }
  }, [shorts]);

  return (
    <>
      <div className="stats bg-primary text-secondary-content m-2 w-full">
        <div className="stat">
          <div className="stat-value">
            {shortsData ? (
              <div className="overflow-auto w-full">
                <table className="table-auto border-collapse border border-secondary m-2 text-sm">
                  <tbody>
                    <tr>
                      <td className="border border-secondary px-4 py-2">Margin</td>
                      <td className="border border-secondary px-4 py-2">{shortsData.margin}</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary px-4 py-2">Leverage</td>
                      <td className="border border-secondary px-4 py-2">{shortsData.leverage}</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary px-4 py-2">Entry</td>
                      <td className="border border-secondary px-4 py-2">{shortsData.entry}</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary px-4 py-2">Liquidation</td>
                      <td className="border border-secondary px-4 py-2">{shortsData.liquidation}</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary px-4 py-2">Profit</td>
                      <td className="border border-secondary px-4 py-2">{shortsData.profit}</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary px-4 py-2">Shares</td>
                      <td className="border border-secondary px-4 py-2">{shortsData.shares}</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary px-4 py-2">Funding Due</td>
                      <td className="border border-secondary px-4 py-2">{shortsData.funding - (Date.now() / 1000)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
              <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <span className="block text-4xl font-bold">Open Short</span>
              <OpenShort />
            </div>
            </div>
            )}
          </div>
        </div>
      </div>

      {shortsData && (
        <div className="flex flex-col items-center mt-4">
          <input
            type="number"
            placeholder="Add Margin"
            className="input border border-primary m-2"
            onChange={e => setMargin(e.target.value)}
          />

          <button
            className="btn btn-primary m-2"
            onClick={async () => {
              try {
                await writeAsync({
                  functionName: "addMarginShort",
                  args: [BigInt(margin) * 10n ** 8n],
                });
              } catch (e) {
                console.error("Error adding margin:", e);
              }
            }}
          >
            Submit
          </button>
          <button
            className="btn btn-danger m-2"
            style={{ backgroundColor: "red", borderColor: "red" }}
            onClick={async () => {
              try {
                await writeAsync({
                  functionName: "closeShort",
                });
              } catch (e) {
                console.error("Error closing short:", e);
              }
            }}
          >
            Close Short
          </button>
        </div>
      )}
    </>
  );
};

export default memo(ShortPosition);
