ymaps.ready(init);

function init(){
    var myMap;

    $('#map').hover(function(){
        if (!myMap){
            myMap = new ymaps.Map('map', {
                center: [55.611412105487, 37.20110140],
                zoom: 16,
                scroll: false 
            }),
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/map-icon.svg',
                iconImageSize: [30, 42],
                iconImageOffset: [-5, -38]
            })
        myMap.behaviors.disable('scrollZoom'),
        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
        }
    })
}
