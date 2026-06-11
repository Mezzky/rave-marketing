"use client";

import TypeIt from "typeit-react";

type TypingHeadlineProps = {
  text: string;
};

export function TypingHeadline({ text }: TypingHeadlineProps) {
  return (
    <TypeIt
      as="span"
      className="storyTypeText"
      options={{
        strings: [text],
        speed: 26,
        cursor: true,
        waitUntilVisible: true,
        lifeLike: true,
      }}
    />
  );
}
