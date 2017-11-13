import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import Splash from './splash';
import {shallow} from 'enzyme';




describe('<Splash />', () => {

it('Renders without crashing', () => {
    shallow(<Splash/>);
});

});