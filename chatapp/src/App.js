import React from 'react'
import {BrowserRouter as Router , Link , Route} from 'react-router-dom'
import Room from '../src/Room'
import Home from '../src/Home'


class App extends React.Component{
    
    constructor(props){
        super(props)

    }

    componentDidMount(){
   
// alert('Welcome')
    }

    componentWillUnmount(){
       
    }

    render(){
        return(<>

 <Router>
 <Route  exact path='/'   > 
    <Home/>
    </Route>
 <Route exact path='/Room'  > 
    <Room/>
 </Route>
  </Router>

        </>)
    }
}
export default App
