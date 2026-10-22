import type { IJobType } from "../type";
import JobCard from "./JobCard";
import SavedJobCard from "./SavedJobCard";

interface IJobsSectionProps {
  jobsData: IJobType[];
  savedJobs: IJobType[];
  setSavedJobs: React.Dispatch<React.SetStateAction<IJobType[]>>;
}

const JobsSection = ({
  jobsData,
  savedJobs,
  setSavedJobs,
}: IJobsSectionProps) => {
  const handleSavedJob = (job: IJobType) => {
    // console.log(job);
    const filterJobs = savedJobs.filter(el => el.id !== job.id);

    const updatedJobs = [...filterJobs, job];
    setSavedJobs(updatedJobs);

  };

 const handleRemoveJob = (job:IJobType)=> {
  
  const filterJobs = savedJobs.filter(el => el.id !==job.id)
  setSavedJobs(filterJobs);

 }

  return (
    <div className="container mx-auto flex justify-between gap-6">
      {/* Latest job */}
      <div className="w-3/4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Latest Jobs</h3>
          <p className="text-slate-400">{jobsData.length} roles found</p>
        </div>

        <div className="grid grid-cols-2 gap-2 ">
          {jobsData.map((item) => (
            <JobCard job={item} key={item.id} savedJobs={savedJobs} handleSavedJob={handleSavedJob} />
          ))}
        </div>
      </div>

      <div className="w-1/4">
        <div className=" top-22 sticky">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Saved Jobs</h3>
          <p className="text-slate-400">{savedJobs.length} saved</p>
        </div>

        <div className="space-y-2">
          {
            savedJobs.map((item) => <div>
              <SavedJobCard key={item.id} savedJob={item} savedJobs={savedJobs} handleRemoveJob={handleRemoveJob} />
            </div>)
          }
        </div>
      </div>
      </div>
    </div>
  );
};

export default JobsSection;
