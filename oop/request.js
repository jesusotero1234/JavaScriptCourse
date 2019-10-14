const getCountryDetails = (word) => new Promise((resolve, reject)=>{
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (e) => {
        if (e.target.status === 200 && e.target.readyState === 4) {
            const data = JSON.parse(e.target.responseText)
             const country = data.find((country) => country.alpha2Code === word)
            resolve(country)
        } else if (e.target.readyState === 4) {
            reject('An error has taken place')
        }
    })
request.open('GET', 'http://restcountries.eu/rest/v2/all')
request.send()
})
const countryCode = 'MX'