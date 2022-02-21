import React from 'react'
import { AiFillGitlab } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { Col, Row, Typography, Image, Button, Form, Card, Input  } from 'antd';

const { Title } = Typography;

import Loader from './Loader';

const Welcome = () => {

  const connectWallet = () => {

  }

  const handleSubmit = () => {

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
                <Title level={5} style={{ color: 'white', textAlign: 'center', marginTop: '25px' }}><AiFillGitlab/> Your Address Book</Title>
               
                  <div className='eth-card white-glassmorphism'>
                    <div className='container'>
                    <SiEthereum fontSize={21} style={{marginTop: "15px", marginLeft: "10px"}}/>
                      <br />
                      <Title level={5} style={{marginTop: "15px", marginLeft:"10px"}}>Address Book</Title>
                    </div>
                    <div>
                    <BsInfoCircle fontSize={20} style={{marginTop: "12px", marginRight: "10px"}} />
                    </div>
                  </div>
               
                  <Button type="primary" style={{ background: "black", borderColor: "white", marginTop: "25px" }} block>
                    Connect Wallet
                  </Button>
                  <Title level={5} style={{ color: 'white', textAlign: 'center', marginTop: '25px' }}><SiEthereum/> Address To</Title>
                  <Input placeholder="Address" />
                  <Title level={5} style={{ color: 'white', textAlign: 'center', marginTop: '25px' }}><SiEthereum/> Amount(ETH)</Title>
                  <Input placeholder="Amount(ETH)" />
                  <Title level={5} style={{ color: 'white', textAlign: 'center', marginTop: '25px' }}><SiEthereum/> Keyword</Title>
                  <Input placeholder="Keyword" />
                  <Title level={5} style={{ color: 'white', textAlign: 'center', marginTop: '25px' }}><SiEthereum/> Message</Title>
                  <Input placeholder="Message" />
                  {false
                      ? <Loader />
                      : (
                        <Button type="primary" size='large' style={{ marginTop: '25px' }} onClick={handleSubmit} block>Send Now</Button>
                      )}
                </Form.Item>
              </Col>
        </Row>
    </>
  );
};

export default Welcome;