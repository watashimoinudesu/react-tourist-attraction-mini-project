// import { useEffect, useState } from "react"
// import { fetchPlaces } from "../services/placesApi"

// export function usePlacesSearch(keyword) {
//   const [places, setPlaces] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     let ignore = false

//     async function run() {
//       try {
//         setLoading(true)
//         setError(null)
//         const data = await fetchPlaces(keyword)
//         if (!ignore) setPlaces(Array.isArray(data) ? data : [])
//       } catch (e) {
//         if (!ignore) setError(e?.message ?? "Failed to fetch places")
//       } finally {
//         if (!ignore) setLoading(false)
//       }
//     }

//     run()
//     return () => {
//       ignore = true
//     }
//   }, [keyword])

//   return { places, loading, error }
// }


// import { useEffect, useState } from "react"
// import { fetchAllTrips, searchTrips } from "../services/placesApi"

// export function usePlacesSearch(keyword) {
//   const [places, setPlaces] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     let ignore = false

//     async function run() {
//       try {
//         setLoading(true)
//         setError(null)

//         const q = (keyword ?? "").trim()
//         const data = q.length === 0 ? await fetchAllTrips() : await searchTrips(q)

//         if (!ignore) setPlaces(Array.isArray(data) ? data : [])
//       } catch (e) {
//         if (!ignore) setError(e?.message ?? "Failed to fetch trips")
//       } finally {
//         if (!ignore) setLoading(false)
//       }
//     }

//     run()
//     return () => {
//       ignore = true
//     }
//   }, [keyword])

//   return { places, loading, error }
// }

import { useEffect, useState } from "react"
import { fetchTrips } from "../services/placesApi"

export function usePlacesSearch(keyword) {
  const [places, setPlaces] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ignore = false

    async function run() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchTrips(keyword)
        if (!ignore) setPlaces(Array.isArray(data) ? data : [])
      } catch (e) {
        if (!ignore) setError(e?.message ?? "Failed to fetch trips")
      } finally {
        if (!ignore) setLoading(false)
      }
    }

    run()
    return () => (ignore = true)
  }, [keyword])

  return { places, loading, error }
}
