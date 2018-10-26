import React, {Component} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import WelcomeContainer from "./WelcomeContainer";

import {compose} from "redux";

import SummonerStats from "./summonerStats";
import freeChampionsContainer from "./freeChampionsContainer";
import challengerList from "./challengerList";
import summonerPosition from "./summonerPosition";
import serverStatus from "./serverStatus";

class App extends Component {

    render() {
        return <Switch>
            <Route path="/summonerStats" component={SummonerStats}/>
            <Route path="/freeChampions" component={freeChampionsContainer}/>
            <Route path="/challengerList" component={challengerList}/>
            <Route path="/summonerPosition" component={summonerPosition}/>
            <Route path="/serverStatus" component={serverStatus}/>
            <Route path="/" exact component={WelcomeContainer}/>
        </Switch>
    }
}

export default compose(withRouter)(App)


