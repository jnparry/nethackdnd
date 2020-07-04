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

function calculateWeapon() {

}

function calculateArmor() {
	var text = "armorInput";
	var probabilityobject = new Probability({
		p: 0.008,
		f: function() {
			setText(text, "Hawaiian Shirt");
		}
	}, {
		p: 0.002,
		f: function() {
			setText(text, "T-shirt");
		}
	}, {
		p: 0.012,
		f: function() {
			setText(text, "Leather Jacket");
		}
	}, {
		p: 0.082,
		f: function() {
			setText(text, "Leather Armor");
		}
	}, {
		p: 0.02,
		f: function() {
			setText(text, "Orcish Ring Mail");
		}
	}, {
		p: 0.072,
		f: function() {
			setText(text, "Studded Leather Armor");
		}
	}, {
		p: 0.072,
		f: function() {
			setText(text, "Ring Mail");
		}
	}, {
		p: 0.072,
		f: function() {
			setText(text, "Scale Mail");
		}
	}, {
		p: 0.02,
		f: function() {
			setText(text, "Orcish Chain Mail");
		}
	}, {
		p: 0.072,
		f: function() {
			setText(text, "Chain Mail");
		}
	}, {
		p: 0.015,
		f: function() {
			setText(text, "Elven Mithril-Coat");
		}
	}, {
		p: 0.062,
		f: function() {
			setText(text, "Splint Mail");
		}
	}, {
		p: 0.072,
		f: function() {
			setText(text, "Banded Mail");
		}
	}, {
		p: 0.01,
		f: function() {
			setText(text, "Dwarvish Mithril-Coat");
		}
	}, {
		p: 0.025,
		f: function() {
			setText(text, "Bronze Plate Mail");
		}
	}, {
		p: 0.044,
		f: function() {
			setText(text, "Plate Mail");
		}
	}, {
		p: 0.01,
		f: function() {
			setText(text, "Crystal Plate Mail");
		}
	}, {
		p: 0.008,
		f: function() {
			setText(text, "Orcish Cloak");
		}
	}, {
		p: 0.008,
		f: function() {
			setText(text, "Dwarvish Cloak");
		}
	}, {
		p: 0.008,
		f: function() {
			setText(text, "Leather Cloak");
		}
	}, {
		p: 0.01,
		f: function() {
			setText(text, "Cloak of Displacement");
		}
	}, {
		p: 0.008,
		f: function() {
			setText(text, "Oilskin Cloak");
		}
	}, {
		p: 0.009,
		f: function() {
			setText(text, "Alchemy Smock");
		}
	}, {
		p: 0.01,
		f: function() {
			setText(text, "Cloak of Invisability");
		}
	}, {
		p: 0.002,
		f: function() {
			setText(text, "Cloak of Magic Resistance");
		}
	}, {
		p: 0.008,
		f: function() {
			setText(text, "Elven Cloak");
		}
	}, {
		p: 0.003,
		f: function() {
			setText(text, "Robe");
		}
	}, {
		p: 0.009,
		f: function() {
			setText(text, "Cloak of Protection");
		}
	}, {
		p: 0.003,
		f: function() {
			setText(text, "Dunce Cap");
		}
	}, {
		p: 0.003,
		f: function() {
			setText(text, "Cornuthaun");
		}
	}, {
		p: 0.002,
		f: function() {
			setText(text, "Dented Pot");
		}
	}, {
		p: 0.006,
		f: function() {
			setText(text, "Elven Leather Helm");
		}
	}, {
		p: 0.01,
		f: function() {
			setText(text, "Helmet");
		}
	}, {
		p: 0.006,
		f: function() {
			setText(text, "Orcish Helm");
		}
	}, {
		p: 0.006,
		f: function() {
			setText(text, "Helm of Brilliance");
		}
	}, {
		p: 0.006,
		f: function() {
			setText(text, "Helm of Opposite Alignment");
		}
	}, {
		p: 0.002,
		f: function() {
			setText(text, "Helm of Telepathy");
		}
	}, {
		p: 0.006,
		f: function() {
			setText(text, "Dwarvish Iron Helm");
		}
	}, {
		p: 0.016,
		f: function() {
			setText(text, "Leather Gloves");
		}
	}, {
		p: 0.008,
		f: function() {
			setText(text, "Gauntlets of Dexterity");
		}
	}, {
		p: 0.008,
		f: function() {
			setText(text, "Gauntlets of Fumbling");
		}
	}, {
		p: 0.008,
		f: function() {
			setText(text, "Gauntlets of Power");
		}
	}, {
		p: 0.006,
		f: function() {
			setText(text, "Small Shield");
		}
	}, {
		p: 0.002,
		f: function() {
			setText(text, "Orcish Shield");
		}
	}, {
		p: 0.002,
		f: function() {
			setText(text, "Uruk-hai Shield");
		}
	}, {
		p: 0.002,
		f: function() {
			setText(text, "Elven Shield");
		}
	}, {
		p: 0.004,
		f: function() {
			setText(text, "Dwarvish Round Shield");
		}
	}, {
		p: 0.007,
		f: function() {
			setText(text, "Large Shield");
		}
	}, {
		p: 0.003,
		f: function() {
			setText(text, "Shield of Reflection");
		}
	}, {
		p: 0.025,
		f: function() {
			setText(text, "Low Boots");
		}
	}, {
		p: 0.012,
		f: function() {
			setText(text, "Elven Boots");
		}
	}, {
		p: 0.012,
		f: function() {
			setText(text, "Kicking Boots");
		}
	}, {
		p: 0.012,
		f: function() {
			setText(text, "Fumble Boots");
		}
	}, {
		p: 0.012,
		f: function() {
			setText(text, "Levetation Boots");
		}
	}, {
		p: 0.012,
		f: function() {
			setText(text, "Jumping Boots");
		}
	}, {
		p: 0.012,
		f: function() {
			setText(text, "Speed Boots");
		}
	}, {
		p: 0.012,
		f: function() {
			setText(text, "Water Walking Boots");
		}
	}, {
		p: 0.015,
		f: function() {
			setText(text, "High Boots");
		}
	}, {
		p: 0.007,
		f: function() {
			setText(text, "Iron Shoes");
		}
	});

	probabilityobject();
}

function setBUCAndItem(B, U, C, item, text) {
	var probabilityobject = new Probability({
		p: B,
		f: function() {
			setText(text, "Blessed ".concat(item));
		}
	}, {
		p: U,
		f: function() {
			setText(text, "Uncursed ".concat(item));
		}
	}, {
		p: C,
		f: function() {
			setText(text, "Cursed ".concat(item));
		}
	});
}

function setText(elementId, textValue) {
	document.getElementById(elementId).value = textValue;
}

/*
 * Probability.js: Call JavaScript functions by probability.
 *
 * Copyright (c) 2012 Florian Schäfer (florian.schaefer@gmail.com)
 * Released under MIT license.
 *
 * Version: 0.0.1
 *
 * https://github.com/fschaefer/Probability.js/blob/master/Probability.js 
 */

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
            sum = parseFloat(0),
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

            sum = parseFloat(parseFloat(sum) + parseFloat(p)).toFixed(2);

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