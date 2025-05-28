import { Link } from "react-router"

export const Navbar = () => {
  return (
    <nav className='flex justify-between bg-stone-800 text-white px-12 py-6 items-center align-middle'>
      <Link to='/' className="font-bold text-4xl text-emerald-300">Green cities</Link>

      <ul className='flex items-center align-middle gap-6'>
        <li><Link to='/'>cities</Link></li>
        <li><Link to='/form'>add city</Link></li>
      </ul>
    </nav>
  )
}