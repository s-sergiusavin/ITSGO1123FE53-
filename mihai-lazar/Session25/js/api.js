import { updateNewsList } from "./markup"

const ENDPOINT = 'https://newsapi.org/v2/everything'
const API_KEY = '298fc1e696134b5e9f5c65c7dc31a534'

const getNews = async (query) => {
    try {
        const res = await fetch(`${ENDPOINT}?apiKey=${API_KEY}&q=${query}`)
        console.log(res)

        const response = await res.json()

        return response.articles
    } catch (error) {
        updateNewsList(`<p>${error}</P>`)
        console.error(error)
    }
}

export default {getNews}