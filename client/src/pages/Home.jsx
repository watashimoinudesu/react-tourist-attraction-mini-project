import { useState } from "react"
import { SearchBar } from "../components/SearchBar"
import { PlaceCard } from "../components/PlaceCard"
import { Loading } from "../components/Loading"
import { ErrorState } from "../components/ErrorState"
import { EmptyState } from "../components/EmptyState"
import { usePlacesSearch } from "../hooks/usePlacesSearch"

export function Home() {
  const [keyword, setKeyword] = useState("")
  const { places, loading, error } = usePlacesSearch(keyword)

  return (
    <div className="max-w-5xl mx-auto px-5 py-8">
      <h1 className="text-center text-4xl font-bold text-blue-400 mb-6">
        เที่ยวไหนดี
      </h1>

      <SearchBar value={keyword} onChange={setKeyword} />

      <div className="space-y-6">
        {loading && <Loading />}
        {error && <ErrorState message={error} />}
        {!loading && !error && places.length === 0 && <EmptyState />}

        {!loading &&
          !error &&
          places.map((item) => (
            <PlaceCard
              key={item.eid ?? item.url}
              {...item}
            />
          ))}
      </div>
    </div>
  )
}
