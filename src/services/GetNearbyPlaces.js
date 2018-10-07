import { GOOGLE_PLACES_API_KEY } from "../constants/api";
import axios from 'axios';

const GOOGLE_PLACES_URL  = (category, latitude, longitude) => `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=500&type=${category}&key=${GOOGLE_PLACES_API_KEY}`;

export default class GetNearbyPlaces {

    promise(category, latitude, longitude) {
        //TODO: use some api
        return new Promise(function (resolve, reject) {
            axios.get(GOOGLE_PLACES_URL(category, latitude, longitude))
                .then(function (response) {
                    console.log(response.data.results);
                    resolve(response.data.results)
                })
                .catch(function (error) {
                    console.log(error);
                    reject(error);
                });
        })
    }

}
