import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Loader, Dimmer} from "semantic-ui-react";

const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));

const App: React.FC = () => (
    <Router>
        <Suspense fallback={<Dimmer active children={<Loader content='Loading'/>}/>}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Suspense>
    </Router>
);

export default App;
