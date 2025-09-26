import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="flex items-center space-x-3">
          {/* <div className="w-10 h-10 border-pi-yellow rounded-lg flex items-center justify-center"> */}
          <div className="w-60">
            {/* <span className="text-black font-bold text-xl">PI</span> */}
            <img src="public/logo-pi.png" alt="" />
          </div>
          {/* <div>
            <h1 className="text-xl font-bold text-gray-900">PI DATA</h1>
            <h4 className="text-sm font-bold  text-gray-900">IA</h4>
          </div> */}
        </Link>
      </div>
    </header>
  )
}

export default Header
