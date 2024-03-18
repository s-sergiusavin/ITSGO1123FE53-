import API from './api'
import { updateNewsList, createMarkup } from './markup'

const form = document.getElementById('form')

form.addEventListener('submit', onSubmit)

async function onSubmit(e) {
    e.preventDefault()

    const form = e.currentTarget;
    const inputVal = form.elements.news.value;

    try {
        const articles = await API.getNews(inputVal)

        if (articles.length === 0) {
            updateNewsList(`<p>Nu am gasit rezultate</p>`)
            return;
        }

        console.log(test)

        const markup = articles.reduce((markup, article) => createMarkup(article) + markup, '')
        updateNewsList(markup)
    } catch (error) {
        onError(error)
    }

    const articles = await API.getNews()

    form.elements.news.value = ''
}

function onError(error) {
    console.error(error)
    updateNewsList(`<p>Nu am gasit rezultate</p>`)
}