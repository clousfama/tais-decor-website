
import Link from 'next/link'
import { Heart, MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-primary fill-current" />
              <span className="font-playfair text-2xl font-bold text-white">
                Tais Decor
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformamos seus sonhos em realidade através de decorações exclusivas e de alta qualidade. 
              Especialistas em festas infantis, casamentos, eventos corporativos e bodas.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://www.instagram.com/taisfreitasdecor/', '_blank')}
                className="border-gray-600 text-gray-300 hover:bg-primary hover:text-white"
              >
                <Instagram className="h-4 w-4 mr-2" />
                Instagram
              </Button>
              <Button
                size="sm"
                onClick={() => window.open('https://wa.me/5521976392899', '_blank')}
                className="bg-green-600 hover:bg-green-700"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-300 hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-gray-300 hover:text-primary transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-primary transition-colors">
                  Blog & Dicas
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  São José dos Campos/SP<br />
                  Vale do Paraíba
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>(21) 97639-2899</div>
                  <div>(12) 98160-8847</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  tayfestasecia@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Tais Decor - Party Planner. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Desenvolvido com ❤️ para transformar seus eventos em momentos inesquecíveis.
          </p>
        </div>
      </div>
    </footer>
  )
}
