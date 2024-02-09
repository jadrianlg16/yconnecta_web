//layout.tsx
import OrgNavBar from "@/components/OrgNavBar";
import type { Metadata } from "next";
import OrgTopBar from "@/components/OrgTopBar";

export const metadata: Metadata = {
  title: "User View",
  description: "User View",
};
const orgName = "Consejo Civico";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-row w-full pb-20`}>
        <OrgNavBar />
        <div className="flex flex-col w-full h-full bg-primary p-4">
          <OrgTopBar />
          
          {children}
        </div>

      </body>
    </html>
  );
}
