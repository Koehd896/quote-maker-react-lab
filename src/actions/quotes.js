export const addQuote = (quote) => {
    return {
        type: "ADD_QUOTE",
        id: quote.id,
        content: quote.content,
        author: quote.author
    }
}
