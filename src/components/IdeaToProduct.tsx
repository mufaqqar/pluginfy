"use client";

import { useEffect, useRef, useState } from "react";
import { BsOpenai } from "react-icons/bs";
import { FaAws } from "react-icons/fa";
import {
  SiSketch,
  SiFigma,
  SiFlutter,
  SiFirebase,
  SiNodedotjs,
  SiLaravel,
  SiReact,
} from "react-icons/si";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

const tools = [
  { name: "Sketch", icon: SiSketch, color: "#F7B500" },
  { name: "Figma", icon: SiFigma, color: "#A259FF" },
  { name: "Flutter", icon: SiFlutter, color: "#54C5F8" },
  { name: "OpenAI", icon: BsOpenai, color: "#74AA9C" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Node.js", icon: SiNodedotjs, color: "#8CC84B" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
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
      className="rounded-lg overflow-hidden flex flex-col w-full"
      style={{ background: "##101324", border: "1px solid rgba(255,255,255,0.2)", minHeight: 414 }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
        style={{ background: "#111630", borderBottom: "1px solid rgba(255,255,255,0.2)" }}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F56" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#27C93F" }} />
        </div>
        <div
          className="text-center rounded-md px-2 py-1 truncate"
          style={{ color: "rgba(255,255,255)", fontSize: "1rem", fontFamily: "var(--font-body)" }}
        >
          Saas-Dashboard.Pluginfy.Com
        </div>
      </div>

      {/* Code area */}
      <div
        className="flex-1 p-4 sm:p-6 flex flex-col overflow-x-auto"
        style={{ fontFamily: "'JetBrains Mono','Fira Code','Courier New',monospace", fontSize: "clamp(0.68rem,1.5vw,0.88rem)", lineHeight: 1.95 }}
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
          <FadeIn x={-40} duration={0.7}>
            <TypingTerminal />
          </FadeIn>

          <div className="mt-6 lg:mt-0">

            <FadeIn y={30} delay={0.15} duration={0.6}>
              <h2
                className="font-heading font-extrabold mb-4"
                style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.7rem,4vw,40px)", color: "white", lineHeight: 1.15 }}
              >
                <span className="text-[#FEBC2E]">From idea to product</span> <br /> Building a startup? We have a different page for you.
              </h2>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3" staggerDelay={0.06}>
              {tools.map((tool) => {
                const Icon = tool.icon;

                return (
                  <StaggerItem key={tool.name} hover hoverY={-5} hoverScale={1.03}>
                    <div
                      className="flex items-center justify-center gap-2 px-10 py-4.5 rounded-lg"
                      style={{
                        background: "#101324",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <Icon
                        size={20}
                        style={{
                          color: tool.color,
                          flexShrink: 0,
                        }}
                      />

                      <span
                        style={{
                          fontSize: "15px",
                          fontWeight: 700,
                          color: "rgba(255,255,255)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {tool.name}
                      </span>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}