'use client'

import {useState, useEffect} from 'react'
import Header from '../components/Header'
import CategoryCard from '../components/CategoryCard'
import FilterBar from '../components/FilterBar'
import catalogData from '../data/catalog.json'

const Home = () => {
  const [filteredCategories, setFilteredCategories] = useState(catalogData)
  const [selectedTags, setSelectedTags] = useState([])

  // Obtener todas las tags únicas
  const allTags = [...new Set(catalogData.flatMap((category) => category.tags))]

  useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredCategories(catalogData)
    } else {
      const filtered = catalogData.filter((category) =>
        selectedTags.some((tag) => category.tags.includes(tag)),
      )
      setFilteredCategories(filtered)
    }
  }, [selectedTags])

  const handleTagFilter = (tag) => {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((t) => t !== tag)
      } else {
        return [...prev, tag]
      }
    })
  }

  const clearFilters = () => {
    setSelectedTags([])
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Catálogo de Soluciones de IA</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestros casos de uso y casos de éxito en diferentes industrias
          </p>
        </div>

        <FilterBar
          tags={allTags}
          selectedTags={selectedTags}
          onTagClick={handleTagFilter}
          onClearFilters={clearFilters}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {filteredCategories.map((category, index) => (
            <CategoryCard
              key={index}
              category={category}
              className="transform transition-all duration-300 hover:scale-105"
            />
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No se encontraron categorías con los filtros seleccionados
            </p>
          </div>
        )}
      </main>
    </div>
  )
}

export default Home
