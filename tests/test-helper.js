import Application from 'git-portfolio/app';
import config from 'git-portfolio/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
