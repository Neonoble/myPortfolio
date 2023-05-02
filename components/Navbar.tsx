import { useState, useEffect, FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NavItem: FunctionComponent<{
   active: string
   setActive: Function
   name: string
   route: string
}> = ({ active, setActive, name, route }) => {
   return active !== name ? (
      <Link href={route}>         
            <span
               className='mx-2 border-green-500 cursor-pointer hover:border-b-4 hover:text-green-500'
               onClick={() => setActive(name)}>
               {name}
            </span>         
      </Link>
   ) : null
}

const Navbar = () => {
   const { pathname } = useRouter()

   const [active, setActive] = useState('')

   //later
   useEffect(() => {
      if (pathname === '/') setActive('About')
      else if (pathname === '/Projects') setActive('Projects')
      else if (pathname === '/Resume') setActive('Resume')
   }, [])

   return (
      <div className='flex items-center justify-between px-5 py-3 my-3'>
         <span className='text-xl font-bold text-green-500 border-b-4 border-green-500 md:text-2xl'>
            {active}
         </span>

         <div className='text-base font-normal md:text-xl'>
            <NavItem
               active={active}
               setActive={setActive}
               name='About'
               route='/'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Resume'
               route='/Resume'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Projects'
               route='/Projects'
            />
         </div>
      </div>
   )
}

export default Navbar