import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTFmZDdkMGJkM2RhYzI3MjU0ZWRlNTcxMTE0ZmIwOSIsInN1YiI6IjYwZTkyZTMxYTNkMDI3MDA0Njc3NjQ2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YAuYGX2mMm8KcjnW2H2N2YfDrOBolO5wHtJ3IcsbyMI";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
