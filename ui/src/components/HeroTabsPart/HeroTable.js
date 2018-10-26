import React, {Component} from "react"
import {Table} from "antd";

export default class HeroTable extends Component {

    render() {
        const {data, loading, onLoad,meta} = this.props;
        if (data === null && loading === false)
            onLoad();
        return <Table
            style={{backgroundColor: "rgba(1,1,1,0.3)"}}
            pagination={{showSizeChanger: true}}
            loading={loading}
            columns={meta}
            dataSource={data}
        />
    }
}