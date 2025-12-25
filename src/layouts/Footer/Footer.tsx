import Contacts from '@/components/Contacts'
import './Footer.scss'
import Copyright from '@/components/Copyright'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Contacts />
      </div>
      <Copyright />
    </footer>
  )
}

export default Footer
