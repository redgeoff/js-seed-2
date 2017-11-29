'use strict';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
chai.should();

import './node-and-browser';

import Foo from '../scripts/foo';

describe('node', () => {
  it('should test only in node', async () => {
    // TODO: insert tests that can only be tested in the browser
    let foo = new Foo();
    let thing = await return foo.bar();
    thing.should.eql('yar');
  });
});
