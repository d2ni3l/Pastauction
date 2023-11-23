import "./globals.css";
import type { Metadata } from "next";
import { montserrat } from "./fonts";
// import ProviderSession from "@/components/ProviderSession";
import ReactQueryProvider from "@/components/ReactQueryProvider";
export const metadata: Metadata = {
  title: "Past Auction",
  description: "For Classic Cars Lovers",
};
import UserProvider from "@/components/UserProvider";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (
    <html lang='en'>
      <ReactQueryProvider>
        {/* <ProviderSession> */}
        <UserProvider>
        <body className={montserrat.className}>{children}</body>
        </UserProvider>
        {/* </ProviderSession> */} 
      </ReactQueryProvider>
    </html>
  );
}
