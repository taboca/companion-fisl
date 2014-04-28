'use strict';

var Handlebars = require('hbsfy/runtime');
require('./lib/handlebars-helpers/helpers')(Handlebars);
var scheduleTemplate = require('../templates/partials/schedule.hbs');
Handlebars.registerPartial('app_menu', require('../templates/partials/app_menu.hbs'));
Handlebars.registerPartial('schedule', scheduleTemplate);
Handlebars.registerPartial('day_list', require('../templates/partials/day_list.hbs'));
Handlebars.registerPartial('time_list', require('../templates/partials/time_list.hbs'));
Handlebars.registerPartial('time_nav', require('../templates/partials/time_nav.hbs'));
Handlebars.registerPartial('timenav_day_times', require('../templates/partials/timenav_day_times.hbs'));
Handlebars.registerPartial('day_table', require('../templates/partials/day_table.hbs'));
Handlebars.registerPartial('day_table_rows', require('../templates/partials/day_table_rows.hbs'));
Handlebars.registerPartial('session', require('../templates/partials/session.hbs'));
Handlebars.registerPartial('notifications', require('../templates/partials/notifications.hbs'));

var templates = {
    app: require('../templates/partials/app.hbs'),
    schedule: scheduleTemplate
};

var FISLParser = require('./lib/fisl/feed-parser');

// if you want to bundle jQuery instead of using an extra
// <script> tag for it, uncomment the line below
// var jQuery = require('jquery');

var app = require('./lib/companion/app');
app(
    jQuery.noConflict(),
    FISLParser,
    templates
);