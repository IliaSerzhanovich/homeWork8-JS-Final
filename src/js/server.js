const myToken = '8046ecd0688d427e17ce85df93161f20';

export async function getFirstWeather(type, searchValue) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/${type}?q=${searchValue}&appid=${myToken}&units=metric`,
  );
  const data = await response.json();
  return data;
}

export function everyElement(array, n) {
  return array.filter((item, index) => !((index + 1) % n));
}
