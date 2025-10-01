import {Link} from 'react-router-dom'
import {useState} from 'react'

import {useEffect} from 'react'

const CaseCard = ({caseItem, categorySlug, caseIndex}) => {
  const [showModal, setShowModal] = useState(false)
  const [showProcess, setShowProcess] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 650 : false,
  )

  useEffect(() => {
    const handleResize = () => {
      setShowProcess(window.innerWidth >= 650)
    }
    window.addEventListener('resize', handleResize)
    // Set initial value
    setShowProcess(window.innerWidth >= 650)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div
        className="block border border-yellow-400 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer relative"
        style={{minHeight: '180px'}}
        onClick={() => setShowModal(true)}
      >
        {/* Imagen de fondo */}
        <img
          src={caseItem.images && caseItem.images[0] ? caseItem.images[0] : '/placeholder.svg'}
          alt={caseItem.name}
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{height: '100%', minHeight: '180px'}}
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
        {/* Contenido */}
        <div className="flex flex-col h-full justify-between p-4 relative z-20">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-bold text-white text-base flex-1 drop-shadow-lg">
              {caseItem.name}
            </h3>
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
          <p className="text-white text-sm mb-4 line-clamp-2 drop-shadow-lg">
            {caseItem.descriptions && caseItem.descriptions[0]}
          </p>
          <div className="flex justify-end">
            <button
              className="bg-yellow-500 text-white text-xs px-5 py-2 rounded-full font-medium hover:bg-yellow-400 transition-all"
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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full p-0 relative overflow-y-auto max-h-[90vh]"
            style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="fixed md:absolute top-6 right-6 z-50 rounded-full shadow-lg text-gray-900 hover:text-gray-800 text-3xl w-12 h-12 flex items-center justify-center border border-yellow-400"
              style={{cursor: 'pointer', backgroundColor: '#FFD600'}}
              onClick={() => setShowModal(false)}
              aria-label="Cerrar"
            >
              ×
            </button>

            {/* Imagen de arquitectura opcional arriba de todo */}

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
              {showProcess && caseItem.process && caseItem.process.length === 4 && (
                <div className="w-full flex flex-col justify-center items-center pb-8">
                  <div
                    className="flex justify-center items-end gap-8 mt-8 w-full"
                    style={{maxWidth: '700px'}}
                  >
                    {/* Círculo 1 - rojo */}
                    <div
                      className="relative flex flex-col items-center"
                      style={{width: '108px', height: '160px'}}
                    >
                      <div
                        className="w-[120px] h-[120px] bg-white rounded-full shadow-md flex flex-col items-center justify-center z-10"
                        style={{position: 'absolute', top: '20px', left: '20px'}}
                      >
                        <span className="font-bold text-gray-800 text-sm mb-1">
                          {caseItem.process[0].title}
                        </span>
                        <span className="text-gray-600 text-center" style={{fontSize: '10px'}}>
                          {caseItem.process[0].description}
                        </span>
                      </div>
                      {/* Semicírculo inferior rojo */}
                      <svg
                        width="160"
                        height="80"
                        viewBox="0 0 160 80"
                        className="absolute bottom-0 left-0 z-0"
                      >
                        <path
                          d="M10,0 A70,70 0 0,0 150,0"
                          stroke="#F75C5C"
                          strokeWidth="8"
                          fill="none"
                        />
                      </svg>
                    </div>
                    {/* Círculo 2 - amarillo */}
                    <div
                      className="relative flex flex-col items-center"
                      style={{width: '108px', height: '160px'}}
                    >
                      <div
                        className="w-[120px] h-[120px] bg-white rounded-full shadow-md flex flex-col items-center justify-center z-10"
                        style={{position: 'absolute', top: '20px', left: '20px'}}
                      >
                        <span className="font-bold text-gray-800 text-sm mb-1">
                          {caseItem.process[1].title}
                        </span>
                        <span className="text-gray-600 text-center" style={{fontSize: '10px'}}>
                          {caseItem.process[1].description}
                        </span>
                      </div>
                      {/* Semicírculo superior amarillo */}
                      <svg
                        width="160"
                        height="80"
                        viewBox="0 0 160 80"
                        className="absolute top-0 left-0 z-0"
                      >
                        <path
                          d="M10,80 A70,70 0 0,1 150,80"
                          stroke="#FFD600"
                          strokeWidth="8"
                          fill="none"
                        />
                      </svg>
                    </div>
                    {/* Círculo 3 - verde */}
                    <div
                      className="relative flex flex-col items-center"
                      style={{width: '108px', height: '160px'}}
                    >
                      <div
                        className="w-[120px] h-[120px] bg-white rounded-full shadow-md flex flex-col items-center justify-center z-10"
                        style={{position: 'absolute', top: '20px', left: '20px'}}
                      >
                        <span className="font-bold text-gray-800 text-sm mb-1">
                          {caseItem.process[2].title}
                        </span>
                        <span className="text-gray-600 text-center" style={{fontSize: '10px'}}>
                          {caseItem.process[2].description}
                        </span>
                      </div>
                      {/* Semicírculo inferior verde */}
                      <svg
                        width="160"
                        height="80"
                        viewBox="0 0 160 80"
                        className="absolute bottom-0 left-0 z-0"
                      >
                        <path
                          d="M10,0 A70,70 0 0,0 150,0"
                          stroke="#5CCF7F"
                          strokeWidth="8"
                          fill="none"
                        />
                      </svg>
                    </div>
                    {/* Círculo 4 - azul */}
                    <div
                      className="relative flex flex-col items-center"
                      style={{width: '160px', height: '160px'}}
                    >
                      <div
                        className="w-[120px] h-[120px] bg-white rounded-full shadow-md flex flex-col items-center justify-center z-10"
                        style={{position: 'absolute', top: '20px', left: '20px'}}
                      >
                        <span className="font-bold text-gray-800 text-sm mb-1">
                          {caseItem.process[3].title}
                        </span>
                        <span
                          className="text-gray-600 text-xs text-center"
                          style={{fontSize: '10px'}}
                        >
                          {caseItem.process[3].description}
                        </span>
                      </div>
                      {/* Semicírculo superior azul */}
                      <svg
                        width="160"
                        height="80"
                        viewBox="0 0 160 80"
                        className="absolute top-0 left-0 z-0"
                      >
                        <path
                          d="M10,80 A70,70 0 0,1 150,80"
                          stroke="#4A90E2"
                          strokeWidth="8"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
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
                <div className="bg-yellow-300 rounded-xl p-6 flex flex-col md:flex-row gap-6 justify-between items-center">
                  {caseItem.impact?.map((logro, index) => (
                    <div key={index} className="text-center flex-1">
                      <p className="text-black text-base mb-2">{logro.description}</p>
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
              {caseItem.architectureimg && caseItem.architectureimg !== '' && (
                <div className="w-full flex flex-col justify-center items-center pb-8">
                  <img
                    src={caseItem.architectureimg}
                    alt="Arquitectura"
                    className="object-contain rounded-xl shadow-md mx-auto"
                    style={{background: 'white', maxWidth: '700px', width: '100%', height: 'auto'}}
                  />
                </div>
              )}
              {caseItem && Array.isArray(caseItem.technology) && caseItem.technology.length > 0 && (
                <div className="w-full flex flex-col items-left justify-center pb-8">
                  <h2 className="font-bold text-gray-900 text-xl mb-4">Tecnologías usadas 💻</h2>
                  <div className="flex flex-wrap gap-2 justify-left">
                    {caseItem.technology.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-yellow-300 border border-yellow-400 rounded-full px-1 py-1 text-gray-800 text-xs font-medium shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      )}
    </>
  )
}

export default CaseCard
