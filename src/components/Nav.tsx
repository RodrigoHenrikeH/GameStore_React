
import { Link } from 'react-router'

function Nav() {
    return (
        <div className='w-full h-[50px] flex  p-2 justify-between fixed top-0 left-0' >
            <span className='font-mono px-4 py-2 bg-emerald-500 rounded-md flex items-center justify-center font-extrabold'>{"Sysout()"}</span>
            <nav>
                <ul className='flex gap-4'>
                    <li className='relative py-2 px-4 overflow-hidden group'>
                        <Link className='flex items-center justify-center' to="/login">Login </Link>
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className='relative py-2 px-4 overflow-hidden group'>
                        <Link className='flex items-center justify-center' to="/home">Home </Link>
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Nav