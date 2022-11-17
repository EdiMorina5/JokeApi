import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './Joke.css';

const api = `https://v2.jokeapi.dev/joke/Programming?type=single`;



export default function Joke() {
    const [joke, setJoke] = useState("");

   


    function generateJoke(){
        fetch(api)
        .then((resp) => resp.json())
        .then((data) => setJoke(data.joke))
        .catch((e) => console.log(e));

    }
 
    return (
    <div class="joke">
        {joke}
        <br />
       
        <button onClick={generateJoke}>
            Generate {joke !== "" && "new"} joke
        </button>
           </div>
  )
}
