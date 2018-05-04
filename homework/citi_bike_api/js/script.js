// As a User
// When I visit the site
// I expect to see the names of the all the stations

// As a User
// When I visit the site
// I expect to see only the first fifty stations on the list

// As a User
// When I visit the site
// I expect to see fifty stations with free bikes only

// Bonus

// As a User
// I want to get data from the newer API instead: https://api.citybik.es/v2/networks/citi-bike-nyc
// So that I can get the most accurate results

// Unreal, Super Epic Bonus

// As a User
// When I select "number of free bikes" from a dropdown
// I see fifty stations where the "number of free bikes" is greater than my selection

$.ajax({
    type: 'GET',
    url: 'http://api.citybik.es/citi-bike-nyc.json',
    success: function(stations) {

        stations
        .filter(function(station) {
        	return station.free > 0;
        })
        .splice(0, 50)
        .forEach(function(station) {
                var name = station.name;
                $("#container").append("<p>" + name + "</p>");
                // console.log(station.free);
        })

    },
});

// $.ajax({
//     type: 'GET',
//     url: 'https://api.citybik.es/v2/networks/citi-bike-nyc',
//     success: function(stations) {

//     	console.log(stations);

//         // stations
//         // .filter(function(station) {
//         // 	return station.free > 0;
//         // })
//         // .splice(0, 50)
//         // .forEach(function(station) {
//         //         var name = station.name;
//         //         $("#container").append("<p>" + name + "</p>");
//         //         // console.log(station.free);
//         // })

//     },
// });



