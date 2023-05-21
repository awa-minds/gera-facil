import logo from '../../assets/images/logo.png'
import DynamicLink from '../DynamicLink'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className="sidebar w-78 flex-shrink-0 bg-secondary p-6">
      <DynamicLink href="/">
        <Image src={logo} alt="Gerafácil" priority={true} />
      </DynamicLink>
    </div>
  )
}

export default Sidebar
