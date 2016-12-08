// function to add light years to star data b/c it's more commonplace than parsecs.
function appendLightYears(allStars) {
  var ly;
  allStars.forEach(function(star) {
    star.Distance_ly = Math.floor((star.Distance + 0.005) * 3.26156 *100) / 100;
  });
  console.log(allStars[0]["Distance_ly"]);
  return allStars;
}

function truncateDecimals(allStars) {
  allStars.forEach(function(star) {
    star.Distance = Math.floor((star.Distance + 0.005) * 100) / 100;
  });
  console.log(allStars[0]["Distance_ly"]);
  return allStars;
}
