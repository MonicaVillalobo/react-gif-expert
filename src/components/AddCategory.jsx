import { useState } from "react"


export const AddCategory = ({onNewCategory} /*recibo de las props */) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target}) => { //desestructuro el {target}, originalmente (event.taget.value)
        setInputValue (target.value);
      
    }
  
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        //setCategories(catogories /*callback */ => [inputValue, ...catogories])
        onNewCategory(inputValue.trim() );
        setInputValue('');
        
    }
  
  
    return (
        <form onSubmit={ onSubmit }> {/*( event ) => onSubmit(event) forma larga */}
            <input type="text" 
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange = { (event) => onInputChange(event) }// same here ,long way
            />  
         </form>
   
  )
}
