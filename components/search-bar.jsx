"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Search, X } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function SearchBar({ onClose }) {
  const { language, translations } = useLanguage()
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const inputRef = useRef(null)

  // Mock search data - in a real app, this would come from an API or database
  const searchData = {
    en: [
      { title: "Seamless Pipes", url: "/products/seamless-pipes", type: "product" },
      { title: "ERW Pipes", url: "/products/erw-pipes", type: "product" },
      { title: "Welded Pipes", url: "/products/welded-pipes", type: "product" },
      { title: "Duplex Pipes", url: "/products/duplex-pipes", type: "product" },
      { title: "Oil & Gas Applications", url: "/applications/oil-and-gas", type: "application" },
      { title: "Construction Applications", url: "/applications/construction", type: "application" },
      { title: "Weight Calculator", url: "/calculator", type: "tool" },
      { title: "About Us", url: "/about", type: "page" },
      { title: "Contact Us", url: "/contact", type: "page" },
    ],
    ru: [
      { title: "Бесшовные трубы", url: "/products/seamless-pipes", type: "product" },
      { title: "Трубы ERW", url: "/products/erw-pipes", type: "product" },
      { title: "Сварные трубы", url: "/products/welded-pipes", type: "product" },
      { title: "Дуплексные трубы", url: "/products/duplex-pipes", type: "product" },
      { title: "Применение в нефтегазовой отрасли", url: "/applications/oil-gas", type: "application" },
      { title: "Применение в строительстве", url: "/applications/construction", type: "application" },
      { title: "Калькулятор веса", url: "/calculator", type: "tool" },
      { title: "О нас", url: "/about", type: "page" },
      { title: "Связаться с нами", url: "/contact", type: "page" },
    ],
  }

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  // Handle search
  useEffect(() => {
    if (query.trim() === "") {
      setResults([])
      return
    }

    setIsSearching(true)

    // Simulate API call with setTimeout
    const timer = setTimeout(() => {
      const filteredResults = searchData[language].filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      )
      setResults(filteredResults)
      setIsSearching(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [query, language])

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose()
    }
  }

  return (
    <div className="w-full">
      <div className="relative">
        <div className="flex items-center border-b border-gray-300 pb-2">
          <Search className="h-5 w-5 text-gray-400 mr-2" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={language === "en" ? "Search for products, applications..." : "Поиск продуктов, применений..."}
            className="flex-grow bg-transparent border-none outline-none text-gray-800 placeholder-gray-400"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-gray-400 hover:text-gray-600">
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {isSearching && <div className="py-4 text-center text-gray-500">Searching...</div>}

      {!isSearching && results.length > 0 && (
        <div className="mt-4 max-h-[60vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map((result, index) => (
              <Link
                key={index}
                href={result.url}
                onClick={onClose}
                className="p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="font-medium text-gray-800">{result.title}</div>
                <div className="text-sm text-gray-500 capitalize">{result.type}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {!isSearching && query && results.length === 0 && (
        <div className="py-4 text-center text-gray-500">
          {language === "en" ? "No results found" : "Результаты не найдены"}
        </div>
      )}
    </div>
  )
}

