import React, {Component} from "react";
import "../App.css";



export default class Home extends Component{
    render(){
        return(
            <div className="homebody">
        
                <section className="homecontainer">
                    <button className="module1">Module1</button>
                    <button className="module2">Module2</button>
                    <button className="module3">Module3</button>
                </section>
           
            </div>
        )
    }
}