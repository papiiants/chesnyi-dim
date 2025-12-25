'use client'

import './SectionCallback.scss'
import Button from '@/components/Button'
import { useState } from 'react'
import Modal from '@/components/Modal'
import ContactForm from '@/components/ContactForm/ContactForm'
import { CONTENT } from '@/constants/content'
import Section from '@/layouts/Section'
import Reveal from '@/components/Reveal'

const SectionCallback = ({
  hasUpperShadow = true
}: {
  hasUpperShadow?: boolean
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Section
      id="callback"
      className="callback"
      title={CONTENT.ctaMessage}
      dividerColor="primary"
      hasHeaderDecoration={true}
      effect="slide-left"
      hasUpperShadow={hasUpperShadow}
    >
      <Reveal effect="slide-right">
        <Button onClick={() => setIsModalOpen(true)}>
          {CONTENT.ctaButton}
        </Button>
      </Reveal>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={CONTENT.modalCta}
      >
        <ContactForm />
      </Modal>
    </Section>
  )
}

export default SectionCallback
