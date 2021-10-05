import React from 'react'
import {Calendar, Card, Col, Divider, List, Row, Space, Statistic} from "antd";
import DebtPie from "../../components/DebtPie/DebtPie";
import {Column} from "@ant-design/charts";
import Avatar from '../../assets/imgs/avatar.svg'

class Home extends React.Component<any> {
    state = {
        statistics: {
            balance: 17100,
            debt: 40121,
            savings:0,
            investment:0,
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
        },
        columnData: {
            data: [
                {
                    name: 'Salary',
                    month:'Feb.',
                    amount:14000
                },
                {
                    name: 'Salary',
                    month:'Mar.',
                    amount:13500
                },
                {
                    name: 'Salary',
                    month:'Apr.',
                    amount:15400,
                },
                {
                    name: 'Salary',
                    month:'Apr.',
                    amount:7500,
                },
                {
                    name: 'Salary',
                    month:'March.',
                    amount:31400
                },
                {
                    name: 'Expend',
                    month:'Feb.',
                    amount:10000
                },
                {
                    name:'Expend',
                    month:'Mar.',
                    amount: 8050
                },
                {
                    name:'Expend',
                    month:'Apr.',
                    amount: 12000
                },
                {
                    name: 'Expend',
                    month:'March.',
                    amount:10000
                }
            ],
            isGroup: true,
            xField: 'month',
            yField: 'amount',
            seriesField: 'name',
            colorField: 'name',
            color: ['#32db32', '#d45'],
            label: {
                position: 'middle',
                layout: [
                    { type: 'interval-adjust-position' },
                    { type: 'interval-hide-overlap' },
                    { type: 'adjust-color' },
                ],
            },
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
            <div style={{width:"90%", margin:"0 auto"}}>
                <Divider orientation={'left'}>Statistics</Divider>
                <Card>
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
                        <Col span={3}>
                            <Statistic
                                title='Investment'
                                precision={2}
                                valueStyle={{
                                    color:'teal',
                                    fontSize: '2em'
                                }}
                                value={this.state.statistics.investment}
                                prefix={'￥'}/>
                        </Col>
                    </Row>
                </Card>

                <Divider orientation={'left'}>Debts</Divider>
                <Card><Row gutter={16}>
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
                    </Row></Card>


                <Divider orientation={'left'}>Visualized</Divider>
                <Card><Row gutter={16} style={{marginTop:40}}>
                        <Col span={7}>
                            <DebtPie/>
                        </Col>
                        <Col span={10}>
                            <Column
                                data={this.state.columnData.data}
                                xField={this.state.columnData.xField}
                                yField={this.state.columnData.yField}
                                isGroup
                                seriesField='name'
                                groupField='name'
                                isStack
                            />
                        </Col>
                    </Row></Card>

                <Divider orientation={'left'}>Today</Divider>
                <Card><Row gutter={16}>
                        <Col span={9}>
                            <List>
                                <List.Item
                                    title={"Testing"}
                                    prefix={"Fuck"}
                                >
                                    <Space>
                                        <img style={{
                                            height: 30
                                        }} src={Avatar} alt=""/>
                                        <h1 style={{color:"#d45"}}>￥-32</h1>
                                    </Space>
                                </List.Item>
                                <List.Item
                                    title={"Testing"}
                                >
                                    <Space>
                                        <img style={{
                                            height: 30
                                        }} src={Avatar} alt=""/>
                                        <h1 style={{color:"#d45"}}>￥-40</h1>
                                    </Space>
                                </List.Item>
                                <List.Item
                                    title={"Testing"}
                                >
                                    <Space>
                                        <img style={{
                                            height: 30
                                        }} src={Avatar} alt=""/>
                                        <h1 style={{color:"#d45"}}>￥-40</h1>
                                    </Space>
                                </List.Item>

                            </List>
                        </Col>
                        <Col span={9}>
                            <Calendar
                                fullscreen={false}
                                dateCellRender={this.handleDateCellRender}
                                headerRender={this.calendarHeadRender}
                            />
                        </Col>
                    </Row></Card>
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