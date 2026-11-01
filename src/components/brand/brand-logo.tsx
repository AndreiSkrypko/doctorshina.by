import Image from "next/image";

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ compact = false, className = "" }: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl shadow-lg shadow-amber-500/20 ring-1 ring-white/15 md:h-12 md:w-12">
        <Image
          src="/images/brand/doctorshina-mark.jpg"
          alt="DoctorShina"
          fill
          className="object-cover"
          sizes="48px"
          priority
        />
      </span>

      {!compact ? (
        <span className="flex min-w-0 flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-tight text-white md:text-xl">
            Doctor<span className="text-amber-300">Shina</span>
            <span className="text-sm font-semibold text-teal-300">.by</span>
          </span>
          <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Минск
          </span>
        </span>
      ) : null}
    </span>
  );
}
