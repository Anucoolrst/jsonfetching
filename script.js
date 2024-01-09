// fetch('restaurantsData.json')
//   .then(response => response.json())
//   .then(restaurantsData => {
//     var restaurantListDiv = document.getElementById("restaurantList");

//     restaurantsData.restaurants.forEach(function (restaurant) {
//       var restaurantDiv = document.createElement("div");
//       restaurantDiv.innerHTML = "<h2>" + restaurant.name + "</h2><p>Cuisines: " + restaurant.cuisines.join(", ") + "</p>";
//       restaurantListDiv.appendChild(restaurantDiv);
//     });
//   })
//   .catch(error => console.error('Error fetching data:', error));

var restaurantListDiv = document.getElementById("restaurantList");

restaurantsData.restaurants.forEach(function (restaurant) {
  var restaurantDiv = document.createElement("div");
  restaurantDiv.innerHTML = "<h2>" + restaurant.name + "</h2><p>Cuisines: " + restaurant.cuisines.join(", ") + "</p>";
  restaurantListDiv.appendChild(restaurantDiv);
});