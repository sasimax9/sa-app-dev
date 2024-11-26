import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"

import { MobileDock } from "@/components/mobile-dock"
import { Footer } from "./services/Footer/page"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Service Directory",
  description: "Find all the services you need",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <MobileDock />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

