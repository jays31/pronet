/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    userEmail:{
      type: 'string',
      required:true
    },
    userPassword:{
      type: 'string',
      required:true
    },
    userOrganizationName:{
      type: 'string',
      required:true
    },
  },

};

