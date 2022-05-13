import './App.css';

function Card(props){
    function Alert(){
        alert("Product Name : "+ store.Title + '\n' +
              "Size : " + store.Size + '\n'+
              "Price : "+ store.Price + '\n'+
              "Quantity : "+ store.Quantity);
    }
    
    const store = props.data
    return(
        <div className='MainnCardDiv'>
        <div className='Card'>
            <img width="350px" height ="300px" src={store.Image} />
            <p>Product Name :  {store.Title}</p>
            <p>Size :  {store.Size}</p>
            <p>Price: {store.Price}</p>
            <p>Quantity : {store.Quantity} Pieces</p>
            <button onClick={Alert}  className='addToCart' >Add to Cart</button>

        </div>
        </div>
    )
}



export default Card;