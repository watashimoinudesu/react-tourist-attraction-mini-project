// import axios from "axios"

// const client = axios.create({
//   baseURL: "http://localhost:4001",
//   timeout: 15000,
// })

// const API_PATH = "/trips"

// export async function fetchPlaces(keyword = "") {
//   const q = keyword.trim()

//   const params = q
//     ? { keywords: q } // ตาม spec จริง
//     : undefined

//   const res = await client.get(API_PATH, { params })
//   return res.data?.data ?? []
// }
// import axios from "axios"

// const client = axios.create({
//   baseURL: "http://localhost:4001",
//   timeout: 15000,
// })

// const API_PATH = "/trips"

// export async function fetchPlaces(keyword = "") {
//   const q = keyword.trim()

//   let url = API_PATH

//   // 👇 ส่ง query เฉพาะตอนมี keyword จริง ๆ เท่านั้น
//   if (q.length > 0) {
//     url += `?keywords=${encodeURIComponent(q)}`
//   }

//   const res = await client.get(url)
//   return res.data?.data ?? []
// }
// import axios from "axios"

// const client = axios.create({
//   baseURL: "http://localhost:4001",
//   timeout: 15000,
// })

// export async function fetchAllTrips() {
//   const res = await client.get("/trips")
//   return res.data?.data ?? []
// }

// export async function searchTrips(keyword) {
//   const q = keyword.trim()
//   const res = await client.get(`/trips?keywords=${encodeURIComponent(q)}`)
//   return res.data?.data ?? []
// }


import axios from "axios"

const client = axios.create({
  baseURL: "http://localhost:4001",
  timeout: 15000,
})

function pickData(res) {
  return res.data?.data ?? []
}

export async function fetchTrips(keyword = "") {
  const q = (keyword ?? "").trim()

  // ✅ server บังคับต้องมี keywords เสมอ
  // - ถ้า q มีค่า → ใช้ q
  // - ถ้า q ว่าง → ลอง "*" (เอาทั้งหมด) ถ้าไม่ได้ค่อย fallback เป็น " " (space)
  if (q.length > 0) {
    const res = await client.get(`/trips?keywords=${encodeURIComponent(q)}`)
    return pickData(res)
  }

  // 1) try wildcard
  try {
    const resAll = await client.get(`/trips?keywords=${encodeURIComponent("*")}`)
    return pickData(resAll)
  } catch (_) {
    // 2) fallback to a single space
    const resAll2 = await client.get(`/trips?keywords=${encodeURIComponent(" ")}`)
    return pickData(resAll2)
  }
}

