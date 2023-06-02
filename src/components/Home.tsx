import { logSent, getDogs, getAllLangs } from "../util/dogToys";

const Home  = () => {

logSent();
const dogs = getDogs();
const langs = getAllLangs();
console.log(langs)

    return (
        <div>
            <h1>Home Page</h1>
            <p>This weeks star dogs, favorite languages</p>
            <ul>
                <li>Boris: {dogs.Boris.language}</li>
                <li>Toby: {dogs.Toby.language}</li>
                <li>Darrel: {dogs.Darrel.language}</li>
            </ul>
            <div>
                <p>All Langs available</p>
                <ul>
                {langs.map((lang: any)=> {
                    <li>
                       {lang}
                    </li>
                })}
                </ul>
            </div>
        </div>
    )
}

export default Home;
