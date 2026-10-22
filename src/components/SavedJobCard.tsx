import type { IJobType } from "../type";

interface ISavedJobType {
    savedJob: IJobType;
    savedJobs: IJobType[];
    handleRemoveJob: (job: IJobType)=> void;
}

const SavedJobCard = ({ savedJob, handleRemoveJob }: ISavedJobType) => {
  return (
    <div className="my-5">

    <div className="card bg-base-100 card-sm shadow-sm p-4">
      <div className="">
        <div className="flex justify-between items-start w-full gap-4">
          <div>
            <h2 className="card-title">{savedJob.title}</h2>
            <p>{savedJob.location}</p>
          </div>
        </div>
    
          <button 
          onClick={()=> handleRemoveJob(savedJob)}
          className="btn btn-outline mt-3 btn-warning w-full ">Remove</button>    
      </div>
    </div>
    </div>
  );
};

export default SavedJobCard;
