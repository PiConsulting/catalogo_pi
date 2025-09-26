'use client'
import {useParams, Link} from 'react-router-dom'
import Header from '../components/Header'
import catalogData from '../data/catalog.json'

const CaseDetail = () => {
  const {categorySlug, caseType, caseIndex} = useParams()

  const category = catalogData.find((cat) => cat.url === `/categoria/${categorySlug}`)

  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-xl font-bold text-gray-900">Caso no encontrado</h1>
          <Link to="/" className="text-yellow-500 hover:text-yellow-600 mt-4 inline-block">
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  const cases = caseType === 'success' ? category.cases.success : category.cases.use
  const caseItem = cases[Number.parseInt(caseIndex)]

  if (!caseItem) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Caso no encontrado</h1>
          <Link
            to={`/categoria/${categorySlug}`}
            className="text-yellow-500 hover:text-yellow-600 mt-4 inline-block"
          >
            Volver a la categoría
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative" style={{backgroundColor: 'rgb(243, 243, 233, 0.30)'}}>
      <Header />

      {/* Imagen de fondo y overlay oscuro, igual que Category.jsx */}
      <img
        src={category.background || category.icon || '/placeholder.svg'}
        alt={category.title}
        className="absolute inset-0 w-full h-[180px] md:h-[220px] object-cover object-center z-0"
        style={{top: 0, left: 0}}
      />
      <div className="absolute" style={{top: 0, left: 0, height: '180px', minHeight: '180px'}} />

      <main className="container mx-auto px-4 py-8 relative z-20">
        <div className="mb-8">
          <Link
            to={`/categoria/${categorySlug}`}
            className="text-yellow-500 hover:text-yellow-600 mb-4 inline-flex items-center"
          >
            ← Volver a {category.title}
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">{caseItem.name}</h1>
          <div className="text-center mb-4">
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-center ${
                caseType === 'success' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
              }`}
              style={{
                display: 'inline-block',
                margin: '0 auto',
                borderRadius: '9999px',
                minWidth: 'unset',
                width: 'auto',
              }}
            >
              {caseType === 'success' ? 'Caso de Éxito' : 'Caso de Uso'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {caseItem.images.map((image, index) => (
            <div key={index} className="space-y-4">
              <img
                src={image || '/placeholder.svg'}
                alt={`${caseItem.name} - Imagen ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg mx-auto"
                style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
              />
              {caseItem.descriptions[index] && (
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <p className="text-gray-700 leading-relaxed">{caseItem.descriptions[index]}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Información detallada tipo ARCOR */}
        {Array.isArray(caseItem.info) && caseItem.info.length > 0 && (
          <div className="text-center">
            <hr className="m-2" />
            <h3 className="text-4xl font-bold text-gray-900 m-5">Información detallada</h3>

            <div className="space-y-4 mt-8">
              {caseItem.info.map((item, idx) => (
                <div key={idx} className="">
                  <div className="font-semibold text-gray-800 text-3xl mb-1">{item.title}</div>
                  <div className="text-gray-600 text-xl mx-auto" style={{maxWidth: '50%'}}>
                    {item.description}
                  </div>
                </div>
              ))}
              <hr />
            </div>
          </div>
        )}
        {/* Secciones tipo resumen ejecutivo, como en la imagen */}
        {Array.isArray(caseItem.sections) && caseItem.sections.length > 0 && (
          <div className="bg-gray-900 rounded-lg p-6 mb-12 text-center">
            {caseItem.sections.map((section, idx) => (
              <div key={idx} className="mb-8">
                <h4 className="text-lg font-bold text-white mb-2">{section.title}</h4>
                <div className="text-gray-300 text-sm whitespace-pre-line">
                  {section.description}
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Fin de grid y detalles */}
        {caseItem.logos && caseItem.logos.length > 0 && (
          <div className="border-t pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Clientes Destacados
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {caseItem.logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo || '/placeholder.svg'}
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
