import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import Main from './main';
import {shallow} from 'enzyme';




describe('<Main />', () => {

it('Renders without crashing', () => {
    shallow(<Main/>);
});

});