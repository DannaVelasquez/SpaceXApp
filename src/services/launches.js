const API_URL = "https://api.spacexdata.com/v3";

//Export launch information from the API
export async function getAllLaunches(){
    try{
    const response = await fetch(`${API_URL}/launches`);
    const data = await response.json();
    return data;
    }
    catch(error){
        console.error(error);
    }
}

//Export launch information by flight number from the API
export async function getLaunchByFlightNumber(flightNumber){
    try{
        const response = await fetch(`${API_URL}/launches/${flightNumber}`);
        const data = await response.json();
        return data;
    }
    catch(error){
        console.error(error);
    }
}