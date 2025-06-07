
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefones',
    details: ['(21) 97639-2899', '(12) 98160-8847'],
    action: () => window.open('tel:+5521976392899', '_self')
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    details: ['(21) 97639-2899'],
    action: () => window.open('https://wa.me/5521976392899', '_blank')
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['tayfestasecia@gmail.com'],
    action: () => window.open('mailto:tayfestasecia@gmail.com', '_self')
  },
  {
    icon: MapPin,
    title: 'Localização',
    details: ['São José dos Campos/SP', 'Vale do Paraíba'],
    action: null
  }
]

const eventTypes = [
  'Festa Infantil',
  'Casamento',
  'Evento Corporativo',
  'Bodas',
  'Chá de Bebê/Cozinha',
  'Festa de 15 Anos',
  'Aniversário Adulto',
  'Outro'
]

const budgetRanges = [
  'Até R$ 1.000',
  'R$ 1.000 - R$ 3.000',
  'R$ 3.000 - R$ 5.000',
  'R$ 5.000 - R$ 10.000',
  'Acima de R$ 10.000',
  'Prefiro não informar'
]

export default function ContatoPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    location: '',
    message: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          eventDate: formData.eventDate ? new Date(formData.eventDate).toISOString() : null,
          guestCount: formData.guestCount ? parseInt(formData.guestCount) : null
        }),
      })

      if (response.ok) {
        toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          guestCount: '',
          budget: '',
          location: '',
          message: ''
        })
      } else {
        throw new Error('Erro ao enviar mensagem')
      }
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente ou entre em contato via WhatsApp.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de solicitar um orçamento para:
    
Nome: ${formData.name || '[Não informado]'}
Tipo de Evento: ${formData.eventType || '[Não informado]'}
Data do Evento: ${formData.eventDate || '[Não informado]'}
Número de Convidados: ${formData.guestCount || '[Não informado]'}
Orçamento: ${formData.budget || '[Não informado]'}
Local: ${formData.location || '[Não informado]'}
Mensagem: ${formData.message || '[Não informado]'}`

    window.open(`https://wa.me/5521976392899?text=${encodeURIComponent(message)}`, '_blank')
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
              Entre em <span className="text-gradient">Contato</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vamos conversar sobre seu evento dos sonhos! Entre em contato conosco 
              e receba um orçamento personalizado sem compromisso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className={`card-hover border-0 shadow-md text-center h-full ${
                    info.action ? 'cursor-pointer' : ''
                  }`}
                  onClick={info.action || undefined}
                >
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-3">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-gray-900">
                    Solicitar Orçamento
                  </CardTitle>
                  <p className="text-gray-600">
                    Preencha o formulário abaixo e entraremos em contato em até 24 horas.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div>
                        <Label htmlFor="eventType">Tipo de Evento *</Label>
                        <Select value={formData.eventType} onValueChange={(value) => handleInputChange('eventType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            {eventTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="eventDate">Data do Evento</Label>
                        <Input
                          id="eventDate"
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) => handleInputChange('eventDate', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="guestCount">Número de Convidados</Label>
                        <Input
                          id="guestCount"
                          type="number"
                          value={formData.guestCount}
                          onChange={(e) => handleInputChange('guestCount', e.target.value)}
                          placeholder="Ex: 50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="budget">Orçamento Estimado</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a faixa" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="location">Local do Evento</Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          placeholder="Cidade ou endereço"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                        placeholder="Conte-nos mais sobre seu evento, suas ideias e expectativas..."
                        rows={4}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1"
                      >
                        {isSubmitting ? (
                          'Enviando...'
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Enviar Solicitação
                          </>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleWhatsApp}
                        className="flex-1 bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Enviar via WhatsApp
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
                  Por que escolher a Tais Decor?
                </h2>
                <div className="space-y-4">
                  {[
                    'Atendimento personalizado e exclusivo',
                    'Mais de 5 anos de experiência no mercado',
                    'Projetos únicos e personalizados',
                    'Orçamento gratuito e sem compromisso',
                    'Acompanhamento completo do projeto',
                    'Satisfação garantida dos clientes'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="border-0 shadow-md bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-900">
                      Horário de Atendimento
                    </h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Segunda a Sexta:</strong> 9h às 18h</p>
                    <p><strong>Sábado:</strong> 9h às 14h</p>
                    <p><strong>Domingo:</strong> Apenas WhatsApp</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md bg-green-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                    <h3 className="font-semibold text-lg text-gray-900">
                      Atendimento Rápido
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Para um atendimento mais rápido, entre em contato diretamente 
                    pelo WhatsApp. Respondemos em até 2 horas durante o horário comercial.
                  </p>
                  <Button
                    onClick={() => window.open('https://wa.me/5521976392899', '_blank')}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chamar no WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'Qual é o prazo mínimo para contratar os serviços?',
                answer: 'Recomendamos um prazo mínimo de 30 dias para eventos pequenos e 60 dias para eventos maiores, mas podemos atender demandas urgentes conforme disponibilidade.'
              },
              {
                question: 'Vocês atendem em outras cidades além de São José dos Campos?',
                answer: 'Sim! Atendemos toda a região do Vale do Paraíba e cidades próximas. Para locais mais distantes, consulte sobre taxas de deslocamento.'
              },
              {
                question: 'O orçamento é realmente gratuito?',
                answer: 'Sim, o orçamento é totalmente gratuito e sem compromisso. Após nossa conversa, você receberá uma proposta detalhada por email.'
              },
              {
                question: 'Vocês fornecem todos os itens de decoração?',
                answer: 'Sim, trabalhamos com fornecedores parceiros e temos nosso próprio acervo. Cuidamos de toda a decoração, montagem e desmontagem.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
