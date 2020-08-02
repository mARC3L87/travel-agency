//external
import React from 'react';
import {shallow} from 'enzyme';
//js
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='Lorem' cost='$11,111.11' days={5} tags={['text one', 'text two', 'text three']} />);
    expect(component).toBeTruthy();
  });

  it('should generate correct link', () => {
    const expectedLink = 'abc';
    const component = shallow(<TripSummary id={expectedLink} />);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedLink}`);
  });

  it('should have correct src and alt', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'Lorem';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} />);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, cost, days', () => {
    const expectedName = 'Lorem';
    const expectedCost = '$11,111.11';
    const expectedDays = 5;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} />);
    const renderedName = component.find('.title').text();
    const renderedCost = component.find('.details').childAt(1).text();
    const renderedDays = component.find('.details').childAt(0).text();
    expect(renderedName).toEqual(expectedName);
    expect(renderedCost).toEqual(`from ${expectedCost}`);
    expect(renderedDays).toEqual(`${expectedDays} days`);
  });

  /*it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });*/

  it('should render tags in correct order', () => {
    const expectedTags = ['text one', 'text two', 'text three'];
    const component = shallow(<TripSummary tags={expectedTags} />);
    const renderedTagOne = component.find('.tag').at(0).text();
    const renderedTagTwo = component.find('.tag').at(1).text();
    const renderedTagThree = component.find('.tag').at(2).text();
    expect(renderedTagOne).toEqual(expectedTags[0]);
    expect(renderedTagTwo).toEqual(expectedTags[1]);
    expect(renderedTagThree).toEqual(expectedTags[2]);
  });

  it('will not render div if tags is false or empty array', () => {
    const expectedTags = [];
    const component = shallow(<TripSummary tags={expectedTags}/>);
    expect(component.find('tags')).toEqual({});
  });
});