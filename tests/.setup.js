import { setupTest } from './mocha-lib/ember-mocha';

import { describe, it } from 'mocha';
const { expect } = require('chai');
global.expect = expect;
global.describe = expect;
global.it = it;
global.setupTest = setupTest;
