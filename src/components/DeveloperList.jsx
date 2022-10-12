import React, { useReducer } from 'react';


function DeveloperList(props) {
    console.log("Hassan ~ file: DeveloperList.jsx ~ line 10 ~ DeveloperList ~ props.info ", props.info )

    return (
        <div className='tabel1'>
          {props.info &&
              <table border={1}>
              <tbody>
          {props.info?.map((item,idx)=>{
                //   console.log(item)
                  return(
                      <>
                      <tr key={idx} onClick={()=>{
                            props.dispatch({ type: 'REMOVE_DEVELOPER', id: item.id })
                      }}>

                      <td>
                          {item.Developer_Name}
                      </td>
                      <td>
                          {item.programming_Language}
                      </td>
                      <td>
                          {item.technologies}
                      </td>
                      <td>
                          {item.favorite_Drink}
                      </td>
                      <td>
                          {item.favorite_food}
                      </td>

        
                      </tr>
                    
                      </>
                  )
              })

          }
              </tbody>
          </table>

          }
        </div>
    );
}

export default DeveloperList;