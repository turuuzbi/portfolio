import { GlitchText } from "./GlitchText";

type Props = {
  id: string;
  label: string;
  title: string;
};

/** Section label ("01 // Work") + big glitch heading. `id` labels the section. */
export function SectionHeading({ id, label, title }: Props) {
  return (
    <header className="mb-10 sm:mb-14">
      <p className="mb-3 font-pixel text-xs uppercase tracking-[0.3em] text-accent-text">
        {label}
      </p>
      <h2
        id={id}
        className="heading-shadow text-4xl text-fg sm:text-6xl md:text-7xl"
      >
        <GlitchText text={title} />
      </h2>
      <div
        aria-hidden
        className="mt-5 h-(--bw-thick) w-24 bg-accent shadow-[0_0_14px_0_var(--accent)]"
      />
    </header>
  );
}
