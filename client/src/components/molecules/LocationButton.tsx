import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
interface LocationButtonProps {}

export const LocationButton = ({}: LocationButtonProps) => {
  const [locationText, setLocationText] = useState<string>("全て");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const locationList: string[] = ["全て", "今出川", "京田辺", "オンライン"];

  const onClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const selectText = (text: string) => {
    setLocationText(text);
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={onClickOpen}
          className="p-1 rounded-md hover:bg-purple-100"
        >
          <LocationOnIcon color="secondary" />
          <span className="px-2 text-purple-500 flex justify-center">
            {locationText}
          </span>
        </button>
        {isOpen ? (
          <div className="bg-gray-100 border border-gray-300 mt-1 rounded-lg text-sm text-gray-900 p-2.5 w-fit absolute">
            {locationList.map((value) => (
              <div
                key={value}
                onClick={() => selectText(value)}
                className="hover:bg-gray-300 block text-gray-500 p-1"
              >
                <span>{value}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default LocationButton;
