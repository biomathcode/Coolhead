import React,{Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'


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
    color: black;
`
const AuthorName = styled.footer`
    color: black;
    border-radius: 5px;
`
const Button = styled.button`
    color: blue;
    border: 2px solid  red;
    border-radius: 5px;
    &:hover {
        color: white;
        border-color: blue;
    }
    
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
                console.log(data)
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
        return(
            <QuoteBlock>
                <Quotes id='quote-box'>
                    <Quote>{quote}</Quote>
                    <AuthorName>{author}</AuthorName>
                </Quotes>
                <Button id='new-quote' className='buttons' onClick={this.getNewQuote}>New Quote</Button>
            </QuoteBlock>
            
        )
    }
}

export default Quote_machine