
function displayHeader(string) {
  let outputElement = document.querySelector('.rides')
  if(string.length > 1) {
    outputElement.insertAdjacentHTML('beforeEnd', `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>Noober Pool</span>
    </h1>
    `)
  } else if(string[0].purpleRequested == true) {
    outputElement.insertAdjacentHTML('beforeEnd', `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>Noober Purple</span>
    </h1>
    `)
  } else if(string[0].numberOfPassengers > 3) {
    outputElement.insertAdjacentHTML('beforeEnd', `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>Noober XL</span>
    </h1>
    `)
  } else {
    outputElement.insertAdjacentHTML('beforeEnd', `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>Noober X</span>
    </h1>
    `)
  }
}


function displayRides(string) {
  let outputElement = document.querySelector('.rides')
  if(string.purpleRequested == true) {
    outputElement.insertAdjacentHTML('beforeEnd', `
    <div class="border-4 border-purple-500 p-4 my-4 text-left">
      <div class="flex">
       <div class="w-1/2">
          <h2 class="text-2xl py-1">${string.passengerDetails.first} ${string.passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">(312) 555-1212</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-purple-600 text-white p-2">
            ${string.numberOfPassengers} passengers
          </span>
        </div>
      </div>
  <div class="mt-4 flex">
    <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${string.pickupLocation.address}</p>
        <p>${string.pickupLocation.city}, ${string.pickupLocation.state} ${string.pickupLocation.zip}</p>
    </div>
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">DROPOFF</div>
      <p>${string.dropoffLocation.address}</p>
      <p>${string.dropoffLocation.city}, ${string.dropoffLocation.state} ${string.dropoffLocation.zip}</p>
    </div>
  </div>
  `)
  } else {
    outputElement.insertAdjacentHTML('beforeEnd', `
  <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${string.passengerDetails.first} ${string.passengerDetails.last}</h2>
        <p class="font-bold text-gray-600">(312) 555-1212</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
        ${string.numberOfPassengers} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${string.pickupLocation.address}</p>
        <p>${string.pickupLocation.city}, ${string.pickupLocation.state} ${string.pickupLocation.zip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${string.dropoffLocation.address}</p>
        <p>${string.dropoffLocation.city}, ${string.dropoffLocation.state} ${string.dropoffLocation.zip}</p>
      </div>
    </div>
  </div>
  `)
  }
}



async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  for(let i = 0; i < json.length; i++) {
    let ride = json[i]
    displayHeader(ride)
    for(let a = 0; a < json[i].length; a++) {
        let rideDetails = json[i][a]
        displayRides(rideDetails)
        
      }
    }
  

  // let outputElement = document.querySelector('.rides')
  //   if(json.length < 200) {
  //   outputElement.insertAdjacentHTML('beforeEnd', `
  //     <h1>${json}</h1>`)
  //   }
  

  // writes the returned JSON to the console
  console.dir(json)
  console.log(json[1][1])
  

}
  // 🔥 start here: write code to loop through the rides
  //   for(let i = 0; i < json.length; i++) {
  //     let rides = json[i]
  //     displayRides()
  //   }
  // }


// // if (${rides.length} > 1) {
//   'WORKING'
// }

window.addEventListener('DOMContentLoaded', pageLoaded)




// <!-- A sample Noober X -->
// <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
//   <i class="fas fa-car-side"></i>
//   <span>Noober X</span>
// </h1>

// <div class="border-4 border-gray-900 p-4 my-4 text-left">
//   <div class="flex">
//     <div class="w-1/2">
//       <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
//       <p class="font-bold text-gray-600">(312) 555-1212</p>
//     </div>
//     <div class="w-1/2 text-right">
//       <span class="rounded-xl bg-gray-600 text-white p-2">
//         2 passengers
//       </span>
//     </div>
//   </div>
//   <div class="mt-4 flex">
//     <div class="w-1/2">
//       <div class="text-sm font-bold text-gray-600">PICKUP</div>
//       <p>123 Main St</p>
//       <p>Chicago, IL 60603</p>
//     </div>
//     <div class="w-1/2">
//       <div class="text-sm font-bold text-gray-600">DROPOFF</div>
//       <p>123 Main St</p>
//       <p>Chicago, IL 60603</p>
//     </div>
//   </div>
// </div>

// <!-- A sample Noober Pool -->
// <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
//   <i class="fas fa-car-side"></i>
//   <span>Noober Pool</span>
// </h1>

// <div class="border-4 border-gray-900 p-4 my-4 text-left">
//   <div class="flex">
//     <div class="w-1/2">
//       <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
//       <p class="font-bold text-gray-600">(312) 555-1212</p>
//     </div>
//     <div class="w-1/2 text-right">
//       <span class="rounded-xl bg-gray-600 text-white p-2">
//         1 passengers
//       </span>
//     </div>
//   </div>
//   <div class="mt-4 flex">
//     <div class="w-1/2">
//       <div class="text-sm font-bold text-gray-600">PICKUP</div>
//       <p>123 Main St</p>
//       <p>Chicago, IL 60603</p>
//     </div>
//     <div class="w-1/2">
//       <div class="text-sm font-bold text-gray-600">DROPOFF</div>
//       <p>123 Main St</p>
//       <p>Chicago, IL 60603</p>
//     </div>
//   </div>
// </div>

// <div class="border-4 border-gray-900 p-4 my-4 text-left">
//   <div class="flex">
//     <div class="w-1/2">
//       <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
//       <p class="font-bold text-gray-600">(312) 555-1212</p>
//     </div>
//     <div class="w-1/2 text-right">
//       <span class="rounded-xl bg-gray-600 text-white p-2">
//         1 passengers
//       </span>
//     </div>
//   </div>
//   <div class="mt-4 flex">
//     <div class="w-1/2">
//       <div class="text-sm font-bold text-gray-600">PICKUP</div>
//       <p>123 Main St</p>
//       <p>Chicago, IL 60603</p>
//     </div>
//     <div class="w-1/2">
//       <div class="text-sm font-bold text-gray-600">DROPOFF</div>
//       <p>123 Main St</p>
//       <p>Chicago, IL 60603</p>
//     </div>
//   </div>
// </div>

// <!-- A sample Noober XL -->
// <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
//   <i class="fas fa-car-side"></i>
//   <span>Noober XL</span>
// </h1>

// <div class="border-4 border-gray-900 p-4 my-4 text-left">
//   <div class="flex">
//     <div class="w-1/2">
//       <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
//       <p class="font-bold text-gray-600">(312) 555-1212</p>
//     </div>
//     <div class="w-1/2 text-right">
//       <span class="rounded-xl bg-gray-600 text-white p-2">
//         5 passengers
//       </span>
//     </div>
//   </div>
//   <div class="mt-4 flex">
//     <div class="w-1/2">
//       <div class="text-sm font-bold text-gray-600">PICKUP</div>
//       <p>123 Main St</p>
//       <p>Chicago, IL 60603</p>
//     </div>
//     <div class="w-1/2">
//       <div class="text-sm font-bold text-gray-600">DROPOFF</div>
//       <p>123 Main St</p>
//       <p>Chicago, IL 60603</p>
//     </div>
//   </div>
// </div>

// <!-- A sample Noober Purple -->
// <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
//   <i class="fas fa-car-side"></i>
//   <span>Noober Purple</span>
// </h1>

// <div class="border-4 border-purple-500 p-4 my-4 text-left">
//   <div class="flex">
//     <div class="w-1/2">
//       <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
//       <p class="font-bold text-gray-600">(312) 555-1212</p>
//     </div>
//     <div class="w-1/2 text-right">
//       <span class="rounded-xl bg-purple-600 text-white p-2">
//         1 passengers
//       </span>
//     </div>
//   </div>
//   <div class="mt-4 flex">
//     <div class="w-1/2">
//       <div class="text-sm font-bold text-gray-600">PICKUP</div>
//       <p>123 Main St</p>
//       <p>Chicago, IL 60603</p>
//     </div>
//     <div class="w-1/2">
//       <div class="text-sm font-bold text-gray-600">DROPOFF</div>
//       <p>123 Main St</p>
//       <p>Chicago, IL 60603</p>
//     </div>
//   </div>
// </div>
// <!-- End delete when done -->