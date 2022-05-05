import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './Home/Home';
import Login from './User/Login';
import Register from './User/Register';





const Main = () => {
    return (<div>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
        </Switch>
    </div>)
}

export default Main;