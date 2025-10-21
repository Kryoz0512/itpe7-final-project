"use client";
import Maintenance from "@/components/maintenance/Maintenance";
import TrolleyGame from "@/components/trolley/TrolleyGame";
import Image from "next/image";
import { useMemo, useRef, useState, useEffect } from "react";

export default function TrolleyGamePage() {
  const [developer, setDeveloper] = useState(true);
  return (
    <div className="w-full max-w-5xl px-4 py-8">
      {developer && (
        <TrolleyGame dev={developer} setDev={setDeveloper}/>
      )}
      {!developer && (
        <Maintenance />
      )}
    </div>
  );
}