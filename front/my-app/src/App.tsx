import React, { useState } from "react";
import logo from "./logo.svg";
import MetricFormInput from "./components/MetricFormInput";
import LocationForm from "./components/LocationForm";
import NotificationForm from "./components/NotificationForm";
import MessageForm from "./components/MessageForm";
import AlertList from "./components/AlertList";
//<MetricFormInput />
function App() {
  const [page, setPage] = useState(1);
  const nextPage = () => {
    console.log("FFFFF");
    setPage((page) => page + 1);
  };
  return (
    <div className="App" style={{ margin: "0px" }}>
      {page === 1 && <MetricFormInput nextPage={nextPage} />}
      {page === 2 && <LocationForm nextPage={nextPage} />}
      {page === 3 && <NotificationForm nextPage={nextPage} />}
      {page === 4 && <MessageForm nextPage={nextPage} />}
      {page === 5 && <AlertList />}
    </div>
  );
}

export default App;
