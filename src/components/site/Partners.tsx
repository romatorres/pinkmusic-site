'use client'

import { useEffect, useState } from 'react'
import { PageContainer } from '../Page-container'

interface Partner {
  id: string
  name: string
  imageUrl: string
}

export default function Partners() {
  const [partners, setPartners] = useState<Partner[]>([])

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch('/api/partners')
        const data = await response.json()
        setPartners(data)
      } catch (error) {
        console.error('Error fetching partners:', error)
      }
    }

    fetchPartners()
  }, [])

  // Duplicar os parceiros para criar o efeito de carrossel infinito
  const extendedLogos = partners.length > 0 ? Array(5).fill(partners).flat() : [];

  return (
    <PageContainer>
      <section className="self-center my-14 w-full max-w-[1440px] rounded-[36px] bg-white py-4 px-8 lg:px-34 flex flex-col items-center justify-center">
        <div className="w-full overflow-hidden">
          <div className="flex animate-scroll">
            {extendedLogos.map((logo, index) => (
              <img
                key={`${logo.id}-${index}`} // Usar uma chave composta para garantir unicidade na duplicação
                src={`/partners/${logo.imageUrl}`}
                alt={logo.name}
                className="mx-8 self-stretch object-contain object-center flex-shrink-0 my-auto grayscale opacity-70 transition-all duration-300 ease-in-out hover:grayscale-0 hover:opacity-100 hover:scale-105"
              />
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  )
}

