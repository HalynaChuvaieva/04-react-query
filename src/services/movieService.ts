import axios from "axios"
import type { Movie } from "../types/movie";
const myKey = import.meta.env.VITE_TMDB_TOKEN;

interface FetchProps{
    query: string;
    page: number;
}
interface MoviesHttpResponse{
    results: Movie[];
    total_pages: number;
}

export default async function fetchMovie({query, page}:FetchProps): Promise<MoviesHttpResponse> {
    const {data} = await axios.get<MoviesHttpResponse>(`https://api.themoviedb.org/3/search/movie`,
        {
            params: {
                query: query,
                page: page,
            },
            headers: {
                Authorization: `Bearer ${myKey}`,
            }
        }
    )
    
    return data;
    
}
