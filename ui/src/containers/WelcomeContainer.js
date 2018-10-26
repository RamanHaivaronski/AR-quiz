import React, {Component} from "react"
import {withRouter} from "react-router-dom";
import {Carousel, Divider} from "antd";
import * as ROUTES from "../constants/Routes";
import Link from "react-router-dom/es/Link";


class WelcomeContainer extends Component {

    getSummonerStats() {
        const { history } = this.props;
        history.push("/summonerStats");
    }
    getFreeChampions(){
        const { history } = this.props;
        history.push("/freeChampions");

    }
    getChallengerList(){
        const { history } = this.props;
        history.push("/challengerList");

    }
    getServerStatus(){
        const { history } = this.props;
        history.push("/serverStatus");

    }
    getSummonerPosition(){
        const { history } = this.props;
        history.push("/summonerPosition");

    }

    render() {

        return <div>

            <div style={{position: "relative", overflow: "hidden"}}>

                <div style={{marginLeft:"100px", maxWidth: "560px", minWidth: "420px", minHeight: "336px", position: "absolute"}}>
                        <h1 style={{marginTop: "20px", marginLeft: "35px", color: "white", fontSize: "38px"}}>
                            League of Legends Statistics
                        </h1>

                        <Carousel autoplay={true} dots={false} vertical={true}>

                            <div
                                 onClick={() => this.getFreeChampions()}>
                                <img style={{width: "550px", height: "300px"}} className="hotsAvatar" src="/freeweek.jpg"/>
                                <h3 style={{fontSize: "18px", color: "white"}}>
                                    Free Week Rotation
                                </h3>
                            </div>
                            <div
                                onClick={() => this.getSummonerStats()}>
                                <img style={{width: "550px", height: "300px"}} className="hotsAvatar" src="/stats.jpg"/>
                                <h3 style={{fontSize: "18px", color: "white"}}>
                                    Summoner Mastery
                                </h3>
                            </div>
                            <div
                                 onClick={() => this.getChallengerList()}>
                                <img style={{width: "550px", height: "300px"}} className="hotsAvatar" src="/challenger1.jpg"/>
                                <h3 style={{fontSize: "18px", color: "white"}}>
                                    Challenger Lists
                                </h3>
                            </div>
                            <div
                                 onClick={() => this.getSummonerPosition()}>
                                <img style={{width: "550px", height: "300px"}} className="hotsAvatar" src="/chal.jpg"/>
                                <h3 style={{fontSize: "18px", color: "white"}}>
                                    Ladder stats
                                </h3>
                            </div>
                        </Carousel>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <button className="hotsButton" style={{margin: "10px", width: "156px"}}
                                    onClick={() => this.getFreeChampions()}>
                                    Free Week Rotation
                            </button>
                            <button className="hotsButton" style={{margin: "10px"}}
                                    onClick={()=>this.getSummonerStats()}>
                                    Summoner Mastery
                            </button>
                            <button className="hotsButton" style={{margin: "10px"}}
                                    onClick={()=>this.getChallengerList()}>
                                    Challenger Lists
                            </button>
                            <button className="hotsButton" style={{margin: "10px"}}
                                    onClick={()=>this.getSummonerPosition()}>
                                    Summoner Ladder Position
                            </button>
                        </div>

                        <div style={{marginTop: "410px"}}>
                            <ul style={{ display: 'flex', listStyle: 'none' }}>
                                <li><Link style={{color: "#bafff7", whiteSpace: "nowrap"}} to="/serverStatus">Server Status</Link></li>
                                <Divider
                                    style={{marginTop: "6px", width: 1, color: "#bafff7"}}
                                    type="vertical" />
                                <li><Link style={{color: "#bafff7", whiteSpace: "nowrap"}} to="/serverStatus">Download</Link></li>
                                <Divider
                                    style={{marginTop: "6px", width: 1, color: "#bafff7"}}
                                    type="vertical"/>
                                <li><Link style={{color: "#bafff7", whiteSpace: "nowrap"}} to="/serverStatus">About</Link></li>
                                <Divider
                                    style={{marginTop: "6px", width: 1, color: "#bafff7"}}
                                    type="vertical"/>
                                <li><Link style={{color: "#bafff7", whiteSpace: "nowrap"}} to="/serverStatus">Support</Link></li>
                                <Divider
                                    style={{marginTop: "6px", width: 1, color: "#bafff7"}}
                                    type="vertical"/>
                            </ul>

                            <h1 style={{marginTop: "20px", marginLeft: "150px", color: "white", fontSize: "14px"}}>
                                © 2018 EpolSoft, Inc. Все права защищены. EpolSoft является торговым знаком или зарегистрированным торговым знаком, принадлежащими EpolSoft, Inc.

                            </h1>

                        </div>
                   </div>

                <img src="/irelia.jpg"/>
            </div>

        </div>
    }
}



export default withRouter(WelcomeContainer);