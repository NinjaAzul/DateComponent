

const data = new Date();
const hours = data.getHours();


if (hours >= 0 && hours <= 11) {
  console.log("Bom dia");
} else if (hours >= 12 &&  hours <= 18 ) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}



console.log(hours.toString());




