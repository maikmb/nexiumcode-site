export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="nx-grad" x1="6" y1="40" x2="42" y2="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e51af" />
          <stop offset="0.55" stopColor="#247ceb" />
          <stop offset="1" stopColor="#5fb8fa" />
        </linearGradient>
      </defs>
      {/* Stylized N with upward arrow, echoing the Nexium Code mark */}
      <path
        d="M8 38V18c0-4 3-7 7-7 2.6 0 4.9 1.4 6.2 3.6L30 28V14h-4l9-9 4 13-3.6-2.4L22 38c-1.3 2.2-3.6 3.6-6.2 3.6-4.3 0-7.8-3.5-7.8-7.8V38Z"
        fill="url(#nx-grad)"
        opacity="0.15"
      />
      <path
        d="M9 37V19.5C9 15.4 12.4 12 16.5 12c2.7 0 5.2 1.5 6.6 3.8L29.5 27V18.5"
        stroke="url(#nx-grad)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M27 13.5 39.5 5l-2.6 14.8-3.5-5.2-6.4-1.1Z" fill="url(#nx-grad)" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="text-xl font-bold tracking-tight text-navy">
        Nexium<span className="text-ocean-600">code</span>
      </span>
    </span>
  );
}
