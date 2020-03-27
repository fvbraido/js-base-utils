// Get Location Using BrowserApi
export function getBrowserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(returnBrowserLocation);
    } else {
        alert("Não é possível obter sua localização, escolha a cidade!");
    }
}

export function returnBrowserLocation(position) {
    if (position) {
        return {lat: position.coords.latitude, lng: position.coords.longitude, }
    } else {
        return null
    }
}
