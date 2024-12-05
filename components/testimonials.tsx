import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  { name: 'أحمد محمد', company: 'شركة التقنية', content: 'لقد قاموا بتصميم موقع رائع لشركتنا. النتائج كانت مذهلة والعملية كانت سلسة للغاية.' },
  { name: 'سارة أحمد', company: 'متجر الأزياء', content: 'ساعدونا في إنشاء متجر إلكتروني جميل وسهل الاستخدام. لقد زادت مبيعاتنا بشكل كبير.' },
  { name: 'محمد علي', company: 'مطعم الشرق', content: 'موقعنا الجديد جذاب للغاية ويعكس هوية مطعمنا بشكل ممتاز. نحن سعداء جدًا بالنتيجة.' },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">ماذا يقول عملاؤنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 ml-4">
                    <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${testimonial.name[0]}`} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

