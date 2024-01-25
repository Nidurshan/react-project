import React from "react";

const Content = () => {

    function handleNameChange() {
      const names = ["Earn", "Grow", "Give"];
      const int = Math.floor(Math.random() * 3);
      return names[int];
    }

    return (
        <main className="content">
            <p>Let's {handleNameChange()} Money</p>
        </main>
    )
}

export default Content;