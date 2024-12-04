import axios from "axios";

const fetchUniversities = async (country) => {
  const response = await axios.get(
    `http://universities.hipolabs.com/search?country=${country}`
  );
  return response.data;
};

export default fetchUniversities;
