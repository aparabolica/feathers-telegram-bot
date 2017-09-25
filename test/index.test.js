const { expect } = require('chai');
const plugin = require('../lib');

describe('feathers-telegram-bot', () => {
  it('basic functionality', () => {
    expect(typeof plugin).to.equal('function', 'It worked');
  });
});
