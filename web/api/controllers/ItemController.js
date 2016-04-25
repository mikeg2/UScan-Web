/**
 * ItemController
 *
 * @description :: Server-side logic for managing items
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res) {
		Item.create(req.body).exec(function(err, a) {
            if(err) {
                res.error(500);
            } else {
                res.send(200);
            }
        });
	},

    update: function(req, res) {
        var itemid = req.param('itemid');
        Item.update(itemid, req.body).exec(function(err, a) {
            if(err) {
                res.error(500);
            } else {
                res.send(200);
            }
        });
    },

    get: function(req, res) {
        var itemid = req.param('itemid');
        Item.find(itemid).exec(function(err, a) {
            if(err) {
                res.error(500);
            } else {
                res.send(a);
            }
        });
    },
};

