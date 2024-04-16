'use client'

import { headerMap } from '@/common/layout/official'

import Link from 'next/link'
import { Switch, ConfigProvider } from 'antd'
import GlobalIconFont from '@/components/global/icon-font'

import { usePathname } from 'next/navigation'
import iconMap from '@/common/iconfont'
import { useState } from 'react'

const OfficialHeader = () => {
  const route = usePathname()

  const [theme, setTheme] = useState('light')

  const handleChangeTheme = () => {
    const afterTheme = theme === 'light'
    const htmlDom = document.querySelector('html')
    if (afterTheme) {
      setTheme('dark')
      htmlDom && htmlDom.classList.add('dark')
    } else {
      setTheme('light')
      htmlDom && htmlDom.classList.remove('dark')
    }
  }

  return (
    <div>
      <menu className="flex items-center max-w-official mx-auto h-official">
        <div className="flex items-center w-full h-full">
          {headerMap.map((item) => (
            <Link
              href={item.href}
              key={item.key}
              className={[
                'w-max',
                '[&+&]:ml-6',
                'hover:text-primary',
                route === item.href ? 'text-primary' : ''
              ].join(' ')}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-x-4">
          <button
            className="
                center-flex w-8 h-8 rounded-md shadow-base dark:shadow-darkBase hover:shadow-baseActive dark:hover:shadow-darkBaseActive transition-[box-shadow]
                dark:bg-gray-800
                border border-white/20
                outline-none
            "
            onClick={handleChangeTheme}
          >
            {theme === 'light' ? (
              <GlobalIconFont
                icon={iconMap.themeLight}
                className="text-orange-600 text-xl"
              />
            ) : (
              <GlobalIconFont icon={iconMap.themeDark} className="text-white" />
            )}
          </button>
          <div className="w-10 h-10 rounded-full bg-primary"></div>
        </div>
      </menu>
    </div>
  )
}

export default OfficialHeader
