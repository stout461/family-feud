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
    question: "Name Something you hop you never Hear from your QA",
    answers: [
        {
            answer: "I found a bug",
            votes: 37,
            placement: 1
        },
        {
            answer: "Everything is fine",
            votes: 21,
            placement: 2
        },
        {
            answer: "Anything at all",
            votes: 16,
            placement: 3
        },
        {
            answer: "You missed an acceptance Criteria",
            votes: 10,
            placement: 4
        },
        {
            answer: "Production issue",
            votes: 5,
            placement: 5
        }
    ]
}
export const board2data: board = {
    question: "Name Something You do while waiting for a build to finish",
    answers: [
        {
            answer: "Refresh / Watch the logs",
            votes: 21,
            placement: 1
        },
        {
            answer: "Check Social Media / Talk in the office",
            votes: 17,
            placement: 2
        },
        {
            answer: "Get Coffee / Take a break",
            votes: 16,
            placement: 3
        },
        {
            answer: "Check/Send Emails",
            votes: 16,
            placement: 4
        },
        {
            answer: "Pray / Do Something Superstitious",
            votes: 10,
            placement: 6
        },
        {
            answer: "Play some games",
            votes: 10,
            placement: 5
        },
        {
            answer: "Nap!",
            votes: 5,
            placement: 7
        },
        {
            answer: "Check the News",
            votes: 5,
            placement: 8
        }
    ]
}
export const board3data: board = {
    question: "Name a Task you are most likely to give off to the intern",
    answers: [
        {
            answer: "Documentation",
            votes: 28,
            placement: 1
        },
        {
            answer: "Automation/Dashboard reporting",
            votes: 28,
            placement: 2
        },
        {
            answer: "Fetch Coffee/Snacks",
            votes: 11,
            placement: 3
        },
        {
            answer: "Trivial / Time Consuming tasks",
            votes: 11,
            placement: 4
        },
        {
            answer: "Frontend work",
            votes: 11,
            placement: 5
        },
        {
            answer: "Research",
            votes: 5,
            placement: 6
        }
    ]
}
export const board4data: board = {
    question: "Name a Reason that your local ENV is not working",
    answers: [
        {
            answer: "Schwab Proxy / Zscaler",
            votes: 25,
            placement: 1
        },
        {
            answer: "Bad configuration",
            votes: 20,
            placement: 3
        },
        {
            answer: "Poor Coding / Not something I did / My Cat was on the keyboard",
            votes: 15,
            placement: 4
        },
        {
            answer: "Cert issues",
            votes: 15,
            placement: 5
        },
        {
            answer: "Schwab Computer Doing dumb things.",
            votes: 25,
            placement: 2
        }
    ]
}

export const fastData: fastboard = {
    "Name a meat that you might grill": [
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
    "Name Something That Might Be Full of Holes": [
        {
            answer: "Swiss Cheese",
            votes: 40
        },
        {
            answer: "Clothes/Socks",
            votes: 16
        },
        {
            answer: "Alibi/Story",
            votes: 14
        },
        {
            answer: "Net/Fishing Net",
            votes: 9
        },
        {
            answer: "Colander/Strainer",
            votes: 8
        },
        {
            answer: "Golf Course",
            votes: 2
        },
        {
            answer: "Screen",
            votes: 2
        },
        {
            answer: "Road/Street",
            votes: 2
        }
    ],
    " Name Something a Squirrel Might Get in a Fight With if It Tried To Take His Nuts ": [
        {
            answer: "Bird/Crow",
            votes: 30
        },
        {
            answer: "Another Squirrel",
            votes: 23
        },
        {
            answer: "Chipmunk",
            votes: 12
        },
        {
            answer: "Cat",
            votes: 13
        },
        {
            answer: "Raccoon",
            votes: 5
        },
        {
            answer: "Dog",
            votes: 5
        },
        {
            answer: "Rabbit",
            votes: 4
        },
        {
            answer: "Human",
            votes: 3
        }
    ],
    "Name Something That Might Be Brewing": [
        {
            answer: "Coffee",
            votes: 37
        },
        {
            answer: "Beer",
            votes: 28
        },
        {
            answer: "Tea",
            votes: 17
        },
        {
            answer: "Trouble",
            votes: 8
        },
        {
            answer: "A Storm",
            votes: 5
        },
        {
            answer: "A Plot",
            votes: 3
        }
    ],
    "Name Something Specific About Mickey Mouse That Other Mice Might Make Fun Of": [
        {
            answer: "Gigantic Ears",
            votes: 36
        },
        {
            answer: "Clothes/Gloves",
            votes: 29
        },
        {
            answer: "Voice/Laugh",
            votes: 19
        },
        {
            answer: "His Huge Feet ",
            votes: 3
        },
        {
            answer: "BFFs With a Duck",
            votes: 3
        },
        {
            answer: "Honker/Big Nose",
            votes: 3
        }
    ]
}