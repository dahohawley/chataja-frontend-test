import {Route,BrowserRouter as Router} from 'react-router-dom'
import Login from './Component/Login'
import Chat from './Component/Chat'
import './Component/Chat/chat.css'

function App() {
	return (
		<Router>
            <Route path="/" exact component={Login}></Route>
            <Route path="/chat" component={Chat}></Route>

		</Router>
	);
}	

export default App;