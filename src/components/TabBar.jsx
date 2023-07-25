import { BiArrowFromRight } from "react-icons/bi";
import { BiArrowFromTop } from "react-icons/bi";
import { BiArrowToBottom } from "react-icons/bi";
import { BiArrowToLeft } from "react-icons/bi";
import { BiArrowToRight } from "react-icons/bi";

import "./TabBar.css";

const exampleData = [
  {
    text: "Gönderilerim",
    icon: <BiArrowFromRight style={{ width: "32px", height: "32px" }} />,
  },
  {
    text: "Çözümler",
    icon: <BiArrowFromTop style={{ width: "32px", height: "32px" }} />,
  },
  {
    text: "Şirket Künyesi",
    icon: <BiArrowToBottom style={{ width: "32px", height: "32px" }} />,
  },
  {
    text: "Çalışanlar",
    icon: <BiArrowToLeft style={{ width: "32px", height: "32px" }} />,
  },
  {
    text: "Blog",
    icon: <BiArrowToRight style={{ width: "32px", height: "32px" }} />,
  },
];

const TabBar = ({ setSelectedTab, selectedTab }) => {
  return (
    <div className="container">
      {exampleData.map((val, index) => {
        return (
          <>
            {" "}
            <button
              onClick={() => setSelectedTab(index)}
              style={{ color: selectedTab === index ? "#0077b6" : null }}
            >
              {val.icon}
              <span>{val.text}</span>
            </button>{" "}
            {index === exampleData.length - 1 ? null : <hr />}
          </>
        );
      })}
    </div>
  );
};

export default TabBar;
