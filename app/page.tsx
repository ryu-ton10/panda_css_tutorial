"use client";

import { useEffect, useRef } from "react";
import { css } from "../styled-system/css";
import { getTheme, injectTheme } from "../styled-system/themes";

export default function Home() {
  const primaryRef = useRef<HTMLElement | null>(null);
  const secondaryRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let disposed = false;

    async function setupThemes() {
      const [primary, secondary] = await Promise.all([getTheme("primary"), getTheme("secondary")]);
      if (disposed) return;

      if (primaryRef.current) injectTheme(primaryRef.current, primary);
      if (secondaryRef.current) injectTheme(secondaryRef.current, secondary);
    }

    setupThemes();

    return () => {
      disposed = true;
    };
  }, []);

  return (
    <main
      ref={primaryRef}
      data-panda-theme="primary"
      className={css({ p: "8", display: "grid", gap: "4" })}
    >
      <h1 className={css({ fontSize: "3xl", color: "body" })}>Panda CSS demo</h1>
      <p className={css({ color: "muted" })}>ここはプライマリテーマのテキストです。</p>

      <section
        ref={secondaryRef}
        data-panda-theme="secondary"
        className={css({ p: "4", borderRadius: "md", bg: "muted" })}
      >
        <p className={css({ color: "body" })}>ここはセカンダリテーマのテキストです。</p>
      </section>

      <button
        type="button"
        className={css({
          px: "4",
          py: "2",
          borderRadius: "md",
          color: "body",
          bg: "muted",
          borderColor: "red",
          borderWidth: "1px",
        })}
      >
        テーマ付きボタン
      </button>
    </main>
  );
}
