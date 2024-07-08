import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { services } from "@/Data/data"
import ServiceCard from "@/components/ServiceCard";

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
    <h6 className="my-3 text-base font-medium">
      Bringing ideas to life through web development is what excites me most. My previous roles have helped hone my skills in building innovative landing pages, websites, mobile applications and automations that drive results. I excel at
both solo execution and collaborative teamwork, bringing strong technical expertise and a creative mindset to the table. I'm always eager to learn and contribute to impactful projects, pushing the boundaries of what web.
    </h6>
    <div
      className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
      style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
    >
      <h4 className="my-3 text-xl font-semibold tracking-wide">
        Skilled in(but not limited to) :
      </h4>

      <div className="grid gap-6 my-3 md:grid-cols-2">
        {/* children's initial and animate property should be same as the parent during a stagger effect  */}
        {services.map((service) => (
          <div
            className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
            key={service.title}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default index
 
