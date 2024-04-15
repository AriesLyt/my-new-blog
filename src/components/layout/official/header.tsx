"use client";

import { headerMap } from "@/common/layout/official";

import Link from "next/link";
import { Switch, ConfigProvider } from "antd";
import { usePathname, useRouter } from "next/navigation";

const OfficialHeader = () => {
  const route = usePathname();
  return (
    <div>
      <menu className="flex items-center max-w-official mx-auto h-official">
        <div className="flex items-center w-full h-full">
          {headerMap.map((item) => (
            <Link
              href={item.href}
              key={item.key}
              className={[
                "w-max",
                "[&+&]:ml-6",
                "hover:text-primary",
                route === item.href ? "text-primary" : "",
              ].join(" ")}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-x-4">
          <ConfigProvider
            theme={{
              components: {
                Switch: {
                  trackHeight: 24,
                  handleSize: 20,
                },
              },
            }}
          >
            <Switch checkedChildren={"d"} unCheckedChildren={"l"} />
          </ConfigProvider>
          <div className="w-10 h-10 rounded-full bg-primary"></div>
        </div>
      </menu>
    </div>
  );
};

export default OfficialHeader;
