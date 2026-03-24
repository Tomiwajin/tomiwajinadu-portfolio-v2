export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center mt-40 gap-6 px-4">
      {/* Title */}
      <div className="text-center space-y-3">
        <div className="h-8 w-72 bg-foreground/10 rounded-lg animate-pulse mx-auto" />
        <div className="h-4 w-52 bg-foreground/10 rounded-md animate-pulse mx-auto" />
      </div>

      {/* Option buttons */}
      <div className="flex flex-col gap-4 mt-10 w-full max-w-xs">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-20 py-3 rounded-xl border border-foreground/10"
          >
            <div className="h-10 w-10 rounded-full bg-foreground/10 animate-pulse shrink-0" />
            <div className="h-4 w-20 bg-foreground/10 rounded-md animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
