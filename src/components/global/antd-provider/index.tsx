import { ConfigProvider } from "antd";
import color from "~/tw-config/color";

export default (children: React.ReactNode) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: color.primary,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
