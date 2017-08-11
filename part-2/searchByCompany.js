
const clients = require('./clients');

var companyName = process.argv[2]

if (!companyName) {
    console.log('No argument to search by company');
} else {
    console.log(`Finding companies starting with "${companyName}" in name...`)
    getCompany(clients, companyName)
    // console.log(clients);
}

function getCompany(data, val) {
    var value = val
    var re = new RegExp('\^' + value, 'i')
    var results = []

    for (var ind = 0; ind < data.length; ind++) {

        var Id = data[ind].id
        var Company = data[ind].company
        var Phone = data[ind].phone


        if(re.test(Company) === true) {
            results.push({Id,Company,Phone})
        }
    }
    console.log(results);
}

/*    Comparison Code  

const fs = require('fs')

fs.readFile('./clients.json', (err, json) => {
  if(err){ throw new Error('Could not read file') }
  const clients = JSON.parse(json)

  let matches = []
  let company = process.argv[2]

  clients.filter((client) => {
    if (client.company.toLowerCase().startsWith(company)) {
      let matchingClient = {}
      matchingClient.id = client.id
      matchingClient.phone = client.phone
      matchingClient.company = client.company
      matches.push(matchingClient)
    }
  })
  console.log(matches)
})

*/   