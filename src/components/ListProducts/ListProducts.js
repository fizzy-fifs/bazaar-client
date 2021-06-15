import React, {useState} from 'react';
import Modal from 'react-modal';
import { FaTimes, FaPlus } from 'react-icons/fa';
import axios from 'axios'
import Cookies from 'universal-cookie'

function ListProducts(props) {
  const [modalState, setmodalState] = useState(false);
  const [addMoreProducts, setAddMoreProducts] = useState([]);
  const [newProduct, setNewProduct] = useState([])
  const cookies = new Cookies
  let signedInUser = cookies.get('user')

  let requestStallModal = document.getElementById('request-a-stall-modal');
  const formData = new FormData();


  const submit = async(event) => {
    event.preventDefault(); 
    let user = signedInUser._id
    
    const formData = new FormData(event.target);

    formData.set('user', `${user}`);
    formData.set('section', `${props.section}`);
    formData.set('stall', `${props.stall}`);

    formData.set('name', formData.get('name'));
    formData.set('price', formData.get('price'));
    formData.set('description', formData.get('description'));
    formData.set('image', formData.get('image'));

    for( var pair of formData.entries() ){
      console.log(pair[0]+ ', '+ pair[1])
    };

    const printErrors = (msg) => {
      msg.forEach((element) => {
        console.log(element.msg);
      });
    };

    const config = {     
      headers: { 'content-type': 'multipart/form-data' }
    };
    
    await axios
    .post('https://bazaar-server.herokuapp.com/api/products/create', formData, config)
    .then((res) => res.data)
    .then((data) => data.msg)
    .then((msg) => {
      // use this to create flash error messages
      Array.isArray(msg) ? printErrors(msg) : console.log(msg);
    });
  };
  
  return (
    <div>

      {/* .............................Button....................................... */}
      <div className="addProducts">
        <FaPlus  style={{color: 'green', cursor: 'pointer', display: 'inline'}} onClick={ () => setmodalState(true) } title="List a product" />
      </div>
      {/* .............................Button....................................... */}

      {/* .............................Modal....................................... */}
      <Modal 
        className="list-products-modal"
        isOpen={modalState} 
        onRequestClose={() => setmodalState(false)}
        style={
          { overlay: {backgroundColor: 'grey'} }
        }
      >
        <FaTimes style={{color: 'red', cursor: 'pointer', display: 'inline'}} onClick={() => setmodalState(false)}  />
        <form onSubmit={submit}>
          <br /><input type="text" placeholder="Enter Item Name" name="name" /> <br /><br />
          £ <input type="text" placeholder="Set Item Price" name="price" /> <br /><br />
          <textarea placeholder="Enter Item Description" name="description" /> <br />
          <input type="file" name="image" />
          <input type="submit" value="Submit" />
        </form>

        {/* {addMoreProducts.map( (product, index) => {
          return (
            <div key={index} className="moreProducts">  
              <form>
              <br /><input type="text" placeholder="Enter Item Name" onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value } )} /> <br /><br />
              £ <input type="text" placeholder="Set Item Price" onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value } )} /> <br /><br />
              <textarea placeholder="Enter Item Description" onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value } )} /> <br />
              </form>
              
            </div>
          )
        })}
        
        
        <button className="addProducts" onClick={(e) => setAddMoreProducts({ ...addMoreProducts,  })}> Add More Products </button> <br /><br /> */}
        
      </Modal> 

      {/* .............................Modal....................................... */} 
    </div>
  )
}

export default ListProducts
