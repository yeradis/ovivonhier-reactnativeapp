import { GOOGLE_PLACES_API_KEY } from "../constants/api";
import axios from 'axios';

const GOOGLE_PLACES_URL  = (category, latitude, longitude) => `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=500&type=${category}&key=${GOOGLE_PLACES_API_KEY}`;
const GOOGLE_PLACES_PHOTO_URL = photoReference => `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${GOOGLE_PLACES_API_KEY}`;

export default class GetNearbyPlaces {

    promise(category, latitude, longitude) {
        //TODO: use some api
        return new Promise(function (resolve, reject) {
            axios.get(GOOGLE_PLACES_URL(category, latitude, longitude))
                .then(function (response) {
                    resolve(response.data.results.map(GetNearbyPlaces.mapResult))
                })
                .catch(function (error) {
                    console.log(error);
                    reject(error);
                });
        })
    };

    static mapResult (item) {
        let place = {
            reference: item.reference,
            name: item.name,
            address: item.vicinity,
            picture: GetNearbyPlaces.photoURIForReference(item.photos && item.photos.length > 0 ? item.photos[0].photo_reference : "")
        }
        return place
    };

    static photoURIForReference (photoReference) {
        if (photoReference.length > 0)
            return GOOGLE_PLACES_PHOTO_URL(photoReference)
        else return 'https://dummyimage.com/600x400/000/fcfcfc.png&text=No+image';
    }
}

