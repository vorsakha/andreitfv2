export function BuildingFlow() {
  return (
    <svg
      className="building-flow"
      viewBox="0 0 320 150"
      aria-hidden="true"
      focusable="false"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M25 31 H143 C171 31 154 75 186 75 H270" />
        <path d="M25 75 H270" />
        <path d="M25 119 H143 C171 119 154 75 186 75" />
        <path d="M263 69 L271 75 L263 81" />
        <circle cx="14" cy="31" r="11" fill="var(--canvas)" />
        <circle cx="14" cy="75" r="11" fill="var(--canvas)" />
        <circle cx="14" cy="119" r="11" fill="var(--canvas)" />
        <circle cx="290" cy="75" r="11" fill="var(--canvas)" />
      </g>
    </svg>
  );
}
