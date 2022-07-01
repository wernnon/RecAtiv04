import './List.css'
function List(){
    //lista das noticias
    const readmore =[
       "inicio","globo.com","Facebook","Home","Mirim","Ava","SEI/ IFRO","E","Mirim" 
      ]
      const lista = readmore.map(
        (r)=>
        <p className='noticia'>
           <div className='numero'>
            {r}
            </div>
        </p> 
      )

    return(
        <div className='container'>
            
            {lista}
            
        </div>
    );
    
}
export default List;