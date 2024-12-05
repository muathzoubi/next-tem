import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-right">
          <h1 className="text-4xl font-bold mb-4 leading-tight">نحن نصمم مواقع ويب مذهلة تحقق نتائج استثنائية</h1>
          <p className="text-xl mb-8 text-muted-foreground">نساعدك في إنشاء وجود رقمي قوي يعزز نمو عملك ويزيد من عائداتك</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className='rounded' size="lg">ابدأ مشروعك</Button>
            <Button  className='rounded' size="lg" variant="outline">تعرف على خدماتنا</Button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/Copy.png"
            alt="تصميم مواقع احترافية"
            width={600}
            height={400}
            className="rounded-lg shadow0-lg rounded"
          />
        </div>
      </div>
    </section>
  )
}

