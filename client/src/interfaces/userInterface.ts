export interface User {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  preferedTheme: string;
  searchHistory: string[];
  preferences: {}[];
  createdAt: Date;
  updatedAt: Date;

  isLoggedIn: boolean;

}
