
const getCountryDetails = async (word) => {
    let response = await fetch('http://restcountries.eu/rest/v2/all')
    if (response.status == 200) { response = await response.json() }
    else { throw new Error('An error has taken place') }
    return response.find((country) => country.alpha2Code === word)

}
const countryCode = 'MX'

const getLocation = async () => {
    let response = await fetch('http://ipinfo.io/json?token=9b4cb9a21e0244')
    if (response.status === 200) { return await response.json() }
    else { throw new Error('An error in the IP has occurred') }

}

getCurrentCountry = async () =>{
let locationDetails = await getLocation()    
let countryDetails = await getCountryDetails(locationDetails.country)
return countryDetails
}