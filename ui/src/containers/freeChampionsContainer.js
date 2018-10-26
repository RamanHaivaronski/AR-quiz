import React from "react";
import {Card, Col, Row} from "antd";
import * as freeChampion from "../action/freeChampions";
import {bindActionCreators, compose} from "redux";
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import heroNameToPortrait from "../mappers/heroNameToPortrait";


const { Meta } = Card;


class freeChampionsContainer extends React.Component {

    state = {
        championName: "Aatrox",
        championTitle: "da",
        heroListVisible: true,
        filter: ""
    }

    render() {
        const heroName = this.props.match.params.name;
        const {champions, title, loading} = this.props;
        const name = heroNameToPortrait("Aatrox");
        console.log(name);



        return (


            <div>
                <div className='parent inline-flex-parent'>
                    <div className='child'>
                        <img src={"./EpolSoft.png"} height={"50px"} width={"100px"}/>
                    </div>
                    <div className='child'>
                        <p style={{marginTop: "5px",fontSize: "2em", fontFamily: "Garamond", width: "100%"}}>Greetings Summoners!</p>
                    </div>
                </div>
                <div className={'main-wrapper'}>
                    <p style={{marginLeft: "50px", fontStyle: "italic",fontSize: "1.6em", fontFamily: "Garamond"}}>Here are this week's free champions:</p>
                    <div className={"cards"} style={{padding: '30px' }}>
                        <Row gutter={48}>
                        <Col span={2}>
                            <Card
                                hoverable
                                bordered={false}
                                style={{ width: 150 }}
                                cover={<img src={name}/>}
                            >
                                <Meta
                                    title={this.state.championName}
                                    description={champions}
                                />
                            </Card>
                        </Col>
                        <Col span={2}>
                            <Card
                                hoverable
                                bordered={false}
                                style={{ width: 150 }}
                                cover={<img src="https://ddragon.leagueoflegends.com/cdn/8.20.1/img/champion/Aatrox.png"/>}
                            >
                                <Meta
                                    title={this.state.championName}
                                    description={this.state.championTitle}
                                />
                            </Card>
                        </Col>
                        <Col span={2}>
                            <Card
                                hoverable
                                bordered={false}
                                style={{ width: 150 }}
                                cover={<img src="https://ddragon.leagueoflegends.com/cdn/8.20.1/img/champion/Aatrox.png"/>}
                            >
                                <Meta
                                    title={this.state.championName}
                                    description={this.state.championTitle}
                                />
                            </Card>
                        </Col>
                        <Col span={2}>
                            <Card
                                hoverable
                                bordered={false}
                                style={{ width: 150 }}
                                cover={<img src="https://ddragon.leagueoflegends.com/cdn/8.20.1/img/champion/Aatrox.png"/>}
                            >
                                <Meta
                                    title={this.state.championName}
                                    description={this.state.championTitle}
                                />
                            </Card>
                        </Col>
                        <Col span={2}>
                            <Card
                                hoverable
                                bordered={false}
                                style={{ width: 150 }}
                                cover={<img src="https://ddragon.leagueoflegends.com/cdn/8.20.1/img/champion/Aatrox.png"/>}
                            >
                                <Meta
                                    title={this.state.championName}
                                    description={this.state.championTitle}
                                />
                            </Card>
                        </Col>
                        <Col span={2}>
                            <Card
                                hoverable
                                bordered={false}
                                style={{ width: 150 }}
                                cover={<img src="https://ddragon.leagueoflegends.com/cdn/8.20.1/img/champion/Aatrox.png"/>}
                            >
                                <Meta
                                    title={this.state.championName}
                                    description={this.state.championTitle}
                                />
                            </Card>
                        </Col>
                        <Col span={2}>
                            <Card
                                hoverable
                                bordered={false}
                                style={{ width: 150 }}
                                cover={<img src="https://ddragon.leagueoflegends.com/cdn/8.20.1/img/champion/Aatrox.png"/>}
                            >
                                <Meta
                                    title={this.state.championName}
                                    description={this.state.championTitle}
                                />
                            </Card>
                        </Col>
                    </Row>
                        <Row gutter={48}>
                            <Col span={2}>
                                <Card
                                    hoverable
                                    bordered={false}
                                    style={{ width: 150 }}
                                    cover={<img src="https://ddragon.leagueoflegends.com/cdn/8.20.1/img/champion/Aatrox.png"/>}
                                >
                                    <Meta
                                        title={this.state.championName}
                                        description={this.state.championTitle}
                                    />
                                </Card>
                            </Col>
                            <Col span={2}>
                                <Card
                                    hoverable
                                    bordered={false}
                                    style={{ width: 150 }}
                                    cover={<img src="https://ddragon.leagueoflegends.com/cdn/8.20.1/img/champion/Aatrox.png"/>}
                                >
                                    <Meta
                                        title={this.state.championName}
                                        description={this.state.championTitle}
                                    />
                                </Card>
                            </Col>
                            <Col span={2}>
                                <Card
                                    hoverable
                                    bordered={false}
                                    style={{ width: 150 }}
                                    cover={<img src="https://ddragon.leagueoflegends.com/cdn/8.20.1/img/champion/Aatrox.png"/>}
                                >
                                    <Meta
                                        title={this.state.championName}
                                        description={this.state.championTitle}
                                    />
                                </Card>
                            </Col>
                            <Col span={2}>
                                <Card
                                    hoverable
                                    bordered={false}
                                    style={{ width: 150 }}
                                    cover={<img src="https://ddragon.leagueoflegends.com/cdn/8.20.1/img/champion/Aatrox.png"/>}
                                >
                                    <Meta
                                        title={this.state.championName}
                                        description={this.state.championTitle}
                                    />
                                </Card>
                            </Col>
                            <Col span={2}>
                                <Card
                                    hoverable
                                    bordered={false}
                                    style={{ width: 150 }}
                                    cover={<img src="https://ddragon.leagueoflegends.com/cdn/8.20.1/img/champion/Aatrox.png"/>}
                                >
                                    <Meta
                                        title={this.state.championName}
                                        description={this.state.championTitle}
                                    />
                                </Card>
                            </Col>
                            <Col span={2}>
                                <Card
                                    hoverable
                                    bordered={false}
                                    style={{ width: 150 }}
                                    cover={<img src="https://ddragon.leagueoflegends.com/cdn/8.20.1/img/champion/Aatrox.png"/>}
                                >
                                    <Meta
                                        title={this.state.championName}
                                        description={this.state.championTitle}
                                    />
                                </Card>
                            </Col>
                            <Col span={2}>
                                <Card
                                    hoverable
                                    bordered={false}
                                    style={{ width: 150 }}
                                    cover={<img src="https://ddragon.leagueoflegends.com/cdn/8.20.1/img/champion/Aatrox.png"/>}
                                >
                                    <Meta
                                        title={this.state.championName}
                                        description={this.state.championTitle}
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </div>

                </div>

                <div className={'free-footer'}>
                    <p style={{marginLeft: "50px",fontStyle: "italic",fontSize: "1.6em", fontFamily: "Garamond"}}>See you on the Fields of Justice! </p>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        championName: state.championName,
        championTitle: state.championTitle,
        loading: state.freeChampions.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        freeChampion: bindActionCreators(freeChampion, dispatch),
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(freeChampionsContainer);

