"use client";

import { useEffect, useRef, useState } from "react";

const tools = [
  { name: "Sketch",   color: "#F7B500" },
  { name: "Figma",    color: "#A259FF" },
  { name: "Flutter",  color: "#54C5F8" },
  { name: "OpenAI",   color: "#74AA9C" },
  { name: "AWS",      color: "#FF9900" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "Node.js",  color: "#8CC84B" },
  { name: "Laravel",  color: "#FF2D20" },
  { name: "React",    color: "#61DAFB" },
];

const CODE_LINES = [
  { text: "// Pluginfy — Scaffolding Full-Stack Project...", style: "comment" },
  { text: "Const Stack = ['laravel', 'react', 'node', 'wordpress'];", style: "code" },
  { text: "", style: "blank" },
  { text: "// Wiring AI Integration + Chat Agent...", style: "comment" },
  { text: "Const Agent = Await CreateChatAgent({ Tools: True });", style: "code" },
  { text: "Await Deploy({ Env: 'production', Region: 'global' });", style: "code" },
  { text: "", style: "blank" },
  { text: "// APIs Live . Agents Ready ✓", style: "comment" },
  { text: "Export Default { Status: 'shipped' };", style: "code" },
] as const;

function TypingTerminal() {
  const [displayed, setDisplayed] = useState<(string | undefined)[]>([]);
  const [cursorLine, setCursorLine] = useState<number | null>(null);
  const booted = useRef(false);
  const tid = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (booted.current) return;
    booted.current = true;

    let li = 0;
    let ci = 0;

    function step() {
      if (li >= CODE_LINES.length) { setCursorLine(null); return; }
      const line = CODE_LINES[li];

      if (line.style === "blank") {
        const idx = li;
        setDisplayed((p) => { const n = [...p]; n[idx] = ""; return n; });
        li++; ci = 0;
        tid.current = setTimeout(step, 90);
        return;
      }

      ci++;
      const partial = line.text.slice(0, ci);
      const idx = li;
      setDisplayed((p) => { const n = [...p]; n[idx] = partial; return n; });
      setCursorLine(idx);

      if (ci < line.text.length) {
        tid.current = setTimeout(step, 34);
      } else {
        li++; ci = 0;
        tid.current = setTimeout(step, line.style === "comment" ? 210 : 130);
      }
    }

    tid.current = setTimeout(step, 700);
    return () => {
      if (tid.current) clearTimeout(tid.current);
      booted.current = false;
      setDisplayed([]);
      setCursorLine(null);
    };
  }, []);

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col w-full"
      style={{ background: "#0E1228", border: "1px solid rgba(255,255,255,0.12)", minHeight: 360 }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
        style={{ background: "#111630", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F56" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#27C93F" }} />
        </div>
        <div
          className="flex-1 text-center rounded-md px-2 py-1 truncate"
          style={{ background: "#0E1228", color: "rgba(255,255,255,0.38)", fontSize: "0.7rem", fontFamily: "var(--font-body)" }}
        >
          Saas-Dashboard.Pluginfy.Com
        </div>
      </div>

      {/* Code area */}
      <div
        className="flex-1 p-4 sm:p-6 flex flex-col overflow-x-auto"
        style={{ fontFamily: "'JetBrains Mono','Fira Code','Courier New',monospace", fontSize: "clamp(0.68rem,1.5vw,0.83rem)", lineHeight: 1.95 }}
      >
        {CODE_LINES.map((line, i) => {
          const text = displayed[i];
          if (text === undefined) return null;
          if (line.style === "blank") return <div key={i} style={{ height: "0.75rem" }} />;
          const isActive = cursorLine === i;
          return (
            <div key={i} className="flex items-center" style={{ minHeight: "1.6rem" }}>
              <span style={{ color: line.style === "comment" ? "rgba(255,255,255,0.4)" : "#F5C518", whiteSpace: "pre" }}>
                {text}
              </span>
              {isActive && (
                <span style={{ display: "inline-block", width: "2px", height: "1em", background: "#F5C518", marginLeft: "1px", verticalAlign: "middle", animation: "tblink 0.85s step-end infinite" }} />
              )}
            </div>
          );
        })}
        {cursorLine === null && displayed.length === CODE_LINES.length && (
          <div className="flex items-center" style={{ minHeight: "1.6rem" }}>
            <span style={{ display: "inline-block", width: "2px", height: "1em", background: "#F5C518", animation: "tblink 0.85s step-end infinite" }} />
          </div>
        )}
      </div>

      <style>{`@keyframes tblink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </div>
  );
}

export default function IdeaToProduct() {
  return (
    <section style={{ background: "#07091A" }} className="py-16 sm:py-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <TypingTerminal />

          <div className="mt-6 lg:mt-0">
            <p className="section-label mb-3">From idea to product</p>
            <h2
              className="font-heading font-extrabold mb-4"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.7rem,4vw,2.8rem)", color: "white", lineHeight: 1.15 }}
            >
              Building a startup? We have a different page for you.
            </h2>
            <p className="mb-7" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.75, maxWidth: 440, fontSize: "0.95rem" }}>
              From concept to launch, we work alongside founders to ship products that scale.
              We handle design, development, and infrastructure — you focus on growth.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg"
                  style={{ background: "#111630", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full flex-shrink-0" style={{ background: tool.color }} />
                  <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)" }}>
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}