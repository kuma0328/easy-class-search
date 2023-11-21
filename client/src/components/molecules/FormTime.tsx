import React, { useState } from "react";

interface FormTimeProps {
  addTime: (time: string) => void;
  removeTime: (time: string) => void;
  selectedTimes: string[];
}

export const FormTime = ({
  addTime,
  removeTime,
  selectedTimes,
}: FormTimeProps) => {
  const days = ["月", "火", "水", "木", "金", "土"];
  const weeks = [1, 2, 3, 4, 5, 6, 7]; // 週数

  return (
    <div className="mx-auto w-full max-w-3xl">
      <table className="w-full border border-collapse">
        <thead>
          <tr>
            {days.map((day, index) => (
              <th key={index} className="border p-2">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week) => (
            <tr key={week}>
              {days.map((_, index) => {
                const time = `${days[index]}曜日${week}講時`;
                const isSelected = selectedTimes.includes(time);

                return (
                  <td key={index} className="border p-2 text-center">
                    <button
                      onClick={() => {
                        if (isSelected) {
                          // 時間が選択されている場合、削除
                          removeTime(time);
                        } else {
                          // 時間が選択されていない場合、追加
                          addTime(time);
                        }
                      }}
                      className={`${
                        isSelected ? "bg-purple-100 text-white" : "bg-white"
                      } rounded p-2 w-full h-full`}
                    >
                      {week}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormTime;
