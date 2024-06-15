"use client";

// import Link from "next/link";
import LongPosition from "../components/LongPosition.jsx";
import ShortPosition from "../components/ShortPosition.jsx";
import CurrentPrice from "./../components/CurrentPrice.jsx";
import LongProfits from "./../components/LongProfits.jsx";
import LongTokens from "./../components/LongTokens.jsx";
import ShortProfits from "./../components/ShortProfits.jsx";
import ShortTokens from "./../components/ShortTokens.jsx";
// import { useAccount } from "wagmi";
// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { Address } from "~~/components/scaffold-eth";
import TradingViewWidget from "./../components/TradingViewWidget.jsx";
import UserBalance from "./../components/UserBalance.jsx";
import type { NextPage } from "next";

const Home: NextPage = () => {
  // const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="flex-grow bg-base-300 w-full mt-0 px-8 py-5">
          <div className="flex justify-center items-center gap-10 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-5 py-5 text-center items-center max-w-sm rounded-2xl">
              <ShortTokens />
              <ShortProfits />
            </div>

            <div className="flex flex-col bg-base-100 px-5 py-5 text-center items-center max-w-sm rounded-2xl">
              <div className="px-5">
                <h1 className="text-center mb-1">
                  <span className="block text-4xl font-bold">ETH / USD</span>
                  <CurrentPrice />
                  <UserBalance />
                </h1>
              </div>
            </div>

            <div className="flex flex-col bg-base-100 px-5 py-5 text-center items-center max-w-sm rounded-2xl">
              <LongTokens />
              <LongProfits />
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-base-200 px-5 py-5 text-center items-center max-w-xs rounded-2xl">
          <TradingViewWidget />
        </div>

        <div className="flex-grow bg-base-300 w-full mt-1 px-8 py-5">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center rounded-3xl w-full sm:w-auto">
              <span className="block text-4xl font-bold">Short Position</span>
              <div className="w-full overflow-auto">
                <ShortPosition />
              </div>
            </div>

            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center rounded-3xl w-full sm:w-auto">
              <span className="block text-4xl font-bold">Long Position</span>
              <div className="w-full overflow-auto">
                <LongPosition />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
