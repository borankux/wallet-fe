import React from 'react'
import {Calendar, Card, Col, Divider, Row, Statistic} from "antd";
import DebtPie from "../../components/DebtPie/DebtPie";

class Home extends React.Component<any> {
    state = {
        statistics: {
            balance: 17100,
            debt: 40121,
            savings:0,
            debtList: [
                {
                    title:'花呗',
                    value:13588,
                },
                {
                    title:'借呗',
                    value:4000
                },
                {
                    title:'玖富万卡',
                    value: 4044
                },
                {
                    title:'中信秒贷',
                    value:16784
                },
                {
                    title:'中信信用卡',
                    value:1682.63
                },
                {
                    title:'工商信用卡',
                    value: 1642.41
                },
            ]
        }
    }

    public handleDateCellRender(val:any) {
        let day = val.date();
        if (day === 20) {
            return <Statistic value={-3900} prefix={'￥'} valueStyle={{color:'red'}}/>
        } else {
            return null
        }
    }

    render() {
        return (
            <div style={{padding:"10px"}}>
                <Divider orientation={'left'}>Statistics</Divider>
                <Row gutter={16}>
                    <Col span={3}>
                        <Statistic
                            title='Balance'
                            precision={2}
                            valueStyle={{
                                fontSize:'2em',
                                color:'green'
                            }}
                            value={this.state.statistics.balance}
                            prefix={'￥'}/>
                    </Col>
                    <Col span={3}>
                        <Statistic
                            title='Debt'
                            precision={2}
                            valueStyle={{
                                color:'#d45',
                                fontSize: '2em'
                            }}
                            value={this.state.statistics.debt}
                            prefix={'￥'}/>
                    </Col>
                    <Col span={3}>
                        <Statistic
                            title='Savings'
                            precision={2}
                            valueStyle={{
                                color:'orange',
                                fontSize: '2em'
                            }}
                            value={this.state.statistics.savings}
                            prefix={'￥'}/>
                    </Col>
                </Row>
                <Divider orientation={'left'}>Debts</Divider>
                <Row gutter={16}>
                    {
                        this.state.statistics.debtList.map(d => {
                            return <Col span={3} key={d.title}>
                                <Statistic
                                    title={d.title}
                                    value={d.value}
                                    prefix={'￥'}
                                    valueStyle={{
                                        color:'#d45'
                                    }}
                                />
                            </Col>
                        })
                    }
                </Row>
                <Divider orientation={'left'}>Charts</Divider>
                <Row gutter={16}>
                    <Col span={7}>
                        <DebtPie/>
                    </Col>
                    <Col span={15}>
                        <Calendar  fullscreen={false} dateCellRender={this.handleDateCellRender}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home