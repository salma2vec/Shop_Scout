
const themeHelper = {
  getTheme: () => {
    return localStorage.getItem('theme') ?? 'light';
  },
  setTheme: (theme: string) => {
    localStorage.setItem('theme', theme);
  },
  getUserPreferedSchema: () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

};

export default themeHelper;