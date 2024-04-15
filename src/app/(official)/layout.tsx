import OfficialHeader from '@/components/layout/official/header'

import { Open_Sans } from 'next/font/google'
const openSans = Open_Sans({ subsets: ['latin'], variable: '--official' })

const OfficialLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <OfficialHeader />
        {children}
      </body>
    </html>
  )
}

export default OfficialLayout
