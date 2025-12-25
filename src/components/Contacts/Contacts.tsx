import { CONTENT } from '@/constants/content'
import IconBox from '@/components/IconBox'
import ContactForm from '@/components/ContactForm'
import { getContactsData } from '@/lib/getContacts'
import Button from '@/components/Button'
import './Contacts.scss'
import Reveal from '@/components/Reveal'

export default async function Contacts() {
  const { phone, email, address } = await getContactsData()

  return (
    <Reveal effect="fade">
      <div className="contacts">
        <div className="contacts__inner">
          <h3 className="contacts__title contacts__title--decorated">
            {CONTENT.subtitle}
          </h3>
          <div className="contacts__info">
            <IconBox
              title={CONTENT.phoneLabel}
              name="phone"
              linkText={phone}
              link={`tel:${phone}`}
            />
            <IconBox
              title={CONTENT.emailLabel}
              name="mail"
              linkText={email}
              link={`mailto:${email}`}
            />
            <IconBox
              title={CONTENT.addressLabel}
              name="map-pin"
              description={address}
            />
          </div>
        </div>
        <div className="contacts__form">
          <div className="contacts__inner">
            <h3 className="contacts__title contacts__title--decorated">
              {CONTENT.modalCta}
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </Reveal>
  )
}
