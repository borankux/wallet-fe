import React from 'react'
import {Calendar, Col, Divider, List, Row, Statistic} from "antd";
import DebtPie from "../../components/DebtPie/DebtPie";

class Home extends React.Component<any> {
    state = {
        statistics: {
            balance: 17100,
            debt: 40121,
            savings:0,
            monthDebt:[
                {
                    amount: 100,
                    title:'花呗',
                    day: 9,
                },
                {
                    amount: 200,
                    title:'借呗',
                    day:4,
                },
                {
                    amount:1000,
                    tile:'秒贷',
                    day:20
                },
                {
                    amount:3900,
                    title:'房租',
                    day: 21
                }
            ],
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
    public getMonthDebtSum = () => {
        let sum = 0
        this.state.statistics.monthDebt.map((d) => {
            sum += d.amount
            return d
        })
        return sum
    }

    private getCalendarData (day:number) {
        let amount = undefined
        for(let d of this.state.statistics.monthDebt) {
            if(d.day === day) {
                amount = d.amount
            }
        }
        return amount
    }
    public handleDateCellRender = (val:any) => {
        let amount = this.getCalendarData(val.date())
        return amount ? <Statistic
            valueStyle={{
                color:'#d45',
            }}
            value={this.getCalendarData(val.date())}/> : ''
    };

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
                                color:'green',
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
                        <Calendar
                            fullscreen={false}
                            dateCellRender={this.handleDateCellRender}
                            headerRender={this.calendarHeadRender}
                        />
                    </Col>
                </Row>

                <Divider orientation={'left'}>Today</Divider>
                <List>

                </List>
            </div>
        );
    }

    private calendarHeadRender = () => {
        return <Statistic
            valueStyle={{
                padding: 10,
                color: '#ff364e'
            }}
            value={this.getMonthDebtSum()}
            prefix={'￥'}
        />
    };
}

export default Home