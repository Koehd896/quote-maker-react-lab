export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return {quotes: state.quotes.concat(action.quote)}
    case "REMOVE_QUOTE":
      const quotes = state.quotes.filter(quote => quote.id !== action.quote.id)
      return quotes
    case "UPVOTE_QUOTE":
      return state.quotes.map(quote => {
        if (quote.id === action.quote.id) {
          quote.votes += 1;
          return quote
        } else {
          return quote
        }
      })
    case "DOWNVOTE_QUOTE":
      return state.quotes.map(quote => {
        if (quote.id === action.quote.id) {
          quote.votes -= 1;
          return quote
        } else {
          return quote
        }
      })
    default: 
      return state
  }

}
