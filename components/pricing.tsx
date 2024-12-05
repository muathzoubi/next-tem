import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const plans = [
  {
    name: 'أساسي',
    price: '999',
    description: 'مثالي للشركات الصغيرة والمهنيين المستقلين',
    features: [
      'تصميم موقع من 5 صفحات',
      'تصميم متجاوب مع الأجهزة المحمولة',
      'دعم فني لمدة شهر',
      'تحسين أساسي لمحركات البحث',
    ],
  },
  {
    name: 'احترافي',
    price: '2499',
    description: 'الأفضل للشركات المتوسطة والمتاجر الإلكترونية',
    features: [
      'تصميم موقع حتى 10 صفحات',
      'تصميم متجاوب مع جميع الأجهزة',
      'دعم فني لمدة 3 أشهر',
      'تحسين متقدم لمحركات البحث',
      'دمج وسائل التواصل الاجتماعي',
      'تدريب على إدارة المحتوى',
    ],
  },
  {
    name: 'متقدم',
    price: '4999',
    description: 'حل شامل للشركات الكبيرة والمشاريع المعقدة',
    features: [
      'تصميم موقع غير محدود الصفحات',
      'تصميم مخصص بالكامل',
      'دعم فني لمدة سنة كاملة',
      'تحسين احترافي لمحركات البحث',
      'تكامل مع أنظمة الشركة',
      'تحليلات متقدمة وتقارير أداء',
      'خدمة استضافة ممتازة',
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">خططنا وأسعارنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={index === 1 ? 'rounded border-primary shadow-lg' : ''}>
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4">
                  {plan.price} <span className="text-xl font-normal">ريال / سنويًا</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary ml-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded" variant={index === 1 ? 'default' : 'outline'}>
                  اختر الخطة
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

