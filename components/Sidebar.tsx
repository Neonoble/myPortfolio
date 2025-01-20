import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { GiTie } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import {useTheme} from 'next-themes';


const Sidebar = () => {
   const {theme, setTheme} = useTheme();
   const changeTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light')
   }
   
   return (
      <>
        <div className="flex">
          <img
            src='data:image/jpeg;base64,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'
            alt='avatar'
            className="w-32 h-32 mx-auto border rounded-full"            
         />
         <section>
            {/*  toggle Theme button */}
            <button
               onClick={changeTheme}
               title='Theme'
               className='w-1 px-4 py-4 text-white rounded-full cursor-pointer bg-gradient-to-r from-green-400 to-blue-400 focus:outline-none hover:scale-105'>
               {/* //TODO remove bg black */}                             
            </button>
         </section>         
        </div>
        
         <h1 className='my-4 font-serif text-3xl font-medium tracking-wider font-kaushan'>
            <span className='text-green-400 '>Neo</span> Munhenga
         </h1>
         <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-500">
            Software Developer
         </p>
         {/* Resume */}
         <a
            href='Resume-NeoMunhenga.pdf'
            download='Resume-NeoMunhenga.pdf'
            className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-500 '>
            <GiTie />
            <span>Download Resume</span>
         </a>

         {/* Socials */}
         <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full '>
               {/*LinkedIn  */}
            <a href=''>
               <AiFillLinkedin className='w-8 h-10' title='LinkedIn'/>
            </a>
            {/* Github */}
            <a href='https://github.com/Neonoble'>
               <AiFillGithub className='w-8 h-10' title='Github' />
            </a>
         </div>

         {/* Contacts */}
         <div
            className="py-4 my-5 bg-gray-200 dark:bg-dark-500 dark:bg-black-500"
            style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
            <div className="flex items-center justify-center">
               <GoLocation /> <span>Cape Town, South Africa </span>
            </div>
            <p className='my-2'> neonobblemunhenga@gmail.com</p>
            <p className='my-2'>084-790-4925</p>
         </div>

         {/* Email Button */}
       <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-green-400 to-blue-400 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
               onClick={() => window.open('mailto:neonobblemunhenga@gmail.com')}>                  
           <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Email me
           </span>
      </button>                     
      </>
   )
}

export default Sidebar;
