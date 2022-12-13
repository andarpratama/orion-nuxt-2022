'use strict';

/**
 * master-time service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::master-time.master-time');
