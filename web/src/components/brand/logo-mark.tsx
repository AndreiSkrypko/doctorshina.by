/** Scalable vector mark — use in PDF, stickers, or swap raster in `BrandLogo`. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="DoctorShina"
    >
      <rect width="64" height="64" rx="14" fill="#0A101C" />
      <circle cx="32" cy="32" r="22" stroke="url(#ds-gold)" strokeWidth="3" />
      <circle cx="32" cy="32" r="14" stroke="#2DD4BF" strokeWidth="2" opacity="0.85" />
      <path d="M32 18v28M18 32h28" stroke="url(#ds-gold)" strokeWidth="3.5" strokeLinecap="round" />
      <path
        d="M32 10v6M32 48v6M10 32h6M48 32h6"
        stroke="#F5D78A"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <defs>
        <linearGradient id="ds-gold" x1="12" y1="10" x2="52" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F5D78A" />
          <stop offset="1" stopColor="#E8B84A" />
        </linearGradient>
      </defs>
    </svg>
  );
}
