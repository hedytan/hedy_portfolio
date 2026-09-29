"use client";

import { useEffect, useState } from "react";

const introduction = "hi! i'm Hedy, a UX/UI designer in Sydney. click around to learn about me:)";

export default function DesktopIntro() {
  const [length, setLength] = useState(0);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setTimeout>;
    let index = 0;
    const type = () => {
      index += 1;
      setLength(index);
      if (index < introduction.length) {
        timer = setTimeout(type, /[.!?]/.test(introduction[index - 1]) ? 260 : 40);
      }
    };
    const finish = () => {
      if (preference.matches) {
        clearTimeout(timer);
        setLength(introduction.length);
      }
    };
    if (preference.matches) finish();
    else timer = setTimeout(type, 250);
    preference.addEventListener("change", finish);
    return () => {
      clearTimeout(timer);
      preference.removeEventListener("change", finish);
    };
  }, []);

  return <p className="desktop-intro">
    <span className="sr-only">{introduction}</span>
    <span className="desktop-intro-reserve" aria-hidden="true">{introduction}</span>
    <span className="desktop-intro-typing" aria-hidden="true">
      {introduction.slice(0, length)}
      <span className="desktop-intro-caret" />
    </span>
  </p>;
}
