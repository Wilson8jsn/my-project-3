'use strict';

/**
 * animals controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::animals.animals');
