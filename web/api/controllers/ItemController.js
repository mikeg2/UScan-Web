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
                res.send(500, err);
            } else {
                res.send(200, a);
            }
        });
	},

    update: function(req, res) {
        var itemid = req.param('itemid');
        Item.update(itemid, req.body).exec(function(err, a) {
            if(err) {
                res.send(500);
            } else {
                res.send(200);
            }
        });
    },

    get: function(req, res) {
        var itemid = req.param('itemid');
        Item.findOne(itemid).exec(function(err, a) {
            if(err) {
                res.send(500);
            } else {
                res.send(a);
            }
        });
    },

    getAll: function(req, res) {
        var itemid = req.param('itemid');
        Item.find().exec(function(err, a) {
            if(err) {
                res.send(500);
            } else {
                res.send(a);
            }
        });
    },
};

