import React, { useState } from 'react';

function DeveloperForm(props) {
        const [Developer_Name, setDeveloper_Name] = useState("");
        const [programming_Language, setprogramming_Language] = useState("HTML");
        const [technologies, settechnologies] = useState("React");
        const [favorite_food, setfavorite_food] = useState("");
        const [favorite_Drink , setfavorite_Drink ] = useState("");

        const handlesubmit = (e)=>{
            e.preventDefault();
            props.dispatch({ type: 'ADD_DEVELOPER', payload: {
                Developer_Name,
                programming_Language,
                technologies,
                favorite_Drink,
                favorite_food
            } })
        }

    return (
    <form onSubmit={handlesubmit}>
      <input
        value={Developer_Name}
        onChange={e => setDeveloper_Name(e.target.value)}
        placeholder="Developer Name"
        type="text"
        name="developerName"
        required
      />
      <select value={programming_Language } onChange={(e)=>{
        setprogramming_Language(e.target.value)
      }}>
        <option value="JS">JS</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        </select>

        <select value={technologies } onChange={(e)=>{
        settechnologies(e.target.value)
      }}>
        <option value="React">React</option>
        <option value="Angular">angular</option>
        <option value="Vue">Vue</option>
        </select>
      <input
        value={favorite_food}
        onChange={e => setfavorite_food(e.target.value)}
        placeholder="Food"
        type="text"
        name="favorite_food"
        required
      />
    <input
    value={favorite_Drink}
    onChange={e => setfavorite_Drink(e.target.value)}
    placeholder="Drink"
    type="text"
    name="favorite_food"
    required
        />
      <button type="submit">Submit</button>
    </form>
  );
}
        


export default DeveloperForm;