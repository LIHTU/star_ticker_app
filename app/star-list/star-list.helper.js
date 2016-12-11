// function to add light years to star data b/c it's more commonplace than parsecs.
function appendLightYears(allStars) {
  allStars.forEach(function(star) {
    debugger;
    star.Distance_ly = Math.floor((star.Distance + 0.005) * 3.26156 *100) / 100;
  });
  return allStars;
}

function truncateDecimals(allStars) {
  allStars.forEach(function(star) {
    star.Distance = Math.floor((star.Distance + 0.005) * 100) / 100;
  });
  return allStars;
}
