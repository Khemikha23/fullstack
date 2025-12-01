if (err_status === 200){
    console.log("Operation was successfull.")
}else if (err_status === 400){
    console.log("Error !")
}else{
    console.log("Unknow !")
}


switch (err_status){
    case 200:
        console("OK")
        break;
    case 400:
        console("Error !")
        break;
    default:
        console.log("Unknow !")
}

const message = (err_status === 200)? "OK!" : "Error";
console.log(message);