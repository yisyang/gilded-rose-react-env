import React from 'react';
import {
  Button, Container, Row, Col, Navbar, Tab, Tabs, Card,
} from 'react-bootstrap';
import shopItemsData from '../../../data/shopItems';
import Shop from '../../../api/shop';
import { ShopItem } from '../../../types';
import ShopItemTable from './ShopItemTable';
import '../../../App.css';
import WelcomeMessage from './WelcomeMessage';

interface Props {}

interface State {
  items: ShopItem[]
}

const shop = new Shop(shopItemsData);

class GildedRose extends React.Component<Props, State> {
  static updateShowQuality() {
    shop.updateQuality();
    console.log('Shop state after update:', shop);
  }

  constructor(props: Props) {
    super(props);
    console.log('Initial shop state: ', shop);
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <Navbar bg="light">
                <Navbar.Brand href="#home">The Gilded Rose </Navbar.Brand>
              </Navbar>
            </Col>
          </Row>
          <Row>
            <Col>
              <WelcomeMessage />
            </Col>
          </Row>
          <Row>
            <Col>
              <Tabs defaultActiveKey="sale" id="uncontrolled-tab-example">
                <Tab eventKey="sale" title="On Sale">
                  <Card>
                    <ShopItemTable items={shop.items} />
                  </Card>
                </Tab>
                <Tab eventKey="discount" title="Discount">
                  Coming soon...
                </Tab>
              </Tabs>
              <Button onClick={GildedRose.updateShowQuality}>Update Quality</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default GildedRose;
