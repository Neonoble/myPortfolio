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
            src='https://media.licdn.com/dms/image/C4D03AQGADUapvQmuMg/profile-displayphoto-shrink_200_200/0/1662745984580?e=1687392000&v=beta&t=t7BeCzATTwakPIJ4NYzAUw45O81Z3E1HqNQTwwBlzeo'
            alt='avatar'
            className="w-32 h-32 mx-auto border rounded-full"            
         />
         <section>
            {/*  toggle Theme button */}
            <button
               onClick={changeTheme}
               title='Theme'
               className='w-1 px-4 py-4 text-white rounded-full cursor-pointer  bg-gradient-to-r from-green-400 to-blue-400 focus:outline-none hover:scale-105'>
               {/* //TODO remove bg black */}                             
            </button>
         </section>         
        </div>
        
         <h1 className='my-4 font-serif text-3xl font-medium tracking-wider font-kaushan'>
            <span className='text-green-400 '>Neo</span> Munhenga
         </h1>
         <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-500">
            Web Developer
         </p>
         {/* Resume */}
         <a
            href='Neo_Munhnega-Resume.pdf'
            download='Neo_Munhnega-Resume.pdf'
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