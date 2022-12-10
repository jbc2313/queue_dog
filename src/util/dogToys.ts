import { randProgrammingLanguage } from '@ngneat/falso'

interface DogToy {
    language: string;
    used: boolean;
}

type DogName = "Darrel" | "Boris" | "Toby";

const langOne = randProgrammingLanguage();
const langTwo = randProgrammingLanguage();
const langThree = randProgrammingLanguage();


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
