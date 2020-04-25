import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Loader, Dimmer, Menu, Grid} from "semantic-ui-react";

const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));

const App: React.FC = () => (
    <Router>
        <Suspense fallback={<Dimmer active children={<Loader content='Loading'/>}/>}>
            <Menu inverted fixed={'top'}>
                <Menu.Item as={Link} to='/' content='Home'/>
                <Menu.Item as={Link} to='/about' content='About'/>
            </Menu>
            <Grid padded style={{paddingTop: '50px'}}>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Grid>
        </Suspense>
    </Router>
);

export default App;
