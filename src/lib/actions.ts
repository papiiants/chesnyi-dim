const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL
const FORM_ID = '416'

export type ActionResponse = {
  success: boolean
  message: string
}

interface ContactFormData {
  name: string
  phone: string
  email: string
  message: string
}

export async function sendContactForm(
  data: ContactFormData
): Promise<ActionResponse> {
  // ... существующая валидация ...
  if (!data.name || !data.phone || !data.email) {
    return { success: false, message: "Заповніть обов'язкові поля." }
  }

  const formData = new FormData()
  formData.append('your-name', data.name)
  formData.append('your-email', data.email)
  formData.append('your-phone', data.phone)
  formData.append('your-message', data.message)
  formData.append('_wpcf7_unit_tag', 'rte')

  const url = `${WP_API_URL}/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`

  try {
    const res = await fetch(url, {
      method: 'POST',
      body: formData
    })

    const json = await res.json()

    if (json.status === 'mail_sent') {
      return {
        success: true,
        message: 'Дякуємо! Ваше повідомлення успішно відправлено.'
      }
    } else {
      return {
        success: false,
        message: json.message || 'Сталася помилка при відправці форми.'
      }
    }
  } catch (error) {
    console.error('Network Error:', error)
    return {
      success: false,
      message: "Помилка з'єднання з сервером."
    }
  }
}
