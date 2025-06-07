
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Heart, Sparkles, Users, Calendar, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const services = [
  {
    title: 'Festas Infantis',
    description: 'Decoração temática personalizada que torna o sonho das crianças realidade',
    icon: Heart,
    image: 'https://i.pinimg.com/originals/4f/b5/62/4fb5629e9ebcd472e28a3c9a9281f2ff.jpg',
    href: '/servicos#infantis'
  },
  {
    title: 'Casamentos',
    description: 'Decoração romântica e sofisticada para o dia mais especial da sua vida',
    icon: Sparkles,
    image: 'https://i.pinimg.com/originals/f2/50/b1/f250b1b8d9b8688f7c55abca61e5143c.jpg',
    href: '/servicos#casamentos'
  },
  {
    title: 'Eventos Corporativos',
    description: 'Ambientação profissional e elegante para seus eventos empresariais',
    icon: Users,
    image: 'https://i.pinimg.com/originals/7e/f4/5b/7ef45bf763232fe900da0e6c3e69d5d2.jpg',
    href: '/servicos#corporativos'
  },
  {
    title: 'Bodas',
    description: 'Celebrações especiais para aniversários de casamento inesquecíveis',
    icon: Award,
    image: 'https://i.pinimg.com/originals/2a/e1/dc/2ae1dcd980ea571b76466cd77832cba3.jpg',
    href: '/servicos#bodas'
  }
]

const testimonials = [
  {
    name: 'Maria Silva',
    event: 'Casamento',
    rating: 5,
    comment: 'A Tais superou todas as nossas expectativas! A decoração ficou perfeita e todos os convidados elogiaram.'
  },
  {
    name: 'João Santos',
    event: 'Festa Infantil',
    rating: 5,
    comment: 'Minha filha ficou encantada com a festa. A atenção aos detalhes da Tais é impressionante!'
  },
  {
    name: 'Ana Costa',
    event: 'Evento Corporativo',
    rating: 5,
    comment: 'Profissionalismo e criatividade em cada detalhe. Recomendo para qualquer tipo de evento!'
  }
]

const stats = [
  { number: 500, label: 'Eventos Realizados', suffix: '+' },
  { number: 5, label: 'Anos de Experiência', suffix: '+' },
  { number: 100, label: 'Clientes Satisfeitos', suffix: '%' },
  { number: 50, label: 'Cidades Atendidas', suffix: '+' }
]

export default function HomePage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleWhatsApp = () => {
    window.open('https://wa.me/5521976392899?text=Olá! Gostaria de solicitar um orçamento para decoração de evento.', '_blank')
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent z-10" />
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full bg-gradient-to-br from-pink-50 to-purple-50">
            <div className="absolute top-20 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-60 animate-pulse" />
            <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-60 animate-pulse delay-1000" />
            <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-rose-200 rounded-full opacity-60 animate-pulse delay-500" />
          </div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforme seus{' '}
              <span className="text-gradient">sonhos</span>{' '}
              em realidade
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Criamos ambientes personalizados e únicos para seus eventos especiais. 
              Especialistas em festas infantis, casamentos, eventos corporativos e bodas 
              em São José dos Campos e região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="px-8 py-3"
              >
                <Link href="/galeria">
                  Ver Portfólio
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://i.pinimg.com/originals/4f/b5/62/4fb5629e9ebcd472e28a3c9a9281f2ff.jpg"
                alt="Decoração elegante da Tais Decor"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-semibold">5.0</span>
                <span className="text-gray-600 text-sm">Avaliação</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {statsInView && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 2, delay: index * 0.2 }}
                    >
                      {stat.number}{stat.suffix}
                    </motion.span>
                  )}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos decoração personalizada para todos os tipos de eventos, 
              sempre com atenção aos detalhes e qualidade excepcional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-hover border-0 shadow-md bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] bg-muted rounded-t-lg overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <service.icon className="h-6 w-6 text-primary" />
                        <h3 className="font-semibold text-lg text-gray-900">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="w-full"
                      >
                        <Link href={service.href}>
                          Saiba Mais
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600">
              Depoimentos reais de quem confiou em nosso trabalho
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-hover border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "{testimonial.comment}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.event}</p>
                    </div>
                  </CardContent>
                </Card>
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
