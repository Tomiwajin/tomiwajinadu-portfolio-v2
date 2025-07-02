import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const page = () => {
  return (
    <div className="md:pl-70 flex flex-col gap-20 py-12 md:py-0 ">
      <div className="flex flex-col">
        <div className="flex flex-row gap-4">
          <div className="hidden md:block px-8 py-2 rounded-md border-2 border-theme">
            All
          </div>
          <div className="hidden md:block px-8 py-2 rounded-md border-2 border-theme">
            FrontEnd
          </div>
          <div className="hidden md:block px-8 py-2 rounded-md border-2 border-theme">
            BackEnd
          </div>
          <div>
            <input
              className="px-2 md:px-10 py-2 rounded-md border-2 border-theme focus:outline-none"
              type="search"
              placeholder="search"
            ></input>
          </div>
          <div className="hidden md:block px-8 py-2 rounded-md border-2 border-theme">
            Database
          </div>
          <div className="hidden md:block px-8 py-2 rounded-md border-2 border-theme">
            Cloud
          </div>
          <div className="hidden md:block px-8 py-2 rounded-md border-2 border-theme">
            Tools
          </div>
          <div className="md:hidden">
            <Select>
              <SelectTrigger className="px-2 py-5">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">All</SelectItem>
                  <SelectItem value="banana">webDev</SelectItem>
                  <SelectItem value="blueberry">MobileDev</SelectItem>
                  <SelectItem value="grapes">ML</SelectItem>
                  <SelectItem value="pineapple">JavaDev</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
