'use strict';

/**
 * animals service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::animals.animals');
