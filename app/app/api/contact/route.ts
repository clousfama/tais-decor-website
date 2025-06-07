
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      name,
      email,
      phone,
      eventType,
      eventDate,
      guestCount,
      budget,
      location,
      message
    } = body

    // Validação básica
    if (!name || !email || !phone || !eventType || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos' },
        { status: 400 }
      )
    }

    // Salvar no banco de dados
    const contactForm = await prisma.contactForm.create({
      data: {
        name,
        email,
        phone,
        eventType,
        eventDate: eventDate ? new Date(eventDate) : null,
        guestCount: guestCount ? parseInt(guestCount) : null,
        budget,
        location,
        message
      }
    })

    return NextResponse.json(
      { 
        message: 'Formulário enviado com sucesso!',
        id: contactForm.id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erro ao processar formulário de contato:', error)
    
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
