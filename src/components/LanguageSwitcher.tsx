import { localeAtom } from '@/state/atom-states'
import { useRecoilState } from 'recoil'
import { useState } from 'react'

const LanguageSwitcher = () => {
  const [locale, setLocale] = useRecoilState(localeAtom)
  const [isOpen, setIsOpen] = useState(false)

  const switchLanguage = (newLocale: string) => {
    setLocale(newLocale)
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {locale === 'en' ? <>US</> : <>ES</>}
        {locale === 'en' ? 'English' : 'Español'}
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <button
              onClick={() => switchLanguage('en')}
              disabled={locale === 'en'}
              className={`group flex items-center px-4 py-2 text-sm w-full ${
                locale === 'en' ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <>US</>
              English
            </button>
            <button
              onClick={() => switchLanguage('es')}
              disabled={locale === 'es'}
              className={`group flex items-center px-4 py-2 text-sm w-full ${
                locale === 'es' ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <>ES</>
              Español
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
