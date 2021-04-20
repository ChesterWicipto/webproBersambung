import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import About from '../About';
import Daftar from '../Daftar';
import Dashboard from '../Dashboard';
import Masuk from '../Masuk';
import Adduser from '../AddUser';

const Routes = () =>
{
    return(
        <Router>   
            <Switch>
                
                <Route path='/masuk'>
                    <Masuk/>
                </Route>
                <Route path='/daftar'>
                    <Daftar/>
                </Route>
                <Route exact path='/'>
                    <Dashboard/>
                </Route>
                <Route path='/about'>
                    <About/>
                </Route>
                <Route path='/adduser'>
                    <Adduser/>
                </Route>

            </Switch>
        </Router>  
    )

}
export default Routes;

