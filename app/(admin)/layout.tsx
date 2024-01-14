export const metadata = {
  title: 'CMS | Odmor nikad bliže',
  description: 'Odmor nikad bliže CMS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hr">
      <body>{children}</body>
    </html>
  )
}
