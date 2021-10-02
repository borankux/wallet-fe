import 'antd/dist/antd.min.css'
import './App.css';
import {Card, Divider, Layout, List, Menu} from "antd";
const {Header, Content, Footer} = Layout;

function App() {
  const data = [
    {
      title:'￥-45',
    },
    {
      title: '￥-123',
    },
    {
      title: '￥-23',
    }
  ]
  return (
    <div className="App">
      <Layout>
        <Header>
          <Menu mode={'horizontal'} theme={'dark'}>
            <Menu.Item key={'test'}>
              Navigation
            </Menu.Item>
            <Menu.Item key={'second'}>
              Second
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{padding: 20}}>
          <div className="card-holder">
            <Divider type='horizontal' orientation='left'>Basic Information</Divider>
            <Card
                title={'Balance'}
                style={{width: 300}}
                size={'large'}
            >
              <h1 style={{color:"green", fontSize:'2em'}}>￥17,001.34 </h1>
            </Card>
            <Card
                title={'债务'}
                className={'with-bg'}
                style={{width: 300}}
                size={'large'}
            >
              <h1 style={{color:"red", fontSize:'2em'}}>￥ -42,001 </h1>
            </Card>
            <Card
                title={'工商银行'}
                style={{width: 300}}
                size={'large'}
            >
              <h1 style={{fontSize:'2em'}}>￥17,001.34 </h1>
            </Card>
            <Card
                title={'农业银行'}
                style={{width: 300}}
                size={'large'}
            >
              <h1 style={{fontSize:'2em'}}>￥17,001.34 </h1>
            </Card>
            <Card
                title={'支付宝'}
                style={{width: 300}}
                size={'large'}
            >
              <h1 style={{fontSize:'2em'}}>￥17,001.34 </h1>
            </Card>
          </div>
          <div className={'card-holder'}>
            <Divider type='horizontal' orientation='left'>Debts</Divider>
            <Card title='房租' style={{width: 300}}>
              <h1 style={{color:"red", fontSize:'2em'}}>￥-3900</h1>
              <h2>15d:12min:13sec</h2>
            </Card>
            <Card title='借呗' style={{width: 300}}>
              <h1 style={{color:"red", fontSize:'2em'}}>￥-840</h1>
              <h2>1d:12min:13sec</h2>
            </Card>
          </div>

          <div>
            <Divider type='horizontal' orientation='left'>Today</Divider>
            <List
                itemLayout='horizontal'
                dataSource={data}
                renderItem={item => (
                    <List.Item style={{color:"red"}}>
                      {item.title}
                    </List.Item>
                )}
            />
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
