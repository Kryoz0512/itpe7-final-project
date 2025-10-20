"use client";
import { useMemo, useRef, useState, useEffect } from "react";

export default function TrolleyGamePage() {
  const scenarios = useMemo(
    () => [
      {
        id: 1,
        title: "Scenario 1",
        image: "/trolley/Scenario_1.jpg",
        videos: {
          pull: "/trolley/Scenario_1_PL.mp4",
          dont: "/trolley/Scenario_1_DN.mp4",
        },
        description:
          "A runaway trolley is headed toward five people. You can pull the lever to divert it onto another track, where one person is tied down.",
      },
      {
        id: 2,
        title: "Scenario 2",
        image: "/trolley/Scenario_2.jpg",
        videos: {
          pull: "/trolley/Scenario_2_PL.mp4",
          dont: "/trolley/Scenario_2_DN.mp4",
        },
        description:
          "A variation with different placements. Decide before the trolley reaches the junction.",
      },
      {
        id: 3,
        title: "Scenario 3",
        image: "/trolley/Scenario_3.jpg",
        videos: {
          pull: "/trolley/Scenario_3_PL.mp4",
          dont: "/trolley/Scenario_3_DN.mp4",
        },
        description:
          "Final scenario. Make your choice and watch the outcome video.",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState(null);
  const [mode, setMode] = useState("image");
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  const scenario = scenarios[index];

  useEffect(() => {
    setChoice(null);
    setMode("image");
    setVideoEnded(false);
  }, [index]);

  useEffect(() => {
    if (mode === "video" && videoRef.current) {
      const v = videoRef.current;
      v.controls = false;
      v.disablePictureInPicture = true;
      v.disableRemotePlayback = true;
      v.playsInline = true;
      const play = () => v.play().catch(() => {});
      const t = setTimeout(play, 50);
      return () => clearTimeout(t);
    }
  }, [mode, choice]);

  const onChoose = (c) => {
    setChoice(c);
    setMode("video");
  };

  const goNext = () => setIndex((i) => Math.min(scenarios.length - 1, i + 1));

  const percent = Math.round(((index + 1) / scenarios.length) * 100);

  return (
      <div className="w-full max-w-5xl px-4 py-8">

        <section className="mt-6 grid gap-6">
          <div className="rounded-2xl bg-white shadow p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold">{scenario.title}</h2>
            <p className="mt-2 text-sm md:text-base text-neutral-600">{scenario.description}</p>

            <div className="mt-4">
              {mode === "image" && (
                <figure className="relative">
                  <img
                    src={scenario.image}
                    alt={scenario.title}
                    className="w-full h-auto rounded-xl border border-neutral-200"
                  />
                </figure>
              )}

              {mode === "video" && choice && (
                <div className="relative">
                  <video
                    key={`${scenario.id}-${choice}`}
                    ref={videoRef}
                    src={choice === "pull" ? scenario.videos.pull : scenario.videos.dont}
                    className="w-full rounded-xl border border-neutral-200"
                    onEnded={() => setVideoEnded(true)}
                    autoPlay
                    muted={false}
                  />
                </div>
              )}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {mode === "image" && (
                <>
                  <ActionButton onClick={() => onChoose("pull")}>Pull the lever</ActionButton>
                  <ActionButton variant="ghost" onClick={() => onChoose("dont")}>Do nothing</ActionButton>
                </>
              )}

              {mode === "video" && videoEnded && index < scenarios.length - 1 && (
                <ActionButton onClick={goNext}>Next Scenario ▶</ActionButton>
              )}

              {mode === "video" && videoEnded && index === scenarios.length - 1 && (
                <p className="text-sm text-neutral-600">All scenarios complete.</p>
              )}
            </div>
          </div>
        </section>

        <footer className="mt-6 text-center text-xs text-neutral-500">
          Built for Next.js. Media plays after you choose.
        </footer>
      </div>
  );
}

function ActionButton({ children, onClick, variant = "solid" }) {
  const base = {
    padding: ".625rem 1rem",
    borderRadius: ".75rem",
    fontWeight: 600,
    border: "1px solid rgba(0,0,0,.12)",
    cursor: "pointer",
  };
  const solid = { background: "#111", color: "white" };
  const ghost = { background: "white", color: "#111" };
  const style = { ...base, ...(variant === "ghost" ? ghost : solid) };

  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}
