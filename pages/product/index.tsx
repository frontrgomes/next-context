import Link from "next/link"
import { useContext } from "react";
import { Context } from "../../src/contexts/User";


const Product = () => {
    const {name, age} = useContext(Context);
    return(
        <>
            <h4>Olá sou produto {name} e tenho {age}</h4>
            <Link href="/product/123">Ir pra produto</Link>
        </>
        
    )
}

export default Product;