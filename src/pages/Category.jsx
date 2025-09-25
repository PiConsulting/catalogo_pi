'use client'
import {useParams, Link} from 'react-router-dom'
import Header from '../components/Header'
import CaseCard from '../components/CaseCard'
import catalogData from '../data/catalog.json'

const Category = () => {
  const {categorySlug} = useParams()

  const category = catalogData.find((cat) => cat.url === `/categoria/${categorySlug}`)

  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Categoría no encontrada</h1>
          <Link to="/" className="text-yellow-500 hover:text-yellow-600 mt-4 inline-block">
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  const allCases = [
    ...(Array.isArray(category.cases?.success)
      ? category.cases.success.map((c, idx) => ({...c, type: 'success', realIndex: idx}))
      : []),
    ...(Array.isArray(category.cases?.use)
      ? category.cases.use.map((c, idx) => ({...c, type: 'use', realIndex: idx}))
      : []),
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Header visual de la categoría */}
      <section className="relative w-full h-[180px] md:h-[220px] flex items-center justify-center mb-8">
        {/* Imagen de fondo */}
        <img
          src={category.background || category.icon || '/placeholder.svg'}
          alt={category.title}
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        {/* Volver al catálogo */}
        <Link
          to="/"
          className="absolute top-5 left-5 z-20 text-white text-base flex items-center gap-2 hover:text-yellow-300"
        >
          <span className="text-xl">←</span> Volver al Catálogo
        </Link>
        {/* Título y descripción */}
        <div className="relative z-20 flex flex-col items-center text-center w-full px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 mt-6 md:mt-0">
            {category.title}
          </h1>
          <p className="text-white text-base md:text-lg max-w-2xl">{category.description}</p>
        </div>
      </section>

      <main className="container mx-auto px-4 pb-12">
        {/* Tags de la categoría */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {category.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {allCases.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Casos de uso y éxito</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {allCases.map((caseItem, index) => (
                <CaseCard
                  key={index}
                  caseItem={caseItem}
                  categorySlug={categorySlug}
                  caseIndex={caseItem.realIndex}
                  caseType={caseItem.type}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Próximamente casos de uso y éxito para esta categoría
            </p>
          </div>
        )}
      </main>
    </div>
  )
}

export default Category
