'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { sendContactForm } from '@/lib/actions'
import { FORM } from '@/constants/content'
import Button from '@/components/Button'
import clsx from 'clsx'
import './ContactForm.scss'

interface FormData {
  name: string
  phone: string
  email: string
  message: string
}

const ContactForm = () => {
  const [serverMessage, setServerMessage] = useState<{
    text: string
    type: 'success' | 'error'
  } | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setServerMessage(null)

    try {
      const response = await sendContactForm(data)

      if (response.success) {
        setServerMessage({ text: response.message, type: 'success' })
        reset()
      } else {
        setServerMessage({ text: response.message, type: 'error' })
      }
    } catch (e) {
      setServerMessage({
        text: FORM.errorMessage,
        type: 'error'
      })
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="name">
            {FORM.nameLabel}
          </label>
          <input
            className="contact-form__input"
            id="name"
            {...register('name', { required: FORM.nameRequired })}
            placeholder={FORM.namePlaceholder}
          />
          {errors.name && (
            <span className="contact-form__field-error">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="phone">
            {FORM.phoneLabel}
          </label>
          <input
            className="contact-form__input"
            id="phone"
            {...register('phone', {
              required: FORM.phoneRequired,
              pattern: {
                value: /^[0-9+\-\s()]*$/,
                message: FORM.phoneError
              }
            })}
            placeholder={FORM.phonePlaceholder}
          />
          {errors.phone && (
            <span className="contact-form__field-error">
              {errors.phone.message}
            </span>
          )}
        </div>
      </div>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="email">
          {FORM.emailLabel}
        </label>
        <input
          className="contact-form__input"
          id="email"
          type="email"
          {...register('email', {
            required: FORM.emailRequired,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: FORM.phoneError
            }
          })}
          placeholder={FORM.emailPlaceholder}
        />
        {errors.email && (
          <span className="contact-form__field-error">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="message">
          {FORM.messageLabel}
        </label>
        <textarea
          className="contact-form__textarea"
          id="message"
          {...register('message')}
          placeholder={FORM.messagePlaceholder}
          rows={3}
        />
      </div>
      {serverMessage && (
        <div
          className={clsx('contact-form__message', {
            'contact-form__message--error': serverMessage.type === 'error',
            'contact-form__message--success': serverMessage.type === 'success'
          })}
        >
          {serverMessage.text}
        </div>
      )}

      <Button
        className="contact-form__button"
        type="submit"
        variant="secondary"
        isDisabled={isSubmitting}
      >
        {isSubmitting ? FORM.sending : FORM.send}
      </Button>
    </form>
  )
}

export default ContactForm
