import { expect } from 'chai';
import Traveler from '../src/Traveler';
import sampleTravelerData from '../test/test-data/traveler-data';

describe('Traveler class', () => {
  let users, user1
  
  beforeEach(() => {
    users = new Traveler(sampleTravelerData);
    user1 = new Traveler(sampleTravelerData.travelers[0]);
  })

  it('should be an instance of a Traveler class', () => {
    expect(user1).to.be.an.instanceOf(Traveler)
  })

  it('')
})