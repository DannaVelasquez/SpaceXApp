import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box , Flex, Spacer, Text } from "@chakra-ui/react";
import * as API from "../services/launches";

export function RocketDetail(){
    const [launch, setLaunch] = useState({})
    const { rocketId } = useParams();

    useEffect(() => {
        API.getRocketById(rocketId).then(setLaunch).catch(console.log);
    }, [rocketId]);
    
    return (
    <Box bg="blue.100" p={4} m={4} borderRadius="xl">
        {!launch ? (
            <div>Loading...</div>
         ) : (
    <>
        <Flex>
        <Text fontSize="2xl">
            Rocket <strong>{launch.rocket_name}</strong> ({launch.rocket_type})
        </Text>
        </Flex>
        
        <Flex>
        <Box>
           {launch.description}  
        </Box>
        </Flex>

        <Flex justifyContent="center">
        <Box>
           <img m={4} src={launch.flickr_images} width={400} />    
        </Box>
        </Flex>

        </>
         )}
    </Box>
    );
}