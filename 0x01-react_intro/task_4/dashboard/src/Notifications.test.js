import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Notifications from './Notifications';

// to run all tests, please type "npm run test a" in the command line

const wrapper = shallow(<Notifications/>);

describe('my Notifications component', () => {
  it('renders without crashing', () => {
    expect(wrapper).to.have.length(1);
  });

  it('renders 3 list items', () => {
    const listItems = wrapper.find('li');
    expect(listItems).to.have.length(3);
  });

  const p = wrapper.find('p');

  it('renders a paragraph with a certain content', () => {
    expect(p.text()).to.equal('Here is the list of notifications');
  });

});
