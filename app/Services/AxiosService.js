

export const trivia_api = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=50&category=9&difficulty=medium&type=multiple',
    timeout: 3000
})