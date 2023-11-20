import React from 'react'

const Content = () => {

    function handleNameChange() {

        const names = ["awesome","wonderful","mindblowing","fantastic"];
        const int=Math.floor(Math.random()*4);
        
        return names[int]
                    }
  return (
    <p>Lets Get {handleNameChange()} experience</p>

  )
}

export default Content