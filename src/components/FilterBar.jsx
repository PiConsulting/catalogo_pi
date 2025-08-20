'use client'

const FilterBar = ({tags, selectedTags, onTagClick, onClearFilters}) => {
  return (
    <div className="bg-yellow-200 rounded-full px-1 py-1 flex flex-wrap items-center justify-center w-full max-w-5xl mx-auto">
      {tags.map((tag, index) => (
        <button
          key={index}
          onClick={() => onTagClick(tag)}
          className={` p-2 rounded-full text-base  font-normal transition-all duration-200 mx-1 whitespace-nowrap focus:outline-none ${
            selectedTags.includes(tag)
              ? 'bg-yellow-400 text-black shadow-sm'
              : 'bg-yellow-200 text-gray-800 hover:bg-yellow-300'
          }`}
        >
          {tag}
        </button>
      ))}
      {/* {selectedTags && selectedTags.length > 0 && (
        <button
          onClick={onClearFilters}
          className="ml-4 text-red-600 transition-all duration-200 whitespace-nowrap text-xl hover:text-red-300"
        >
          Limpiar filtros
        </button>
      )} */}
    </div>
  )
}

export default FilterBar
