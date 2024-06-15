"use client";

import { memo } from "react";
import { useState } from "react";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

export const OpenLong = () => {
  const [margin, setMargin] = useState(0);
  const [leverage, setLeverage] = useState(0);

  const { writeContractAsync: writeAsync } = useScaffoldWriteContract("Parimutuel");

  return (
    <>
      <input
        type="number"
        placeholder="Margin"
        className="input border border-primary m-2"
        onChange={e => setMargin(e.target.value)}
      />
      <input
        type="number"
        placeholder="Leverage"
        className="input border border-primary m-2"
        onChange={e => setLeverage(e.target.value)}
      />

      <button className="btn btn-primary" onClick={async () => {
        try {
          await writeAsync({
            functionName: "openLong",
            args: [margin * 10 ** 8, leverage * 10 ** 8],
            });
          } catch (e) {
            console.error("Error opening long:", e);
            }
          }}
        > Submit
      </button>
    </>
  );
};

export default memo(OpenLong);