const Footer = () => {
  const data = new Date().getFullYear();
  return (
    <div className="mt-15">
      <div className="bg-slate-800 text-white py-6">
        <div className="container mx-auto ">
          <div className="flex justify-between items-center">
            <p className="font-bold text-2xl">
              Dev<span className="text-orange-400">Jobs</span>
            </p>
            <div className="flex gap-5 font-semibold">
                <p>© {data} DevJobs.</p>
            <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
