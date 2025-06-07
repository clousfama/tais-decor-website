
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Sparkles, Users, Award, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const services = [
  {
    id: 'infantis',
    title: 'Festas Infantis',
    icon: Heart,
    description: 'Transformamos os sonhos das crianças em realidade com decorações temáticas personalizadas e mágicas.',
    features: [
      'Temas personalizados (princesas, super-heróis, animais)',
      'Cenários instagramáveis',
      'Mesa do bolo temática',
      'Painéis decorativos',
      'Balões e arranjos especiais',
      'Mobiliário infantil'
    ],
    images: [
      'https://i.pinimg.com/originals/4f/b5/62/4fb5629e9ebcd472e28a3c9a9281f2ff.jpg',
      'https://i.pinimg.com/originals/31/14/fc/3114fce478a5eeac32304174a08c7c59.jpg',
      'https://i.pinimg.com/736x/c1/44/35/c144355d3c6c76c210b1cc07547a8ee2.jpg',
      'https://i.pinimg.com/originals/aa/d9/81/aad9815198ca95f890c5f396e2913ff2.jpg'
    ],
    color: 'from-pink-500 to-purple-500'
  },
  {
    id: 'casamentos',
    title: 'Casamentos',
    icon: Sparkles,
    description: 'Criamos o cenário perfeito para o dia mais especial da sua vida com elegância e romantismo.',
    features: [
      'Decoração de cerimônia e recepção',
      'Arranjos florais sofisticados',
      'Iluminação romântica',
      'Mesa dos noivos personalizada',
      'Arcos e altares decorativos',
      'Ambientação completa'
    ],
    images: [
      'https://i.pinimg.com/originals/f2/50/b1/f250b1b8d9b8688f7c55abca61e5143c.jpg',
      'https://i.pinimg.com/originals/07/ac/88/07ac8830196fe1cf56b115169ae49b2f.jpg',
      'https://i.pinimg.com/originals/84/00/e5/8400e5c52b4b384c56284033fffefadd.jpg',
      'https://i.pinimg.com/originals/3f/53/57/3f5357c479aeefa47a0994922df5ede6.jpg'
    ],
    color: 'from-rose-500 to-pink-500'
  },
  {
    id: 'corporativos',
    title: 'Eventos Corporativos',
    icon: Users,
    description: 'Ambientação profissional e elegante para seus eventos empresariais e confraternizações.',
    features: [
      'Branding personalizado',
      'Painéis corporativos',
      'Decoração institucional',
      'Ambientação para palestras',
      'Eventos de networking',
      'Confraternizações empresariais'
    ],
    images: [
      'https://i.pinimg.com/originals/7e/f4/5b/7ef45bf763232fe900da0e6c3e69d5d2.jpg',
      'https://i.pinimg.com/originals/d3/07/80/d30780a2cdbe73d55cd7d0cc767fccac.jpg',
      'https://i.pinimg.com/originals/dc/53/4c/dc534c4fc82458e79edbfd8688f18bd2.png',
      'https://i.pinimg.com/originals/f3/cd/92/f3cd9260afb564487913c85eb6645276.jpg'
    ],
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'bodas',
    title: 'Bodas',
    icon: Award,
    description: 'Celebrações especiais para aniversários de casamento com decoração romântica e sofisticada.',
    features: [
      'Bodas de Prata (25 anos)',
      'Bodas de Ouro (50 anos)',
      'Bodas de Cristal (15 anos)',
      'Decoração temática por tipo de boda',
      'Mesa de honra especial',
      'Ambientação romântica'
    ],
    images: [
      'https://i.pinimg.com/originals/2a/e1/dc/2ae1dcd980ea571b76466cd77832cba3.jpg',
      'https://i.pinimg.com/originals/65/7c/0a/657c0a4e94822926832bbeec485ff3a3.jpg',
      'https://i.pinimg.com/736x/31/2a/bc/312abc9d2f4e90d53c17ba28aa64d263.jpg'
    ],
    color: 'from-amber-500 to-orange-500'
  }
]

const additionalServices = [
  'Chá de Cozinha e Chá de Bebê',
  'Festas de 15 Anos',
  'Aniversários Adultos',
  'Formaturas',
  'Eventos Beneficentes',
  'Lançamentos de Produtos'
]

export default function ServicosPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleWhatsApp = () => {
    window.open('https://wa.me/5521976392899?text=Olá! Gostaria de solicitar um orçamento para decoração de evento.', '_blank')
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos <span className="text-gradient">Serviços</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos decoração personalizada para todos os tipos de eventos, 
              sempre com atenção aos detalhes e qualidade excepcional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, serviceIndex) => (
        <section
          key={service.id}
          id={service.id}
          className={serviceIndex % 2 === 0 ? 'py-20 bg-white' : 'py-20 section-gradient'}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              serviceIndex % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={serviceIndex % 2 === 1 ? 'lg:col-start-2' : ''}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`bg-gradient-to-r ${service.color} w-12 h-12 rounded-full flex items-center justify-center`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              {/* Images Grid */}
              <motion.div
                initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={serviceIndex % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
              >
                <div className="grid grid-cols-2 gap-4">
                  {service.images.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative ${
                        index === 0 ? 'aspect-[4/5]' : 
                        index === 1 ? 'aspect-square' : 
                        index === 2 ? 'aspect-square' : 
                        'aspect-[4/5]'
                      } bg-muted rounded-2xl overflow-hidden shadow-lg card-hover`}
                    >
                      <Image
                        src={image}
                        alt={`${service.title} - Exemplo ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Outros Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Também oferecemos decoração para diversos outros tipos de eventos especiais
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-lg text-gray-900">
                      {service}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nosso processo simples e eficiente para criar o evento dos seus sonhos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'Contato Inicial', description: 'Entre em contato via WhatsApp ou formulário' },
              { step: '2', title: 'Briefing', description: 'Conversamos sobre suas necessidades e desejos' },
              { step: '3', title: 'Proposta', description: 'Elaboramos uma proposta personalizada' },
              { step: '4', title: 'Planejamento', description: 'Definimos tema e elementos decorativos' },
              { step: '5', title: 'Execução', description: 'Montagem completa do seu evento' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Pronto para criar seu evento dos sonhos?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Entre em contato conosco e vamos transformar sua visão em realidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              >
                WhatsApp: (21) 97639-2899
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
              >
                <Link href="/contato">
                  Formulário de Contato
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
