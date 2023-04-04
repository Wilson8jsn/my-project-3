'use strict';

/**
 * animals router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::animals.animals');
