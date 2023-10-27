import {useState} from 'react';
import 'admin.css';

function  Admin(){
    const [product,setProduct] = useState({
        title:'',
        catagory:'',
        image:'',
        price: 0,
        
    });

    function handleProductChange(e){
        let name = e.target.name;
        let copy{...product};
        setPruduct(copy);
}
function saveProduct(){
    console.log(product);
    }
}
return( 
    
   <div className="admin">
    <h1>Manage Your Store</h1>
    <div className="parents">
        <div className="form">
        <h4>Create Products</h4>
        
    
    <div className="control">
        <label className="form-label">Title</label>
        <input onChange={handleProductChange} name="title" type="text" className="form-control" />
    </div>
    <div className='control'>
        <label vlassName="form-label">Image</label>
        <input onChange={handleProductChange} name="image" type="text" className="form-control" />
    </div>
   <div className='control'>
    <label className='form-label'>Price</label>
    <input onChange={handleProductChange} name='price ' type='text' className='form-control' />
    </div>    
    
    </div>
    </div>
    </div>
)
