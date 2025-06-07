
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Tais Decor - Party Planner | São José dos Campos',
  description: 'Transforme seus sonhos em realidade com a Tais Decor. Especialistas em decoração de festas infantis, casamentos, eventos corporativos e bodas em São José dos Campos e região.',
  keywords: 'party planner, decoração de festas, casamentos, festas infantis, eventos corporativos, São José dos Campos, Vale do Paraíba',
  authors: [{ name: 'Tais Freitas' }],
  openGraph: {
    title: 'Tais Decor - Party Planner',
    description: 'Decoração personalizada para seus eventos especiais',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
