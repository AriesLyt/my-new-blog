import Script from 'next/script'
import iconfontClass from './icon-font.module.css'
import { SVGAttributes } from 'react'

export interface IconFontProp extends SVGAttributes<any> {
  icon: string
}

const GlobalIconFont: React.FC<IconFontProp> = (props) => {
  return (
    <>
      <svg className={[iconfontClass.icon, props.className || ''].join(' ')}>
        <use xlinkHref={`#${props.icon}`} />
      </svg>
    </>
  )
}

export default GlobalIconFont
