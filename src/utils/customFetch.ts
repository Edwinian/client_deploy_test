import { Endpoint } from "../types/endpoint.enum";

//add common error handling and handle token here
const customFetch = async (endpoint: Endpoint) => {
  try {
    const fetchData = await fetch(
      `${process.env.REACT_APP_SERVER_BASE_URL}/${endpoint}`
    );
    return await fetchData.json();
  } catch (error) {
    throw new Error(`fetch error: ${error}`);
  }
};

export default customFetch;
