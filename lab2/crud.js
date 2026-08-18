import readline from "readline/promises";
import{writeFile , readFile} from "fs/promises" ;
import { stdin, stdout } from "process";

const FILE = "./lab2/products.json";
const savecart=async (cart)=>{
await writeFile(FILE,JSON.stringify(cart,null,2)) ;

} ;
const getcart= async ()=>{
    const data = await readFile(FILE , "utf-8") ;
    return JSON.parse(data) ;

}
const addtocart= async (item)=>{
     const products = await getcart() ;
     products.push(item) ;
     await savecart(products) ;
}

const main = async () => {
    const cin = readline.createInterface({ input: stdin, output: stdout });
    let choice;
    do {

        console.log("Welcome to Shopping cart 🛍️")
        console.log("1......Add to cart");
        console.log("2......Show cart"); 5
        console.log("3......Remove item");
        console.log("4......Update Quantity");
        console.log("5.......Checkout");
        choice = await cin.question("Enter your choice : ");

        switch (Number(choice)) {
            case 1:
                await addtocart({id:101 , name :"Mobile " , price : 1500 , qty:3}) ;
                console.log("add to cart");
                break;
            case 2:
                console.log("show cart items");
                break;
            case 3:
                console.log("remove items");
                break;
            case 4:
                console.log("update quantity");
                break;
            case 5:
                console.log("see you later...😄");
                break;
            default:
                console.log("Invalid choice! try again 💥")

        }
        console.log("type of",typeof(choice))
    }while (choice !== "5");
    cin.close();


};
await main();