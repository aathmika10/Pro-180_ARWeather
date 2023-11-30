let coordinates={}

$(document).ready(function(){
    getCoordinates()
    getWeather()
})

function getCoordinates(){
    let searchParams=new URLSearchParams(window.location.search)
    if(searchParams.has('source')&& searchParams.has('destination')){
        let source=searchParams.get('source')
        let destination=searchParams.get('destination')
        coordinates.sourceLatitude=source.split(";")[0]
        coordinates.sourceLongitide=source.split(";")[1]
        coordinates.destinationLatitude=destination.split(";")[0]
        coordinates.destinationLongitude=destination.split(";")[1]

    }
    else{
        alert("Coordinates not selected")
        window.history.back()
    }
}

function getWeather(){
    $.ajax({
        url:'https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.destinationLatitude}&lon=${coordinates.destinationLongitude}&appid=21b61048291fc7ab22c3f71b37b5d424',
        type:'get',
        success:function(response){
            let name=response.name
            let weather=response.weather[0].main
            $("#scene_container").append(
                <a-entity gps-entity-place="latitude:${steps[i].maneuver.location[1]};longitude:${steps[i].maneuver.location[0]};">
                <a-entity>
                    <a-text height="50" value="Weather forecast is ${weather} at ${name}"></a-text>
                </a-entity>
                </a-entity>

            )
        }
    })

}