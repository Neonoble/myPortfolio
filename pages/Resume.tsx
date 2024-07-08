import React from 'react'

import Bar from "../components/Bar";
import { languages, tools } from "../Data/data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Certificates & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        
       {/*Certs */}
        <div>
          <h5 className="my-3 text-2xl font-bold">Certificates</h5>
          <div className="">
            <p className="font-semibold">
               <a style={{textDecoration:'none'} href='https://www.freecodecamp.org/certification/fcce91ce728-95f0-44c0-815f-2e0ff652952e/responsive-web-design'>
                  Responsive Web Design
              </a>
            </p>
          </div>
        </div>

         <div>
          <h5 className="my-3 text-2xl font-bold">Certificates</h5>
          <div className="">
            <p className="font-semibold">
               <a style={{textDecoration:'none'} href='https://www.freecodecamp.org/certification/fcce91ce728-95f0-44c0-815f-2e0ff652952e/javascript-algorithms-and-data-structures'>
                  JavaScript Algorithims and Date Structures
              </a>
            </p>
          </div>
        </div>

         <div>
          <h5 className="my-3 text-2xl font-bold">Certificates</h5>
          <div className="">
            <p className="font-semibold">
               <a style={{textDecoration:'none'} href='https://ix-certificate.tiiny.site/'>
                  Ixperience Internship
              </a>
            </p>
          </div>
        </div>

         <div>
          <h5 className="my-3 text-2xl font-bold">Certificates</h5>
          <div className="">
            <p className="font-semibold">
               <a style={{textDecoration:'none'} href='https://neomunhenga-hubbardcert.tiiny.site/'>
                  Hubbard Communication Course
              </a>
            </p>
          </div>
        </div>

      {/*Exp*/}
        <div>        
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          
          <div className="scrollbar" id="style-14" style={{overflow:'auto',height:'150px'}}>
            
           <div className="force-overflow">
              <h5 className="my-2 text-xl font-bold">Software Developer Intern</h5>
              <p className="font-semibold">@Younglings Africa (April 2022 - June 2023)</p>
              <p className="my-3">Worked with the development team to implement features that met project requirements.</p>
              <hr/>              
           </div>         

            <div className="force-overflow">
              <h5 className="my-2 text-xl font-bold">Funnel Engineer</h5>
              <p className="font-semibold">@Blacfox (July 2023 - March 2024)</p>
              <p className="my-3">Contributed to marketing campaigns by building conversion-focused landing pages.</p>
              <hr/>              
           </div>     

            <div className="force-overflow">
              <h5 className="my-2 text-xl font-bold">Software Developer</h5>
              <p className="font-semibold">Freelancer (April 2024)</p>
              <p className="my-3">Working as a Software Developer freelancer.</p>
              <hr/>              
           </div>     

          </div>
        </div>
        
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Technical Skills</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Professional Skills</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
