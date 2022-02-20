import React from 'react'
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { Col, Row, Typography, Image, Button, Form, Card, Input  } from 'antd';

const { Title } = Typography;

import Loader from './Loader';

const Welcome = () => {

  const connectWallet = () => {

  }

  return (
    <>
      <Title level={1} className="heading"> การทำธุรกรรม </Title>
        <Row gutter={[32, 32]} className="row">
              <Col span={12} flex="1 0 25%">
                <Form.Item>
                  <Image src="https://ethereum.org/static/4d030a46f561e5c754cabfc1a97528ff/3ba1a/impact_transparent.webp"/>
                </Form.Item>
              </Col>
              <Col span={12} flex="1 0 25%" className='blockchain-welcome' style={{ alignItems: 'center' }}>
                <Form.Item>
                <Title level={2} style={{ color: 'white', textAlign: 'center' }}> เชื่อมต่อธุรกรรมบน Blockchain</Title>
                    <Card style={{ width: 550, backgroundColor: '#F3C5C5' }}>
                    <Row gutter={[32, 32]} flex="1 0 25%">
                      <SiEthereum/><p> Address Book</p>
                          <br />
                          <Button type="primary" style={{ background: "red", borderColor: "yellow" }}>
                            Connect Wallet
                          </Button>
                    </Row>
                    </Card>
                  <Title level={5} style={{ color: 'white', textAlign: 'center', marginTop: '25px' }}><SiEthereum/> Address To</Title>
                  <Input placeholder="Address" />
                  <Title level={5} style={{ color: 'white', textAlign: 'center', marginTop: '25px' }}><SiEthereum/> Amount(ETH)</Title>
                  <Input placeholder="Amount(ETH)" />
                  <Title level={5} style={{ color: 'white', textAlign: 'center', marginTop: '25px' }}><SiEthereum/> Keyword</Title>
                  <Input placeholder="Keyword" />
                  <Title level={5} style={{ color: 'white', textAlign: 'center', marginTop: '25px' }}><SiEthereum/> Message</Title>
                  <Input placeholder="Message" />
                  <Button type="primary" size='large' style={{ marginTop: '25px' }} onClick={connectWallet} block>Send Now</Button>
                </Form.Item>
              </Col>
        </Row>
    </>
  );
};

export default Welcome;