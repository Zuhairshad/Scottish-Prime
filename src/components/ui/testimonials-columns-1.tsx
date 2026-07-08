"use client";
import React from "react";
import { motion } from "motion/react";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  saved?: string;
  switchedFrom?: string;
  since?: string;
  featured?: boolean;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(
                ({ quote, name, role, location, saved, switchedFrom, since, featured }, i) => {
                  const initials = name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("");

                  return (
                    <div
                      className={`p-6 md:p-8 rounded-2xl border max-w-xs w-full transition-shadow duration-300 hover:shadow-lg ${
                        featured
                          ? "bg-[var(--color-gold-lightest)] border-[var(--color-gold)]/40 shadow-[0_4px_24px_rgba(203,162,88,0.12)]"
                          : "bg-white border-[var(--color-hairline)] shadow-[var(--shadow-card)]"
                      }`}
                      key={i}
                    >
                      {/* Star rating */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex gap-0.5 text-[var(--color-gold)] text-sm">
                          ★★★★★
                        </div>
                        {featured && (
                          <span className="text-[11px] font-semibold text-[var(--color-gold)] bg-white/60 rounded-full px-2.5 py-0.5">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Quote */}
                      <p className="text-[15px] leading-relaxed text-[var(--color-ink)]">
                        &ldquo;{quote}&rdquo;
                      </p>

                      {/* Stats row */}
                      {(saved || switchedFrom || since) && (
                        <div
                          className={`mt-4 grid grid-cols-3 gap-2 px-3 py-2.5 rounded-lg text-center ${
                            featured ? "bg-white/50" : "bg-[var(--color-ceramic)]/60"
                          }`}
                        >
                          {saved && (
                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-ink)]/45">
                                Saved
                              </p>
                              <p className="text-[13px] font-semibold text-[var(--color-accent-green)] mt-0.5">
                                {saved}
                              </p>
                            </div>
                          )}
                          {switchedFrom && (
                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-ink)]/45">
                                From
                              </p>
                              <p className="text-[13px] font-semibold text-[var(--color-ink)] mt-0.5">
                                {switchedFrom}
                              </p>
                            </div>
                          )}
                          {since && (
                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-ink)]/45">
                                Since
                              </p>
                              <p className="text-[13px] font-semibold text-[var(--color-ink)] mt-0.5">
                                {since}
                              </p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Author */}
                      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-[var(--color-ink)]/10">
                        <span
                          className={`inline-flex items-center justify-center w-10 h-10 rounded-full font-semibold text-[13px] flex-shrink-0 ${
                            featured
                              ? "bg-[var(--color-gold)] text-[var(--color-house-green)]"
                              : "bg-[var(--color-house-green)] text-white"
                          }`}
                        >
                          {initials}
                        </span>
                        <div className="flex flex-col">
                          <div className="font-medium tracking-tight leading-5 text-[var(--color-ink)]">
                            {name}
                          </div>
                          <div className="leading-5 text-[var(--color-ink)]/60 tracking-tight text-sm">
                            {role}
                          </div>
                          <div className="leading-5 text-[var(--color-ink)]/45 tracking-tight text-xs">
                            {location}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
