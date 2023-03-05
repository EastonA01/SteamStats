import React from "react";
export default function Header(props) {

    return (
        <div className="text-center">
            <img
                alt="logo"
                src="https://www.sciencefriday.com/wp-content/uploads/2022/04/pitbull-illustration.jpg"
                width="300"
                className="img-thumbnail"
                style={{ marginTop: "20px" }}
            />
            <hr />
            <h5>
                <i>presents</i>
            </h5>
            <h1>App with React + Django</h1>
        </div>
    )
}