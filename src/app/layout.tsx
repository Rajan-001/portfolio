
import { Amaranth, Merriweather } from "next/font/google";
import "./globals.css";



const geistSans = Merriweather({
  subsets: ["latin"],
  weight: "400"
});



export const metadata = {
  title: "Rajan Portfolio",
  description: "Welcome to my app!",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">
     
      <body
        className={`${geistSans.className}  antialiased`}
      >
         
          
        {children}
      </body>
    </html>
  );
}
