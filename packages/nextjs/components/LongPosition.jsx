"use client";

import { memo, useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth/useScaffoldReadContract.ts";
import OpenLong from "./OpenLong.jsx"; // Import the OpenLong component

export const LongPosition = () => {
  const [margin, setMargin] = useState(0);
  const [longsData, setLongsData] = useState(null);

  const { writeContractAsync: writeAsync } = useScaffoldWriteContract("Parimutuel");

  const { address: userAddress } = useAccount();

  const { data: longs } = useScaffoldReadContract({
    contractName: "Parimutuel",
    functionName: "longs",
    args: [userAddress],
    watch: true,
  });

  useEffect(() => {
    if (longs && longs[0]) {
      setLongsData({
        margin: Number(longs[1]) / 10 ** 8,
        leverage: Number(longs[2]) / 10 ** 8,
        entry: Number(longs[4]) / 10 ** 8,
        liquidation: Number(longs[5]) / 10 ** 8,
        profit: Number(longs[6]) / 10 ** 8,
        shares: Number(longs[7]) / 10 ** 8,
        funding: longs[8].toString(),
      });
    } else {
      setLongsData(null);
    }
  }, [longs]);

  return (
    <>
      <div className="stats bg-primary text-secondary-content m-2 w-full">
        <div className="stat">
          <div className="stat-value">
            {longsData ? (
              <div className="overflow-auto w-full">
                <table className="table-auto border-collapse border border-secondary m-2 text-sm">
                  <tbody>
                    <tr>
                      <td className="border border-secondary px-4 py-2">Margin</td>
                      <td className="border border-secondary px-4 py-2">{longsData.margin}</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary px-4 py-2">Leverage</td>
                      <td className="border border-secondary px-4 py-2">{longsData.leverage}</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary px-4 py-2">Entry</td>
                      <td className="border border-secondary px-4 py-2">{longsData.entry}</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary px-4 py-2">Liquidation</td>
                      <td className="border border-secondary px-4 py-2">{longsData.liquidation}</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary px-4 py-2">Profit</td>
                      <td className="border border-secondary px-4 py-2">{longsData.profit}</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary px-4 py-2">Shares</td>
                      <td className="border border-secondary px-4 py-2">{longsData.shares}</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary px-4 py-2">Funding Due</td>
                      <td className="border border-secondary px-4 py-2">{longsData.funding - (Date.now() / 1000)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
              <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <span className="block text-4xl font-bold">Open Long</span>
              <OpenLong />
            </div>
            </div>
            )}
          </div>
        </div>
      </div>

      {longsData && (
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
                  functionName: "addMarginLong",
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
                  functionName: "closeLong",
                });
              } catch (e) {
                console.error("Error closing long:", e);
              }
            }}
          >
            Close Long
          </button>
        </div>
      )}
    </>
  );
};

export default memo(LongPosition);
