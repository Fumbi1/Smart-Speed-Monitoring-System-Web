import './globals.css'
import Nav from './components/nav/page'

export const metadata = {
  title: 'Speed-Watch',
  description: 'Smart Speed Monitoring Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
