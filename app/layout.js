import './globals.css'

export const metadata = {
  title: 'restaurant',
  description: 'food pizza burger restaurant',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
