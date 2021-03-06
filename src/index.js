import Vue from 'vue';
window.Vue = Vue;

Vue.config.devtools = true;

import HawksearchVue from "./HawksearchVue";
window.HawksearchVue = HawksearchVue;
window.moment = require('moment-mini');

HawksearchVue.init();

import 'styles/app.scss';

export * from './components';

export { default as tConfig } from './i18n';
export { default as TrackingEvent } from './TrackingEvent';

export default HawksearchVue;
