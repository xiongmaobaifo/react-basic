import request from './request';

export interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}

export const fetchUsers = (): Promise<User[]> => {
  return request.get('/users');
};
