import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold">
                     <Image src="/logo.png" alt="logo" width={50} height={90}/>

        </Link>
        <nav>
          <ul className="flex space-x-4 space-x-reverse">
            <li><Link href="#services" className="hover:text-primary">خدماتنا</Link></li>
            <li><Link href="#portfolio" className="hover:text-primary">أعمالنا</Link></li>
            <li><Link href="#pricing" className="hover:text-primary">الأسعار</Link></li>
            <li><Link href="#contact" className="hover:text-primary">اتصل بنا</Link></li>
          </ul>
        </nav>
        <Button className='rounded'>احصل على عرض</Button>

      </div>
    </header>
  )
}

