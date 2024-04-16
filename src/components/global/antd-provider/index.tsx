import { ConfigProvider } from 'antd'
import { colors } from '~/tw-config/color'

const AntdProvider = (children: React.ReactNode) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary
        }
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default AntdProvider
