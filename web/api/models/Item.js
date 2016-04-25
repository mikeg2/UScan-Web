/**
 * Item.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
        type: 'string',
        primaryKey: true,
        unique: true
    },
    type: {
        type: 'string'
    },
    name: {
        type: 'string'
    },
    brand: {
        type: 'string'
    },
    last_location_sensor_id: {
        type: 'string'
    },
    last_location_timestamp: {
        type: 'datetime'
    }
  }
};

