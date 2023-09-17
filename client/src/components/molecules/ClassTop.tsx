import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface ClassTopProps {
  title: string;
  code: string;
}

export const ClassTop = ({ title, code }: ClassTopProps) => {
  return (
    <>
      <div className="flex flex-col border-b">
        <span className="text-2xl">{title}</span>
        <div>
          <span className="text-gray-400 pr-2">{code}</span>
          <ContentCopyIcon fontSize="small" color="secondary" />
        </div>
      </div>
    </>
  );
};

export default ClassTop;
