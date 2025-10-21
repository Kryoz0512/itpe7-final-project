import { useEffect, useMemo, useRef, useState } from "react";
import ActionButton from "./ActionButton";
import Image from "next/image";

export default function TrolleyGame({dev, setDev}) {
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
          "A runaway trolley is headed toward five people. You can pull the lever to divert it onto another track, where four persons is tied down.",
      },
      {
        id: 4,
        title: "Scenario 3",
        image: "/trolley/Scenario_4.jpg",
        videos: {
          pull: "/trolley/Scenario_4_PL.mp4",
          dont: "/trolley/Scenario_4_DN.mp4",
        },
        description:
          "A runway trolley is headed towards free exemption of all cisco-related stuff. You can pull the lever to divert it onto another track, where Justine and Jose is tied down.",
      },
      {
        id: 5,
        title: "Scenario 4",
        image: "/trolley/Scenario_5.jpg",
        videos: {
          pull: "/trolley/Scenario_5_PL.mp4",
          dont: "/trolley/Scenario_5_DN.mp4",
        },
        description:
          "A runaway trolley is headed towards Daniel Radcliffe. You can pull the lever to divert it onto another track, where Mark who is willing to die for Radcliffe is tied down.",
      },
      {
        id: 3,
        title: "Scenario 5",
        image: "/trolley/Scenario_3.jpg",
        videos: {
          pull: "/trolley/Scenario_3_PL.mp4",
          dont: "/trolley/Scenario_3_DN.mp4",
        },
        description:
          "Oh no! The developer of this game, Simone Roy, is tied onto the tracks, pulling the lever may have unforeseen consequences...",
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

    if (index === 4) {
      if (c === "pull") {
        setTimeout(() => setDev(false), 1250); // wait 3 seconds
      } else {
        setDev(true);
      }
    }
  };

  const goNext = () => setIndex((i) => Math.min(scenarios.length - 1, i + 1));

  const percent = Math.round(((index + 1) / scenarios.length) * 100);

  return (
    <>
      <section className="mt-6 grid gap-6">
        <div className="rounded-2xl bg-white shadow p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold">
            {scenario.title}
          </h2>
          <p className="mt-2 text-sm md:text-base text-neutral-600">
            {scenario.description}
          </p>

          <div className="mt-4">
            {mode === "image" && (
              <figure className="relative">
                <Image
                  width={1920}
                  height={1080}
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
                  src={
                    choice === "pull"
                      ? scenario.videos.pull
                      : scenario.videos.dont
                  }
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
                <ActionButton onClick={() => onChoose("pull")}>
                  Pull the lever
                </ActionButton>
                <ActionButton variant="ghost" onClick={() => onChoose("dont")}>
                  Do nothing
                </ActionButton>
              </>
            )}

            {mode === "video" && videoEnded && index < scenarios.length - 1 && (
              <ActionButton onClick={goNext}>Next Scenario ▶</ActionButton>
            )}

            {mode === "video" &&
              videoEnded &&
              index === scenarios.length - 1 && (
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-neutral-700 font-medium">
                    {dev}
                  </p>
                  <p className="text-sm text-neutral-600">
                    All scenarios complete.
                  </p>
                </div>
              )}
          </div>
        </div>
      </section>

      <footer className="mt-6 text-center text-xs text-neutral-500">
        Built for Next.js. Media plays after you choose.
      </footer>
    </>
  );
}
