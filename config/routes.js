/**
 * Route Mappings
 * (sails.config.routes)
 */

module.exports.routes = {
  '/': { view: 'pages/homepage' },
  '/networkstatus': {view: 'pages/networkstatus'},
  '/device' : { view : 'pages/devices'},
  '/geocoding' : { view : 'pages/geocoding'},
  '/UserController/createRegisterUserRequest': 'UserController.createRegisterUserRequest',
};
