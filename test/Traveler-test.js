import { expect } from 'chai';
import Traveler from '../src/Traveler';
import sampleTravelerData from '../test/test-data/traveler-data';

describe('Traveler class', () => {
  let users, user1, user2
  
  beforeEach(() => {
    users = new Traveler(sampleTravelerData);
    user1 = new Traveler(sampleTravelerData.travelers[0]);
    user2 = new Traveler(sampleTravelerData.travelers[1]);
  });

  it('should be an instance of a Traveler class', () => {
    expect(user1).to.be.an.instanceOf(Traveler)
  });

  it('should initialize with an id', () => {
    expect(user1.id).to.eq(1);
  });

  it('should intialize with a name', () => {
    expect(user2.name).to.eq("Rachael Vaughten")
  });

});