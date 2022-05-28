// Switch Statement

let price=20000;

switch(true)
{
    case price >=10000 && price < 60000:
        console.log("Buy Android Mobile");
        break;
    case price >=60000 && price <2000000:
        console.log("Buy Iphone");
        break;
    case price >=5000 && price < 10000:
        console.log("Buy Basic Mobile");
        break;
    default:
        console.log("You can't afford mobile phone now!");
            
}