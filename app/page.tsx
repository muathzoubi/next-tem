import Image from 'next/image'
import Link from 'next/link'
import { Flame, CheckCircle, ArrowRight, Star, ChevronDown } from 'lucide-react'
import '@/styles/globals.css'

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <div className="animated-background"></div>
      <div className="content-overlay">
        {/* Header */}
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Flame className="w-8 h-8 text-yellow-500" />
            <span className="text-2xl font-bold">FireDesign</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="#features" className="hover:text-yellow-500 transition-colors">الميزات</Link></li>
              <li><Link href="#portfolio" className="hover:text-yellow-500 transition-colors">أعمالنا</Link></li>
              <li><Link href="#testimonials" className="hover:text-yellow-500 transition-colors">الشهادات</Link></li>
              <li><Link href="#pricing" className="hover:text-yellow-500 transition-colors">الأسعار</Link></li>
              <li><Link href="#faq" className="hover:text-yellow-500 transition-colors">الأسئلة الشائعة</Link></li>
              <li><Link href="#contact" className="hover:text-yellow-500 transition-colors">اتصل بنا</Link></li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">تصميم ويب <span className='underline decoration-yellow-500/30 py-3'>ناري</span> يشعل إبداعك</h1>
          <p className="text-xl mb-8">نقدم لك تصاميم مذهلة تجمع بين الأناقة والقوة</p>
          <Link href="#pricing" className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-600 transition-colors inline-flex items-center">
            ابدأ الآن
            <ArrowRight className="mr-2" />
          </Link>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">ميزاتنا الفريدة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "تصميم احترافي", description: "تصاميم عصرية تناسب جميع الأذواق" },
                { title: "سرعة في التنفيذ", description: "نسلم مشاريعنا في أسرع وقت ممكن" },
                { title: "دعم فني متميز", description: "فريق دعم متاح على مدار الساعة" }
              ].map((feature, index) => (
                <div key={index} className="bg-black bg-opacity-50 p-6 rounded-lg border border-yellow-500 hover:shadow-lg hover:shadow-yellow-500/50 transition-shadow">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-500">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">أعمالنا السابقة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "متجر إلكتروني", image: "/placeholder.svg?height=300&width=400" },
                { title: "موقع شركة", image: "/placeholder.svg?height=300&width=400" },
                { title: "تطبيق ويب", image: "/placeholder.svg?height=300&width=400" },
                { title: "مدونة شخصية", image: "/placeholder.svg?height=300&width=400" },
                { title: "منصة تعليمية", image: "/placeholder.svg?height=300&width=400" },
                { title: "موقع مطعم", image: "/placeholder.svg?height=300&width=400" }
              ].map((project, index) => (
                <div key={index} className="rounded bg-black bg-opacity-50 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-yellow-500/50 transition-shadow">
                  <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <Link href="#" className="text-yellow-500 hover:underline">عرض التفاصيل</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">ماذا يقول عملاؤنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "أحمد محمد", role: "صاحب شركة", content: "خدمة ممتازة وتصميم رائع. أنا سعيد جدًا بالنتيجة النهائية." },
                { name: "سارة علي", role: "مدونة", content: "فريق العمل محترف للغاية وملتزم بالمواعيد. أنصح بهم بشدة." },
                { name: "محمد خالد", role: "مدير تسويق", content: "تصاميمهم ساعدت في زيادة مبيعاتنا بشكل كبير. شكرًا لكم!" }
              ].map((testimonial, index) => (
                <div key={index} className="rounded bg-black bg-opacity-50 p-6 rounded-lg border border-yellow-500">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl mr-4">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="italic">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="mt-4 flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">خطط الأسعار</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "أساسية", price: "99$", features: ["صفحة رئيسية", "تصميم متجاوب", "دعم لمدة شهر"] },
                { name: "احترافية", price: "199$", features: ["5 صفحات", "تصميم متجاوب", "دعم لمدة 3 أشهر", "تحسين محركات البحث"] },
                { name: "متقدمة", price: "299$", features: ["10 صفحات", "تصميم متجاوب", "دعم لمدة 6 أشهر", "تحسين محركات البحث", "تكامل وسائل التواصل الاجتماعي"] }
              ].map((plan, index) => (
                <div key={index} className="bg-black bg-opacity-50 p-6 rounded-lg border border-yellow-500 hover:shadow-lg hover:shadow-yellow-500/50 transition-shadow">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <p className="text-4xl font-bold text-yellow-500 mb-6">{plan.price}</p>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="#contact" className="block w-full bg-yellow-500 text-black text-center px-4 py-2 rounded-full font-bold hover:bg-yellow-600 transition-colors">
                    اختر الخطة
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">الأسئلة الشائعة</h2>
            <div className="space-y-4">
              {[
                { question: "كم من الوقت يستغرق تنفيذ المشروع؟", answer: "يعتمد وقت التنفيذ على حجم وتعقيد المشروع. عادةً ما تستغرق المشاريع الصغيرة من 1-2 أسبوع، بينما قد تستغرق المشاريع الكبيرة من 4-6 أسابيع." },
                { question: "هل يمكنني تعديل التصميم بعد الانتهاء منه؟", answer: "نعم، نقدم خدمة تعديلات مجانية لمدة أسبوعين بعد تسليم المشروع. بعد ذلك، قد يتم تطبيق رسوم إضافية على التعديلات الكبيرة." },
                { question: "هل تقدمون خدمات الاستضافة؟", answer: "نعم، نقدم خدمات استضافة اختيارية لعملائنا. يمكننا مناقشة خيارات الاستضافة المناسبة لمشروعك أثناء عملية التخطيط." },
                { question: "كيف يمكنني متابعة تقدم المشروع؟", answer: "نستخدم منصة إدارة مشاريع عبر الإنترنت تتيح لك متابعة تقدم المشروع في الوقت الفعلي. سنقوم أيضًا بتحديثك بانتظام عبر البريد الإلكتروني أو الاجتماعات عبر الإنترنت." }
              ].map((faq, index) => (
                <div key={index} className="bg-black bg-opacity-50 p-6 rounded-lg border border-yellow-500">
                  <h3 className="text-xl font-bold mb-2 flex items-center justify-between cursor-pointer">
                    {faq.question}
                    <ChevronDown className="w-5 h-5 text-yellow-500" />
                  </h3>
                  <p className="mt-2 text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">اتصل بنا</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">الاسم</label>
                <input type="text" id="name" className="w-full px-4 py-2 rounded bg-black bg-opacity-50 border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">البريد الإلكتروني</label>
                <input type="email" id="email" className="w-full px-4 py-2 rounded bg-black bg-opacity-50 border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">الرسالة</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 rounded bg-black bg-opacity-50 border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-yellow-500 text-black px-4 py-2 rounded-full font-bold hover:bg-yellow-600 transition-colors">
                إرسال
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} FireDesign. جميع الحقوق محفوظة.</p>
            <div className="mt-4 flex justify-center space-x-4">
              <Link href="#" className="text-yellow-500 hover:text-yellow-600">سياسة الخصوصية</Link>
              <Link href="#" className="text-yellow-500 hover:text-yellow-600">الشروط والأحكام</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

