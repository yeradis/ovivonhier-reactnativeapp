import * as Images from '@assets/images';

const categoriesList =
    [
        {key: 'bar', title: "Bar", icon: Images.categories['bar']},
        {key: 'gym', title: "Gym", icon: Images.categories['gym']},
        {key: 'restaurant', title: "Restaurant", icon: Images.categories['restaurant']},
        {key: 'movie_theater', title: "Movie theater", icon: Images.categories['movie_theater']},
        {key: 'spa', title: "Spa", icon: Images.categories['spa']},
        {key: 'supermarket', title: "Supermarket", icon: Images.categories['supermarket']},
        {key: 'park', title: "Park", icon: Images.categories['park']}
    ];

export default class GetCategories {

    promise() {
        //TODO: use some api
        return new Promise(function (resolve, reject) {
            resolve(categoriesList)
        })
    }

}
