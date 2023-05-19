import logo from '../../assets/images/logo.png'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className="w-78 flex-shrink-0 bg-secondary p-6">
      <Image src={logo} alt="Gerafácil" />
    </div>
  )
}

export default Sidebar
