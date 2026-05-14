// API Configuration for Blog Backend
export const API_BASE_URL = import.meta.env.VITE_API_URL || "https://blogapp-12zw.onrender.com";

export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH_LOGIN: `${API_BASE_URL}/auth/login`,
  AUTH_LOGOUT: `${API_BASE_URL}/auth/logout`,
  AUTH_CHECK: `${API_BASE_URL}/auth/check-auth`,
  AUTH_REGISTER: `${API_BASE_URL}/auth/users`,

  // Author endpoints
  AUTHOR_ARTICLES: `${API_BASE_URL}/author-api/articles`,
  AUTHOR_CREATE_ARTICLE: `${API_BASE_URL}/author-api/article`,

  // User endpoints
  USER_ARTICLES: `${API_BASE_URL}/user-api/articles`,
  USER_ARTICLE_BY_ID: (id) => `${API_BASE_URL}/user-api/article/${id}`,
  USER_ADD_COMMENT: `${API_BASE_URL}/user-api/articles`,
};
