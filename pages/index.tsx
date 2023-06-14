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
     I am a recent intern looking for an opportunity to fully display his only increasing web development skills.
     I am a highly poised and dedicated individual with a strongeducation in front-end development.
     Motivated developer with only a years worthof progressive experience. Energetic self-starter and team player.
     Navigates high-stress situations and achieves goals on time and under budget.  
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
 