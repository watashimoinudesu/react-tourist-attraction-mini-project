import { truncate } from "../utils/text"
import { TagList } from "./TagList"

function safePhotos(photos = []) {
  return Array.isArray(photos) ? photos.filter(Boolean) : []
}

export function PlaceCard({ title, description, url, photos, tags }) {
  const p = safePhotos(photos)
  const hero = p[0]
  const thumbs = p.slice(1, 4)

  return (
    <article className="flex bg-white rounded-2xl shadow-md overflow-hidden">
      {/* Left image */}
      <div className="w-[280px] bg-gray-100">
        {hero ? (
          <img
            src={hero}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No image
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex-1 p-5 relative">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="font-bold text-lg hover:underline"
        >
          {title}
        </a>

        <p className="text-gray-600 text-sm mt-2">
          {truncate(description, 100)}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-sm text-blue-500 underline mt-1"
        >
          อ่านต่อ
        </a>

        <TagList tags={tags} />

        {/* Thumbnails */}
        <div className="flex gap-3 mt-4">
          {thumbs.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              className="w-20 h-14 object-cover rounded-lg bg-gray-100"
            />
          ))}
        </div>
      </div>

      {/* Right icon */}
      <div className="flex items-center px-4">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-500"
          aria-label="Open link"
        >
          🔗
        </a>
      </div>
    </article>
  )
}
