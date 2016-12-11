// function to add light years to star data b/c it's more commonplace than parsecs.
function appendLyDetail(star) {
  star.Distance_ly = Math.floor((star.Distance + 0.005) * 3.26156 *100) / 100;
  return star;
}

function truncateDecimalsDetail(star) {
  star.Distance = Math.floor((star.Distance + 0.005) * 100) / 100;
  return star;
}
