type Props = {
  size?: number;
  className?: string;
  "aria-hidden"?: boolean;
};

// The classic 1977 rainbow Apple, drawn as a stack of horizontal stripes
// clipped to the silhouette. Stripes go (top to bottom): green, yellow,
// orange, red, purple, blue.
export function AppleLogo({
  size = 28,
  className,
  "aria-hidden": ariaHidden = true,
}: Props) {
  const id = "apple-clip";
  return (
    <svg
      viewBox="0 0 64 78"
      width={size}
      height={(size * 78) / 64}
      className={className}
      aria-hidden={ariaHidden}
      role="img"
    >
      <defs>
        <clipPath id={id}>
          {/* Apple body */}
          <path
            d="M44.5 25.5c-3.4 0-6.6 1.2-9 3.2-1.5-.9-3.2-1.4-5-1.6 0-3.6 1.4-7 3.8-9.5 2.4-2.4 5.7-3.8 9.2-3.8.2 3.6-1.2 7-3.6 9.5-.4.4-1 .9-1.4 1.2 1.4.8 2.7 2 3.7 3.4.6.5 1.4 1.1 2.3 1.6zM50 35.6c-1.4-2.5-3.5-4.7-6-6.2-2.6-1.5-5.6-2.4-8.6-2.4-2.4 0-4.7.5-6.6 1.4-2-.9-4.2-1.4-6.5-1.4-7.2 0-13.3 5.6-13.3 14.5 0 11.6 9.8 26.5 17 26.5 2.4 0 3.8-1.4 6.6-1.4 2.7 0 4 1.4 6.6 1.4 7 0 14.4-12.5 16.4-22-2.6-1.4-4.6-3.6-5.6-6.2 0 0-2.6-2.5 0-4.2z"
            fill="#fff"
          />
          {/* Bite */}
        </clipPath>
      </defs>

      <g clipPath={`url(#${id})`}>
        <rect x="0" y="13" width="64" height="9.5" fill="#61bb46" />
        <rect x="0" y="22.5" width="64" height="9.5" fill="#fcb827" />
        <rect x="0" y="32" width="64" height="9.5" fill="#f5821f" />
        <rect x="0" y="41.5" width="64" height="9.5" fill="#e03a3e" />
        <rect x="0" y="51" width="64" height="9.5" fill="#963d97" />
        <rect x="0" y="60.5" width="64" height="11" fill="#009ddc" />
      </g>
    </svg>
  );
}
