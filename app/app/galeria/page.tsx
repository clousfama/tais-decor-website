
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Heart, Sparkles, Users, Award, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const categories = [
  { id: 'all', name: 'Todos', icon: Filter },
  { id: 'infantis', name: 'Festas Infantis', icon: Heart },
  { id: 'casamentos', name: 'Casamentos', icon: Sparkles },
  { id: 'corporativos', name: 'Corporativos', icon: Users },
  { id: 'bodas', name: 'Bodas', icon: Award }
]

const galleryItems = [
  {
    id: 1,
    category: 'infantis',
    title: 'Decoração Aquarela ao ar livre',
    image: 'https://i.pinimg.com/originals/4f/b5/62/4fb5629e9ebcd472e28a3c9a9281f2ff.jpg',
    description: 'Festa infantil com tema aquarela em ambiente externo'
  },
  {
    id: 2,
    category: 'infantis',
    title: 'Produção Freitas Decor',
    image: 'https://i.pinimg.com/originals/e6/b7/d3/e6b7d3a807498434dfcb51f8e708a61c.jpg',
    description: 'Decoração personalizada para festa infantil'
  },
  {
    id: 3,
    category: 'infantis',
    title: 'Decoração com borboletas',
    image: 'https://i.pinimg.com/originals/31/14/fc/3114fce478a5eeac32304174a08c7c59.jpg',
    description: 'Tema borboletas com cores vibrantes'
  },
  {
    id: 4,
    category: 'infantis',
    title: 'Festa temática colorida',
    image: 'https://i.pinimg.com/736x/c1/44/35/c144355d3c6c76c210b1cc07547a8ee2.jpg',
    description: 'Decoração colorida e alegre para criança'
  },
  {
    id: 5,
    category: 'infantis',
    title: 'Decoração circo',
    image: 'https://i.pinimg.com/originals/aa/d9/81/aad9815198ca95f890c5f396e2913ff2.jpg',
    description: 'Tema circo com elementos lúdicos'
  },
  {
    id: 6,
    category: 'infantis',
    title: 'Festa de aniversário menino',
    image: 'https://i.pinimg.com/originals/36/e8/35/36e835d100f8a21ab7f0b39a06e44500.jpg',
    description: 'Decoração especial para aniversário masculino'
  },
  {
    id: 7,
    category: 'infantis',
    title: 'Jardim da Margarida',
    image: 'https://i.pinimg.com/originals/60/72/ec/6072ecc7ac5cea42510b679e42018e1f.jpg',
    description: 'Tema jardim com flores e natureza'
  },
  {
    id: 8,
    category: 'casamentos',
    title: 'Decoração rústica com LED',
    image: 'https://i.pinimg.com/originals/f2/50/b1/f250b1b8d9b8688f7c55abca61e5143c.jpg',
    description: 'Casamento rústico com iluminação especial'
  },
  {
    id: 9,
    category: 'casamentos',
    title: 'Casamento terracota',
    image: 'https://i.pinimg.com/originals/07/ac/88/07ac8830196fe1cf56b115169ae49b2f.jpg',
    description: 'Paleta de cores terracota para casamento'
  },
  {
    id: 10,
    category: 'casamentos',
    title: 'Decoração rose',
    image: 'https://i.pinimg.com/originals/84/00/e5/8400e5c52b4b384c56284033fffefadd.jpg',
    description: 'Casamento romântico em tons de rosa'
  },
  {
    id: 11,
    category: 'casamentos',
    title: 'Casamento rústico',
    image: 'https://i.pinimg.com/originals/3f/53/57/3f5357c479aeefa47a0994922df5ede6.jpg',
    description: 'Decoração rústica para cerimônia'
  },
  {
    id: 12,
    category: 'casamentos',
    title: 'Mesa do bolo casamento',
    image: 'https://i.pinimg.com/736x/9c/73/aa/9c73aaa061d2b1b80fa820ec9ace7836--fest-dream-wedding.jpg',
    description: 'Mesa especial para bolo de casamento'
  },
  {
    id: 13,
    category: 'casamentos',
    title: 'Decoração mesa casamento',
    image: 'https://i.pinimg.com/originals/97/9b/dc/979bdc9f8779bb141e09a0f9435555a5.jpg',
    description: 'Mesa dos noivos elegante e sofisticada'
  },
  {
    id: 14,
    category: 'corporativos',
    title: 'Aniversário corporativo',
    image: 'https://i.pinimg.com/originals/7e/f4/5b/7ef45bf763232fe900da0e6c3e69d5d2.jpg',
    description: 'Evento corporativo de aniversário da empresa'
  },
  {
    id: 15,
    category: 'corporativos',
    title: 'Evento corporativo elegante',
    image: 'https://i.pinimg.com/originals/d3/07/80/d30780a2cdbe73d55cd7d0cc767fccac.jpg',
    description: 'Decoração profissional para evento empresarial'
  },
  {
    id: 16,
    category: 'corporativos',
    title: 'Decoração corporativa moderna',
    image: 'https://i.pinimg.com/originals/dc/53/4c/dc534c4fc82458e79edbfd8688f18bd2.png',
    description: 'Ambientação moderna para evento corporativo'
  },
  {
    id: 17,
    category: 'corporativos',
    title: 'Ambientação corporativa',
    image: 'https://i.pinimg.com/originals/f3/cd/92/f3cd9260afb564487913c85eb6645276.jpg',
    description: 'Decoração institucional para empresa'
  },
  {
    id: 18,
    category: 'bodas',
    title: 'Bodas de Cristal',
    image: 'https://i.pinimg.com/originals/2a/e1/dc/2ae1dcd980ea571b76466cd77832cba3.jpg',
    description: 'Celebração de 15 anos de casamento'
  },
  {
    id: 19,
    category: 'bodas',
    title: 'Bodas de Ouro simples',
    image: 'https://i.pinimg.com/originals/65/7c/0a/657c0a4e94822926832bbeec485ff3a3.jpg',
    description: 'Decoração elegante para bodas de ouro'
  },
  {
    id: 20,
    category: 'bodas',
    title: 'Decoração bodas romântica',
    image: 'https://i.pinimg.com/736x/31/2a/bc/312abc9d2f4e90d53c17ba28aa64d263.jpg',
    description: 'Ambientação romântica para aniversário de casamento'
  }
]

export default function GaleriaPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  const handleWhatsApp = () => {
    window.open('https://wa.me/5521976392899?text=Olá! Vi a galeria e gostaria de solicitar um orçamento para decoração de evento.', '_blank')
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
              Nossa <span className="text-gradient">Galeria</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore nosso portfólio de eventos realizados e inspire-se para criar 
              a decoração perfeita para sua ocasião especial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center space-x-2"
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                layout
              >
                <Card className="card-hover border-0 shadow-md bg-white/80 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-square bg-muted overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="font-semibold text-lg mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm opacity-90">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Nenhum item encontrado para esta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                500+
              </div>
              <p className="text-gray-600 font-medium">Eventos Realizados</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                20+
              </div>
              <p className="text-gray-600 font-medium">Temas Diferentes</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                100%
              </div>
              <p className="text-gray-600 font-medium">Satisfação</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                5+
              </div>
              <p className="text-gray-600 font-medium">Anos de Experiência</p>
            </motion.div>
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
              Gostou do que viu?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Entre em contato conosco e vamos criar algo ainda mais especial para você
            </p>
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
            >
              Solicitar Orçamento via WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
