import React, { useReducer } from 'react';
import reducer from './Developer';


function DeveloperList(props) {

    return (
        <div>
          {props.info &&
              <table border={1}>
              <tbody>
          {props.info?.map((item,idx)=>{
                //   console.log(item)
                  return(
                      <>
                      <tr key={idx} onClick={()=>{
                            props.dispatch({ type: 'REMOVE_DEVELOPER', item: item.Developer_Name })
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