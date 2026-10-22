import { Suspense } from "react";
import MainComponent from "./components/MainComponent";
import type { IJobType } from "./type";




const jobsPromise: Promise<IJobType[]> = fetch("/jobs.json").then((res) => res.json());

function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <MainComponent jobsPromise={jobsPromise} />
      </Suspense>
    </div>
  );
}

export default App;
