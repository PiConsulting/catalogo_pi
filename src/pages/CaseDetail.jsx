"use client"
import { useParams, Link } from "react-router-dom"
import Header from "../components/Header"
import catalogData from "../data/catalog.json"

const CaseDetail = () => {
  const { categorySlug, caseType, caseIndex } = useParams()

  const category = catalogData.find((cat) => cat.url === `/categoria/${categorySlug}`)

  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Caso no encontrado</h1>
          <Link to="/" className="text-yellow-500 hover:text-yellow-600 mt-4 inline-block">
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  const cases = caseType === "success" ? category.cases.success : category.cases.use
  const caseItem = cases[Number.parseInt(caseIndex)]

  if (!caseItem) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Caso no encontrado</h1>
          <Link to={`/categoria/${categorySlug}`} className="text-yellow-500 hover:text-yellow-600 mt-4 inline-block">
            Volver a la categoría
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            to={`/categoria/${categorySlug}`}
            className="text-yellow-500 hover:text-yellow-600 mb-4 inline-flex items-center"
          >
            ← Volver a {category.title}
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">{caseItem.name}</h1>
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
              caseType === "success" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
            }`}
          >
            {caseType === "success" ? "Caso de Éxito" : "Caso de Uso"}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {caseItem.images.map((image, index) => (
            <div key={index} className="space-y-4">
              <img
                src={image || "/placeholder.svg"}
                alt={`${caseItem.name} - Imagen ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              {caseItem.descriptions[index] && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">{caseItem.descriptions[index]}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {caseItem.logos && caseItem.logos.length > 0 && (
          <div className="border-t pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Clientes Destacados</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {caseItem.logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo || "/placeholder.svg"}
                  alt={`Cliente ${index + 1}`}
                  className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default CaseDetail
