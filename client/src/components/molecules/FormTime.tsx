import React from "react";

interface FormTimeProps {}

export const FormTime = ({}: FormTimeProps) => {
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
              {days.map((_, index) => (
                <td key={index} className="border p-2 text-center">
                  {week}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormTime;
