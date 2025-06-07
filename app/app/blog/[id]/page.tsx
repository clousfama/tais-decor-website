
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Share2, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

// Dados dos posts (em uma aplicação real, isso viria de uma API ou CMS)
const blogPosts = [
  {
    id: 1,
    title: 'Como Escolher o Tema Perfeito para Festa Infantil',
    excerpt: 'Dicas essenciais para acertar na escolha do tema que vai encantar as crianças e criar memórias inesquecíveis.',
    content: `Escolher o tema perfeito para uma festa infantil pode parecer desafiador, mas com algumas dicas simples, você pode criar um evento mágico que seu filho nunca esquecerá.

## 1. Considere os gostos da criança

O mais importante é levar em conta o que a criança realmente gosta. Observe seus desenhos favoritos, brinquedos preferidos e atividades que mais a interessam. Uma festa personalizada com base nos interesses genuínos da criança sempre será mais especial.

## 2. Pense na faixa etária

Diferentes idades têm diferentes interesses. Crianças menores (1-3 anos) adoram cores vibrantes e personagens simples como animais da fazenda ou frutas. Já as maiores (4-8 anos) podem preferir temas mais elaborados como super-heróis, princesas ou personagens de filmes.

## 3. Considere o espaço disponível

O local da festa influencia muito na escolha do tema. Festas ao ar livre permitem temas de natureza, safari ou praia, enquanto espaços fechados são ideais para temas mais intimistas como casa de bonecas ou laboratório científico.

## 4. Orçamento disponível

Alguns temas são mais econômicos que outros. Temas com elementos naturais ou DIY podem ser mais em conta que personagens licenciados. Lembre-se: criatividade vale mais que dinheiro!

## 5. Época do ano

Considere a estação: temas tropicais no verão, temas aconchegantes no inverno. Isso também pode influenciar na disponibilidade e preço de alguns elementos decorativos.

## Dicas extras para o sucesso:

- **Envolva a criança na escolha**: Deixe ela participar do processo de decisão
- **Pense na praticidade**: Alguns temas são mais fáceis de executar que outros
- **Considere os convidados**: Temas que agradam tanto meninos quanto meninas são mais inclusivos
- **Planeje com antecedência**: Alguns elementos podem precisar ser encomendados

Lembre-se: o mais importante é criar um ambiente onde a criança se sinta especial e amada. Com planejamento e carinho, qualquer tema pode se tornar mágico!`,
    image: 'https://i.pinimg.com/originals/4f/b5/62/4fb5629e9ebcd472e28a3c9a9281f2ff.jpg',
    category: 'Festas Infantis',
    readTime: '5 min',
    date: '2025-05-25',
    tags: ['festa infantil', 'decoração', 'temas']
  }
  // Outros posts seriam adicionados aqui...
]

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const post = blogPosts.find(p => p.id === parseInt(params.id))
  
  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-24 pb-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post não encontrado</h1>
          <Button asChild>
            <Link href="/blog">Voltar ao Blog</Link>
          </Button>
        </div>
        <Footer />
      </div>
    )
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/5521976392899?text=Olá! Li o artigo "${post.title}" e gostaria de conversar sobre decoração para meu evento.`, '_blank')
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
    } else {
      // Fallback para copiar URL
      navigator.clipboard.writeText(window.location.href)
      alert('Link copiado para a área de transferência!')
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Blog
              </Link>
            </Button>
            
            <div className="mb-6">
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <Button variant="ghost" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartilhar
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[16/9] bg-muted rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="font-playfair text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    )
                  } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="font-semibold text-lg text-gray-900 mt-6 mb-3">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    )
                  } else if (paragraph.startsWith('- ')) {
                    const listItems = paragraph.split('\n').filter(item => item.startsWith('- '))
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 my-4">
                        {listItems.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-700">
                            {item.replace('- ', '')}
                          </li>
                        ))}
                      </ul>
                    )
                  } else {
                    return (
                      <p key={index} className="text-gray-700 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    )
                  }
                })}
              </div>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/10 to-pink-50">
                  <CardContent className="p-6 text-center">
                    <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">
                      Gostou das dicas?
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Entre em contato conosco e vamos criar o evento perfeito para você!
                    </p>
                    <Button
                      onClick={handleWhatsApp}
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      Falar no WhatsApp
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Links */}
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Links Úteis</h3>
                    <div className="space-y-3">
                      <Link
                        href="/servicos"
                        className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        → Nossos Serviços
                      </Link>
                      <Link
                        href="/galeria"
                        className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        → Galeria de Trabalhos
                      </Link>
                      <Link
                        href="/contato"
                        className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        → Solicitar Orçamento
                      </Link>
                      <Link
                        href="/sobre"
                        className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        → Sobre a Tais Decor
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
              Continue Lendo
            </h2>
            <p className="text-gray-600">
              Mais dicas e inspirações para seus eventos
            </p>
          </motion.div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/blog">
                Ver Todos os Artigos
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
