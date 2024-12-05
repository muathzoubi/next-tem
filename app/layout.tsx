import '@/styles/globals.css'

export const metadata = {
  title: 'تصميم وخدمات المواقع الالكترونية',
  description: 'نقدم خدمات تصميم وتطوير المواقع الإلكترونية بجودة عالية',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className='font' >{children}</body>
    </html>
  )
}

