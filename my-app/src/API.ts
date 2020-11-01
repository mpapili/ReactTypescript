// enum to enforce that a string can only be one of these three:
export enum difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const fetchQuizQuesitons = async(amount: number, difficulty: difficulty) => {
    const endpoint = `https://opentdb.com/api/php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    // await fetch -> await json
    const data = await (await fetch(endpoint)).json();
    console.log(data) // let's see what we gte!
}