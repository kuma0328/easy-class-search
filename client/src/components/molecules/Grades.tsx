import React from "react";

interface GradesProps {
  people: number;
  rate_a: number;
  rate_b: number;
  rate_c: number;
  rate_d: number;
  rate_f: number;
  rate_average: number;
}

export const Grades = ({
  people,
  rate_a,
  rate_b,
  rate_c,
  rate_d,
  rate_f,
  rate_average,
}: GradesProps) => {
  // 条件に応じたスタイルを定義
  const getCellStyle = (rate: number) => {
    if (rate >= 50) {
      return { backgroundColor: "orange" };
    } else if (rate >= 25) {
      return { backgroundColor: "yellow" };
    }
  };

  return (
    <div className="flex items-center justify-center">
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 w-16">人数</th>
            <th className="border border-gray-400 w-16">A</th>
            <th className="border border-gray-400 w-16">B</th>
            <th className="border border-gray-400 w-16">C</th>
            <th className="border border-gray-400 w-16">D</th>
            <th className="border border-gray-400 w-16">F</th>
            <th className="border border-gray-400 w-16">平均</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 text-center align-middle">
              {people}
            </td>
            <td
              className="border border-gray-400 text-center align-middle"
              style={getCellStyle(rate_a)}
            >
              {rate_a}
            </td>
            <td
              className="border border-gray-400 text-center align-middle"
              style={getCellStyle(rate_b)}
            >
              {rate_b}
            </td>
            <td
              className="border border-gray-400 text-center align-middle"
              style={getCellStyle(rate_c)}
            >
              {rate_c}
            </td>
            <td
              className="border border-gray-400 text-center align-middle"
              style={getCellStyle(rate_d)}
            >
              {rate_d}
            </td>
            <td
              className="border border-gray-400 text-center align-middle"
              style={getCellStyle(rate_f)}
            >
              {rate_f}
            </td>
            <td className="border border-gray-400 text-center align-middle">
              {rate_average}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Grades;
