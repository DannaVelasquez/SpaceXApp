//Hooks (useState, useEffect)

import { Flex, Image } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { LaunchList } from "./components/LaunchList";
import { LaunchDetail } from "./components/LaunchDetail";
import { RocketDetail } from "./components/RocketDetail";
import logo from "./assets/logo-spacex.png";


//First Component
export function App() {
  /* const [launches, setLaunches] = useState([]);
  
  //Second Array is called "Dependency Array"
  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []); */

  return (
    //with map we can recorrer arrays
    <>
    <Flex justifyContent="center" ml={12} mr={-12}>
    <Image m={4} src={logo} width={400} />
    </Flex>
    <Routes>
      <Route path="/" element={<LaunchList />} />
      <Route path="launch/:launchId" element={<LaunchDetail />} />
      <Route path="rocket/:rocketId" element={<RocketDetail />} />
    </Routes>
    </>
  );
}