import OfficialHeader from '@/components/layout/official/header'

import { Open_Sans } from 'next/font/google'
const openSans = Open_Sans({ subsets: ['latin'], variable: '--official' })

const OfficialLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <script defer src="/iconfont/iconfont.js" />
      </head>
      <body
        className={[
          openSans.className,
          'dark:bg-dark-bg',
          'dark:text-dark-textPrimary'
        ].join(' ')}
      >
        <OfficialHeader />
        {children}
      </body>
    </html>
  )
}

export default OfficialLayout
