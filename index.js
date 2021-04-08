'use strict';

/*
 * @api public
 * @property {function} format
 * Both the construction method and set of exposed
 * formats.
 */
exports.format = require('./format');
exports.format.align = require('./align');
exports.format.errors = require('./errors');
exports.format.cli = require('./cli');
exports.format.combine = require('./combine');
exports.format.colorize = require('./colorize');
exports.format.json = require('./json');
exports.format.label = require('./label');
exports.format.logstash = require('./logstash');
exports.format.metadata = require('./metadata');
exports.format.ms = require('./ms');
exports.format.padLevels = require('./pad-levels');
exports.format.prettyPrint = require('./pretty-print');
exports.format.printf = require('./printf');
exports.format.simple = require('./simple');
exports.format.splat = require('./splat');
exports.format.timestamp = require('./timestamp');
exports.format.uncolorize = require('./uncolorize');

/*
 * @api public
 * @method {function} levels
 * Registers the specified levels with logform.
 */
exports.levels = require('./levels');
