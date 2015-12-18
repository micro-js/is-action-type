/**
 * Modules
 */

var isAction = require('@f/is-action')

/**
 * Expose isActionType
 */

module.exports = isActionType['default'] = isActionType

/**
 * Is action of type `type`
 * @param  {String}  type
 * @param  {Object}  action
 * @return {Boolean}
 */

function isActionType (type, action) {
  return isAction(action) && action.type === type
}
