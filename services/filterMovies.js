import Geocoder from 'react-native-geocoder'
import Geolocation from '@react-native-community/geolocation'

export const getLocation = async () => {
    return new Promise((resolve, reject) => {
        const onReceiveLocation = (geolocation) => {
            resolve(geolocation)
        }

        Geolocation.getCurrentPosition(onReceiveLocation, error => {
            reject()
        })
    })
}


export const filtrateNationalMovies = async (movies, geolocation) => {
    const location = await Geocoder.geocodePosition({
        lat: geolocation.coords.latitude,
        lng: geolocation.coords.longitude,
    })
    const country = location[0].country
    const nationalMovies = movies.filter(item => (item.Country.indexOf(country) !== -1))

    return nationalMovies
}

export const filtrateForeignMovies = async (movies, geolocation) => {
    const location = await Geocoder.geocodePosition({
        lat: geolocation.coords.latitude,
        lng: geolocation.coords.longitude,
    })
    const country = location[0].country

    const foreignMovies = movies.filter(item => (item.Country.indexOf(country) === -1))

    return foreignMovies
}