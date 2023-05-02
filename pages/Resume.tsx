import React from 'react'

import Bar from "../components/Bar";
import { languages, tools } from "../Data/data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
             Self taught developer
            </h5>
            <p className="font-semibold">Attended Oaklands high school (2017-2021)</p>
            <p className="my-3">
              I am currently working as a Web developer intern at Younglings Africa.
            </p>
          </div>
        </div>
        <div>        
          <h5 className="my-3 text-2xl font-bold">Experience</h5>         
          <div className="scrollbar" id="style-14" style={{overflow:'auto',height:'150px'}}>
           <div className="force-overflow">
              <h5 className="my-2 text-xl font-bold">Web developer Intern</h5>
              <p className="font-semibold">@Younglings Africa (April 2022 - present)</p>
              <p className="my-3">Was tasked with creating the companies Alumni Portal, which I completed using React.js .</p>
              <hr/>              
           </div>                     
          </div>          
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
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