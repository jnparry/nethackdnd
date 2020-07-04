function calculateItemDungeon() {
	var text = "ItemDugeon";
	var probabilityobject = new Probability({
		p: 0.1,
		f: function() {
			setText(text, "Weapon");
		}
	}, {
		p: 0.1,
		f: function() {
			setText(text, "Armor");
		}
	}, {
		p: 0.2,
		f: function() {
			setText(text, "Comestible");
		}
	}, {
		p: 0.08,
		f: function() {
			setText(text, "Tool");
		}
	}, {
		p: 0.16,
		f: function() {
			setText(text, "Potion");
		}
	}, {
		p: 0.16,
		f: function() {
			setText(text, "Scroll");
		}
	}, {
		p: 0.04,
		f: function() {
			setText(text, "Spellbook");
		}
	}, {
		p: 0.04,
		f: function() {
			setText(text, "Wand");
		}
	}, {
		p: 0.03,
		f: function() {
			setText(text, "Ring");
		}
	}, {
		p: 0.01,
		f: function() {
			setText(text, "Amulet");
		}
	}, {
		p: 0.08,
		f: function() {
			setText(text, "Gem");
		}
	});

	probabilityobject();
}

function calculateItemContainer() {
	var text = "ItemContainer";
	var probabilityobject = new Probability({
		p: 0.15,
		f: function() {
			setText(text, "Comestible");
		}
	}, {
		p: 0.07,
		f: function() {
			setText(text, "Gold");
		}
	}, {
		p: 0.18,
		f: function() {
			setText(text, "Potion");
		}
	}, {
		p: 0.18,
		f: function() {
			setText(text, "Scroll");
		}
	}, {
		p: 0.12,
		f: function() {
			setText(text, "Spellbook");
		}
	}, {
		p: 0.06,
		f: function() {
			setText(text, "Wand");
		}
	}, {
		p: 0.05,
		f: function() {
			setText(text, "Ring");
		}
	}, {
		p: 0.01,
		f: function() {
			setText(text, "Amulet");
		}
	}, {
		p: 0.18,
		f: function() {
			setText(text, "Gem");
		}
	});

	probabilityobject();
}

function calculateItemGehennom() {
	var text = "ItemGehennom";
	var probabilityobject = new Probability({
		p: 0.2,
		f: function() {
			setText(text, "Weapon");
		}
	}, {
		p: 0.2,
		f: function() {
			setText(text, "Armor");
		}
	}, {
		p: 0.16,
		f: function() {
			setText(text, "Comestible");
		}
	}, {
		p: 0.12,
		f: function() {
			setText(text, "Tool");
		}
	}, {
		p: 0.01,
		f: function() {
			setText(text, "Potion");
		}
	}, {
		p: 0.01,
		f: function() {
			setText(text, "Scroll");
		}
	}, {
		p: 0.08,
		f: function() {
			setText(text, "Wand");
		}
	}, {
		p: 0.08,
		f: function() {
			setText(text, "Ring");
		}
	}, {
		p: 0.04,
		f: function() {
			setText(text, "Amulet");
		}
	}, {
		p: 0.1,
		f: function() {
			setText(text, "Gem");
		}
	});

	probabilityobject();
}

function setText(elementId, textValue) {
	document.getElementById(elementId).value = textValue;
}


(function (root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        root.Probability = factory();
    }
})(this, function () {

    var toString = Object.prototype.toString,
        slice = Array.prototype.slice;

    function Probability() {

        var i = 0,
            l = 0,
            probas = [],
            functions = [],
            sum = 0,
            args = toString.call(arguments[0]) === '[object Array]' ? arguments[0] : slice.call(arguments);

        args.push({
            p: 0,
            f: function () {}
        });

        for (i = 0, l = args.length; i < l; i++) {
            var p = Math.abs(parseFloat(args[i].p)),
                f = args[i].f;

            if (isNaN(p) || typeof f !== 'function') {
                throw new TypeError('Probability.js: Invalid probability object in argument ' + i + '.');
            }

            if (/%/.test(args[i].p)) {
                p = p / 100.0;
            }

            sum += p;

            if (sum > 1.0) {
                throw new TypeError('Probability.js: Probability exceeds "1.0" (=100%) in argument ' + i + ': p="' + p + '" (=' +  p * 100 + '%), sum="' + sum + '" (=' +  sum * 100 + '%).');
            }

            probas[i] = sum;
            functions[i] = f;
        }

        return function probabilitilized() {
            var random = Math.random();
            for (i = 0, l = probas.length - 1; i < l && random >= probas[i]; i++) {
                /* intentionally left empty */
            }
            return functions[i].apply(this, arguments);
        };
    }

    return Probability;

});