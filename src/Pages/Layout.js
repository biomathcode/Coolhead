import React  from 'react';
import AudioGrib from '../AudioGrid';
import QuoteMachine from '../components/Quote_machine';
import Timer from '../Timer'
import { Route, Switch } from 'react-router-dom';
import Productivity from './Productivity';
import Meditation from './Meditation'
import Audiobooks from './Audiobooks'
import Podcasts from './Podcasts'
//import Sidebar from '../UI/Sidebar/Sidebar';
import styled from 'styled-components'
import NoMatch from './NoMatch'
const SubContainer = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: space-evenly;
 align-items: flex-start;
 align-content: flex-start;
 @media (max-width: 560px){
   flex-direction: column-reverse;
   align-content: center;
 }`;

const Container = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-evenly;
 
`


const Layout = () => {
    return (
    <>
        {//<Sidebar/>
        }
        <Container>
        <QuoteMachine/>
        <SubContainer>
        <AudioGrib/>
        <Timer/>
        <Switch>  
            <Route path="/" exact component= {Productivity} />
            <Route path="/productivity" component={Productivity}/>
            <Route path="/meditation" component={Meditation}/>
            <Route path="/audiobooks" component={Audiobooks}/>
            <Route path="/podcasts" component={Podcasts}/>
            <Route component={NoMatch} />
        </Switch>
            
            
        </SubContainer>
        </Container>
        
    </> 
        

     );
}
 
export default Layout;