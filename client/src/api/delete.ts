import axios from "axios";

export const deleteStarCode = async (params: TStarCode) => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const result = await axios.delete(`${serverURL}/star_code`, { data: params });
  return result.data;
};
