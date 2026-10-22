interface IFilterSectionProps {
  handleTabChange:(type: "all" | "frontend" | "backend" | "design")=> void;
}

const FilterSection = ({handleTabChange}:IFilterSectionProps) => {
  return (
    <div className="container mx-auto mt-4">
      <div>
        <div>
          <h1 className="text-3xl font-extrabold ">
            Find your next developer role
          </h1>
          <p className="text-gray-400">Search, filter, and save the jobs you like-everything updates instantly.</p>
        </div>
        <div className=" flex gap-10 py-6">
          <label className="input w-5xl">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
                >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
          <div className="">
            <button onClick={()=> handleTabChange("all")} className="btn btn-neutral rounded-full mr-2">All</button>
            <button onClick={()=> handleTabChange("frontend")} className="btn btn-while rounded-full mr-2">Frontend</button>
            <button onClick={()=> handleTabChange("backend")} className="btn btn-while rounded-full mr-2">Backend</button>
            <button onClick={()=> handleTabChange("design")} className="btn btn-while rounded-full mr-2">Design</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
