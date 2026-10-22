import { FaBookmark } from "react-icons/fa";
import type { IJobType } from "../type";

interface IJobCardProps {
  job: IJobType;
  savedJobs: IJobType[];
  handleSavedJob: (job: IJobType) => void;
}

const JobCard = ({ job, savedJobs, handleSavedJob }: IJobCardProps) => {
  const isSaved = savedJobs.some((el) => el.id == job.id);
  
  return (
    <div className="my-2 mx-2">
      <div className={`card bg-base-100 card-sm shadow-sm p-4 ${isSaved ? 'border-success border' : ''}`}>
        <div className="">
          <div className="flex justify-between items-start w-full gap-4">
            <div>
              <h2 className="card-title">{job.title}</h2>
              <p>{job.location}</p>
            </div>
            <p>{job.jobType}</p>
            <p>{job.field}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">{job.salaryRange}</p>
            <button
              onClick={() => handleSavedJob(job)}
              className={`btn ${isSaved ===true ? 'btn-success' : 'btn-primary'}`}
            >
              <FaBookmark /> Saved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
