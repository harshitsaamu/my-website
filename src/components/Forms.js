import React from "react";

class Forms extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={App.getLocation}>
                    <input type={"text"} name={"pincode"} placeholder={"Pin Code"}/>
                    <br/>
                    <button type={"submit"} className={"button"}>Extract Data</button>
                </form>
            </div>
        );
    }
}

export default Forms;