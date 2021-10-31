export const addQuote = (quote) => {
    return {
        type: "ADD_QUOTE",
        quote: {
            id: quote.id,
            content: quote.content,
            author: quote.author,
            votes: quote.votes
            }
        }
}

export const removeQuote = (id) => {
    return {
        type: "REMOVE_QUOTE",
        quoteId: id
    }
}

export const upvoteQuote = (id) => {
    return {
        type: "UPVOTE_QUOTE",
        quoteId: id
        }
}

export const downvoteQuote = (id) => {
    return {
        type: "DOWNVOTE_QUOTE",
        quoteId: id
    }
}
