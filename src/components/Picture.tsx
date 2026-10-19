import { useState } from "react";

/** A real photo with fixed aspect ratio and a readable fallback if the file fails to load. */
export function Picture({
  src,
  alt,
  priority = false,
  className = "",
  ratio = "aspect-[16/10]",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  ratio?: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`overflow-hidden bg-muted ${ratio} ${className}`}>
      {failed ? (
        <div className="flex h-full items-center justify-center p-4 text-center text-sm text-muted-foreground">
          Picture could not load: {alt}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={1024}
          height={640}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className="block h-full w-full object-cover"
        />
      )}
    </div>
  );
}
