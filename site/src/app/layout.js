import './globals.css'

export const metadata = {
  title: 'DJ SATO',
  description: 'bringing the vibes to you',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
