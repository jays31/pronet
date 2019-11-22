/**
 * Devices.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    ipadd: {
      type: 'string',
      required: true,
    },
    macadd: {
      type: 'string',
      required: true,
    },
    lati: {
      type: 'string',
      required: true,
    },
    longi: {
      type: 'string',
      required: true,
    },
    clients: {
      type: 'number',
      required: false,
    },
    status: {
      type: 'string',
      required: true,
    },
    nwname: {
      type: 'string',
      required: true,
    },
    deviceband: {
      type: 'string',
      required: true,
    },
  },
};