
// export default function fetchCountries(name) {
//     return fetch(
//         `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
//     ).then(response => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
//     });
// }

//! CHange for async function

export default async function fetchCountries(name) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`);
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}