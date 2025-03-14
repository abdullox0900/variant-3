import {
  MdArrowForward,
  MdCamera,
  MdFingerprint,
  MdHome,
  MdKey,
  MdLock,
  MdMessage,
  MdNotifications,
  MdPerson,
  MdSecurity,
  MdYoutubeSearchedFor
} from 'react-icons/md'
import logo from './assets/logo.png'
function App() {
  return (
    <div className="min-h-screen bg-[#EFEFEF]">
      {/* Header */}
      <header className="bg-white sticky top-0 z-10 border-b border-[#EFEFEF]">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <img src={logo} alt="" className='h-10' />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-[#EFEFEF] px-3 py-1.5 rounded-md">
                <span className="text-[#121212] text-sm">Александр</span>
                <div className="w-7 h-7 bg-[#D0313D] rounded-md flex items-center justify-center">
                  <MdPerson className="w-4 h-4 text-white" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Videos Section */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-[#EFEFEF] hover:border-[#D0313D]/20 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#D0313D] p-1.5 rounded-md">
                  <MdYoutubeSearchedFor className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-lg font-medium text-[#121212]">Видео</h2>
              </div>
              <a href="#" className="text-[#D0313D] text-xs flex items-center gap-1 hover:underline">
                Все видео
                <MdArrowForward className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Questions Section */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-[#EFEFEF] hover:border-[#D0313D]/20 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#D0313D] p-1.5 rounded-md">
                  <MdMessage className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-lg font-medium text-[#121212]">Вопросы</h2>
              </div>
              <a href="#" className="text-[#D0313D] text-xs flex items-center gap-1 hover:underline">
                Все вопросы
                <MdArrowForward className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Security Packages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: <MdCamera />, title: "Комплект Comfort" },
            { icon: <MdLock />, title: "Комплект Lite" },
            { icon: <MdHome />, title: "Комплект Дача" },
            { icon: <MdKey />, title: "Комплект Rondo" },
            { icon: <MdFingerprint />, title: "Комплект Lite+" },
            { icon: <MdSecurity />, title: "Комплект Экспресс" },
            { icon: <MdNotifications />, title: "Комплект Comfort+" }
          ].map((item, index) => (
            <a
              key={index}
              href="https://t.me/your_channel"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#EFEFEF] rounded-lg p-4 flex items-center justify-between group hover:shadow-sm hover:border-[#D0313D]/20 transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#D0313D] p-2 rounded-md">
                  <div className="flex items-center justify-center text-white w-5 h-5">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-sm font-medium text-[#121212] group-hover:text-[#D0313D]">{item.title}</h3>
              </div>
              <div className="flex items-center text-[#121212]/30 group-hover:text-[#D0313D]">
                <MdArrowForward className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App