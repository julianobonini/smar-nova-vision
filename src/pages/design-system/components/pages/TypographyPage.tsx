import { Demo } from './Demo';

export default function TypographyPage() {
  return (
    <Demo title="Hierarquia tipográfica">
      <div className="space-y-4">
        <h1 className="font-display text-4xl font-extrabold tracking-tight">Display H1 — Manrope</h1>
        <h2 className="font-display text-3xl font-bold tracking-tight">Heading H2</h2>
        <h3 className="font-display text-2xl font-bold">Heading H3</h3>
        <h4 className="font-display text-xl font-semibold">Heading H4</h4>
        <p className="text-base">
          Corpo padrão (Inter): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae bibendum nibh.
        </p>
        <p className="text-sm text-muted-foreground">Texto secundário menor.</p>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Eyebrow / label</p>
        <pre className="rounded-xl bg-primary text-primary-foreground p-3 text-xs font-mono">code monospace</pre>
      </div>
    </Demo>
  );
}
