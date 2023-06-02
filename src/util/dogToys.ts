import { randProgrammingLanguage } from '@ngneat/falso'

interface DogToy {
    language: string;
    used: boolean;
}

type DogName = "Darrel" | "Boris" | "Toby";

// first three langs for Doggos
const langOne = randProgrammingLanguage();
const langTwo = randProgrammingLanguage();
const langThree = randProgrammingLanguage();

// Three more langs
const langFour = randProgrammingLanguage();
const langFive = randProgrammingLanguage();
const langSix = randProgrammingLanguage();



const dogs: Record<DogName, DogToy> = {
    Darrel: { language: langOne, used: true },
    Boris: { language: langTwo, used: false },
    Toby: { language: langThree, used: true },
}

export function logSent() {

    console.log(`Dog 1: ${dogs.Darrel.language}`);
    console.log(`Dog 2: ${dogs.Boris.language}`);
    console.log(`Dog 3: ${dogs.Toby.language}`);


}

export function getDogs() {
    return dogs
}


const langArray: string[] = [];
export function getAllLangs() {
    langArray.push(langOne);
    langArray.push(langTwo);
    langArray.push(langThree);
    langArray.push(langFour);
    langArray.push(langFive);
    langArray.push(langSix);

    return langArray;

}
