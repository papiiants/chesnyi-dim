'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import './Modal.scss'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children
}: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  // 1. Блокировка скролла и обработка нажатия ESC
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden' // Блокируем скролл сайта

      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
      }
      window.addEventListener('keydown', handleEsc)

      return () => {
        document.body.style.overflow = 'unset' // Возвращаем скролл
        window.removeEventListener('keydown', handleEsc)
      }
    }
  }, [isOpen, onClose])

  // Если модалка закрыта, ничего не рендерим
  if (!isOpen) return null

  // 2. Используем Portal, чтобы вынести модалку в body
  return createPortal(
    <div className="modal">
      <div
        className="modal__overlay"
        ref={overlayRef}
        onClick={(e) => {
          // Закрываем, только если клик был по затемненному фону, а не по контенту
          if (e.target === overlayRef.current) onClose()
        }}
      >
        <div className="modal__content">
          <div className="modal__header">
            {title && <h2 className="modal__title">{title}</h2>}
            <button
              className="modal__close"
              onClick={onClose}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          <div className="modal__body">{children}</div>
        </div>
      </div>
    </div>,
    document.body
  )
}
