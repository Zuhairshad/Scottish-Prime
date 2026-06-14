"use client";

const PRESS = [
  {
    name: "Financial Times",
    src: "https://en.wikipedia.org/wiki/Special:FilePath/Financial_Times_corporate_logo_(no_background).svg",
  },
  {
    name: "The Guardian",
    src: "https://en.wikipedia.org/wiki/Special:FilePath/The_Guardian_2018.svg",
  },
  {
    name: "BBC News",
    src: "https://en.wikipedia.org/wiki/Special:FilePath/BBC_News_2022.svg",
  },
  {
    name: "Sky News",
    src: "https://en.wikipedia.org/wiki/Special:FilePath/Sky_News_2015_(logo).svg",
  },
  {
    name: "Reuters",
    src: "https://en.wikipedia.org/wiki/Special:FilePath/Reuters_logo.svg",
  },
  {
    name: "City AM",
    src: "https://en.wikipedia.org/wiki/Special:FilePath/CityAM-Logo-Dark_(2).png",
  },
];

export function PressStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-4 items-center">
      {PRESS.map((p) => (
        <div
          key={p.name}
          className="flex items-center justify-center h-14 px-2 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition press"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.src}
            alt={`${p.name} logo`}
            className="max-h-8 w-auto object-contain"
            loading="lazy"
            onError={(e) => {
              const el = e.currentTarget;
              el.style.display = "none";
              const fb = el.nextElementSibling as HTMLElement | null;
              if (fb) fb.style.display = "inline";
            }}
          />
          <span
            style={{ display: "none" }}
            className="t-body-sm-med text-ink/55"
          >
            {p.name}
          </span>
        </div>
      ))}
    </div>
  );
}
