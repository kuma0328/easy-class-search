import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";
import TRadarChart from "src/types/RadarChart";

interface TeacherInfoProps {
  data: TRadarChart;
}

export const TeacherInfo = ({ data }: TeacherInfoProps) => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(`/teacher/${data.teacher}`)}>
        <div className="flex border-2 rounded-lg p-5 border-gray-200 border-opacity-60 overflow-hidden bg-white hover:opacity-60 shadow-md">
          <div className="w-1/2">
            <div className="text-gray-600 text-sm">名前</div>
            <div className="font-semibold text-md mb-2">{data.teacher}</div>
            <div className="text-gray-600 text-sm">学部</div>
            <div className="font-semibold text-md mb-2">{data.major}</div>
          </div>
          <div className="w-1/2">
            <div className="rounded-lg">
              <RadarChart
                outerRadius={50}
                width={150}
                height={150}
                data={data.data}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar
                  name="grades"
                  dataKey="A"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.5}
                />
              </RadarChart>
            </div>
          </div>
        </div>
      </button>
    </>
  );
};

export default TeacherInfo;
