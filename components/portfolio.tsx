import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const projects = [
  { title: 'متجر إلكتروني', image: '/placeholder.svg?height=300&width=400' },
  { title: 'موقع شركة تقنية', image: '/placeholder.svg?height=300&width=400' },
  { title: 'تطبيق ويب تفاعلي', image: '/placeholder.svg?height=300&width=400' },
  { title: 'موقع مطعم', image: '/placeholder.svg?height=300&width=400' },
]

export function Portfolio() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">أعمالنا السابقة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover "
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

