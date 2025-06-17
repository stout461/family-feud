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
    question: "Name the most common toy people in DFEM have in their desks",
    answers: [
        {
            answer: "rubik's cube",
            votes: 53,
            placement: 1
        },
        {
            answer: "stress ball",
            votes: 18,
            placement: 2
        },
        {
            answer: "fidget toy ",
            votes: 10,
            placement: 3
        },
        {
            answer: "rubber duck",
            votes: 6,
            placement: 4
        },
        {
            answer: "Pen",
            votes: 6,
            placement: 5
        },
        {
             answer: "Movie Themed toy (Starwars)",
             votes: 6,
             placement: 6
        }
    ]
}
export const board2data: board = {
    question: "A song might be a hit. Name something else that might be a hit.",
    answers: [
        {
            answer: "Movie",
            votes: 44,
            placement: 1
        },
        {
            answer: "TV show",
            votes: 21,
            placement: 2
        },
        {
            answer: "Play",
            votes: 9,
            placement: 3
        },
        {
            answer: "Dance",
            votes: 9,
            placement: 4
        },
        {
            answer: "Book",
            votes: 8,
            placement: 5
        },
        {
            answer: "Baseball/sport",
            votes: 6,
            placement: 6
        }
    ]
}
export const board3data: board = {
    question: "Name a house you never want to be in.",
    answers: [
        {
            answer: "Haunted House",
            votes: 27,
            placement: 1
        },
        {
            answer: "Jail/Big House",
            votes: 11,
            placement: 2
        },
        {
            answer: "Doghouse",
            votes: 8,
            placement: 3
        },
        {
            answer: "Drug House",
            votes: 7,
            placement: 4
        },
        {
            answer: "Small House",
            votes: 7,
            placement: 5
        },
        {
            answer: "Glass House",
            votes: 6,
            placement: 6
        },
        {
            answer: "Cat House",
            votes: 5,
            placement: 7
        },
        {
            answer: "Outhouse",
            votes: 5,
            placement: 8
        }
    ]
}
export const board4data: board = {
    question: "Name something a parent says when their kid is in trouble ",
    answers: [
        {
            answer: "Kid's full name",
            votes: 27,
            placement: 1
        },
        {
            answer: "You're grounded",
            votes: 22,
            placement: 2
        },
        {
            answer: "Go to your room",
            votes: 12,
            placement: 3
        },
        {
            answer: "I'm not mad; I'm disappointed",
            votes: 9,
            placement: 4
        },
        {
            answer: "What were you thinking / Why did it?",
            votes: 7,
            placement: 5
        },
        {
            answer: "Just wait until ____ gets home",
            votes: 6,
            placement: 6
        },
        {
            answer: "We need to talk",
            votes: 7,
            placement: 7
        },
        {
            answer: "Your in Big trouble",
            votes: 3,
            placement: 8
        }
    ]
}

export const fastData: fastboard = {
    "Name something you would not want to receive as a birthday gift": [
        {
            answer: "Socks/Underwear",
            votes: 30
        },
        {
            answer: "Ugly Clothes",
            votes: 18
        },
        {
            answer: "Cleaning/Household Items",
            votes: 17
        },
        {
            answer: "Hygiene Items",
            votes: 9
        },
        {
            answer: "Bill / Invoice / Lawsuit",
            votes: 7
        },
        {
            answer: "Pet/Animal",
            votes: 6
        },
        {
            answer: "Food/Candy",
            votes: 5
        },
        {
            answer: "Diet/Exercise Items",
            votes: 4
        },
        {
            answer: "Gift Card",
            votes: 3
        }
    ],
    "Name something that only happens every few years.": [
        {
            answer: "Leap Year",
            votes: 43
        },
        {
            answer: "Eclipse",
            votes: 22
        },
        {
            answer: "Olympics",
            votes: 16
        },
        {
            answer: "Presidential Election",
            votes: 9
        }
    ],
    "Name a nocturnal animal.": [
        {
            answer: "Owl",
            votes: 58
        },
        {
            answer: "Bats",
            votes: 26
        },
        {
            answer: "Raccoon",
            votes: 8
        },
        {
            answer: "Opossum",
            votes: 5
        }
    ],
    "Name a way people communicated before texting was invented.": [
        {
            answer: "Telephone call",
            votes: 43
        },
        {
            answer: "Letters / Notes",
            votes: 39
        },
        {
            answer: "Carrier Pigeon",
            votes: 8
        },
        {
            answer: "In Person Visit / Conversation",
            votes: 3
        }
    ],
    "Name a place schoolchildren often go for field trips.": [
        {
            answer: "Museum",
            votes: 42
        },
        {
            answer: "Zoo",
            votes: 38
        },
        {
            answer: "Farm / Pumpkin Patch",
            votes: 8
        },
        {
            answer: "Aquarium",
            votes: 5
        },
        {
            answer: "Park / Amusement Park",
            votes: 4
        }
    ]
}