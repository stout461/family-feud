type answer = {
    answer: string,
    votes: number,
    placement: number
}

type fastAnswer = {
    answer: string,
    votes: number
}

type board = {
    question: string,
    answers: Array<answer>
}

type fastboard = {
    [key: string]: Array<fastAnswer>
}

export const board1data: board = {
    question: "First thing you'd buy if you won the lottery",
    answers: [
        {
            answer: "answer1",
            votes: 20,
            placement: 1
        },
        {
            answer: "answer2",
            votes: 10,
            placement: 2
        }
    ]
}
export const board2data: board = {
    question: "What job would you have in purgatory",
    answers: [
        {
            answer: "answer1",
            votes: 0,
            placement: 1
        },
        {
            answer: "answer2",
            votes: 0,
            placement: 2
        }
    ]
}
export const board3data: board = {
    question: "What would you wish upon your worst enemy?",
    answers: [
        {
            answer: "answer1",
            votes: 0,
            placement: 1
        },
        {
            answer: "answer2",
            votes: 0,
            placement: 2
        },
        {
            answer: "answer3",
            votes: 0,
            placement: 3
        }
    ]
}
export const board4data: board = {
    question: "What super power do you wish your partner had?",
    answers: [
        {
            answer: "answer1",
            votes: 0,
            placement: 1
        },
        {
            answer: "answer2",
            votes: 0,
            placement: 2
        }
    ]
}

export const fastData: fastboard = {
    "grilling meat": [
        {
            answer: "steak",
            votes: 4
        },
        {
            answer: "brats",
            votes: 1
        }
    ],
    "Indiana city": [

    ],
    "Indy sports team": [

    ],
    "racing series": [

    ],
    "drinking game": [

    ]
}