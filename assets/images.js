const IMAGES = {
    'airplane': require('./airplane.png'), // statically analyzed
    'ant': require('./ant.png'), // statically analyzed
    'blueBicycle': require('./blueBicycle.png'), // statically analyzed
    'butterfly': require('./butterfly.png'), // statically analyzed
    'chicken': require('./chicken.png'), // statically analyzed
    'crawlingBaby': require('./crawlingBaby.png'), // statically analyzed
    'damselfly': require('./damselfly.png'), // statically analyzed
    'dove': require('./dove.png'), // statically analyzed
    'duck': require('./duck.png'), // statically analyzed
    'familyBoat': require('./familyBoat.png'), // statically analyzed
    'greenBicycle': require('./greenBicycle.png'), // statically analyzed
    'hawk': require('./hawk.png'), // statically analyzed
    'helicopter': require('./helicopter.png'), // statically analyzed
    'horse': require('./horse.png'), // statically analyzed
    'kidOnUnicycle': require('./kidOnUnicycle.png'), // statically analyzed
    'motorboatKid': require('./motorboatKid.png'), // statically analyzed
    'motorCycle': require('./motorCycle.png'), // statically analyzed
    'pig': require('./pig.png'), // statically analyzed
    'rabbit': require('./rabbit.png'), // statically analyzed
    'redCar': require('./redCar.png'), // statically analyzed
    'runningBaby': require('./runningBaby.png'), // statically analyzed
    'runningKid': require('./runningKid.png'), // statically analyzed
    'runningMan': require('./runningMan.png'), // statically analyzed
    'runningTeenager': require('./runningTeenager.png'), // statically analyzed
    'sailingKid': require('./sailingKid.png'), // statically analyzed
    'sittingBaby': require('./sittingBaby.png'), // statically analyzed
    'snail': require('./snail.png'), // statically analyzed
    'snake': require('./snake.png'), // statically analyzed
    'tricycle': require('./tricycle.png'), // statically analyzed
    'turtle': require('./turtle.png'), // statically analyzed
}

export const getImage = (name)=> { // dynamically invoked
    return IMAGES[name];
}
