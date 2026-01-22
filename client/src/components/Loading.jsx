export function Loading() {
    return (
      <div className="animate-pulse space-y-4">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="h-40 bg-gray-200 rounded-2xl"
          />
        ))}
      </div>
    )
  }
  