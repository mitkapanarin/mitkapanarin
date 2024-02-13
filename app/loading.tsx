import React from "react";
import { Loader2 } from "lucide-react";

const loading = () => {
  return (
    <div className="h-[100vh] flex justify-center flex-col gap-2 items-center">
      <Loader2 className="h-[40px] w-[40px] animate-spin text-[#26AC9B]" />
      <p className="text-md text-[#26AC9B]">Loading, please wait....</p>
    </div>
  );
};

export default loading;
