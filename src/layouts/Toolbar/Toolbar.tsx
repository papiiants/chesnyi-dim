import IconBox from '@/components/IconBox'
import './Toolbar.scss'
import getContacts from '@/lib/getContacts'

export default async function Toolbar() {
  const { phone, email, address } = await getContacts()

  return (
    <div className="toolbar">
      <div className="container">
        <div className="toolbar__inner">
          <div className="toolbar__address">
            <IconBox name="map-pin" description={address} />
          </div>
          <div className="toolbar__contacts">
            <IconBox name="phone" linkText={phone} link={`tel:${phone}`} />
            <IconBox name="mail" linkText={email} link={`mailto:${email}`} />
          </div>
        </div>
      </div>
    </div>
  )
}
