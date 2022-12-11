import {useState} from "react";
import { logSent, getDogs } from "../util/dogToys";

const Home = () => {

logSent();
const dogs = getDogs();

    return (
        <div>
            <p>THIS IS THE HOME?</p>
            <p>This weeks star dogs, favorite languages</p>
            <ul>
                <li>Boris: {dogs.Boris.language}</li>
                <li>Toby: {dogs.Toby.language}</li>
                <li>Darrel: {dogs.Darrel.language}</li>
            </ul>
        </div>
    )
}

export default Home;
