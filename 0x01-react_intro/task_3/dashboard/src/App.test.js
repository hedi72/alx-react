import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

// to run all tests, please type "npm run test a" in the command line
const wrapper = shallow(<App/>);

describe('my app component', () => {
  it('renders without crashing', () => {
    expect(wrapper).to.have.length(1);
  });

  it('renders a div with the class App-header', () => {
    const div = wrapper.find('div.App-header');
    expect(div).to.have.length(1);
  });

  it('renders a div with the class App-body', () => {
    const div = wrapper.find('div.App-body');
    expect(div).to.have.length(1);
  });

  it('renders a div with the class App-footer', () => {
    const div = wrapper.find('div.App-footer');
    expect(div).to.have.length(1);
  });

});
