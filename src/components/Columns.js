import React from 'react'

function Columns() {
  return (      
    <React.Fragment>                            
      <td>Name</td>
      <td>Age</td>
    </React.Fragment>
  )
}


//React fragments works for array of items as well
//EXAMPLE



// function Columns() {
//     const items=[]
//     return (
//       <React.Fragment>
//         {                                                                    //For Understanding
//             items.map(item =>(
//                 <React.Fragment key={item.id}>
//                     <h1>Title</h1>
//                     <p>{item.title}</p>

//                 </React.Fragment>
//             ))
//         }
//       </React.Fragment>
//     )
//   }





export default Columns
