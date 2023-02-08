import React from 'react';
import '../explore/explore.css'
import '../explore/responsive.css'
import { Collapse } from 'antd';
const { Panel } = Collapse;

const CollapsePanel = () => (
    <>
        <div className="custom-container">
        <div className="main-container">
        <h1 className="collapse-heading">Explore options near me</h1>
        <Collapse bordered={false} defaultActiveKey={['1']} expandIconPosition="right">
            <Panel header="Popular cuisines near me" key="2" className='panel'>
                {'Bakery food near meBeverages food near meBiryani food near meBurger food near meChinese food near meContinental food near meDesserts food near meItalian food near meKebab food near meMithai food near meMomos food near meMughlai food near meNorth Indian food near mePasta food near mePizza food near meRolls food near meSandwich food near meShake food near meSouth Indian food near meStreet food near me'}
            </Panel>
        </Collapse>
        <Collapse bordered={false} defaultActiveKey={['1']} expandIconPosition="right">
            <Panel header="Popular restaurant types near me" key="2" className='panel'>
                {'Bakeries near meBars near meBeverage Shops near meBhojanalya near meCafés near meCasual Dining near meClubs near meCocktail Bars near meConfectioneries near meDessert Parlors near meDhabas near meFine Dining near meFood Courts near meFood Trucks near meIrani Cafes near meKiosks near meLounges near meMeat Shops near meMicrobreweries near mePaan Shop near mePubs near meQuick Bites near meSweet Shops near me'}
            </Panel>
        </Collapse>
        <Collapse bordered={false} defaultActiveKey={['1']} expandIconPosition="right">
            <Panel header="Top Restaurant Chains" key="3" className='panel'>
                {`BikanervalaBiryani BluesBTWBurger KingBurger SinghDomino'sDunkin' DonutsHaldiram'sKFCKrispy KremeMcDonald'sMoti Mahal DeluxOm Sweets & SnacksParadise BiryaniPizza Hut`}
            </Panel>
        </Collapse>
        <Collapse bordered={false} defaultActiveKey={['1']} expandIconPosition="right">
            <Panel header="Cities We Deliver To" key="4" className='panel'>
                {`BikanervalaBiryani BluesBTWBurger KingBurger SinghDomino'sDunkin' DonutsHaldiram'sKFCKrispy KremeMcDonald'sMoti Mahal DeluxOm Sweets & SnacksParadise BiryaniPizza Hut`}
            </Panel>
        </Collapse>
    </div>
        </div>
  </>

);


export default CollapsePanel