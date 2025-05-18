import request from './request';

interface RegisterParams {
  userAccount: string;
  password: string;
  rePassword: string;
}

interface LoginParams {
  userAccount: string;
  userPassword: string;
}

interface UserInfo {
  userId: string;
  userNickname: string | null;
  userAccount: string;
}

interface LoginResponse {
  token: string;
  user: UserInfo;
}

interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}

interface Genre {
  id: number;
  name: string;
}

interface LikeQueryParams {
  current: number;
  pageSize: number;
  userId: string;
}

interface LikeRecord {
  genreId: number;
  genreName: string;
}

interface LikeResponse {
  records: LikeRecord[];
  total: number;
  size: number;
  current: number;
}

interface LikeAddParams {
  userId: string;
  likeGenreIds: number[];
}

interface LikeEditParams {
  userId: string;
  genreIds: number[];
}

interface LikeDeleteParams {
  userId: string;
  genreIds: number[];
}

export const register = (data: RegisterParams) => {
  return request<ApiResponse>({
    url: '/auth/register',
    method: 'post',
    data,
  });
};

export const login = (data: LoginParams) => {
  return request<ApiResponse<LoginResponse>>({
    url: '/auth/login',
    method: 'post',
    data,
  });
};

export const logout = () => {
  return request<ApiResponse>({
    url: '/auth/logout',
    method: 'get',
  });
};

// 获取所有电影类型
export const getGenreList = () => {
  return request<ApiResponse>({
    url: '/genre/list',
    method: 'get',
  });
};

// 获取用户喜欢的类型列表
export const getLikeList = (data: LikeQueryParams) => {
  return request<ApiResponse<LikeResponse>>({
    url: '/user/like/list',
    method: 'post',
    data,
  });
};

// 添加用户喜欢的电影类型
export const addLikeGenres = (data: LikeAddParams) => {
  return request<ApiResponse>({
    url: '/user/like/add',
    method: 'post',
    data,
  });
};

// 编辑用户喜欢的电影类型
export const editLikeGenres = (data: LikeEditParams) => {
  return request<ApiResponse>({
    url: '/user/like/edit',
    method: 'post',
    data,
  });
};

// 删除用户喜欢的电影类型
export const deleteLikeGenres = (data: LikeDeleteParams) => {
  return request<ApiResponse>({
    url: '/user/like/delete',
    method: 'post',
    data,
  });
}; 