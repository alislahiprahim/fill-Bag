


var list = [3, 4, 5, 12, 33, 6, 55, 87, 10, 9, 22, 11, 7, 17, 1, 2, 13]
const btn = $('#btn').click(() => {

  let bag = $('#mybag').val();

  let bag_list = [];

  $('#arr1').text(list.sort((a, b) => { return a - b }))

  let sorted_arr = list.sort((a, b) => { return b - a })
  let i = 0
  let diff = bag

  while (i <= sorted_arr.length) {
    if (sorted_arr[i] == bag) {
      console.log('asdasd ==>  ',sorted_arr[i])
      bag_list.push(sorted_arr[i])
      break
    }
    bag_list.push(sorted_arr[i])
    diff -= sorted_arr[i]
    console.log('sorted==> ',sorted_arr[i])
    console.log(diff)
    if (diff < 0) {
      diff += sorted_arr[i]
      bag_list.pop()
      console.log(diff)
      i++
    }
    if (diff == 0) {
      break
    } 

  }

  $('#arr').text(bag_list)

})













// function initMap() {
//   const bounds = new google.maps.LatLngBounds();
//   const markersArray = [];
//   const origin1 = { lat: 55.93, lng: -3.118 };
//   const origin2 = "Greenwich, England";
//   const destinationA = "Stockholm, Sweden";
//   const destinationB = { lat: 50.087, lng: 14.421 };
//   const destinationIcon =
//     "https://chart.googleapis.com/chart?" +
//     "chst=d_map_pin_letter&chld=D|FF0000|000000";
//   const originIcon =
//     "https://chart.googleapis.com/chart?" +
//     "chst=d_map_pin_letter&chld=O|FFFF00|000000";
//   const map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 55.53, lng: 9.4 },
//     zoom: 10,
//   });
//   const geocoder = new google.maps.Geocoder();
//   const service = new google.maps.DistanceMatrixService();
//   service.getDistanceMatrix(
//     {
//       origins: [origin1, origin2],
//       destinations: [destinationA, destinationB],
//       travelMode: google.maps.TravelMode.DRIVING,
//       unitSystem: google.maps.UnitSystem.METRIC,
//       avoidHighways: false,
//       avoidTolls: false,
//     },
//     (response, status) => {
//       if (status !== "OK") {
//         alert("Error was: " + status);
//       } else {
//         const originList = response.originAddresses;
//         const destinationList = response.destinationAddresses;
//         const outputDiv = document.getElementById("output");
//         outputDiv.innerHTML = "";
//         deleteMarkers(markersArray);

//         const showGeocodedAddressOnMap = function (asDestination) {
//           const icon = asDestination ? destinationIcon : originIcon;

//           return function (results, status) {
//             if (status === "OK") {
//               map.fitBounds(bounds.extend(results[0].geometry.location));
//               markersArray.push(
//                 new google.maps.Marker({
//                   map,
//                   position: results[0].geometry.location,
//                   icon: icon,
//                 })
//               );
//             } else {
//               alert("Geocode was not successful due to: " + status);
//             }
//           };
//         };

//         for (let i = 0; i < originList.length; i++) {
//           const results = response.rows[i].elements;
//           geocoder.geocode(
//             { address: originList[i] },
//             showGeocodedAddressOnMap(false)
//           );

//           for (let j = 0; j < results.length; j++) {
//             geocoder.geocode(
//               { address: destinationList[j] },
//               showGeocodedAddressOnMap(true)
//             );
//             outputDiv.innerHTML +=
//               originList[i] +
//               " to " +
//               destinationList[j] +
//               ": " +
//               results[j].distance.text +
//               " in " +
//               results[j].duration.text +
//               "<br>";
//           }
//         }
//       }
//     }
//   );
// }

// function deleteMarkers(markersArray) {
//   for (let i = 0; i < markersArray.length; i++) {
//     markersArray[i].setMap(null);
//   }
//   markersArray = [];
// }