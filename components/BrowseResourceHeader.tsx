import { Input } from "./ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const BrowseResourceHeader = () => {
  return (
    <div className="border-b h-[80px] border-b-gray-300 items-center p-6 max-md:p-4 flex justify-between">
      <p className="text-sm text-gray-600">
        Browse your resources and upload new ones.
      </p>
      <div className={` h-fit flex`}>
        <div>
          <Select>
            <SelectTrigger className={`w-[130px] bg-gray-200 rounded-r-none`}>
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="onboarding">Onboarding</SelectItem>
              <SelectItem value="certification">Certification</SelectItem>
              <SelectItem value="education">Education</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <form className="">
          <Input
            type="search"
            placeholder="Search"
            className="rounded-l-none h-full w-[300px]"
          />
        </form>
      </div>
    </div>
  );
};
export default BrowseResourceHeader;
