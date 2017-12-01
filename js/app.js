var module = angular.module('app', []);

module.controller('galleryController', function($scope, photoService){
    $scope.photos = photoService.photos;
    $scope.categories = photoService.categories;
});

module.controller('modalController', function($scope, photoService){
    $scope.photos = photoService.photos;
});

module.service('photoService', function(){
    var photos = [
    {
        "id": "1",
        "projectName": "Portrait",
        "category" : "Portrait",
        "image" : "http://placehold.it/650x400",
        "thumbnail" : "http://placehold.it/650x400", 
        "description" : "Portraits"
    },
    {
        "id": "2",
        "projectName": "Couples",
        "category" : "Portrait",
        "image" : "http://placehold.it/650x400",
        "thumbnail" : "http://placehold.it/650x400",
        "description" : "Portraits"
    },
    {
        "id": "3",
        "projectName": "Still Life",
        "category" : "Still Life",
        "image" : "http://placehold.it/650x400",
        "thumbnail" : "http://placehold.it/650x400",
        "description" : "Still Life"
    },
    {
        "id": "4",
        "projectName": "Fashion",
        "category" : "Fashion",
        "image" : "http://placehold.it/650x400",
        "thumbnail" : "http://placehold.it/650x400",
        "description" : "Strut your stuff"
    },
    {
        "id": "5",
        "projectName": "Lifestyle",
        "category" : "Lifestyle",
        "image" : "http://placehold.it/650x400",
        "thumbnail" : "http://placehold.it/650x400",
        "description" : "Lifestyle"
    },
    {
        "id": "6",
        "projectName": "Lifestyle 2",
        "category" : "Lifestyle",
        "image" : "http://placehold.it/650x400",
        "thumbnail" : "http://placehold.it/650x400",
        "description" : "Lifestyle 2"
    }];
    
    var categories = [];
    
    for(var i = 0; i < photos.length; i++){
        categories.push(photos[i].category);
    }
    
    categories = jQuery.unique(categories);
    
    return {
        photos: photos,
        categories: categories
    };
});