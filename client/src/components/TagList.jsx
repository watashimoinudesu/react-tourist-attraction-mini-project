export function TagList({ tags = [] }) {
    if (!tags.length) return null
  
    return (
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((t) => (
          <span key={t} className="text-xs text-gray-500">
            {t}
          </span>
        ))}
      </div>
    )
  }
  