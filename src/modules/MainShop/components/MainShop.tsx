import React from 'react';
import {
  Button, Container, Row, Col, Navbar, Tab, Tabs, Card,
} from 'react-bootstrap';
import { bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { MainShopState } from '../../../types';
import ShopItemTable from './ShopItemTable';
import { updateItemsQuality } from '../../../actions/index';
import '../../../App.css';
import WelcomeMessage from './WelcomeMessage';

type PartialState = {
  mainShop: MainShopState,
};

const mapStateToProps = (state: PartialState) => ({
  itemsForSale: state.mainShop.itemsForSale,
  itemsWithDiscount: state.mainShop.itemsWithDiscount,
});

const matchDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  updateItemsQuality,
}, dispatch);

const connector = connect(mapStateToProps, matchDispatchToProps);

// Infer type from redux.
type PropsInferred = ConnectedProps<typeof connector>;

const MainShop = (props: PropsInferred) => {
  const { itemsForSale, itemsWithDiscount } = props;
  const tabTitleForSale = `On Sale (${itemsForSale.length})`;
  const tabTitleWithDiscount = `Discount (${itemsWithDiscount.length})`;
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
              <Tab eventKey="sale" title={tabTitleForSale}>
                <Card>
                  <ShopItemTable items={itemsForSale} />
                </Card>
              </Tab>
              <Tab eventKey="discount" title={tabTitleWithDiscount}>
                <Card>
                  <ShopItemTable items={itemsWithDiscount} />
                </Card>
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
