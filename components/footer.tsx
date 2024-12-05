import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">تصميم ويب</h3>
            <p className="text-muted-foreground">نقدم حلول تصميم وتطوير مواقع الويب الاحترافية لمساعدة عملك على النمو والازدهار.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-muted-foreground hover:text-primary">خدماتنا</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">أعمالنا</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">عن الشركة</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary">اتصل بنا</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center">
          <p>&copy; {new Date().getFullYear()} تصميم ويب. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

