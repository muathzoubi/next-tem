import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

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
      <body    className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )} >{children}</body>
    </html>
  )
}

