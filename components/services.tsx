import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Globe, Code, Search, Smartphone } from 'lucide-react'

const services = [
  { 
    title: 'تصميم المواقع', 
    description: 'نصمم مواقع جذابة وسهلة الاستخدام تعكس هوية علامتك التجارية وتجذب العملاء',
    icon: Globe 
  },
  { 
    title: 'تطوير الويب', 
    description: 'نطور مواقع سريعة وفعالة باستخدام أحدث التقنيات لضمان أداء عالي وتجربة مستخدم ممتازة',
    icon: Code 
  },
  { 
    title: 'تحسين محركات البحث', 
    description: 'نحسن ظهور موقعك في نتائج البحث لزيادة الزيارات وجذب المزيد من العملاء المحتملين',
    icon: Search 
  },
  { 
    title: 'تصميم تجربة المستخدم', 
    description: 'نصمم تجارب مستخدم سلسة وممتعة تزيد من رضا العملاء وتحسن معدلات التحويل',
    icon: Smartphone 
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted" style={
      {
        background:'url(/bs.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat'
      }
    }>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg backdrop-blur-lg	">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <service.icon className="h-8 w-8 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

