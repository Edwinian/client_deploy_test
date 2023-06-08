import { Endpoint } from "../types/endpoint.enum";

//add common error handling and handle token here
const customFetch = async (endpoint: Endpoint) => {
  try {
    const fetchData = await fetch(
      `https://serverdeploytest-production.up.railway.app/${endpoint}`
    );
    return await fetchData.json();
  } catch (error) {
    throw new Error(`fetch error: ${error}`);
  }
};

export default customFetch;
