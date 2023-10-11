import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { Lato, Raleway } from "next/font/google";


const lato = Lato({
  variable: "--lato",
  subsets: ["latin-ext", "latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap"
});
const raleway = Raleway({
  variable: "--raleway",
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap"
});


export const metadata = {
  title: 'TheLoudKitchens',
  description: 'Jai Sri Ram.',
}

export default function RootLayout({ header, children, bottom }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${lato.variable} ${raleway.variable} container`}>
          {header}
          {children}
          {bottom}
        </body>
      </html>
    </ClerkProvider>
  )
}
