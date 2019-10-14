
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