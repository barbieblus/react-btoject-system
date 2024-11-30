import logo from "./logo.svg";
import "./App.css";
import Table from "./Table";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";
function App() {
  const [showTable, setShowTable] = useState(false);
  const handleClick = () => {
    setShowTable(!showTable);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>{showTable ? "Hide" : "Show"} Table</button>
      <AnimatePresence>
        {!showTable && (
          <motion.div
            key="default"
            exit={{
              opacity: 0,
              y: -90,
              transition: { duration: 0.5 },
            }}
            initial={{
              opacity: 0,
              y: 90,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            }}
            className="App-header"
          >
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </motion.div>
        )}
        {showTable && <Table />}
      </AnimatePresence>
    </div>
  );
}

function App1() {
  const appHeader = useRef();
  const table = useRef();

  const [showTable, setShowTable] = useState(false);
  const handleClick = () => {
    setShowTable(!showTable);
  };

  console.log(table);

  useEffect(() => {
    if (showTable) {
      setTimeout(() => {
        appHeader.current.style.display = "none";
        appHeader.current.style.zIndex = "-1";
      }, 400);
      table.current.style.display = "block";
    } else {
      setTimeout(() => {
        table.current.style.display = "none";
        appHeader.current.style.zIndex = "1";
      }, 400);
      appHeader.current.style.display = "flex";
    }
  }, [showTable]);
  return (
    <div className="App">
      <button
        style={{
          position: "fixed",
          zIndex: 33,
        }}
        onClick={handleClick}
      >
        {showTable ? "Hide" : "Show"} Table
      </button>
      <div
        style={{
          top: "22px",
          position: "relative",
        }}
      >
        <div
          ref={appHeader}
          className={
            showTable
              ? "App-header disableDefault "
              : "App-header enableDefault"
          }
        >
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
        <Table
          table={table}
          className={showTable ? " table enableTable  " : " table disableTable"}
        />
      </div>
    </div>
  );
}

export default App1;
