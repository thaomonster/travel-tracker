import { expect } from 'chai';
import Traveler from '../src/Traveler';
import sampleTravelerData from '../test/test-data/traveler-data';

describe('Traveler class', () => {
  let user, user1;
  
  beforeEach(() => {
    user = new Traveler(sampleTravelerData.travelers[0]);
    user1 = new Traveler(sampleTravelerData.travelers[1]);
  })

  it('should be an instance of a Traveler class', () => {
    expect(user).to.be.an.instanceOf(Traveler);
  })

  it('should initialize with an id', () => {
    expect(user.id).to.eq(1);
  })

  it('should intialize with a name', () => {
    expect(user1.name).to.eq("Rachael Vaughten");
  })

  it('should intialize with a traveler type', () => {
    expect(user.travelerType).to.eq("relaxer");
  })
  
})