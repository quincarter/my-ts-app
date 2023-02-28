import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { MyTsApp } from '../src/my-ts-app.js';
import '../src/my-ts-app.js';

describe('MyTsApp', () => {
  let element: MyTsApp;
  beforeEach(async () => {
    element = await fixture(html`<my-ts-app></my-ts-app>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
