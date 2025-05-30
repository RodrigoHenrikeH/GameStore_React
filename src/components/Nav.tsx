
import { Link } from 'react-router'
import Logo from '../assets/Logo'


function Nav() {
    return (
        <div className='w-full h-[50px] flex  p-2 justify-between fixed top-0 left-0' >
           <Logo />
            <nav>
                <ul className='flex gap-4'>
                    <li className='relative py-2 px-4 overflow-hidden group'>
                        <Link className='flex items-center justify-center' to="/produto">Produto</Link>
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className='relative py-2 px-4 overflow-hidden group'>
                        <Link className='flex items-center justify-center' to="/categoria">Categoria</Link>
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Nav