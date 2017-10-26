import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Splash from './Splash/Splash'
import App from './App'
import SignIn from './SignIn/SignIn'
import Comment from './AddComment/Comment'
import Comments from './Comments/Comments'

const Main = () => (

<Router>
    <div>
      <Route exact path="/" component={Splash}/>
      {/* <Route exact path="/dashboard" component={App}/> */}
      <Route exact path="/dashboard" render={(props) => <App {...props} />} />
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/comment" component={Comment}/>
      <Route path="/comments" component={Comments}/>
    </div>
  </Router>

)

export default Main;
