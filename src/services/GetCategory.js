import * as Images from '@assets/images';

    const categoryItems =
    [
        {key: '0', title: "Place 0", icon: null},
        {key: '1', title: "Place 1", icon: null},
        {key: '2', title: "Place 2", icon: null},
        {key: '3', title: "Place 3", icon: null},
        {key: '4', title: "Place 4", icon: null},
        {key: '5', title: "Place 5", icon: null},
        {key: '6', title: "Place 6", icon: null}
    ];

export default class GetCategory {

    promise(category) {
        //TODO: use some api
        return new Promise(function (resolve, reject) {
            resolve(categoryItems)
        })
    }

}
