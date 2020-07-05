/*
*
*
* CALCULATION FUNCTIONS
* 
*
*/
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
	var text = "weaponInput";
	var B = .09;
	var U = .79;
	var C = .12;

	var probabilityobject = new Probability({
		p: 0.012,
		f: function() {
			setBUCAndItem(B, U, C, text, "Orcish Dagger");
		}
	}, {
		p: 0.03,
		f: function() {
			setBUCAndItem(B, U, C, text, "Dagger");
		}
	}, {
		p: 0.003,
		f: function() {
			setBUCAndItem(B, U, C, text, "Silver Dagger");
		}
	}, {
		p: 0.01,
		f: function() {
			setBUCAndItem(B, U, C, text, "Elven Dagger");
		}
	}, {
		p: 0.02,
		f: function() {
			setBUCAndItem(B, U, C, text, "Knife");
		}
	}, {
		p: 0.005,
		f: function() {
			setBUCAndItem(B, U, C, text, "Stiletto");
		}
	}, {
		p: 0.04,
		f: function() {
			setBUCAndItem(B, U, C, text, "Axe");
		}
	}, {
		p: 0.01,
		f: function() {
			setBUCAndItem(B, U, C, text, "Battle Axe");
		}
	}, {
		p: 0.013,
		f: function() {
			setBUCAndItem(B, U, C, text, "Dwarvish Mattock");
		}
	}, {
		p: 0.003,
		f: function() {
			setBUCAndItem(B, U, C, text, "Orcish Short Sword");
		}
	}, {
		p: 0.008,
		f: function() {
			setBUCAndItem(B, U, C, text, "Short Sword");
		}
	}, {
		p: 0.002,
		f: function() {
			setBUCAndItem(B, U, C, text, "Dwarvish Short Sword");
		}
	}, {
		p: 0.002,
		f: function() {
			setBUCAndItem(B, U, C, text, "Elven Short Sword");
		}
	}, {
		p: 0.008,
		f: function() {
			setBUCAndItem(B, U, C, text, "Broadsword");
		}
	}, {
		p: 0.004,
		f: function() {
			setBUCAndItem(B, U, C, text, "Elven Broadsword");
		}
	}, {
		p: 0.05,
		f: function() {
			setBUCAndItem(B, U, C, text, "Long Sword");
		}
	}, {
		p: 0.004,
		f: function() {
			setBUCAndItem(B, U, C, text, "Katana");
		}
	}, {
		p: 0.022,
		f: function() {
			setBUCAndItem(B, U, C, text, "Two-Handed Sword");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scimitar");
		}
	}, {
		p: 0.006,
		f: function() {
			setBUCAndItem(B, U, C, text, "Silver Saber");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(B, U, C, text, "Club");
		}
	}, {
		p: 0.008,
		f: function() {
			setBUCAndItem(B, U, C, text, "Aklys");
		}
	}, {
		p: 0.04,
		f: function() {
			setBUCAndItem(B, U, C, text, "Mace");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(B, U, C, text, "Morning Star");
		}
	}, {
		p: 0.04,
		f: function() {
			setBUCAndItem(B, U, C, text, "Flail");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "War Hammer");
		}
	}, {
		p: 0.011,
		f: function() {
			setBUCAndItem(B, U, C, text, "Quarterstaff");
		}
	}, {
		p: 0.005,
		f: function() {
			setBUCAndItem(B, U, C, text, "Partisan");
		}
	}, {
		p: 0.006,
		f: function() {
			setBUCAndItem(B, U, C, text, "Fauchard");
		}
	}, {
		p: 0.008,
		f: function() {
			setBUCAndItem(B, U, C, text, "Glavie");
		}
	}, {
		p: 0.004,
		f: function() {
			setBUCAndItem(B, U, C, text, "Bec-de-cordin");
		}
	}, {
		p: 0.005,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spetum");
		}
	}, {
		p: 0.005,
		f: function() {
			setBUCAndItem(B, U, C, text, "Lucern Hammer");
		}
	}, {
		p: 0.006,
		f: function() {
			setBUCAndItem(B, U, C, text, "Guisarme");
		}
	}, {
		p: 0.005,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ranseur");
		}
	}, {
		p: 0.004,
		f: function() {
			setBUCAndItem(B, U, C, text, "Voulge");
		}
	}, {
		p: 0.004,
		f: function() {
			setBUCAndItem(B, U, C, text, "Bill-Guisarme");
		}
	}, {
		p: 0.004,
		f: function() {
			setBUCAndItem(B, U, C, text, "Bardiche");
		}
	}, {
		p: 0.008,
		f: function() {
			setBUCAndItem(B, U, C, text, "Halberd");
		}
	}, {
		p: 0.013,
		f: function() {
			setBUCAndItem(B, U, C, text, "Orcish Spear");
		}
	}, {
		p: 0.05,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spear");
		}
	}, {
		p: 0.002,
		f: function() {
			setBUCAndItem(B, U, C, text, "Silver Spear");
		}
	}, {
		p: 0.01,
		f: function() {
			setBUCAndItem(B, U, C, text, "Elven Spear");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(B, U, C, text, "Dwarvish Spear");
		}
	}, {
		p: 0.01,
		f: function() {
			setBUCAndItem(B, U, C, text, "Javelin");
		}
	}, {
		p: 0.008,
		f: function() {
			setBUCAndItem(B, U, C, text, "Trident");
		}
	}, {
		p: 0.004,
		f: function() {
			setBUCAndItem(B, U, C, text, "Lance");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(B, U, C, text, "Orcish Bow");
		}
	}, {
		p: 0.02,
		f: function() {
			setBUCAndItem(B, U, C, text, "Orcish Arrow");
		}
	}, {
		p: 0.024,
		f: function() {
			setBUCAndItem(B, U, C, text, "Bow");
		}
	}, {
		p: 0.055,
		f: function() {
			setBUCAndItem(B, U, C, text, "Arrow");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(B, U, C, text, "Elven Bow");
		}
	}, {
		p: 0.02,
		f: function() {
			setBUCAndItem(B, U, C, text, "Elven Arrow");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ya");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(B, U, C, text, "Silver Arrow");
		}
	}, {
		p: 0.04,
		f: function() {
			setBUCAndItem(B, U, C, text, "Sling");
		}
	}, {
		p: 0.045,
		f: function() {
			setBUCAndItem(B, U, C, text, "Crossbow");
		}
	}, {
		p: 0.055, 
		f: function() {
			setBUCAndItem(B, U, C, text, "Crossbow Bolt");
		}
	}, {
		p: 0.06,
		f: function() {
			setBUCAndItem(B, U, C, text, "Dart");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Shurikin");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Boomarang");
		}
	}, {
		p: 0.002,
		f: function() {
			setBUCAndItem(B, U, C, text, "Bullwhip");
		}
	});

	probabilityobject();
}

function calculateArmor() {
	var text = "armorInput";
	var B = .09;
	var U = .79;
	var C = .12;

	var probabilityobject = new Probability({
		p: 0.008,
		f: function() {
			setBUCAndItem(B, U, C, text, "Hawaiian Shirt");
		}
	}, {
		p: 0.002,
		f: function() {
			setBUCAndItem(B, U, C, text, "T-shirt");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(B, U, C, text, "Leather Jacket");
		}
	}, {
		p: 0.082,
		f: function() {
			setBUCAndItem(B, U, C, text, "Leather Armor");
		}
	}, {
		p: 0.02,
		f: function() {
			setBUCAndItem(B, U, C, text, "Orcish Ring Mail");
		}
	}, {
		p: 0.072,
		f: function() {
			setBUCAndItem(B, U, C, text, "Studded Leather Armor");
		}
	}, {
		p: 0.072,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring Mail");
		}
	}, {
		p: 0.072,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scale Mail");
		}
	}, {
		p: 0.02,
		f: function() {
			setBUCAndItem(B, U, C, text, "Orcish Chain Mail");
		}
	}, {
		p: 0.072,
		f: function() {
			setBUCAndItem(B, U, C, text, "Chain Mail");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Elven Mithril-Coat");
		}
	}, {
		p: 0.062,
		f: function() {
			setBUCAndItem(B, U, C, text, "Splint Mail");
		}
	}, {
		p: 0.072,
		f: function() {
			setBUCAndItem(B, U, C, text, "Banded Mail");
		}
	}, {
		p: 0.01,
		f: function() {
			setBUCAndItem(B, U, C, text, "Dwarvish Mithril-Coat");
		}
	}, {
		p: 0.025,
		f: function() {
			setBUCAndItem(B, U, C, text, "Bronze Plate Mail");
		}
	}, {
		p: 0.044,
		f: function() {
			setBUCAndItem(B, U, C, text, "Plate Mail");
		}
	}, {
		p: 0.01,
		f: function() {
			setBUCAndItem(B, U, C, text, "Crystal Plate Mail");
		}
	}, {
		p: 0.008,
		f: function() {
			setBUCAndItem(B, U, C, text, "Orcish Cloak");
		}
	}, {
		p: 0.008,
		f: function() {
			setBUCAndItem(B, U, C, text, "Dwarvish Cloak");
		}
	}, {
		p: 0.008,
		f: function() {
			setBUCAndItem(B, U, C, text, "Leather Cloak");
		}
	}, {
		p: 0.01,
		f: function() {
			setBUCAndItem(B, U, C, text, "Cloak of Displacement");
		}
	}, {
		p: 0.008,
		f: function() {
			setBUCAndItem(B, U, C, text, "Oilskin Cloak");
		}
	}, {
		p: 0.009,
		f: function() {
			setBUCAndItem(B, U, C, text, "Alchemy Smock");
		}
	}, {
		p: 0.01,
		f: function() {
			setBUCAndItem(B, U, C, text, "Cloak of Invisability");
		}
	}, {
		p: 0.002,
		f: function() {
			setBUCAndItem(B, U, C, text, "Cloak of Magic Resistance");
		}
	}, {
		p: 0.008,
		f: function() {
			setBUCAndItem(B, U, C, text, "Elven Cloak");
		}
	}, {
		p: 0.003,
		f: function() {
			setBUCAndItem(B, U, C, text, "Robe");
		}
	}, {
		p: 0.009,
		f: function() {
			setBUCAndItem(B, U, C, text, "Cloak of Protection");
		}
	}, {
		p: 0.003,
		f: function() {
			setBUCAndItem(B, U, C, text, "Dunce Cap");
		}
	}, {
		p: 0.003,
		f: function() {
			setBUCAndItem(B, U, C, text, "Cornuthaun");
		}
	}, {
		p: 0.002,
		f: function() {
			setBUCAndItem(B, U, C, text, "Dented Pot");
		}
	}, {
		p: 0.006,
		f: function() {
			setBUCAndItem(B, U, C, text, "Elven Leather Helm");
		}
	}, {
		p: 0.01,
		f: function() {
			setBUCAndItem(B, U, C, text, "Helmet");
		}
	}, {
		p: 0.006,
		f: function() {
			setBUCAndItem(B, U, C, text, "Orcish Helm");
		}
	}, {
		p: 0.006,
		f: function() {
			setBUCAndItem(B, U, C, text, "Helm of Brilliance");
		}
	}, {
		p: 0.006,
		f: function() {
			setBUCAndItem(.01, .09, .9, text, "Helm of Opposite Alignment");
		}
	}, {
		p: 0.002,
		f: function() {
			setBUCAndItem(B, U, C, text, "Helm of Telepathy");
		}
	}, {
		p: 0.006,
		f: function() {
			setBUCAndItem(B, U, C, text, "Dwarvish Iron Helm");
		}
	}, {
		p: 0.016,
		f: function() {
			setBUCAndItem(B, U, C, text, "Leather Gloves");
		}
	}, {
		p: 0.008,
		f: function() {
			setBUCAndItem(B, U, C, text, "Gauntlets of Dexterity");
		}
	}, {
		p: 0.008,
		f: function() {
			setBUCAndItem(.01, .09, .9, text, "Gauntlets of Fumbling");
		}
	}, {
		p: 0.008,
		f: function() {
			setBUCAndItem(B, U, C, text, "Gauntlets of Power");
		}
	}, {
		p: 0.006,
		f: function() {
			setBUCAndItem(B, U, C, text, "Small Shield");
		}
	}, {
		p: 0.002,
		f: function() {
			setBUCAndItem(B, U, C, text, "Orcish Shield");
		}
	}, {
		p: 0.002,
		f: function() {
			setBUCAndItem(B, U, C, text, "Uruk-hai Shield");
		}
	}, {
		p: 0.002,
		f: function() {
			setBUCAndItem(B, U, C, text, "Elven Shield");
		}
	}, {
		p: 0.004,
		f: function() {
			setBUCAndItem(B, U, C, text, "Dwarvish Round Shield");
		}
	}, {
		p: 0.007,
		f: function() {
			setBUCAndItem(B, U, C, text, "Large Shield");
		}
	}, {
		p: 0.003,
		f: function() {
			setBUCAndItem(B, U, C, text, "Shield of Reflection");
		}
	}, {
		p: 0.025,
		f: function() {
			setBUCAndItem(B, U, C, text, "Low Boots");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(B, U, C, text, "Elven Boots");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(B, U, C, text, "Kicking Boots");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(.01, .09, .9, text, "Fumble Boots");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(.01, .09, .9, text, "Levitation Boots");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(B, U, C, text, "Jumping Boots");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(B, U, C, text, "Speed Boots");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(B, U, C, text, "Water Walking Boots");
		}
	}, {
		p: 0.015, 
		f: function() {
			setBUCAndItem(B, U, C, text, "High Boots");
		}
	}, {
		p: 0.007,
		f: function() {
			setBUCAndItem(B, U, C, text, "Iron Shoes");
		}
	});

	probabilityobject();
}

function calculateComestible() {
	var text = "comestibleInput";
	var B = 0;
	var U = 1;
	var C = 0;
	var probabilityobject = new Probability({
		p: 0.380,
		f: function() {
			setBUCAndItem(B, U, C, text, "Food Ration");
		}
	}, {
		p: 0.02,
		f: function() {
			setBUCAndItem(B, U, C, text, "Cram Ration");
		}
	}, {
		p: 0.140,
		f: function() {
			setBUCAndItem(B, U, C, text, "Tripe Ration");
		}
	}, {
		p: 0.02,
		f: function() {
			setBUCAndItem(B, U, C, text, "Lembas Wafer");
		}
	}, {
		p: 0.025,
		f: function() {
			setBUCAndItem(B, U, C, text, "Cream Pie");
		}
	}, {
		p: 0.025,
		f: function() {
			setBUCAndItem(B, U, C, text, "Pancake");
		}
	}, {
		p: 0.013,
		f: function() {
			setBUCAndItem(B, U, C, text, "Candy Bar");
		}
	}, {
		p: 0.055,
		f: function() {
			setBUCAndItem(B, U, C, text, "Fortune Cookie");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Apple");
		}
	}, {
		p: 0.01,
		f: function() {
			setBUCAndItem(B, U, C, text, "Orange");
		}
	}, {
		p: 0.01,
		f: function() {
			setBUCAndItem(B, U, C, text, "Banana");
		}
	}, {
		p: 0.007,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spring of Wolfsbane");
		}
	}, {
		p: 0.01,
		f: function() {
			setBUCAndItem(B, U, C, text, "Pear");
		}
	}, {
		p: 0.075,
		f: function() {
			setBUCAndItem(B, U, C, text, "Slime Mold");
		}
	}, {
		p: 0.007,
		f: function() {
			setBUCAndItem(B, U, C, text, "Clove of Garlic");
		}
	}, {
		p: 0.01,
		f: function() {
			setBUCAndItem(B, U, C, text, "Melon");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Carrot");
		}
	}, {
		p: 0.003,
		f: function() {
			setBUCAndItem(B, U, C, text, "Eucalyptus Leaf");
		}
	}, {
		p: 0.085,
		f: function() {
			setBUCAndItem(B, U, C, text, "Egg");
		}
	}, {
		p: 0.062,
		f: function() {
			setBUCAndItem(.05, .9, .05, text, "Tin");
		}
	}, {
		p: 0.013,
		f: function() {
			setBUCAndItem(.05, .9, .05, text, "Tin of Spinach");
		}
	});

	probabilityobject();
}

function calculateTool() {
	var text = "toolInput";
	var B = 0;
	var U = 1;
	var C = 0;
	var probabilityobject = new Probability({
		p: 0.05,
		f: function() {
			setBUCAndItem(B, U, C, text, "Blindfold");
		}
	}, {
		p: 0.005,
		f: function() {
			setBUCAndItem(B, U, C, text, "Lenses");
		}
	}, {
		p: 0.05,
		f: function() {
			setBUCAndItem(B, U, C, text, "Towel");
		}
	}, {
		p: 0.065,
		f: function() {
			setBUCAndItem(B, U, C, text, "Leash");
		}
	}, {
		p: 0.005,
		f: function() {
			setBUCAndItem(B, U, C, text, "Saddle");
		}
	}, {
		p: 0.02,
		f: function() {
			setBUCAndItem(B, U, C, text, "Bag of Holding");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Chest");
		}
	}, {
		p: 0.005,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ice Box");
		}
	}, {
		p: 0.005,
		f: function() {
			setBUCAndItem(B, U, C, text, "Oilskin Sack");
		}
	}, {
		p: 0.04,
		f: function() {
			setBUCAndItem(B, U, C, text, "Large Box");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Sack");
		}
	}, {
		p: 0.004,
		f: function() {
			setBUCAndItem(B, U, C, text, "Bugle");
		}
	}, {
		p: 0.02,
		f: function() {
			setBUCAndItem(B, U, C, text, "Fire Horn");
		}
	}, {
		p: 0.002,
		f: function() {
			setBUCAndItem(B, U, C, text, "Frost Horn");
		}
	}, {
		p: 0.002,
		f: function() {
			setBUCAndItem(B, U, C, text, "Magic Flute");
		}
	}, {
		p: 0.002,
		f: function() {
			setBUCAndItem(B, U, C, text, "Magic Harp");
		}
	}, {
		p: 0.005,
		f: function() {
			setBUCAndItem(B, U, C, text, "Tooled Horn");
		}
	}, {
		p: 0.004,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wooden Flute");
		}
	}, {
		p: 0.004,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wooden Harp");
		}
	}, {
		p: 0.002,
		f: function() {
			setBUCAndItem(B, U, C, text, "Bell");
		}
	}, {
		p: 0.002,
		f: function() {
			setBUCAndItem(B, U, C, text, "Drum of Earthquake");
		}
	}, {
		p: 0.004,
		f: function() {
			setBUCAndItem(B, U, C, text, "Leather Drum");
		}
	}, {
		p: 0.03,
		f: function() {
			setBUCAndItem(B, U, C, text, "Magic Whistle");
		}
	}, {
		p: 0.1,
		f: function() {
			setBUCAndItem(B, U, C, text, "Tin Whistle");
		}
	}, {
		p: 0.03,
		f: function() {
			setBUCAndItem(B, U, C, text, "Brass Lantern");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Magic Lamp");
		}
	}, {
		p: 0.045,
		f: function() {
			setBUCAndItem(B, U, C, text, "Oil Lamp");
		}
	}, {
		p: 0.02,
		f: function() {
			setBUCAndItem(B, U, C, text, "Tallow Candle");
		}
	}, {
		p: 0.005,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wax Candle");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Credit Card");
		}
	}, {
		p: 0.06,
		f: function() {
			setBUCAndItem(B, U, C, text, "Lock Pick");
		}
	}, {
		p: 0.08,
		f: function() {
			setBUCAndItem(B, U, C, text, "Skeleton Key");
		}
	}, {
		p: 0.02,
		f: function() {
			setBUCAndItem(B, U, C, text, "Grappling hook");
		}
	}, {
		p: 0.005,
		f: function() {
			setBUCAndItem(B, U, C, text, "Pick-Axe");
		}
	}, {
		p: 0.006,
		f: function() {
			setBUCAndItem(B, U, C, text, "Bag of Tricks");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Can of Grease");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Crystle Ball");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Expensive Camera");
		}
	}, {
		p: 0.025,
		f: function() {
			setBUCAndItem(B, U, C, text, "Figurine");
		}
	}, {
		p: 0.002,
		f: function() {
			setBUCAndItem(B, U, C, text, "Horn of Plenty");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Magic Marker");
		}
	}, {
		p: 0.045,
		f: function() {
			setBUCAndItem(B, U, C, text, "Mirror");
		}
	}, {
		p: 0.025,
		f: function() {
			setBUCAndItem(B, U, C, text, "Stethoscope");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Tin Opener");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Tinning Kit");
		}
	});

	probabilityobject();
}

function calculateNumMonsters() {
	var numMonsters = 0;
	var numMinotaurs = 0;
	var elementId = "MonsterSpawn";
	var resultText = '';

	var location = document.getElementById('Locations').value;
	var numRooms = document.getElementById('NumRooms').value;

	if (location == 'Maze') {
		var probabilityobject = new Probability(
		{
			p: 0.34,
			f: function() {
				numMonsters = getRandomInt(7, 12);
				numMinotaurs = getRandomInt(0, 3);
			}
		});
		probabilityobject();
		resultText = numMonsters + ' Monsters and ' + numMinotaurs + ' Minotaurs';
	}
	else if (location === '' || numRooms == '' || numRooms < 1) {
		resultText = 'Error: Need Number of Rooms, Dummy';
	} 
	else {
		var probabilityobject = new Probability(
		{
			p: 0.34,
			f: function() {
				numMonsters++;
			}
		});
		for (let i = 0; i < numRooms; i++) {
			probabilityobject();
		}
		resultText = numMonsters + ' Monsters'; 
	}
	setText(elementId, resultText);
}

function calculateMonsterType() {
	var location = document.getElementById('Locations').value;
	var floorLevel = document.getElementById('FloorLevel').value;
	var playerLevel = document.getElementById('PlayerLevel').value;
	var numRooms = document.getElementById('NumRooms').value;

	if (location === '' || numRooms == '' || numRooms < 1 || floorLevel == '' || 
		floorLevel < 1 || playerLevel == '' || playerLevel < 1) {
		resultText = 'Error: Need Valid Inputs, Dummy';
	}

	// generatedInGehennom - 0 if NOT generated in Gehennom, 1 if it can be generated in Gehennom, 2 if ONLY generated in Gehennom
	var listOfMonsters = [
		{ name: 'Giant Ant', frequency: 3, difficulty: 4, alignment: 0, generatedInGehennom: 0},
		{ name: 'Soldier Ant', frequency: 2, difficulty: 6, alignment: 0, generatedInGehennom: 0},
		{ name: 'Fire Ant', frequency: 1, difficulty: 6, alignment: 0, generatedInGehennom: 0},
		{ name: 'Killer Bee', frequency: 2, difficulty: 5, alignment: 0, generatedInGehennom: 0},
		{ name: 'Giant Beetle', frequency: 3, difficulty: 6, alignment: 0, generatedInGehennom: 0},
		{ name: 'Acid Blood', frequency: 2, difficulty: 2, alignment: 0, generatedInGehennom: 0},
		{ name: 'Quivering Blob', frequency: 2, difficulty: 6, alignment: 0, generatedInGehennom: 0},
		{ name: 'Gelatinous Cube', frequency: 2, difficulty: 8, alignment: 0, generatedInGehennom: 0},
		{ name: 'Chickatrice', frequency: 1, difficulty: 7, alignment: 0, generatedInGehennom: 0},
		{ name: 'Cockatrice', frequency: 5, difficulty: 8, alignment: 0, generatedInGehennom: 0},
		{ name: 'Pyrolisk', frequency: 1, difficulty: 8, alignment: 0, generatedInGehennom: 0},
		{ name: 'Jackal', frequency: 3, difficulty: 1, alignment: 0, generatedInGehennom: 0},
		{ name: 'Fox', frequency: 1, difficulty: 1, alignment: 0, generatedInGehennom: 0},
		{ name: 'Coyote', frequency: 1, difficulty: 2, alignment: 0, generatedInGehennom: 0},
		{ name: 'Dingo', frequency: 1, difficulty: 5, alignment: 0, generatedInGehennom: 0},
		{ name: 'Little Dog', frequency: 1, difficulty: 3, alignment: 0, generatedInGehennom: 0},
		{ name: 'Dog', frequency: 1, difficulty: 5, alignment: 0, generatedInGehennom: 0},
		{ name: 'Large Dog', frequency: 1, difficulty: 7, alignment: 0, generatedInGehennom: 0},
		{ name: 'Wolf', frequency: 2, difficulty: 6, alignment: 0, generatedInGehennom: 0},
		{ name: 'Werewolf', frequency: 1, difficulty: 6, alignment: -7, generatedInGehennom: 0},
		{ name: 'Werejackal', frequency: 1, difficulty: 3, alignment: -7, generatedInGehennom: 0},
		{ name: 'Wererat', frequency: 1, difficulty: 3, alignment: -7, generatedInGehennom: 0},
		{ name: 'Warg', frequency: 2, difficulty: 8, alignment: -5, generatedInGehennom: 0},
		{ name: 'Winter Wolf Cub', frequency: 2, difficulty: 7, alignment: -5, generatedInGehennom: 0},
		{ name: 'Winter Wolf', frequency: 1, difficulty: 9, alignment: 0, generatedInGehennom: 0},
		{ name: 'Hell Hound Pup', frequency: 1, difficulty: 9, alignment: -5, generatedInGehennom: 0},
		{ name: 'Hell Hound', frequency: 1, difficulty: 14, alignment: 0, generatedInGehennom: 0},
		{ name: 'Gas Spore', frequency: 1, difficulty: 2, alignment: 0, generatedInGehennom: 0},
		{ name: 'Floating Eye', frequency: 5, difficulty: 3, alignment: 0, generatedInGehennom: 0},
		{ name: 'Freezing Sphere', frequency: 2, difficulty: 8, alignment: 0, generatedInGehennom: 1},
		{ name: 'Flaming Sphere', frequency: 2, difficulty: 8, alignment: 0, generatedInGehennom: 1},
		{ name: 'Shocking Sphere', frequency: 2, difficulty: 8, alignment: 0, generatedInGehennom: 1},
		{ name: 'Kitten', frequency: 1, difficulty: 3, alignment: 0, generatedInGehennom: 0},
		{ name: 'Housecat', frequency: 1, difficulty: 5, alignment: 0, generatedInGehennom: 0},
		{ name: 'Large Cat', frequency: 1, difficulty: 7, alignment: 0, generatedInGehennom: 0},
		{ name: 'Jaguar', frequency: 2, difficulty: 6, alignment: 0, generatedInGehennom: 1},
		{ name: 'Lynx', frequency: 1, difficulty: 7, alignment: 0, generatedInGehennom: 0},
		{ name: 'Panther', frequency: 1, difficulty: 7, alignment: 0, generatedInGehennom: 0},
		{ name: 'Tiger', frequency: 2, difficulty: 8, alignment: 0, generatedInGehennom: 0},
		{ name: 'Gremlin', frequency: 2, difficulty: 8, alignment: -9, generatedInGehennom: 0},
		{ name: 'Gargoyle', frequency: 2, difficulty: 8, alignment: -9, generatedInGehennom: 0},
		{ name: 'Winged Gargoyle', frequency: 1, difficulty: 11, alignment: -12, generatedInGehennom: 1},
		{ name: 'Hobbit', frequency: 2, difficulty: 2, alignment: 6, generatedInGehennom: 0},
		{ name: 'Dwarf', frequency: 3, difficulty: 4, alignment: 4, generatedInGehennom: 0},
		{ name: 'Bugbear', frequency: 1, difficulty: 5, alignment: -6, generatedInGehennom: 0},
		{ name: 'Dwarf Lord', frequency: 2, difficulty: 6, alignment: 5, generatedInGehennom: 0},
		{ name: 'Dwarf King', frequency: 1, difficulty: 8, alignment: 6, generatedInGehennom: 0},
		{ name: 'Mind Flayer', frequency: 1, difficulty: 13, alignment: -8, generatedInGehennom: 0},
		{ name: 'Master Mind Flayer', frequency: 1, difficulty: 13, alignment: -8, generatedInGehennom: 0},
		{ name: 'Manes', frequency: 1, difficulty: 3, alignment: -7, generatedInGehennom: 0},
		{ name: 'Homunculus', frequency: 2, difficulty: 3, alignment: -7, generatedInGehennom: 0},
		{ name: 'Imp', frequency: 1, difficulty: 4, alignment: -7, generatedInGehennom: 0},
		{ name: 'Lemure', frequency: 1, difficulty: 5, alignment: -7, generatedInGehennom: 0},
		{ name: 'Quasit', frequency: 2, difficulty: 7, alignment: -7, generatedInGehennom: 1},
		{ name: 'Tengu', frequency: 3, difficulty: 7, alignment: 7, generatedInGehennom: 0},
		{ name: 'Blue Jelly', frequency: 2, difficulty: 5, alignment: 0, generatedInGehennom: 0},
		{ name: 'Spotted Jelly', frequency: 1, difficulty: 6, alignment: 0, generatedInGehennom: 0},
		{ name: 'Ochre Jelly', frequency: 2, difficulty: 8, alignment: 0, generatedInGehennom: 0},
		{ name: 'Kobold', frequency: 1, difficulty: 1, alignment: -2, generatedInGehennom: 0},
		{ name: 'Large Kobold', frequency: 1, difficulty: 2, alignment: -3, generatedInGehennom: 0},
		{ name: 'Kobold Lord', frequency: 1, difficulty: 3, alignment: -4, generatedInGehennom: 0},
		{ name: 'Kobold Shaman', frequency: 1, difficulty: 4, alignment: -4, generatedInGehennom: 0},
		{ name: 'Leprechaun', frequency: 4, difficulty: 4, alignment: 0, generatedInGehennom: 0},
		{ name: 'Small Mimic', frequency: 2, difficulty: 8, alignment: 0, generatedInGehennom: 0},
		{ name: 'Large Mimic', frequency: 1, difficulty: 9, alignment: 0, generatedInGehennom: 0},
		{ name: 'Giant Mimic', frequency: 1, difficulty: 11, alignment: 0, generatedInGehennom: 0},
		{ name: 'Nymph', frequency: 2, difficulty: 5, alignment: 0, generatedInGehennom: 0},
		{ name: 'Goblin', frequency: 2, difficulty: 1, alignment: -3, generatedInGehennom: 0},
		{ name: 'Hobgoblin', frequency: 2, difficulty: 3, alignment: -4, generatedInGehennom: 0},
		{ name: 'Hill Orc', frequency: 2, difficulty: 4, alignment: -4, generatedInGehennom: 0},
		{ name: 'Mordor Orc', frequency: 1, difficulty: 5, alignment: -5, generatedInGehennom: 0},
		{ name: 'Uruk-hai', frequency: 1, difficulty: 5, alignment: -4, generatedInGehennom: 0},
		{ name: 'Orc Shaman', frequency: 1, difficulty: 5, alignment: -5, generatedInGehennom: 0},
		{ name: 'Orc Captain', frequency: 1, difficulty: 7, alignment: -5, generatedInGehennom: 0},
		{ name: 'Rock Piercer', frequency: 4, difficulty: 4, alignment: 0, generatedInGehennom: 0},
		{ name: 'Iron Piercer', frequency: 2, difficulty: 6, alignment: 0, generatedInGehennom: 0},
		{ name: 'Glass Piercer', frequency: 1, difficulty: 9, alignment: 0, generatedInGehennom: 0},
		{ name: 'Rothe', frequency: 4, difficulty: 4, alignment: 0, generatedInGehennom: 0},
		{ name: 'Mumak', frequency: 1, difficulty: 7, alignment: -2, generatedInGehennom: 0},
		{ name: 'Leocrotta', frequency: 2, difficulty: 8, alignment: 0, generatedInGehennom: 0},
		{ name: 'Wumpus', frequency: 1, difficulty: 9, alignment: 0, generatedInGehennom: 0},
		{ name: 'Titanothere', frequency: 2, difficulty: 13, alignment: 0, generatedInGehennom: 1},
		{ name: 'Baluchitherium', frequency: 2, difficulty: 15, alignment: 0, generatedInGehennom: 0},
		{ name: 'Mastodon', frequency: 1, difficulty: 22, alignment: 0, generatedInGehennom: 0},
		{ name: 'Sewer Rat', frequency: 1, difficulty: 1, alignment: 0, generatedInGehennom: 0},
		{ name: 'Giant Rat', frequency: 2, difficulty: 2, alignment: 0, generatedInGehennom: 0},
		{ name: 'Rabid Rat', frequency: 1, difficulty: 4, alignment: 0, generatedInGehennom: 0},
		{ name: 'Rock Mole', frequency: 2, difficulty: 4, alignment: 0, generatedInGehennom: 0},
		{ name: 'Cave Spider', frequency: 2, difficulty: 3, alignment: 0, generatedInGehennom: 0},
		{ name: 'Centipede', frequency: 1, difficulty: 4, alignment: 0, generatedInGehennom: 0},
		{ name: 'Giant Spider', frequency: 1, difficulty: 7, alignment: 0, generatedInGehennom: 0},
		{ name: 'Scorpion', frequency: 2, difficulty: 8, alignment: 0, generatedInGehennom: 1},
		{ name: 'Lurker Above', frequency: 2, difficulty: 12, alignment: 0, generatedInGehennom: 0},
		{ name: 'Trapper', frequency: 2, difficulty: 14, alignment: 0, generatedInGehennom: 0},
		{ name: 'White Unicorn', frequency: 2, difficulty: 6, alignment: 7, generatedInGehennom: 0},
		{ name: 'Gray Unicorn', frequency: 1, difficulty: 6, alignment: 0, generatedInGehennom: 0},
		{ name: 'Black Unicorn', frequency: 1, difficulty: 6, alignment: -7, generatedInGehennom: 0},
		{ name: 'Pony', frequency: 2, difficulty: 4, alignment: 0, generatedInGehennom: 0},
		{ name: 'Horse', frequency: 2, difficulty: 7, alignment: 0, generatedInGehennom: 1},
		{ name: 'Warhorse', frequency: 2, difficulty: 9, alignment: 0, generatedInGehennom: 1},
		{ name: 'Fog Cloud', frequency: 2, difficulty: 4, alignment: 0, generatedInGehennom: 0},
		{ name: 'Dust Vortex', frequency: 2, difficulty: 6, alignment: 0, generatedInGehennom: 0},
		{ name: 'Ice Vortex', frequency: 1, difficulty: 7, alignment: 0, generatedInGehennom: 0},
		{ name: 'Energy Vortex', frequency: 1, difficulty: 9, alignment: 0, generatedInGehennom: 0},
		{ name: 'Steam Vortex', frequency: 2, difficulty: 9, alignment: 0, generatedInGehennom: 0},
		{ name: 'Fire Vortex', frequency: 1, difficulty: 10, alignment: 0, generatedInGehennom: 0},
		{ name: 'Long Worm', frequency: 2, difficulty: 10, alignment: 0, generatedInGehennom: 1},
		{ name: 'Purple Worm', frequency: 2, difficulty: 17, alignment: 0, generatedInGehennom: 1},
		{ name: 'Grid Bug', frequency: 3, difficulty: 1, alignment: 0, generatedInGehennom: 0},
		{ name: 'Xan', frequency: 3, difficulty: 9, alignment: 0, generatedInGehennom: 1},
		{ name: 'Yellow Light', frequency: 4, difficulty: 5, alignment: 0, generatedInGehennom: 0},
		{ name: 'Black Light', frequency: 2, difficulty: 7, alignment: 0, generatedInGehennom: 0},
		{ name: 'Zruty', frequency: 2, difficulty: 11, alignment: 0, generatedInGehennom: 1},
		{ name: 'Couatl', frequency: 1, difficulty: 11, alignment: 7, generatedInGehennom: 0},
		{ name: 'Aleax', frequency: 1, difficulty: 12, alignment: 7, generatedInGehennom: 0},
		{ name: 'Angel', frequency: 1, difficulty: 19, alignment: 12, generatedInGehennom: 0},
		{ name: 'Ki-Rin', frequency: 1, difficulty: 21, alignment: 15, generatedInGehennom: 0},
		{ name: 'Archon', frequency: 1, difficulty: 26, alignment: 15, generatedInGehennom: 0},
		{ name: 'Bat', frequency: 1, difficulty: 2, alignment: 0, generatedInGehennom: 0},
		{ name: 'Giant Bat', frequency: 2, difficulty: 3, alignment: 0, generatedInGehennom: 0},
		{ name: 'Vampire Bat', frequency: 2, difficulty: 7, alignment: 0, generatedInGehennom: 0},
		{ name: 'Raven', frequency: 2, difficulty: 6, alignment: 0, generatedInGehennom: 1},
		{ name: 'Plains Centaur', frequency: 1, difficulty: 6, alignment: 0, generatedInGehennom: 1},
		{ name: 'Forest Centaur', frequency: 1, difficulty: 8, alignment: -1, generatedInGehennom: 1},
		{ name: 'Mountain Centaur', frequency: 1, difficulty: 9, alignment: -3, generatedInGehennom: 1},
		{ name: 'Gray Dragon', frequency: 1, difficulty: 20, alignment: 4, generatedInGehennom: 1},
		{ name: 'Silver Dragon', frequency: 1, difficulty: 20, alignment: 4, generatedInGehennom: 1},
		{ name: 'Red Dragon', frequency: 1, difficulty: 20, alignment: -4, generatedInGehennom: 1},
		{ name: 'White Dragon', frequency: 1, difficulty: 20, alignment: -5, generatedInGehennom: 1},
		{ name: 'Black Dragon', frequency: 1, difficulty: 20, alignment: -6, generatedInGehennom: 1},
		{ name: 'Blue Dragon', frequency: 1, difficulty: 20, alignment: -7, generatedInGehennom: 1},
		{ name: 'Orange Dragon', frequency: 1, difficulty: 20, alignment: 5, generatedInGehennom: 1},
		{ name: 'Green Dragon', frequency: 1, difficulty: 20, alignment: 6, generatedInGehennom: 1},
		{ name: 'Yellow Dragon', frequency: 1, difficulty: 20, alignment: 7, generatedInGehennom: 1},
		{ name: 'Stalker', frequency: 3, difficulty: 9, alignment: 0, generatedInGehennom: 0},
		{ name: 'Air Elemental', frequency: 1, difficulty: 10, alignment: 0, generatedInGehennom: 1},
		{ name: 'Earth Elemental', frequency: 1, difficulty: 10, alignment: 0, generatedInGehennom: 1},
		{ name: 'Fire Elemental', frequency: 1, difficulty: 10, alignment: 0, generatedInGehennom: 1},
		{ name: 'Water Elemental', frequency: 1, difficulty: 10, alignment: 0, generatedInGehennom: 1},
		{ name: 'Lichen', frequency: 4, difficulty: 1, alignment: 0, generatedInGehennom: 0},
		{ name: 'Brown Mold', frequency: 1, difficulty: 2, alignment: 0, generatedInGehennom: 0},
		{ name: 'Green Mold', frequency: 1, difficulty: 2, alignment: 0, generatedInGehennom: 0},
		{ name: 'Red Mold', frequency: 1, difficulty: 2, alignment: 0, generatedInGehennom: 0},
		{ name: 'Yellow Mold', frequency: 2, difficulty: 2, alignment: 0, generatedInGehennom: 0},
		{ name: 'Shrieker', frequency: 1, difficulty: 2, alignment: 0, generatedInGehennom: 0},
		{ name: 'Violet Fungus', frequency: 2, difficulty: 5, alignment: 0, generatedInGehennom: 0},
		{ name: 'Gnome', frequency: 1, difficulty: 3, alignment: 0, generatedInGehennom: 0},
		{ name: 'Gnome Lord', frequency: 2, difficulty: 4, alignment: 0, generatedInGehennom: 0},
		{ name: 'Gnomish Wizard', frequency: 1, difficulty: 5, alignment: 0, generatedInGehennom: 0},
		{ name: 'Gnome King', frequency: 1, difficulty: 6, alignment: 0, generatedInGehennom: 0},
		{ name: 'Stone Giant', frequency: 1, difficulty: 8, alignment: 2, generatedInGehennom: 0},
		{ name: 'Hill Giant', frequency: 1, difficulty: 10, alignment: -2, generatedInGehennom: 0},
		{ name: 'Fire Giant', frequency: 1, difficulty: 11, alignment: 2, generatedInGehennom: 0},
		{ name: 'Frost Giant', frequency: 1, difficulty: 13, alignment: -3, generatedInGehennom: 0},
		{ name: 'Storm Giant', frequency: 1, difficulty: 19, alignment: -3, generatedInGehennom: 0},
		{ name: 'Ettin', frequency: 1, difficulty: 13, alignment: 0, generatedInGehennom: 0},
		{ name: 'Titan', frequency: 1, difficulty: 20, alignment: 9, generatedInGehennom: 0},
		{ name: 'Jabberwock', frequency: 1, difficulty: 18, alignment: 0, generatedInGehennom: 0},
		{ name: 'Lich', frequency: 1, difficulty: 14, alignment: -9, generatedInGehennom: 1},
		{ name: 'Demilich', frequency: 1, difficulty: 18, alignment: -12, generatedInGehennom: 1},
		{ name: 'Master Lich', frequency: 1, difficulty: 21, alignment: -15, generatedInGehennom: 1},
		{ name: 'Arch-Lich', frequency: 1, difficulty: 29, alignment: -15, generatedInGehennom: 1},
		{ name: 'Kobold Mummy', frequency: 1, difficulty: 4, alignment: -2, generatedInGehennom: 1},
		{ name: 'Gnome Mummy', frequency: 1, difficulty: 5, alignment: -3, generatedInGehennom: 1},
		{ name: 'Orc Mummy', frequency: 1, difficulty: 6, alignment: -4, generatedInGehennom: 1},
		{ name: 'Dwarf Mummy', frequency: 1, difficulty: 6, alignment: -4, generatedInGehennom: 1},
		{ name: 'Elf Mummy', frequency: 1, difficulty: 7, alignment: -5, generatedInGehennom: 1},
		{ name: 'Human Mummy', frequency: 1, difficulty: 7, alignment: -5, generatedInGehennom: 1},
		{ name: 'Ettin Mummy', frequency: 1, difficulty: 8, alignment: -6, generatedInGehennom: 1},
		{ name: 'Giant Mummy', frequency: 1, difficulty: 10, alignment: -7, generatedInGehennom: 1},
		{ name: 'Red Naga', frequency: 1, difficulty: 8, alignment: -4, generatedInGehennom: 0},
		{ name: 'Black Naga', frequency: 1, difficulty: 10, alignment: 4, generatedInGehennom: 0},
		{ name: 'Golden Naga', frequency: 1, difficulty: 13, alignment: 5, generatedInGehennom: 0},
		{ name: 'Gardian Naga', frequency: 1, difficulty: 16, alignment: 7, generatedInGehennom: 0},
		{ name: 'Ogre', frequency: 1, difficulty: 7, alignment: -3, generatedInGehennom: 0},
		{ name: 'Ogre Lord', frequency: 2, difficulty: 9, alignment: -5, generatedInGehennom: 0},
		{ name: 'Ogre King', frequency: 2, difficulty: 11, alignment: -7, generatedInGehennom: 0},
		{ name: 'Gray Ooze', frequency: 2, difficulty: 4, alignment: 0, generatedInGehennom: 0},
		{ name: 'Brown Pudding', frequency: 1, difficulty: 6, alignment: 0, generatedInGehennom: 0},
		{ name: 'Black Pudding', frequency: 1, difficulty: 12, alignment: 0, generatedInGehennom: 0},
		{ name: 'Green Slime', frequency: 1, difficulty: 8, alignment: 0, generatedInGehennom: 2},
		{ name: 'Quantum Mechanic', frequency: 3, difficulty: 9, alignment: 0, generatedInGehennom: 0},
		{ name: 'Rust Monster', frequency: 2, difficulty: 8, alignment: 0, generatedInGehennom: 1},
		{ name: 'Disenchanter', frequency: 2, difficulty: 14, alignment: -3, generatedInGehennom: 1},
		{ name: 'Garter Snake', frequency: 1, difficulty: 3, alignment: 0, generatedInGehennom: 0},
		{ name: 'Snake', frequency: 2, difficulty: 6, alignment: 0, generatedInGehennom: 0},
		{ name: 'Pit Viper', frequency: 1, difficulty: 9, alignment: 0, generatedInGehennom: 0},
		{ name: 'Python', frequency: 1, difficulty: 8, alignment: 0, generatedInGehennom: 0},
		{ name: 'Cobra', frequency: 1, difficulty: 10, alignment: 0, generatedInGehennom: 0},
		{ name: 'Troll', frequency: 3, difficulty: 9, alignment: -3, generatedInGehennom: 0},
		{ name: 'Ice Troll', frequency: 1, difficulty: 12, alignment: -3, generatedInGehennom: 0},
		{ name: 'Rock Troll', frequency: 1, difficulty: 12, alignment: -3, generatedInGehennom: 0},
		{ name: 'Olog-Hai', frequency: 1, difficulty: 16, alignment: -7, generatedInGehennom: 0},
		{ name: 'Umber Hulk', frequency: 2, difficulty: 12, alignment: 0, generatedInGehennom: 1},
		{ name: 'Vampire', frequency: 1, difficulty: 12, alignment: -8, generatedInGehennom: 1},
		{ name: 'Vampire Lord', frequency: 1, difficulty: 14, alignment: -9, generatedInGehennom: 1},
		{ name: 'Barrow Wight', frequency: 1, difficulty: 7, alignment: -3, generatedInGehennom: 0},
		{ name: 'Wraith', frequency: 2, difficulty: 8, alignment: -6, generatedInGehennom: 1},
		{ name: 'Nazgul', frequency: 1, difficulty: 17, alignment: -17, generatedInGehennom: 0},
		{ name: 'Xorn', frequency: 1, difficulty: 11, alignment: 0, generatedInGehennom: 1},
		{ name: 'Monkey', frequency: 1, difficulty: 4, alignment: 0, generatedInGehennom: 0},
		{ name: 'Ape', frequency: 2, difficulty: 6, alignment: 0, generatedInGehennom: 0},
		{ name: 'Owlbear', frequency: 3, difficulty: 7, alignment: 0, generatedInGehennom: 0},
		{ name: 'Yeti', frequency: 2, difficulty: 7, alignment: 0, generatedInGehennom: 0},
		{ name: 'Carnivorous Ape', frequency: 1, difficulty: 8, alignment: 0, generatedInGehennom: 0},
		{ name: 'Sasquatch', frequency: 1, difficulty: 9, alignment: 2, generatedInGehennom: 0},
		{ name: 'Kobold Zombie', frequency: 1, difficulty: 1, alignment: -2, generatedInGehennom: 1},
		{ name: 'Gnome Zombie', frequency: 1, difficulty: 2, alignment: -2, generatedInGehennom: 1},
		{ name: 'Orc Zombie', frequency: 1, difficulty: 3, alignment: -3, generatedInGehennom: 1},
		{ name: 'Wolf Zombie', frequency: 1, difficulty: 3, alignment: -3, generatedInGehennom: 1},
		{ name: 'Elf Zombie', frequency: 1, difficulty: 4, alignment: -3, generatedInGehennom: 1},
		{ name: 'Human Zombie', frequency: 1, difficulty: 5, alignment: -3, generatedInGehennom: 1},
		{ name: 'Ettin Zombie', frequency: 1, difficulty: 7, alignment: -4, generatedInGehennom: 1},
		{ name: 'Giant Zombie', frequency: 1, difficulty: 9, alignment: -4, generatedInGehennom: 1},
		{ name: 'Ghoul', frequency: 1, difficulty: 5, alignment: -2, generatedInGehennom: 0},
		{ name: 'Straw Golem', frequency: 1, difficulty: 4, alignment: 0, generatedInGehennom: 0},
		{ name: 'Clay Golem', frequency: 1, difficulty: 12, alignment: 0, generatedInGehennom: 0},
		{ name: 'Paper Golem', frequency: 1, difficulty: 4, alignment: 0, generatedInGehennom: 0},
		{ name: 'Rope Golem', frequency: 1, difficulty: 6, alignment: 0, generatedInGehennom: 0},
		{ name: 'Gold Golem', frequency: 1, difficulty: 6, alignment: 0, generatedInGehennom: 0},
		{ name: 'Leather Golem', frequency: 1, difficulty: 7, alignment: 0, generatedInGehennom: 0},
		{ name: 'Wood Golem', frequency: 1, difficulty: 8, alignment: 0, generatedInGehennom: 0},
		{ name: 'Flesh Golem', frequency: 1, difficulty: 10, alignment: 0, generatedInGehennom: 0},
		{ name: 'Stone Golem', frequency: 1, difficulty: 15, alignment: 0, generatedInGehennom: 0},
		{ name: 'Glass Golem', frequency: 1, difficulty: 18, alignment: 0, generatedInGehennom: 0},
		{ name: 'Iron Golem', frequency: 1, difficulty: 22, alignment: 0, generatedInGehennom: 0},
		{ name: 'Woodland Elf', frequency: 2, difficulty: 6, alignment: -5, generatedInGehennom: 1},
		{ name: 'Gray Elf', frequency: 2, difficulty: 8, alignment: -7, generatedInGehennom: 1},
		{ name: 'Green Elf', frequency: 2, difficulty: 7, alignment: -6, generatedInGehennom: 1},
		{ name: 'Elf Lord', frequency: 2, difficulty: 11, alignment: -9, generatedInGehennom: 1},
		{ name: 'Elven King', frequency: 1, difficulty: 11, alignment: -10, generatedInGehennom: 1},
		{ name: 'Soldier', frequency: 1, difficulty: 8, alignment: -2, generatedInGehennom: 0},
		{ name: 'Sergeant', frequency: 1, difficulty: 10, alignment: -3, generatedInGehennom: 0},
		{ name: 'Lieutenant', frequency: 1, difficulty: 12, alignment: -4, generatedInGehennom: 0},
		{ name: 'Captain', frequency: 1, difficulty: 14, alignment: -5, generatedInGehennom: 0},
		{ name: 'Horned Devil', frequency: 2, difficulty: 9, alignment: 11, generatedInGehennom: 2},
		{ name: 'Succubus', frequency: 1, difficulty: 8, alignment: -9, generatedInGehennom: 1},
		{ name: 'Incubus', frequency: 1, difficulty: 8, alignment: -9, generatedInGehennom: 1},
		{ name: 'Erinys', frequency: 2, difficulty: 10, alignment: 10, generatedInGehennom: 2},
		{ name: 'Barbed Devil', frequency: 2, difficulty: 10, alignment: 8, generatedInGehennom: 2},
		{ name: 'Marilith', frequency: 1, difficulty: 11, alignment: -12, generatedInGehennom: 2},
		{ name: 'Vrock', frequency: 2, difficulty: 11, alignment: -9, generatedInGehennom: 2},
		{ name: 'Hezrou', frequency: 2, difficulty: 12, alignment: -10, generatedInGehennom: 2},
		{ name: 'Bone Devil', frequency: 2, difficulty: 13, alignment: -9, generatedInGehennom: 2},
		{ name: 'Ice Devil', frequency: 2, difficulty: 14, alignment: -12, generatedInGehennom: 2},
		{ name: 'Nalfeshnee', frequency: 1, difficulty: 15, alignment: -11, generatedInGehennom: 2},
		{ name: 'Pit Fiend', frequency: 2, difficulty: 16, alignment: -13, generatedInGehennom: 2},
		{ name: 'Balrog', frequency: 1, difficulty: 20, alignment: -14, generatedInGehennom: 2},
		{ name: 'Sandestin', frequency: 1, difficulty: 15, alignment: -5, generatedInGehennom: 2},
		{ name: 'Newt', frequency: 5, difficulty: 1, alignment: 0, generatedInGehennom: 0},
		{ name: 'Gecko', frequency: 5, difficulty: 2, alignment: 0, generatedInGehennom: 0},
		{ name: 'Iguana', frequency: 5, difficulty: 3, alignment: 0, generatedInGehennom: 0},
		{ name: 'Crocodile', frequency: 1, difficulty: 7, alignment: 0, generatedInGehennom: 0},
		{ name: 'Lizard', frequency: 5, difficulty: 6, alignment: 0, generatedInGehennom: 0},
		{ name: 'Chameleon', frequency: 2, difficulty: 7, alignment: 0, generatedInGehennom: 0},
		{ name: 'Salamander', frequency: 1, difficulty: 12, alignment: -9, generatedInGehennom: 0},
	];
}
/*
*
*
* HELPER FUNCTIIONS
*
*
*/
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function setBUCAndItem(B, U, C, text, item) {
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

	probabilityobject();
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