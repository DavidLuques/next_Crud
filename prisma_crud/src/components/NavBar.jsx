import Link from 'next/link'
import React from 'react'

function NavBar() {
    return (
            <nav className='bg-slate-800 '>
                        <div className='container mx-auto flex justify-between items-center py-3'>

                <Link href="/" className=''>
                <h3 className='font-bold text-3xl'>
                    Tasks Crud
                </h3>
                </Link >
                
                <ul className='flex gap-x-12 text-lg font-bold'>
                    <li>
                        <Link href="new" className='text-slate-300 hover:text-slate-200'>New</Link>
                    </li>
                    <li>
                        <Link href="about" className='text-slate-300 hover:text-slate-200'>About</Link>
                    </li>
                </ul>
                </div >

            </nav>
    )
}

export default NavBar