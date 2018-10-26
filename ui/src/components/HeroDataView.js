import React, {Component} from "react"
import propTypes from "prop-types"
import AvatarPanel from "./HeroViewPart/AvatarPanel";
import DescriptionPanel from "./HeroViewPart/DescriptionPanel";
import {Avatar, Tabs} from "antd";
import StatPanel from "./HeroViewPart/StatPanel";
import HeroStatisticTab from "./HeroTabsPart/HeroStatisticTab";
import HeroTable from "./HeroTabsPart/HeroTable";

const TabPane = Tabs.TabPane;

export default class HeroDataView extends Component {

    handleLoadMatchup = () => {
        this.props.onLoadMatchup(this.props.hero.id);
    };

    handleLoadStatistic = () => {
        this.props.onLoadStatistic(this.props.hero.id);
    };

    render() {
        const {
            hero,
            matchup, loadingMatchup,
            statistic, loadingStatistic,
            heroes, onOverlayClick
        } = this.props;
        return <div style={{marginLeft: "10px", display: "flex", flexDirection: "column"}}>
            <Tabs defaultActiveKey="1">
                <TabPane tab="freeChampions" key="1">
                    <HeroTable
                        data={matchup}
                        loading={loadingMatchup}
                        onLoad={this.handleLoadMatchup}
                        meta={
                            [
                                {
                                    title: 'Hero',
                                    dataIndex: 'name',
                                    render: (cell, row) => {
                                        return <div style={{color: "rgba(255, 247, 247, 0.88)"}}>
                                            <Avatar style={{marginRight: "10px"}} src={row.src}/>
                                            {row.name}
                                        </div>
                                    },
                                    sorter: (a, b) => a.name.localeCompare(b.name)
                                },
                                {
                                    title: 'With',
                                    dataIndex: 'winWith',
                                    sorter: (a, b) => a.winWith - b.winWith,
                                },
                                {
                                    title: 'Against',
                                    dataIndex: 'winAgainst',
                                    sorter: (a, b) => a.winAgainst - b.winAgainst,

                                }
                            ]
                        }
                    />
                </TabPane>
            </Tabs>
        </div>
    }
}

HeroDataView.propTypes = {hero: propTypes.object.isRequired};