'use strict';

/**
 * master-time router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::master-time.master-time');
