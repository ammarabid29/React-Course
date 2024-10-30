export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/ammarabid29");
  return response.json();
};
