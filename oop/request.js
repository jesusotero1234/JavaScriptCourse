
const getCountryDetails = (word) => {

    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status == 200) {
            return response.json()
        }
        else { throw new Error('An error has taken place') }
    }).then((data) => data.find((country) => country.alpha2Code === word)
    )
}
const countryCode = 'MX'

const getLocation = () => {
    return fetch('http://ipinfo.io/json?token=9b4cb9a21e0244').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else { throw new Error('An error in the IP has occurred') }
    })
}