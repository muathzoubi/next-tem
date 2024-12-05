import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  { 
    question: 'كم من الوقت يستغرق تصميم موقع ويب؟', 
    answer: 'يعتمد ذلك على تعقيد المشروع، ولكن عادة ما يستغرق من 4 إلى 8 أسابيع لإكمال موقع ويب كامل.' 
  },
  { 
    question: 'هل تقدمون خدمات الصيانة بعد إطلاق الموقع؟', 
    answer: 'نعم، نقدم خطط صيانة شهرية لضمان بقاء موقعك محدثًا وآمنًا.' 
  },
  { 
    question: 'هل يمكنني تحديث محتوى موقعي بنفسي؟', 
    answer: 'نعم، نقوم بتصميم مواقعنا باستخدام أنظمة إدارة محتوى سهلة الاستخدام تتيح لك تحديث المحتوى بسهولة.' 
  },
  { 
    question: 'هل تصممون مواقع متجاوبة مع الأجهزة المحمولة؟', 
    answer: 'بالتأكيد! جميع مواقعنا متجاوبة بالكامل وتعمل بشكل مثالي على جميع الأجهزة.' 
  },
]

export function FAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">الأسئلة الشائعة</h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

