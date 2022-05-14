import React from "react";
import notfound from "../data/img/notfound.png"

const NotFound404 = () => {
    return (
        <div className="not-found-container">
        <img src={notfound} alt="Not found" className="not-found-img" />
        <h1 className="not-found-text">PAGE NOT FOUND</h1>;
      </div>
    )
}

export default NotFound404



