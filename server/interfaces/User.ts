/*
 * User Interface
 *
 * @interface User
 * @param {string} _id - User's ID
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @param {string} username - User's username
 * @param {string} firstName - User's first name
 * @param {string} lastName - User's last name
 * @param {string[]} searchHistory - User's search history
 * @param {object} preferences - User's preferences
 * @param {string} preferences.language - User's language preference
 * @param {string} preferences.currency - User's currency preference
 * @param {string} preferences.country - User's country preference
 * @param {string} preferences.preferedTheme - User's theme preference
 * @param {Date} createdAt - User's creation date
 * @param {Date} updatedAt - User's last update date
 * 
 */
export interface User {
  _id: string;
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  searchHistory: [string];
  preferences: {
    language: string;
    currency: string;
    country: string;
    preferedTheme: string;
  };
  createdAt: Date;
  updatedAt: Date;
}