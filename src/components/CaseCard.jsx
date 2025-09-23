import {Link} from 'react-router-dom'
import {useState} from 'react'

const CaseCard = ({caseItem, categorySlug, caseIndex}) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div
        className="block bg-white border border-yellow-400 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
        style={{minHeight: '180px'}}
        onClick={() => setShowModal(true)}
      >
        <div className="flex flex-col h-full justify-between p-4">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-bold text-gray-900 text-base flex-1">{caseItem.name}</h3>
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                caseItem.type === 'success'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-blue-100 text-blue-700'
              }`}
            >
              {caseItem.type === 'success' ? 'Caso de éxito' : 'Caso de uso'}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {caseItem.descriptions && caseItem.descriptions[0]}
          </p>
          <div className="flex justify-end">
            <button
              className="bg-gray-900 text-white text-xs px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition-all"
              tabIndex={-1}
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setShowModal(true)
              }}
            >
              Ver caso
            </button>
          </div>
        </div>
      </div>

      {showModal && caseItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full p-0 relative overflow-y-auto max-h-[90vh]"
            style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
          >
            <button
              className="fixed md:absolute top-6 right-6 z-50 rounded-full shadow-lg text-gray-900 hover:text-gray-800 text-3xl w-12 h-12 flex items-center justify-center border border-yellow-400"
              style={{cursor: 'pointer', backgroundColor: '#FFD600'}}
              onClick={() => setShowModal(false)}
              aria-label="Cerrar"
            >
              ×
            </button>

            {/* Imagen de fondo, badge y título */}
            <div className="relative w-full h-[180px] md:h-[220px] flex items-center justify-center mb-8 rounded-t-xl overflow-hidden">
              <img
                src={
                  caseItem.images && caseItem.images[0] ? caseItem.images[0] : '/placeholder.svg'
                }
                alt={caseItem.name}
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
              <div className="relative z-20 flex flex-col items-center text-center w-full px-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                    caseItem.type === 'success'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                  style={{borderRadius: '9999px'}}
                >
                  {caseItem.type === 'success' ? 'Caso de Éxito' : 'Caso de Uso'}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 mt-2">
                  {caseItem.name}
                </h2>
              </div>
            </div>

            {/* Secciones dinámicas */}
            <section className="max-w-3xl mx-auto px-8 pb-8">
              {/* Contexto */}
              <div className="mb-6">
                <h2 className="font-bold text-gray-900 text-xl mb-2 flex items-center">
                  Contexto del cliente <span className="ml-2">👨‍💼</span>
                </h2>
                <p className="text-gray-700 text-base">{caseItem.context}</p>
              </div>

              {/* Puntos de dolor + Solución */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h2 className="font-bold text-gray-900 text-xl mb-2 flex items-center">
                    Puntos de dolor <span className="ml-2">😓</span>
                  </h2>
                  <p className="text-gray-700 text-base">{caseItem.painPoints}</p>
                </div>
                <div>
                  <h2 className="font-bold text-gray-900 text-xl mb-2 flex items-center">
                    Solución propuesta <span className="ml-2">💡</span>
                  </h2>
                  <p className="text-gray-700 text-base">{caseItem.solution}</p>
                </div>
              </div>

              {/* Impacto logrado */}
              <div className="mb-6">
                <h2 className="font-bold text-gray-900 text-xl mb-2 flex items-center">
                  Impacto logrado <span className="ml-2">🖖</span>
                </h2>
                <div className="bg-yellow-200 rounded-lg p-6 flex flex-col md:flex-row gap-6 justify-between items-center">
                  {caseItem.impact?.map((logro, index) => (
                    <div key={index} className="text-center flex-1">
                      <p className="text-gray-700 text-base mb-2">{logro.description}</p>
                      <span className="font-bold text-gray-800">{logro.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rol del equipo */}
              <div className="mb-6">
                <h2 className="font-bold text-gray-900 text-xl mb-2 flex items-center">
                  Rol del equipo de Pi <span className="ml-2">🧑‍💻</span>
                </h2>
                <p className="text-gray-700 text-base">{caseItem.role}</p>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  )
}

export default CaseCard
