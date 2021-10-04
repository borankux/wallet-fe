import React from 'react'
import {Pie} from "@ant-design/charts";

let data = [
    {
        type: '分类一',
        value: 27,
    },
    {
        type: '分类二',
        value: 25,
    },
    {
        type: '分类三',
        value: 18,
    },
    {
        type: '分类四',
        value: 15,
    },
    {
        type: '分类五',
        value: 10,
    },
    {
        type: '其他',
        value: 5,
    },
];

const pieConfig = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.6,
    label: {
        type:'inner',
        offset:'-30%',
        content: function content(_ref:any) {
            return _ref.type.concat((_ref.value).toFixed(0), '%')
        },
        style: {
            fontSize:10,
            textAlign: 'center'
        }
    },
    interactions: [{type:'element-active'}]
}
class DebtPie extends React.Component {
    render() {
        return (
                <Pie {...pieConfig}/>
        );
    }
}

export default DebtPie