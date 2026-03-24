export default function Loading() {
  return (
    <div className="pl-4 md:pl-100 flex flex-col gap-20">
      {/* Profile section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Avatar circle */}
        <div className="w-20 h-20 md:w-40 md:h-40 rounded-full bg-foreground/10 animate-pulse shrink-0" />

        {/* Name + buttons + bio */}
        <div className="flex flex-col items-center md:items-start gap-4 md:px-10 w-full">
          <div className="h-7 w-44 bg-foreground/10 rounded-lg animate-pulse" />

          {/* Buttons */}
          <div className="flex gap-4">
            <div className="h-10 w-28 bg-foreground/10 rounded-md animate-pulse" />
            <div className="h-10 w-28 bg-foreground/10 rounded-md animate-pulse" />
          </div>

          {/* Bio lines */}
          <div className="space-y-2">
            <div className="h-5 w-36 bg-foreground/10 rounded-md animate-pulse" />
            <div className="h-5 w-28 bg-foreground/10 rounded-md animate-pulse" />
            <div className="h-5 w-52 bg-foreground/10 rounded-md animate-pulse" />
          </div>
        </div>
      </div>

      {/* Post grid — desktop */}
      <div className="hidden md:flex flex-col gap-26">
        <div className="flex flex-row gap-8 -ml-30">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-64 h-96 rounded-2xl bg-foreground/10 animate-pulse"
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
        <div className="flex flex-row gap-8 -ml-30">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="w-64 h-96 rounded-2xl bg-foreground/10 animate-pulse"
              style={{ animationDelay: `${(i + 3) * 100}ms` }}
            />
          ))}
        </div>
      </div>

      {/* Post grid — mobile */}
      <div className="md:hidden flex flex-col gap-2 -mt-10">
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex gap-2">
            <div className="flex-1 h-60 bg-foreground/10 animate-pulse" />
            {row < 2 && <div className="flex-1 h-60 bg-foreground/10 animate-pulse" />}
          </div>
        ))}
      </div>
    </div>
  );
}
