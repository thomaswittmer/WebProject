var map = L.map('map').setView([53.463058, -2.291340], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// var marker = L.marker([48.56691296932983, -3.164752637584072]).addTo(map);
// var marker = L.marker([53.463058, -2.291340]).addTo(map);

// navigator.geolocation.getCurrentPosition(function (position) {

//     map.setView([position.coords.latitude, position.coords.longitude], 13);

//     var mark = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
// });

var featureG = L.featureGroup();
featureG.addTo(map);


Vue.createApp({
    data() {
      return {
        message: '',
        mesVilles: [],
      };
    },
    methods:{
        submit(){
            featureG.clearLayers();
            fetch('http://api-adresse.data.gouv.fr/search/?q='+this.message)
            .then(result => result.json())
            .then(r => {
                r.features.forEach(element => {
                    var mark2 = L.marker(element.geometry.coordinates.reverse()).addTo(featureG);
                });
                map.fitBounds(featureG.getBounds())
            }) 
        }
    ,
    ecoute(){
        fetch('/villes', {
            method: 'post', body : 'recherche='+this.message,
            headers: 
                {'Content-Type' : 'application/x-www-form'}
        })
            .then(r => r.json())
            .then(r => {
              console.log(r)
               });
    },
  },}).mount('#entete');

