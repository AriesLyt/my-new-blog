import { headerMap } from '@/common/layout/official'

import Link from 'next/link'
import { Switch } from 'antd'

const OfficialHeader = () => {
  return (
    <div>
      <menu className="flex items-center max-w-official mx-auto h-official">
        <div className="flex items-center w-full h-full">
          {headerMap.map((item) => (
            <Link
              href={item.href}
              key={item.key}
              className="w-max [&+&]:ml-6 hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div>
          <Switch />
          <div className="w-10 h-10 rounded-full bg-primary"></div>
        </div>
      </menu>
    </div>
  )
}

export default OfficialHeader
