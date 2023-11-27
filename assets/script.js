// var nombre = Math.round(Math.random() * 100);
// console.log(nombre);
// let msg = prompt('Trouvez le chiffre compris entre 1 et 100');
// let i = 1;
// let temps = Date.now()

// while (msg != nombre) {
//     if (msg > nombre) {
//         msg = prompt("Le chiffre a trouver est plus petit")
//     }
//     else {
//         msg = prompt("Le chiffre a trouver est plus grand")
//     }
//     i++;
// }
// alert("Félicitations, vous avez gagné le chiffre a trouvé était bien: "
//     + nombre + ". Vous aurez eu besion de: " + i + " essai et de: " + Math.round((Date.now() - temps) * 0.001) + " secondes.");
Vue.createApp({
    data() {
      return {
        message:'',
        cochee:false,
        liste_tweet:[],
        
      };
    },
    computed: {
        calcul(){
            if(this.cochee){
                return 20 - (this.message.length +3);
            }
            return 20 -this.message.length;
        },
        photo(){
            if(this.cochee){
                return "Photo ajoutée";
            }
            return "Pas de photo";
        },
        change(){
            if((20 - (this.message.length +3)) < 3){
                return true;
            }else{return false;}
        },
    },
  }).mount('#app');