let latitude, longitude, destination;

$(document).ready(function(){
    alert("Please allow access your location")
    initGeoLocation()
})

function initGeoLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success);
    }
    else{
        alert("Your browser doen't support geolocation.")
    }
}

$(function(){
    $("#navigate-button").click(function(){
        window.location.href=`ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
    })
})

function success(position){
    longitude=position.coords.longitude;
    latitude=position.coords.latitude;

    mapboxgl.accessToken="pk.eyJ1IjoiYmh1dmFuYTEyIiwiYSI6ImNreXZjdWFyNjF3dDgyd28za3QzN3Nma2sifQ.1AXPvSMZvOdq-OgwcbfxRA"

    var map=new mapboxgl.Map({
        container:"map",
        style:'mapbox://styles/mapbox/streets-v11',
        center:[longitude,latitude],
        zoom:4
    })
    
    map.addControl(
        new MapboxGeocoder({
            accessToken:mapboxgl.accessToken,
            mapboxgl:mapboxgl
        }).on('result',function(e){
            destination=e.result.center
        })
        
    )
    
    var img1=document.querySelector("#amber-palace")
    var marker1=new mapboxgl.Marker({
        element:img1
    })
        .setLngLat([ 75.85140977732489,26.985706361499812,])
        .addTo(map)
    
    var img2=document.querySelector("#gateway-of-india")
    var marker2=new mapboxgl.Marker({
        element:img2
    })
        .setLngLat([72.83464357372983,18.92220735410329])
        .addTo(map)
    
    var img3=document.querySelector("#india-gate")
    var marker3=new mapboxgl.Marker({
        element:img3
    })
        .setLngLat([77.22950970316406,28.613081499463995])
        .addTo(map)
    
    var img4=document.querySelector("#lotus-temple")
    var marker4=new mapboxgl.Marker({
        element:img4
    })
        .setLngLat([ 77.2588264043578,28.553718138798445])
        .addTo(map)
    
    var img5=document.querySelector("#victoria-memorial")
    var marker5=new mapboxgl.Marker({
        element:img5
    })
        .setLngLat([ 88.34256852885537,22.545060877928442])
        .addTo(map)
    
}

