import { useNavigate } from "react-router-dom";
import Title from "../atoms/Title";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row items-center">
      <button onClick={() => navigate(-1)}>
        <div className="left-0 top-0 fixed p-3 hover:opacity-50">
          <ArrowBackIosIcon />
        </div>
        <Title title="同志社楽単サーチ" />
      </button>
    </div>
  );
};

export default Header;
