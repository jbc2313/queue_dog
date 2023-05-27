import { logSent, getDogs } from "../util/dogToys";

const Home  = () => {

logSent();
const dogs = getDogs();

    return (
        <div>
            <h1>Home Page</h1>
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
