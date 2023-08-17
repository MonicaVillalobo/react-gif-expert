
import {useState} from 'react';
import {AddCategory, GifGrid} from './components';


export const GifExpertApp = () => {
 
  const [categories, setCategories] = useState(['One Punch',])//Componente padre
  
  const onAddCategory = (newCategory)=> {
    if (categories.includes(newCategory)) return;
    //console.log(newCategory)// imprimo en consola el newCategory
    //categories.push(newCategory); //Con push se le agrega un elemento al final del arreglo
    setCategories([newCategory, ...categories,]);
    //setCategories(categories => [...categories,'Valorant']); otra forma de hacer lo mismo
   
  }
 

  return (
     <>
    
     <h1>GifExpertApp</h1>

   
     < AddCategory 
     //setCategories={ setCategories } 
     onNewCategory={ ( value ) => onAddCategory(value) }//podria acortarse a solo "onAddCategory"// es una propiedad del componente
     //Prefijo "on" es que esta emitiendo algo
     />


      { 
      categories.map( (category) => (
        <GifGrid 
        key={ category} 
        category /*categoria que estoy esperando */={ category }/>
      ))
      }
      
      

    </>
  
  )
}
