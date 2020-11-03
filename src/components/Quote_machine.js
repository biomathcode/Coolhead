import React,{Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Twitter from '../Icons/svg/Twitter'

const QuoteBlock = styled.blockquote`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 50px;
    margin-left: 50px;
    margin-bottom: 10px;
    
`
const Quotes = styled.div`
    margin: 5px;
    padding: 10px;
`
const Quote = styled.div`
    color: white;
    font-size: 1rem;
`
const AuthorName = styled.div`
    color: white;
    border-radius: 5px;
    font-size: 1rem;
`
const Button = styled.button`
    color: white;
    background-color: ${({theme}) => theme.primaryDark};
    border: 2px solid  ${({theme}) => theme.secondaryDark};
    padding: 6px;
    border-radius: 5px;
    &:hover {
        color: ${({theme}) => theme.primaryLight};
        background-color: ${({theme}) => theme.secondaryDark};
        border-color: ${({theme}) => theme.secondaryDark};
    }
    cursor: pointer;
    
`
const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0px 20px;

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
        const twitterquote = "https://twitter.com/intent/tweet?text=" + quote + " ~" + author + " via Coolhead.in"
        return(
            <QuoteBlock>
                <Quotes id='quote-box'>
                    <Quote>{quote}</Quote>
                    <AuthorName>~ {author}</AuthorName>
                </Quotes>
            <SubContainer>
                {quote ? <Button className='buttons' onClick={this.getNewQuote}>New Quote</Button> :"Loading ..."}
                
                <a href={twitterquote} rel="noopener noreferrer" target="_blank">
                    <Twitter width={24} fill="#002BFF"/>
                </a>

            </SubContainer>
                
                        
            </QuoteBlock>
            
        )
    }
}

export default Quote_machine