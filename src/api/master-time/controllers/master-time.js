'use strict';

/**
 * master-time controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::master-time.master-time');
