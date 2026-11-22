"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const w = words[i % words.length];
    const done = !del && text === w;
    const empty = del && text === "";
    const t = setTimeout(
      () => {
        if (done) return setDel(true);
        if (empty) {
          setDel(false);
          setI((x) => x + 1);
          return;
        }
        setText(del ? w.slice(0, text.length - 1) : w.slice(0, text.length + 1));
      },
      done ? 1800 : del ? 35 : 65
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return (
    <span className="font-semibold text-cyan-300">
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-cyan-300 align-middle" style={{ height: "1em" }} />
    </span>
  );
}
