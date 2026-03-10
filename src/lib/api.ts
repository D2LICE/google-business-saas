import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(err);
  },
);

export type User = {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  organizations?: { id: string; name: string; role: string }[];
};

export const authApi = {
  register: (data: { email: string; password: string; firstName?: string; lastName?: string }) =>
    api.post<{ id: string; email: string }>('/auth/register', data),
  login: (data: { email: string; password: string }) =>
    api.post<{ user: User }>('/auth/login', data),
  me: () => api.get<User>('/auth/me'),
  googleUrl: () => api.get<{ url: string }>('/auth/google/url'),
};

export const locationsApi = {
  list: (organizationId?: string) =>
    api.get('/google-business/locations', { params: { organizationId } }),
  create: (data: { organizationId: string; name: string; address?: string; phone?: string }) =>
    api.post('/google-business/locations', data),
};

export const trackingApi = {
  stats: (organizationId: string, from?: string, to?: string) =>
    api.get('/tracking/stats', { params: { organizationId, from, to } }),
  locationSummary: (locationId: string) =>
    api.get(`/tracking/locations/${locationId}/summary`),
};

export const reviewsApi = {
  list: (params?: { locationId?: string }) => api.get('/reviews', { params }),
  stats: (organizationId: string) => api.get('/reviews/stats', { params: { organizationId } }),
};
