export function SearchBar({ value, onChange }) {
    return (
      <div className="w-full max-w-3xl mx-auto mb-6">
        <label className="block text-sm text-gray-500 mb-2">
          ค้นหาที่เที่ยว
        </label>
        <input
          className="w-full border-b border-gray-300 focus:border-blue-400 outline-none py-2 text-sm"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
        />
      </div>
    )
  }
  