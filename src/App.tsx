import { useEffect, useState } from 'react'
import {
  MdArrowForward,
  MdMessage,
  MdPerson,
  MdYoutubeSearchedFor
} from 'react-icons/md'

import Img1 from './assets/img-1.png'
import Img2 from './assets/img-2.png'
import Img3 from './assets/img-3.png'
import Img4 from './assets/img-4.png'
import Img5 from './assets/img-5.png'
import Img6 from './assets/img-6.jpg'
import Img7 from './assets/img-7.png'

import logo from './assets/logo.png'

// Define Telegram WebApp types
declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        initDataUnsafe?: {
          user?: {
            first_name?: string
          }
        }
      }
    }
  }
}

function App() {
  const [userName, setUserName] = useState<string>("name")

  useEffect(() => {
    // Get user name from Telegram WebApp if available
    if (window.Telegram?.WebApp?.initDataUnsafe?.user?.first_name) {
      setUserName(window.Telegram.WebApp.initDataUnsafe.user.first_name)
    }
  }, [])

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
                <span className="text-[#121212] text-sm">
                  {userName}
                </span>
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
          <a href="https://t.me/safeenvirru/19" className="bg-white rounded-lg p-5 shadow-sm border border-[#EFEFEF] hover:border-[#D0313D]/20 transition-colors">
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
          </a>

          {/* Questions Section */}
          <a href="https://t.me/safeenvirru/1" className="bg-white rounded-lg p-5 shadow-sm border border-[#EFEFEF] hover:border-[#D0313D]/20 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#D0313D] p-1.5 rounded-md">
                  <MdMessage className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-lg font-medium text-[#121212]">Вопросы</h2>
              </div>
              <a href="https://t.me/safeenvirru/1" className="text-[#D0313D] text-xs flex items-center gap-1 hover:underline">
                Все вопросы
                <MdArrowForward className="w-3 h-3" />
              </a>
            </div>
          </a>
        </div>

        {/* Security Packages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Img1, title: "Комплект Comfort", description: "Комплект с бесконтактным считывателем и контроллером Элис К1-У", path: "https://t.me/safeenvirru/32" },
            { icon: Img2, title: "Комплект Lite", description: "Комплект с контактным считывателем и контроллером Элис К1-У", path: "https://t.me/safeenvirru/2" },
            { icon: Img3, title: "Комплект Дача", description: "Комплект с электромеханическим замком и контроллером Элис К1-У", path: "https://t.me/safeenvirru/35" },
            { icon: Img4, title: "Комплект Rondo", description: "Комплект с круглой кодонаборной панелью", path: "https://t.me/safeenvirru/67" },
            { icon: Img5, title: "Ko Lite с кодонаборной панелью", description: "Комплект с пластиковой кодонаборной панелью", path: "https://t.me/safeenvirru/36" },
            { icon: Img6, title: "Комплект Экспресс", description: "Комплект с автономным контроллером", path: "https://t.me/safeenvirru/2173" },
            { icon: Img7, title: "Ko Comfort с кодонаборной панелью", description: "Комплект с металической кодонаборной панелью", path: "https://t.me/safeenvirru/37" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#EFEFEF] rounded-lg p-4 flex items-center justify-between group hover:shadow-sm hover:border-[#D0313D]/20 transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-20 h-20">
                  <img src={item.icon} alt="" className='w-20 h-20 object-cover  border border-[#EFEFEF] rounded-md' />
                </div>
                <div className='flex flex-col gap-1 w-[calc(100%-80px)]'>
                  <h3 className="text-sm font-medium text-[#121212] group-hover:text-[#D0313D]">{item.title}</h3>
                  <p className='text-xs text-[#121212]/30'>{item.description}</p>
                </div>
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