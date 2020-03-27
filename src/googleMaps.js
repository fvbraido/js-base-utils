// Get { lat: -22.0578551, lng: -46.9754815 } from Addresses
export function getGeolocationFromAddress(address, googleApiKeyServer) {
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleApiKeyServer}`)
    .then((response) =>
      response.json())
      .then((responseJson) =>  {
        if (responseJson.status === "OK") {
          return responseJson.results[0].geometry.location;
        } else {
          return responseJson;
        }
    })
}
