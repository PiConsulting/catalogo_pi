import {Link} from 'react-router-dom'

const CaseCard = ({caseItem, categorySlug, caseIndex}) => {
  const caseUrl = `/categoria/${categorySlug}/${caseItem.type}/${caseIndex}`

  return (
    <Link
      to={caseUrl}
      className="block bg-white border border-yellow-400 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
      style={{minHeight: '180px'}}
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
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{caseItem.descriptions[0]}</p>
        <div className="flex justify-end">
          <button
            className="bg-gray-900 text-white text-xs px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition-all"
            tabIndex={-1}
            type="button"
            onClick={(e) => {
              e.preventDefault()
              window.location.href = caseUrl
            }}
          >
            Ver caso
          </button>
        </div>
      </div>
    </Link>
  )
}

export default CaseCard
