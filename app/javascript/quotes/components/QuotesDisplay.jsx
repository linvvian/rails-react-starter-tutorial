import React from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

class QuotesDisplay extends React.Component {
  state = {
    quote: {}
  };

  fetchQuote(index) {
    axios
      .get(`api/quotes/${index}`)
      .then(response => {
        this.setState({ quote: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  setQuoteIndexFromQueryString(qs) {
    this.qsParams = queryString.parse(qs);
    if (this.qsParams.quote) {
      // assign quote ID from the URL's query string
      this.quoteIndex = Number(this.qsParams.quote);
    } else {
      this.quoteIndex = 1;
      // update URL in browser to reflect current quote in query string
      this.props.history.push(`/?quote=${this.quoteIndex}`);
    }
  }

  componentDidMount() {
    this.setQuoteIndexFromQueryString(this.props.location.search);
    this.fetchQuote(this.quoteIndex);
  }

  componentWillReceiveProps(nextProps) {
    this.setQuoteIndexFromQueryString(nextProps.location.search);
    this.fetchQuote(this.quoteIndex);
  }

  render() {
    const { quote } = this.state;
    const nextQuoteIndex = quote.next_index;
    const previousQuoteIndex = quote.previous_index;

    return <div>
        {previousQuoteIndex && <Link to={`/?quote=${previousQuoteIndex}`}>
            Previous
          </Link>}
        {nextQuoteIndex && <Link to={`/?quote=${nextQuoteIndex}`}>
            Next
          </Link>}
        <p>{this.state.quote.text}</p>
        <p>{this.state.quote.author}</p>
      </div>;
  }
}

export default QuotesDisplay;
