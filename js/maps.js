$(document).ready(function () {
  tomtom.setProductInfo('Wedding Website', '1.0.0');

  // BCC Map
  var map = tomtom.L.map('map', {
    key: 'eDE8edPwXuaf729gKAxu4SR7GtS5JHHE',
    basePath: '../sdk',
    center: ['39.656102', '-84.109731'],
    zoom: 13,
  });

  var marker = tomtom.L.marker([39.635699, -84.083157]).addTo(map);
  var marker1 = tomtom.L.marker([39.678251, -84.140377]).addTo(map);

  marker.bindPopup('Bellbrook Community Church');
  marker1.bindPopup('Presidential Banquet Center');

});
