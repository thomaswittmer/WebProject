/*
// Ajoutez une voiture à la carte
var f1Icon = new L.Icon({
    iconUrl: 'images/f1.png',  // Remplacez par le chemin de votre icône de voiture
    iconSize: [50, 25]
});

var carMarker = L.marker([52.069581337926465, -1.0217910551817753], { icon: f1Icon }).addTo(map);

// Liste des coordonnées représentant le chemin que la voiture va suivre
var carPath = [
    [52.069581337926465, -1.0217910551817753],
    [52.07126568073291, -1.019575569493083],
    [52.07120741480472, -1.0166577359955054],
    [52.072532885318005, -1.0133989536492938],
    [52.07140922864794, -1.0123764052299913],
    [52.072878893476904, -1.0113425487874772],
    [52.07436020141377, -1.013689083448641],
    [52.07589535613702, -1.0165017805208132],
    [52.07715058941998, -1.019016169586275],
    [52.07579973059885, -1.0211746847280854],
    [52.07727140054315, -1.0209648969649452],
    [52.078489673498595, -1.0190310717747924],
    [52.078915414210734, -1.0119363954694252],
    [52.076346124698766, -1.0103346142621983],
    [52.07364005094323, -1.0096260312762761],
    [52.07190604128079, -1.0099973513758882],
    [52.07064721577925, -1.009341340259122],
    [52.0694575280502, -1.0114648301976739],
    [52.066507238519925, -1.0141076987795303],
    [52.06360657246559, -1.0171676625858372],
    [52.065269421570406, -1.0202627812716738],
    [52.0665266822154, -1.0221539723989146],
    [52.067257189873345, -1.0242377303988617],
    [52.06889134663148, -1.0226399667442505]
];

// Fonction pour animer le déplacement de la voiture le long du chemin
function animateCar() {
    // Attendez 20 secondes au démarrage de la page
    setTimeout(() => {
        let index = 0;

        // Utilisez setInterval pour mettre à jour la position toutes les 2000 millisecondes (2 secondes)
        const interval = setInterval(() => {
            if (index < carPath.length - 1) {
                // Calculez le déplacement en ligne droite vers le prochain point
                var latDiff = carPath[index + 1][0] - carPath[index][0];
                var lngDiff = carPath[index + 1][1] - carPath[index][1];
                
                // Mettez à jour la position de la voiture
                carMarker.setLatLng([carMarker.getLatLng().lat + latDiff, carMarker.getLatLng().lng + lngDiff]);
                
                // Incrémente l'index pour passer au prochain point du chemin
                index++;
            } else {
                // Arrêtez l'animation une fois que la voiture a atteint le dernier point du chemin
                clearInterval(interval);
            }
        }, 800);
    }, 10000); // Attendre 20 secondes avant de commencer l'animation
}

// Appelez la fonction pour commencer l'animation
animateCar();

*/


/*
var isClickedCarVip = false;
var carVipMarker;

privateJetMarker.on('click', function (e) {
    var planeIcon = new L.Icon({
        iconUrl: 'images/privateJet.png',
        iconSize: [92, 51]
    });

    var planeMarker = L.marker([48.995934417764644, 2.556754512248214], { icon: planeIcon }).addTo(map);
    var planeMarker2 = L.marker([51.878243831927364, 0.22446811073705714], { icon: planeIcon }).addTo(map).bindPopup("<center>" + "Vous venez d'atterir à l'aéroport de Londres Stansted où vous attend un véhicule VIP. Il attend sur le parking." + stanstedImg + "</center>");


    var planePath = [
        [48.995934417764644, 2.556754512248214],
        [48.998233354591406, 2.5998151977371853]
    ];
    var planePath2 = [
        [51.878243831927364, 0.22446811073705714],
        [51.893350413816414, 0.2472677973644732]
    ];

    function movePlane(marker, path, totalTime) {
        return new Promise(resolve => {
            let startTime = null;

            function animate(timestamp) {
                if (!startTime) startTime = timestamp;
                const elapsedTime = timestamp - startTime;
                const progress = Math.min(elapsedTime / totalTime, 1);

                const currentPointIndex = Math.floor(progress * (path.length - 1));
                const nextPointIndex = Math.min(currentPointIndex + 1, path.length - 1);

                const lat = path[currentPointIndex][0] + (path[nextPointIndex][0] - path[currentPointIndex][0]) * progress;
                const lng = path[currentPointIndex][1] + (path[nextPointIndex][1] - path[currentPointIndex][1]) * progress;

                marker.setLatLng([lat, lng]);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    resolve();
                }
            }

            requestAnimationFrame(animate);
        });
    }

    movePlane(planeMarker, planePath, 5000)
        .then(() => {
            var centerCoordinates = [51.88341279546903, 0.2527398636636726];
            map.setView(centerCoordinates, 14);
            return movePlane(planeMarker2, planePath2, 5000);
        })
        .then(() => {
            // Animation 2 terminée
            planeMarker2.on('click', function (e) {
                if (!isClickedCarVip) {
                    carVipMarker = L.marker([51.8782004249389, 0.2527186065437026], { icon: carVipIcon }).addTo(map)
                        .bindPopup("<center>" + carVipImg + "</center>");
                    isClickedCarVip = true;
                    carVipMarker.on('click', function (e) {
                        var centerCoordinates = [52.0716145149471, -1.013988566118743];
                        map.setView(centerCoordinates, 15);
                    });
                }
            });
        });
    
    var f1Icon = new L.Icon({
        iconUrl: 'images/f1.png',  
        iconSize: [80, 40]
    });

    var carMarker = L.marker([52.069581337926465, -1.0217910551817753], { icon: f1Icon }).addTo(map);
    var carPath = [
        [52.069581337926465, -1.0217910551817753],
        [52.07126568073291, -1.019575569493083],
        [52.07120741480472, -1.0166577359955054],
        [52.072532885318005, -1.0133989536492938],
        [52.07140922864794, -1.0123764052299913],
        [52.072878893476904, -1.0113425487874772],
        [52.07436020141377, -1.013689083448641],
        [52.07589535613702, -1.0165017805208132],
        [52.07715058941998, -1.019016169586275],
        [52.07579973059885, -1.0211746847280854],
        [52.07727140054315, -1.0209648969649452],
        [52.078489673498595, -1.0190310717747924],
        [52.078915414210734, -1.0119363954694252],
        [52.076346124698766, -1.0103346142621983],
        [52.07364005094323, -1.0096260312762761],
        [52.07190604128079, -1.0099973513758882],
        [52.07064721577925, -1.009341340259122],
        [52.0694575280502, -1.0114648301976739],
        [52.066507238519925, -1.0141076987795303],
        [52.06360657246559, -1.0171676625858372],
        [52.065269421570406, -1.0202627812716738],
        [52.0665266822154, -1.0221539723989146],
        [52.067257189873345, -1.0242377303988617],
        [52.06889134663148, -1.0226399667442505]
    ];
    silverstoneMarker.on('click', function (e) {
        function animateCar() {
            setTimeout(() => {
                let index = 0;
                const startTime = Date.now();

                function moveCar() {
                    const currentTime = Date.now();
                    const elapsedTime = currentTime - startTime;

                    const totalTime = 5000; // Adjust this value for the desired speed
                    const progress = (elapsedTime % totalTime) / totalTime;

                    const currentPointIndex = Math.floor(index);
                    const nextPointIndex = (currentPointIndex + 1) % (carPath.length - 1);

                    const lat = carPath[currentPointIndex][0] + (carPath[nextPointIndex][0] - carPath[currentPointIndex][0]) * progress;
                    const lng = carPath[currentPointIndex][1] + (carPath[nextPointIndex][1] - carPath[currentPointIndex][1]) * progress;

                    carMarker.setLatLng([lat, lng]);

                    if (index < carPath.length - 1) {
                        index += 0.02; // Adjust this value for smoother animation
                        requestAnimationFrame(moveCar);
                    } else {
                        index = 0;
                        startTime = Date.now();
                        requestAnimationFrame(moveCar);
                    }
                }

                requestAnimationFrame(moveCar);
            }, 1000);
        }
    animateCar();
    
});
});


*/








var isClickedCarVip = false;
var carVipMarker;

privateJetMarker.on('click', function (e) {
    var centerCoordinates1 = [49.007643, 2.549616];
    map.setView(centerCoordinates1, 13);

    var planeIcon = new L.Icon({
        iconUrl: 'images/privateJet.png',
        iconSize: [92, 51]
    });

    var planeMarker = L.marker([48.995934417764644, 2.556754512248214], { icon: planeIcon }).addTo(map);
    var planeMarker2 = L.marker([51.878243831927364, 0.22446811073705714], { icon: planeIcon }).addTo(map).bindPopup("<center>" + "Vous venez d'atterir à l'aéroport de Londres Stansted où vous attend un véhicule VIP. Il attend sur le parking." + stanstedImg + "</center>");

    var planePath = [
        [48.995934417764644, 2.556754512248214],
        [48.998233354591406, 2.5998151977371853]
    ];
    var planePath2 = [
        [51.878243831927364, 0.22446811073705714],
        [51.893350413816414, 0.2472677973644732]
    ];

    function movePlane(marker, path, totalTime) {
        return new Promise(resolve => {
            let startTime = null;

            function animate(timestamp) {
                if (!startTime) startTime = timestamp;
                const elapsedTime = timestamp - startTime;
                const progress = Math.min(elapsedTime / totalTime, 1);

                const currentPointIndex = Math.floor(progress * (path.length - 1));
                const nextPointIndex = Math.min(currentPointIndex + 1, path.length - 1);

                const lat = path[currentPointIndex][0] + (path[nextPointIndex][0] - path[currentPointIndex][0]) * progress;
                const lng = path[currentPointIndex][1] + (path[nextPointIndex][1] - path[currentPointIndex][1]) * progress;

                marker.setLatLng([lat, lng]);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    resolve();
                }
            }

            requestAnimationFrame(animate);
        });
    }

    movePlane(planeMarker, planePath, 5000)
        .then(() => {
            var centerCoordinates2 = [51.88341279546903, 0.2527398636636726];
            map.setView(centerCoordinates2, 14);
            return movePlane(planeMarker2, planePath2, 5000);
        })
        .then(() => {
            // Animation 2 terminée
            planeMarker2.on('click', function (e) {
                if (!isClickedCarVip) {
                    carVipMarker = L.marker([51.8782004249389, 0.2527186065437026], { icon: carVipIcon }).addTo(map)
                        .bindPopup("<center>" + carVipImg + "</center>");
                    isClickedCarVip = true;
                    carVipMarker.on('click', function (e) {
                        var centerCoordinates3 = [52.0716145149471, -1.013988566118743];
                        map.setView(centerCoordinates3, 15);
                    });
                }
            });
        });
});

// Déplacez la déclaration de carVipMarker ici

var f1Icon = new L.Icon({
    iconUrl: 'images/f1.png',
    iconSize: [80, 40]
});

var carMarker = L.marker([52.069581337926465, -1.0217910551817753], { icon: f1Icon }).addTo(map);
var carPath = [
    [52.069581337926465, -1.0217910551817753],
    [52.07126568073291, -1.019575569493083],
    [52.07120741480472, -1.0166577359955054],
    [52.072532885318005, -1.0133989536492938],
    [52.07140922864794, -1.0123764052299913],
    [52.072878893476904, -1.0113425487874772],
    [52.07436020141377, -1.013689083448641],
    [52.07589535613702, -1.0165017805208132],
    [52.07715058941998, -1.019016169586275],
    [52.07579973059885, -1.0211746847280854],
    [52.07727140054315, -1.0209648969649452],
    [52.078489673498595, -1.0190310717747924],
    [52.078915414210734, -1.0119363954694252],
    [52.076346124698766, -1.0103346142621983],
    [52.07364005094323, -1.0096260312762761],
    [52.07190604128079, -1.0099973513758882],
    [52.07064721577925, -1.009341340259122],
    [52.0694575280502, -1.0114648301976739],
    [52.066507238519925, -1.0141076987795303],
    [52.06360657246559, -1.0171676625858372],
    [52.065269421570406, -1.0202627812716738],
    [52.0665266822154, -1.0221539723989146],
    [52.067257189873345, -1.0242377303988617],
    [52.06889134663148, -1.0226399667442505]
];
silverstoneMarker.on('click', function (e) {
    function animateCar() {
        setTimeout(() => {
            let index = 0;
            let startTime = Date.now(); // Utiliser let ici pour permettre la réinitialisation

            function moveCar() {
                const currentTime = Date.now();
                const elapsedTime = currentTime - startTime;

                const totalTime = 5000; // Ajustez cette valeur pour la vitesse souhaitée
                const progress = (elapsedTime % totalTime) / totalTime;

                const currentPointIndex = Math.floor(index);
                const nextPointIndex = (currentPointIndex + 1) % (carPath.length - 1);

                const lat = carPath[currentPointIndex][0] + (carPath[nextPointIndex][0] - carPath[currentPointIndex][0]) * progress;
                const lng = carPath[currentPointIndex][1] + (carPath[nextPointIndex][1] - carPath[currentPointIndex][1]) * progress;

                carMarker.setLatLng([lat, lng]);

                if (index < carPath.length - 1) {
                    index += 0.02; // Ajustez cette valeur pour une animation plus fluide
                    requestAnimationFrame(moveCar);
                } else {
                    index = 0;
                    startTime = Date.now();
                    requestAnimationFrame(moveCar);
                }
            }

            requestAnimationFrame(moveCar);
        }, 1000);
    }

    animateCar();
});
