import { expect } from 'chai';
import Traveler from '..src/Traveler.js'
import travelerData from '../test/test-data/traveler-data.js'

describe('Traveler class', () => {
  let users, user1, user2

  beforeEach(() => {
    users = new Traveler(travelerData)
    user1 = new Traveler(travelerData[0])
    user2 = new Traveler(travelerData[1])
  })
})