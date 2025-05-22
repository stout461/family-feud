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
            answer: "House",
            votes: 45,
            placement: 1
        },
        {
            answer: "Car",
            votes: 17,
            placement: 2
        },
        {
            answer: "Motorcycle",
            votes: 8,
            placement: 3
        },
        {
            answer: "Invest",
            votes: 8,
            placement: 4
        },
        {
            answer: "Drugs",
            votes: 5,
            placement: 5
        },
        {
            answer: "Treat yo self",
            votes: 4,
            placement: 6
        }
    ]
}
export const board2data: board = {
    question: "What job would you have in purgatory",
    answers: [
        {
            answer: "Satan's Helper",
            votes: 24,
            placement: 1
        },
        {
            answer: "Unemployed",
            votes: 17,
            placement: 2
        },
        {
            answer: "White Collar",
            votes: 13,
            placement: 3
        },
        {
            answer: "Customer Service",
            votes: 12,
            placement: 4
        },
        {
            answer: "Food Service",
            votes: 12,
            placement: 6
        },
        {
            answer: "Cleaning",
            votes: 11,
            placement: 5
        },
        {
            answer: "Tortured",
            votes: 8,
            placement: 7
        }

    ]
}
export const board3data: board = {
    question: "What would you wish upon your worst enemy?",
    answers: [
        {
            answer: "Torture",
            votes: 28,
            placement: 1
        },
        {
            answer: "Discomfort",
            votes: 20,
            placement: 2
        },
        {
            answer: "Good things",
            votes: 12,
            placement: 3
        },
        {
            answer: "Death",
            votes: 12,
            placement: 4
        },
        {
            answer: "Pain",
            votes: 12,
            placement: 5
        },
        {
            answer: "Bodily Impact",
            votes: 8,
            placement: 6
        },
        {
            answer: "Karma",
            votes: 4,
            placement: 7
        },

    ]
}
export const board4data: board = {
    question: "What super power do you wish your partner had?",
    answers: [
        {
            answer: "Teleportation",
            votes: 12,
            placement: 1
        },
        {
            answer: "Invisibility",
            votes: 12,
            placement: 2
        },
        {
            answer: "Stretchy",
            votes: 12,
            placement: 2
        },
        {
            answer: "Mind Reader",
            votes: 12,
            placement: 2
        },
        {
            answer: "Super Speed",
            votes: 8,
            placement: 2
        },
        {
            answer: "Shapeshifting",
            votes: 8,
            placement: 2
        },
        {
            answer: "Super Suck",
            votes: 8,
            placement: 2
        },
        {
            answer: "Animal Whispers",
            votes: 4,
            placement: 2
        },
        {
            answer: "Telekenesis",
            votes: 4,
            placement: 2
        }
    ]
}

export const fastData: fastboard = {
    "grilling meat": [
        {
            answer: "steak",
            votes: 45
        },
        {
            answer: "dogs/brats",
            votes: 16
        },
        {
            answer: "pork",
            votes: 14
        },
        {
            answer: "burger",
            votes: 12
        },
        {
            answer: "seafood",
            votes: 9
        },
        {
            answer: "chicken",
            votes: 4
        }
    ],
    "Indiana city (not Indy)": [
        {
            answer: "Fort Wayne",
            votes: 25
        },
        {
            answer: "Bloomington",
            votes: 25
        },
        {
            answer: "Gary",
            votes: 15
        },
        {
            answer: "Anderson",
            votes: 5
        },
        {
            answer: "Avon",
            votes: 5
        },
        {
            answer: "Brownsburg",
            votes: 5
        },
        {
            answer: "Cleveland",
            votes: 5
        },
        {
            answer: "Munster",
            votes: 5
        },
        {
            answer: "Martinsville",
            votes: 5
        },
        {
            answer: "Pawnee",
            votes: 5
        },
        {
            answer: "Richmond",
            votes: 5
        },
        {
            answer: "Terre Haute",
            votes: 5
        },
        {
            answer: "Boston",
            votes: 5
        },
        {
            answer: "Warsaw",
            votes: 5
        }
    ],
    "Indy sports team": [
        {
            answer: "Pacers",
            votes: 50
        },
        {
            answer: "Fever",
            votes: 17
        },
        {
            answer: "Colts",
            votes: 13
        },
        {
            answer: "Indians",
            votes: 13
        },
        {
            answer: "Fuel",
            votes: 5
        }
    ],
    "racing series": [
        {
            answer: "NASCAR",
            votes: 40
        },
        {
            answer: "F1",
            votes: 29
        },
        {
            answer: "WEC",
            votes: 8
        },
        {
            answer: "Rally",
            votes: 5
        },
        {
            answer: "Mariokart",
            votes: 4
        }
    ],
    "drinking game": [
        {
            answer: "Beer Pong",
            votes: 45
        },
        {
            answer: "King's Cup",
            votes: 25
        },
        {
            answer: "Flip Cup",
            votes: 15
        },
        {
            answer: "Shot4Shot",
            votes: 5
        },
        {
            answer: "Never Have I Ever",
            votes: 5
        },
        {
            answer: "Quarters",
            votes: 5
        },
        {
            answer: "Beer Die",
            votes: 5
        },
        {
            answer: "Rage Cage",
            votes: 5
        },
        {
            answer: "Pool",
            votes: 5
        },
    ]
}