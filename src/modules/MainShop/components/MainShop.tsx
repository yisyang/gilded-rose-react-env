import React from 'react';
import {
  Button, Container, Row, Col, Navbar, Tab, Tabs, Card,
} from 'react-bootstrap';
import { bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { ShopItem, MainShopState } from '../../../types';
import ShopItemTable from './ShopItemTable';
import { updateItemsQuality } from '../../../actions/index';
import '../../../App.css';
import WelcomeMessage from './WelcomeMessage';

const mapStateToProps = (state: {mainShop: MainShopState}) => ({
  items: state.mainShop.items,
});

const matchDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  updateItemsQuality,
}, dispatch);

const connector = connect(mapStateToProps, matchDispatchToProps);

// Infer type from redux.
type PropsInferred = ConnectedProps<typeof connector>;

const MainShop = (props: PropsInferred) => {
  const { items } = props;
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Navbar bg="light">
              <Navbar.Brand href="#home">The Gilded Rose</Navbar.Brand>
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
                  <ShopItemTable items={items} />
                </Card>
              </Tab>
              <Tab eventKey="discount" title="Discount">
                Coming soon...
              </Tab>
            </Tabs>
            <Button onClick={() => props.updateItemsQuality()}>Update Quality</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default connector(MainShop);
