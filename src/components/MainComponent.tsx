import { use, useState } from "react";
import FilterSection from "./FilterSection";
import JobsSection from "./JobsSection";
import Navbar from "./Navbar";
import type { IJobType } from "../type";
import Footer from "./Footer";

interface IMainComponentProps  {
    jobsPromise: Promise<IJobType[]>;
}

const MainComponent = ({ jobsPromise }:IMainComponentProps) => {
  const data = use(jobsPromise);
  const [jobsData, setJobsData] = useState(data)
  const [savedJobs, setSavedJobs] = useState<IJobType[]>([]);

  const handleTabChange = (type: "all" | "frontend" | "backend" | "design")=> {
    if(type==="frontend"){
      const filterJobs = data.filter((el)=> el.field.toLowerCase()=== "frontend");
      setJobsData(filterJobs)
      // console.log(filterJobs)
    }else if(type==="backend"){
      const filterJobs = data.filter((el)=> el.field.toLowerCase()=== "backend");
      setJobsData(filterJobs)
    }else if(type==="design"){
      const filterJobs = data.filter((el)=> el.field.toLowerCase()==="design");
      setJobsData(filterJobs);
    }else{
      setJobsData(data)
    }
    
   
  }

  return (
    <>
      <Navbar savedJobs={savedJobs} />
      <FilterSection handleTabChange={handleTabChange} />
      <JobsSection jobsData={jobsData} savedJobs={savedJobs} setSavedJobs={setSavedJobs} />
      <Footer />
    </>
  );
};

export default MainComponent;
