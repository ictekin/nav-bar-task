import { useState } from "react";

import "./App.css";

import TabBar from "./components/TabBar";

function App() {
  const [selectedTab, setSelectedTab] = useState();

  return (
    <>
      <TabBar setSelectedTab={setSelectedTab} selectedTab={selectedTab} />

      {(() => {
        switch (selectedTab) {
          case 0:
            return <div style={{ marginTop: "3rem" }}>Gönderilerim</div>;
          case 1:
            return <div style={{ marginTop: "3rem" }}>Çözümler</div>;
          case 2:
            return <div style={{ marginTop: "3rem" }}>Şirket Künyesi</div>;
          case 3:
            return <div style={{ marginTop: "3rem" }}>Çalışanlar</div>;
          case 4:
            return <div style={{ marginTop: "3rem" }}>Blog</div>;
          default:
            return null;
        }
      })()}
    </>
  );
}

export default App;
