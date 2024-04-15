import AntdProvider from "@/components/global/antd-provider";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AntdRegistry>{AntdProvider(children)}</AntdRegistry>
    </>
  );
}
