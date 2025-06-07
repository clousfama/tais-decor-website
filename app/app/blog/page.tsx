
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Lightbulb, Heart, Sparkles, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const blogPosts = [
  {
    id: 1,
    title: 'Como Escolher o Tema Perfeito para Festa Infantil',
    excerpt: 'Dicas essenciais para acertar na escolha do tema que vai encantar as crianças e criar memórias inesquecíveis.',
    content: `Escolher o tema perfeito para uma festa infantil pode parecer desafiador, mas com algumas dicas simples, você pode criar um evento mágico que seu filho nunca esquecerá.

**1. Considere os gostos da criança**
O mais importante é levar em conta o que a criança realmente gosta. Observe seus desenhos favoritos, brinquedos preferidos e atividades que mais a interessam.

**2. Pense na faixa etária**
Diferentes idades têm diferentes interesses. Crianças menores adoram cores vibrantes e personagens simples, enquanto as maiores podem preferir temas mais elaborados.

**3. Considere o espaço disponível**
O local da festa influencia muito na escolha do tema. Festas ao ar livre permitem temas de natureza, enquanto espaços fechados são ideais para temas mais intimistas.

**4. Orçamento disponível**
Alguns temas são mais econômicos que outros. Temas com elementos naturais ou DIY podem ser mais em conta que personagens licenciados.

**5. Época do ano**
Considere a estação: temas tropicais no verão, temas aconchegantes no inverno.`,
    image: 'https://i.pinimg.com/originals/4f/b5/62/4fb5629e9ebcd472e28a3c9a9281f2ff.jpg',
    category: 'Festas Infantis',
    readTime: '5 min',
    date: '2025-05-25',
    tags: ['festa infantil', 'decoração', 'temas']
  },
  {
    id: 2,
    title: 'Tendências de Decoração para Casamentos 2025',
    excerpt: 'Descubra as principais tendências que estão dominando as decorações de casamento este ano.',
    content: `O ano de 2025 trouxe tendências incríveis para decoração de casamentos. Vamos explorar as principais que estão fazendo sucesso:

**1. Cores Terrosas e Naturais**
Tons de terracota, sage green e bege estão em alta, criando ambientes acolhedores e sofisticados.

**2. Sustentabilidade**
Casais estão optando por decorações eco-friendly, com flores locais, elementos reutilizáveis e menos desperdício.

**3. Micro Weddings**
Casamentos menores e mais íntimos permitem investir mais em detalhes especiais e personalizados.

**4. Iluminação Dramática**
Jogos de luz criam atmosferas românticas e fotografias deslumbrantes.

**5. Elementos Vintage**
A nostalgia está em alta, com móveis antigos e elementos retrô ganhando espaço.`,
    image: 'https://i.pinimg.com/originals/f2/50/b1/f250b1b8d9b8688f7c55abca61e5143c.jpg',
    category: 'Casamentos',
    readTime: '7 min',
    date: '2025-05-20',
    tags: ['casamento', 'tendências', '2025']
  },
  {
    id: 3,
    title: 'Planejamento de Eventos Corporativos: Guia Completo',
    excerpt: 'Tudo que você precisa saber para organizar eventos corporativos de sucesso que impressionem seus convidados.',
    content: `Organizar eventos corporativos requer planejamento estratégico e atenção aos detalhes. Aqui está seu guia completo:

**1. Defina os objetivos**
Antes de tudo, estabeleça claramente o que você quer alcançar com o evento: networking, lançamento de produto, confraternização, etc.

**2. Conheça seu público**
Entenda quem são os participantes para adequar a decoração, catering e atividades.

**3. Escolha o local adequado**
O espaço deve refletir a imagem da empresa e comportar confortavelmente todos os convidados.

**4. Cuide da identidade visual**
Mantenha a coerência com a marca da empresa em todos os elementos decorativos.

**5. Planeje a logística**
Pense em estacionamento, acessibilidade, equipamentos audiovisuais e cronograma detalhado.`,
    image: 'https://i.pinimg.com/originals/7e/f4/5b/7ef45bf763232fe900da0e6c3e69d5d2.jpg',
    category: 'Corporativo',
    readTime: '8 min',
    date: '2025-05-15',
    tags: ['corporativo', 'planejamento', 'eventos']
  },
  {
    id: 4,
    title: 'Decoração de Bodas: Celebrando o Amor Duradouro',
    excerpt: 'Ideias especiais para tornar a celebração de aniversário de casamento ainda mais memorável.',
    content: `As bodas são momentos especiais que merecem celebrações à altura. Cada tipo de boda tem suas características únicas:

**Bodas de Papel (1 ano)**
Use elementos em papel, origami e tons suaves para uma decoração delicada.

**Bodas de Cristal (15 anos)**
Incorpore elementos transparentes, cristais e muita iluminação para criar brilho.

**Bodas de Prata (25 anos)**
Tons prateados, espelhos e elementos metálicos criam elegância atemporal.

**Bodas de Ouro (50 anos)**
Dourado é a cor principal, combinado com flores clássicas e elementos luxuosos.

**Dicas gerais:**
- Inclua fotos do casal ao longo dos anos
- Crie um ambiente nostálgico
- Personalize com elementos significativos da história do casal`,
    image: 'https://i.pinimg.com/originals/2a/e1/dc/2ae1dcd980ea571b76466cd77832cba3.jpg',
    category: 'Bodas',
    readTime: '6 min',
    date: '2025-05-10',
    tags: ['bodas', 'aniversário', 'casamento']
  },
  {
    id: 5,
    title: 'DIY: Elementos Decorativos que Você Pode Fazer em Casa',
    excerpt: 'Projetos simples e econômicos para criar decorações personalizadas para seus eventos.',
    content: `Criar elementos decorativos em casa pode ser divertido e econômico. Aqui estão algumas ideias:

**1. Pompons de Papel**
Materiais: papel de seda, tesoura, arame
Perfeitos para criar volume e cor em qualquer ambiente.

**2. Luminárias com Potes de Vidro**
Materiais: potes de vidro, luzes de LED, fita
Criam uma atmosfera acolhedora e romântica.

**3. Flores de Papel Crepom**
Materiais: papel crepom, arame, cola
Duráveis e podem ser feitas em qualquer cor.

**4. Bandeirolas Personalizadas**
Materiais: papel, barbante, moldes
Ideais para festas infantis e eventos casuais.

**5. Centros de Mesa com Velas**
Materiais: velas, recipientes de vidro, elementos naturais
Elegantes e versáteis para qualquer ocasião.`,
    image: 'https://i.pinimg.com/originals/31/14/fc/3114fce478a5eeac32304174a08c7c59.jpg',
    category: 'DIY',
    readTime: '10 min',
    date: '2025-05-05',
    tags: ['DIY', 'decoração', 'faça você mesmo']
  },
  {
    id: 6,
    title: 'Como Criar um Orçamento Realista para seu Evento',
    excerpt: 'Dicas práticas para planejar financeiramente seu evento sem comprometer a qualidade.',
    content: `Planejar o orçamento é fundamental para o sucesso do seu evento. Veja como fazer isso de forma inteligente:

**1. Liste todas as necessidades**
Faça uma lista completa: decoração, local, catering, entretenimento, lembrancinhas, etc.

**2. Pesquise preços**
Compare pelo menos 3 fornecedores para cada item importante.

**3. Defina prioridades**
Identifique o que é essencial e o que é desejável, mas não obrigatório.

**4. Reserve 10-15% para imprevistos**
Sempre há gastos não planejados, então tenha uma reserva de emergência.

**5. Considere alternativas econômicas**
- Eventos em horários alternativos
- Decorações sazonais
- Parcerias com fornecedores
- Elementos reutilizáveis

**6. Acompanhe os gastos**
Use planilhas ou aplicativos para controlar o orçamento em tempo real.`,
    image: 'https://i.pinimg.com/originals/84/00/e5/8400e5c52b4b384c56284033fffefadd.jpg',
    category: 'Planejamento',
    readTime: '7 min',
    date: '2025-05-01',
    tags: ['orçamento', 'planejamento', 'economia']
  }
]

const categories = [
  { name: 'Todos', icon: Lightbulb },
  { name: 'Festas Infantis', icon: Heart },
  { name: 'Casamentos', icon: Sparkles },
  { name: 'Corporativo', icon: Users },
  { name: 'Bodas', icon: Heart },
  { name: 'DIY', icon: Lightbulb },
  { name: 'Planejamento', icon: Calendar }
]

export default function BlogPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleWhatsApp = () => {
    window.open('https://wa.me/5521976392899?text=Olá! Li o blog e gostaria de conversar sobre decoração para meu evento.', '_blank')
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
              Blog & <span className="text-gradient">Dicas</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dicas exclusivas, tendências e inspirações para criar eventos inesquecíveis. 
              Aprenda com nossa experiência e transforme suas ideias em realidade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="card-hover border-0 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto bg-muted">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-primary/10 text-primary">
                    Post em Destaque
                  </Badge>
                  <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${blogPosts[0].id}`}>
                      Ler Artigo Completo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
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
              Últimos Artigos
            </h2>
            <p className="text-xl text-gray-600">
              Confira nossas dicas mais recentes para eventos perfeitos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover border-0 shadow-md bg-white/80 backdrop-blur-sm h-full">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/blog/${post.id}`}>
                            Ler mais
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
              Explore por Categoria
            </h2>
            <p className="text-gray-600">
              Encontre conteúdo específico para o tipo de evento que você está planejando
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover border-0 shadow-md text-center cursor-pointer">
                  <CardContent className="p-4">
                    <category.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-900">
                      {category.name}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Gostou das nossas dicas?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Entre em contato conosco e vamos criar o evento perfeito para você
            </p>
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
            >
              Falar com Especialista
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
