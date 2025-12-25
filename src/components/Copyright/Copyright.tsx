import { CONTENT } from '@/constants/content'
import './Copyright.scss'

export default function Copyright() {
  return (
    <div className="copyright">
      <span>&copy; {new Date().getFullYear()}</span>
      <span>{CONTENT.copyright}</span>
    </div>
  )
}
