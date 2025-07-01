import React from "react";

const page = () => {
  return (
    <div className="md:pl-70 flex flex-col gap-20 py-12 md:py-0 ">
      <div className="flex flex-col">
        <div className="flex flex-row gap-6">
          <div className="hidden md:block px-10 py-2 rounded-md border-2 border-theme">
            All
          </div>
          <div className="hidden md:block px-10 py-2 rounded-md border-2 border-theme">
            webDev
          </div>
          <div className="hidden md:block px-10 py-2 rounded-md border-2 border-theme">
            MobileDev
          </div>
          <div>
            <input
              className="px-2 md:px-10 py-2 rounded-md border-2 border-theme focus:outline-none"
              type="search"
              placeholder="search"
            ></input>
          </div>
          <div className="hidden md:block px-10 py-2 rounded-md border-2 border-theme">
            ML
          </div>
          <div className="hidden md:block px-10 py-2 rounded-md border-2 border-theme">
            JavaDev
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
