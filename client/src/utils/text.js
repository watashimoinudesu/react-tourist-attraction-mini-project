export function truncate(text = "", max = 100) {
    const s = String(text || "")
    if (s.length <= max) return s
    return s.slice(0, max).trimEnd() + "…"
  }
  