import api from './api';
import { User } from '../types/User';

interface AuthResponse {
  user: User;
  token: string;
}

export const authService = {
  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/login', {
      email,
      password,
    });
    return response.data;
  },

  async loginWithGoogle(): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/google');
    return response.data;
  },

  async signup(email: string, password: string): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/signup', {
      email,
      password,
    });
    return response.data;
  },

  async validateToken(token: string): Promise<User> {
    const response = await api.post<User>('/auth/validate', { token });
    return response.data;
  },
};