import axios from "axios";

const apiKey = "33e0b924182172ba4521b386bc689611";
const language = "en-US"; //   ja-JP

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: apiKey,
        language: language
    }
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: id =>
        // api.get(`movie/${id}`, {
        //     params: {
        //         append_to_response: "videos"
        //     }
        // }),
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=${language}`),
    search: term =>
        api.get("search/movie", {
            params: {
                query: encodeURIComponent(term)
            }
        })
};

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: id =>
        // api.get(`tv/${id}`, {
        //     params: {
        //         append_to_response: "videos"
        //     }
        // }),
        axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=${language}`),
    search: term =>
        api.get("search/tv", {
            params: {
                query: encodeURIComponent(term)
            }
        })
};
