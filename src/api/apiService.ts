import countries from "./countries.json";

export interface CountryInfo {
  name: string;
  fullName: string;
  flag: string;
}
//Дописал лимит, чтобы не было излишка результатов ответа

export function getCountryByName(countryName: string, limit: number): Promise<CountryInfo[]> {
  return new Promise((resolve) => {
    setTimeout(resolve, getRandom(100, 800));
  }).then(() => {
    if (typeof countryName !== "string" || !countryName) {
      return [];
    }

    const searchText = countryName.toLocaleLowerCase();
    const filteredByLimit = countries.filter(
        (x) =>
            x.name.toLocaleLowerCase().startsWith(searchText) ||
            x.fullName.toLocaleLowerCase().startsWith(searchText)
    ).slice(0, limit);
    return filteredByLimit;
  });
}

function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
