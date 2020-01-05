import { expect } from 'chai';
import {JSDOM} from 'jsdom';
import fs from 'fs';
import path from 'path';

describe('Our first Test', () => {
  it('It shold pass', () => {
    expect(true).to.equal(true);
  });
});

describe('First test on Jsdom', () => {
  it('should say hello world', () => {
    const index = fs.readFileSync(path.join(__dirname, './views/index.html'), 'utf-8');
    const { window } = new JSDOM(index);
    const h1 = window.document.querySelector('h1');
    expect(h1.innerHTML).to.equal('Welcome to JavaScript Development Environment Starter Kit home page');
    window.close();
  });
});
