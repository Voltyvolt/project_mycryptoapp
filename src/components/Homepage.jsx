import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <Title level={2} className="heading">Crypto Dashboard</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="รวมเหรียญทั้งหมด" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="รวม Exchanges ทั้งหมด" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} /></Col>
        <Col span={12}><Statistic title="รายการ Volume 24 ชั่วโมง" value={`$${millify(globalStats.total24hVolume)}`} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 เหรียญคริปโต</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">ดูเพิ่มเติม</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">ข่าวสารคริปโตต่างประเทศ</Title>
        <Title level={3}><Link to="/news">ดูเพิ่มเติม</Link></Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
