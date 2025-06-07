
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Heart, Award, Users, Sparkles, Target, Eye } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const values = [
  {
    icon: Heart,
    title: 'Paixão',
    description: 'Cada projeto é desenvolvido com amor e dedicação, transformando sonhos em realidade.'
  },
  {
    icon: Award,
    title: 'Qualidade',
    description: 'Utilizamos materiais de primeira linha e técnicas inovadoras para garantir excelência.'
  },
  {
    icon: Users,
    title: 'Personalização',
    description: 'Cada evento é único, por isso criamos decorações exclusivas para cada cliente.'
  },
  {
    icon: Sparkles,
    title: 'Criatividade',
    description: 'Inovação e criatividade são a base de todos os nossos projetos decorativos.'
  }
]

const achievements = [
  { number: '500+', label: 'Eventos Realizados' },
  { number: '5+', label: 'Anos de Experiência' },
  { number: '100%', label: 'Clientes Satisfeitos' },
  { number: '50+', label: 'Cidades Atendidas' }
]

export default function SobrePage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [achievementsRef, achievementsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

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
              Sobre a <span className="text-gradient">Tais Decor</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça a história por trás da paixão por criar momentos inesquecíveis 
              através de decorações únicas e personalizadas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-[4/5] bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://i.pinimg.com/originals/e6/b7/d3/e6b7d3a807498434dfcb51f8e708a61c.jpg"
                  alt="Tais Freitas - Proprietária da Tais Decor"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="font-playfair text-3xl font-bold text-gray-900">
                Tais Freitas
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fundadora e Party Planner da Tais Decor, Tais Freitas é uma apaixonada 
                por transformar sonhos em realidade através da decoração de eventos. 
                Com mais de 5 anos de experiência no mercado, ela se especializou em 
                criar ambientes únicos e personalizados.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sua jornada começou com o desejo de proporcionar momentos especiais 
                para famílias e empresas. Hoje, a Tais Decor é referência em decoração 
                de eventos em São José dos Campos e região, sempre priorizando a 
                qualidade, criatividade e satisfação dos clientes.
              </p>
              <div className="bg-primary/10 p-6 rounded-2xl">
                <p className="text-primary font-semibold italic text-lg">
                  "Minha missão é transformar cada evento em uma experiência única e 
                  inesquecível, cuidando de cada detalhe com amor e dedicação."
                </p>
                <p className="text-gray-600 mt-2">- Tais Freitas</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                Nossa Missão
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Criar ambientes personalizados com identidade única para cada evento, 
                oferecendo assessoria completa na organização de festas e proporcionando 
                momentos inesquecíveis através de decorações sofisticadas e projetos sob medida.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                Nossa Visão
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ser reconhecida como a principal referência em decoração de eventos 
                no Vale do Paraíba, expandindo nossa atuação e mantendo sempre a 
                excelência no atendimento e na qualidade dos nossos serviços.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam nosso trabalho e garantem a satisfação dos nossos clientes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-hover border-0 shadow-md bg-white/80 backdrop-blur-sm text-center h-full">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={achievementsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={achievementsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Números
            </h2>
            <p className="text-xl text-gray-600">
              Resultados que demonstram nossa dedicação e qualidade
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={achievementsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <p className="text-gray-600 font-medium">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
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
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O que nos torna únicos no mercado de decoração de eventos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md"
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Projetos Exclusivos
              </h3>
              <p className="text-gray-600">
                Cada decoração é única e personalizada, criada especialmente 
                para refletir a personalidade e desejos do cliente.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md"
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Atendimento Personalizado
              </h3>
              <p className="text-gray-600">
                Acompanhamento completo desde o primeiro contato até a 
                execução final, sempre via WhatsApp para maior comodidade.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md"
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Portfólio Diversificado
              </h3>
              <p className="text-gray-600">
                Experiência comprovada em diferentes tipos de eventos, 
                desde festas infantis até casamentos e eventos corporativos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
