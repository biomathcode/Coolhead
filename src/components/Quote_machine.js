import React,{Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Twitter from '../Icons/svg/Twitter'

const QuoteBlock = styled.blockquote`
    border: 4px solid black;
    margin: 5px;
    padding: 10px;
    text-align: center;
    min-width: 500px;
    min-height: 200px;
    max-width: 500px;
`
const Quotes = styled.p`
    margin: 5px;
    padding: 10px;
    &:first-of-type:before{
        content: '\201c';
        position: absolute;
        left: -.5em;
    }
    &:last-of-type:after{
        content: '\201d';
        position:absolute;
    }
`
const Quote = styled.p`
    color: white;
`
const AuthorName = styled.footer`
    color: white;
    border-radius: 5px;
`
const Button = styled.button`
    color: black;
    background-color: white;
    border: 2px solid  red;
    border-radius: 5px;
    &:hover {
        color: black;
        border-color: blue;
    }
    padding: 5px;
    margin: 5px;
    
`
class Quote_machine extends Component{
    constructor(props){
        super(props)
        this.state = {
            quote : '',
            author: '',
        }

    }
    componentDidMount(){
        this.getQuote()
    }
    getQuote() {
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

        axios.get(url)
            .then(res => {
                let data = res.data.quotes
                let quoteNum = Math.floor(Math.random() * data.length)
                let randomQuote = data[quoteNum]
                this.setState({
                    quote: randomQuote['quote'],
                    author: randomQuote['author']
                })
            })
    }
    getNewQuote = () => {
        this.getQuote()
    }
    
    render() {
        const {quote, author} = this.state
        const twitterquote = "https://twitter.com/intent/tweet?text=" + quote + " by  ~" + author + " via Coolhead.in"
        return(
            <QuoteBlock>
                <Quotes id='quote-box'>
                    <Quote>{quote}</Quote>
                    <AuthorName>{author}</AuthorName>
                </Quotes>
                <Button id='' className='buttons' onClick={this.getNewQuote}>New Quote</Button>
                <a href={twitterquote} rel="noopener noreferrer" target="_blank">
                    <Twitter width={24} fill="#002BFF"/>
                </a>
                        
            </QuoteBlock>
            
        )
    }
}

export default Quote_machine