const clients = require('./clients');

var city = function getCity() {  
    let cityString = ''
    for (var i = process.argv[2]; i < process.argv.length; i++) {
        cityString = i.join(" ")
    }        
        return cityString 
}

if (!city) {
    console.log('No argument to search by city');
} else {
    console.log(`Finding cities with name "${city}"...`);
    getCity(clients, city)
}   

function getCity(data, val) {

    var value = val
    var re = new RegExp(value, 'i')
    var results = []

    for (var ind = 0; ind < data.length; ind++) {

        var Id = data[ind].id
        var Rep = data[ind].rep_name
        var Company = data[ind].company
        var City = data[ind].city
        var State = data[ind].state


        if(re.test(City) === true) {
            results.push({Id, Rep, Company, City, State})
        }
    }
    console.log(results);
}



// const fs = require('fs')

// fs.readFile('./clients.json', (err, json) => {
//   if(err){ throw new Error('Could not read file') }
//   const clients = JSON.parse(json)

//   let matches = []
//   let city = process.argv[2]

//   clients.filter((client) => {
//     if (client.city.toLowerCase().includes(city.toLowerCase())){
//       let matchingClient = {}
//       matchingClient.id = client.id
//       matchingClient.rep_name = client.rep_name
//       matchingClient.company = client.company
//       matchingClient.city = client.city
//       matches.push(matchingClient)
//     }
//   })
//   console.log(matches)
// })
