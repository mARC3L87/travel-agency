//external
import React from 'react';
import {shallow} from 'enzyme';
//js
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct link', () => {
    const expectedLink = 'abc';
    const component = shallow(<TripSummary id={expectedLink} />);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedLink}`);
  });
});