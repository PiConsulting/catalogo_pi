import {Link} from 'react-router-dom'

const CategoryCard = ({category, className = ''}) => {
  return (
    <Link
      to={category.url}
      className={`relative block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-black/70 ${className}`}
      style={{minHeight: '200px'}}
    >
      {/* Imagen de fondo */}
      <img
        src={category.icon || '/placeholder.svg'}
        alt={category.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-between h-full p-4">
        <div>
          <h3 className="font-bold text-yellow-100 text-lg mb-1">{category.title}</h3>
          <p className="text-yellow-50 text-sm line-clamp-2">{category.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {category.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 border border-yellow-400 text-yellow-200 rounded-full text-xs font-medium bg-transparent"
            >
              {tag}
            </span>
          ))}
          {category.tags.length > 3 && (
            <span className="px-2 py-1 border border-gray-400 text-gray-200 rounded-full text-xs bg-transparent">
              +{category.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard
