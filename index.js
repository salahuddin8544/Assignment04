// Convert raidan to degree
function radianToDegree(radian){
    if (typeof radian !== 'number'){
    return 'Please use only number!'
    }
    const radian1 = 57.2958;
    const degree = radian * radian1;
    return degree.toFixed(2)
    }
    //check to isJavascript
    function isJavaScriptFile (string){
    if (typeof string !== 'string'){
    return 'Please use only string!'
    }
    else if(string.endsWith('.js' ) === true){
    return true;
    }
    return false
    }
    // Oil Price total
    function oilPrice(wantDisel, wantPetrol, wantOctane){
    if(typeof wantDisel !== 'number' && typeof wantPetrol !== 'number' && typeof wantOctane !== 'number'){
    return 'please enter only number!'
    }
    const diselRate = 114;
    const petrolRate = 130;
    const octanerRate = 135;
    const diselPrice = diselRate * wantDisel;
    const petrolPrice = petrolRate * wantPetrol;
    const octanePrice = octanerRate * wantOctane;
    const totalPrice = diselPrice + petrolPrice + octanePrice;;
    return totalPrice
    }
    //publicBusFare
    function publicBusFare(tourPeople){
    const busCapasity = 50;
    const microCapasity = 11;
    const remainingFare = 250;
    if(typeof tourPeople !== 'number'){
    return 'Please enter only number!'
    }
    if(busCapasity <= tourPeople ){
    const busRemaining = tourPeople % busCapasity;
    const microRemaining = busRemaining % microCapasity;
    const remaining = microRemaining * remainingFare;
    return remaining;
    }
    }
    // isBestFriend
    function isBestFriend(myFriends){
    if(typeof myFriends !== 'object'){
    return 'please enter a object'
    }
    else if(myFriends[0].name === myFriends[1].friend){
    return true;
    }
    return false;
    }