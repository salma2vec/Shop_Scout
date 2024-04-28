interface UserPreferences {
  language: string;
  currency: string;
  country: string;
  preferedTheme: string;
}

interface UserSecurity {
  twoFactorAuth: boolean;
  hasValidEmail: boolean;
  passwordResetToken: string;
  passwordResetExpires: Date;
}
export interface User {
  _id: string;
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  searchHistory: string[];
  preferences: UserPreferences;
  security: UserSecurity;
  createdAt: Date;
  updatedAt: Date;
  isLoggedIn: boolean;
}
