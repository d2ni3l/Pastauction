import "./globals.css";
import type { Metadata } from "next";
import { montserrat } from "./fonts";
// import ProviderSession from "@/components/ProviderSession";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import ToasterProvider from "./providers/ToastProvider";
export const metadata: Metadata = {
  title: "Past Auction",
  description: "For Classic Cars Lovers",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (
    <html lang='en'>
      <ReactQueryProvider>
       
        {/* <ProviderSession> */}
        
        <body className={montserrat.className}> <ToasterProvider/>{children}</body>
        
        {/* </ProviderSession> */} 
      </ReactQueryProvider>
    </html>
  );
}
