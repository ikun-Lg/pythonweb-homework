import request from "./request";

export interface MovieQueryParams {
  current: number;
  pageSize: number;
  actors?: string[];
  regions?: string[];
  tags?: string[];
}

export interface Movie {
  id: number;
  movieId: string;
  name: string;
  alias: string | null;
  cover: string;
  directors: string;
  actors: string;
  genres: string;
  doubanScore: number;
  doubanVotes: number;
  year: number;
}

export interface MovieListResponse {
  code: number;
  message: string;
  data: {
    records: Movie[];
    total: number;
    size: number;
    current: number;
    pages: number;
  };
}

export interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}

// 分页查询电影数据
export const getMovieList = (params: MovieQueryParams) => {
  return request<ApiResponse>({
    url: "/movie/page",
    method: "post",
    data: params,
  });
};

// 获取用户推荐电影列表
export const getRecommendedMovies = (userId: string, topN?: number) => {
  return request<ApiResponse>({
    url: "/movie/recommend",
    method: "get",
    params: {
      userId,
      topN,
    },
  });
};
