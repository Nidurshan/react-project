import React from "react";

const Content = () => {

    function handleNameChange() {
      const names = ["Earn", "Grow", "Give"];
      const int = Math.floor(Math.random() * 3);
      return names[int];
    }

    const handleClick = (e) => {
        alert(e)
    }
    const handleClick2 = (name) => {
        alert(`You clicked a button ${name}`)
    }

    return (
        <main className="content">
            <p>Let's {handleNameChange()} Money</p>
            <button onClick={() => handleClick2("Nidurshan")}> Click Here!! </button>
        </main>
    )
}

export default Content;