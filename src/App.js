import React,{Component} from 'react'
import Timer from './Timer'
import QuoteMachine from './components/Quote_machine'
import AudioGrid from './AudioGrid'


//Media file

class App extends Component{
  render(){
    return (
      <div className="App">
        <QuoteMachine/>
        <Timer/>
        <AudioGrid/>
        </div>
)}}
export default App
