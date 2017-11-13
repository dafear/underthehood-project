import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import { configure } from 'enzyme';
import {shallow} from 'enzyme';
import Register from './register';
import store from '../../store';





describe('<Register />', () => {

it('Renders without crashing', () => {
    shallow(<Provider store={store}>
    	<Register />
    	</Provider>);
    });
});