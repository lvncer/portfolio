import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Squares from "@/components/Squares"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio",
  description: "lvncer portfolio website",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative z-10 min-h-screen bg-background gradient-bg">
            {/* Global animated grid background */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
              <Squares
                speed={0.2}
                squareSize={40}
                direction="diagonal"
                borderColor="#ccc"
                hoverFillColor={undefined}
              />
            </div>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
