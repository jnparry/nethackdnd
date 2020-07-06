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
		p: 0.002,
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
		p: 0.02,
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
			setBUCAndItem(B, U, C, text, "Crystal Ball");
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

function calculatePotion() {
	var text = "potionInput";
	var B = .125;
	var U = .75;
	var C = .125;
	var probabilityobject = new Probability({
		p: 0.069,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of Water");
		}
	}, {
		p: 0.042,
		f: function() {
			setBUCAndItem(B, U, C, text, "Booze");
		}
	}, {
		p: 0.042,
		f: function() {
			setBUCAndItem(B, U, C, text, "Fruit Juice");
		}
	}, {
		p: 0.042,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of See Invisible");
		}
	}, {
		p: 0.042,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of sickness");
		}
	}, {
		p: 0.042,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of Confusion");
		}
	}, {
		p: 0.047,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of Extra Healing");
		}
	}, {
		p: 0.04,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of Hallucination");
		}
	}, {
		p: 0.057,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of Healing");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(1, 0, 0, text, "Holy water");
		}
	}, {
		p: 0.01,
		f: function() {
			setBUCAndItem(0, 0, 1, text, "Unholy Water");
		}
	}, {
		p: 0.04,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of Restore Ability");
		}
	}, {
		p: 0.042,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of Sleeping");
		}
	}, {
		p: 0.04,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of blindness");
		}
	}, {
		p: 0.042,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of Gain Energy");
		}
	}, {
		p: 0.04,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of Invisability");
		}
	}, {
		p: 0.04,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of Monster Detection");
		}
	}, {
		p: 0.042,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of object Detection");
		}
	}, {
		p: 0.02,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of Enlightenment");
		}
	}, {
		p: 0.01,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of Full Healing");
		}
	}, {
		p: 0.042,
		f: function() {
			setBUCAndItem(B, U, C, text, "Poiton of Levitation");
		}
	}, {
		p: 0.01,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of Polymorph");
		}
	}, {
		p: 0.042,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of Speed");
		}
	}, {
		p: 0.01,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of Acid");
		}
	}, {
		p: 0.03,
		f: function() {
			setBUCAndItem(B, U, C, text, "Oil");
		}
	}, {
		p: 0.042,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of Gain Ability");
		}
	}, {
		p: 0.02,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of Gain Level");
		}
	}, {
		p: 0.042,
		f: function() {
			setBUCAndItem(B, U, C, text, "Potion of Paralysis");
		}
	});

	probabilityobject();
}

function calculateScroll() {
	var text = "scrollInput";
	var B = .125;
	var U = .75;
	var C = .125;
	var probabilityobject = new Probability({
		p: 0.18,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scroll of Identify");
		}
	}, {
		p: 0.09,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scroll of Light");
		}
	}, {
		p: 0.028,
		f: function() {
			setBUCAndItem(B, U, C, text, "Blank Paper");
		}
	}, {
		p: 0.08,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scroll of Enchant Weapon");
		}
	}, {
		p: 0.063,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scroll of Enchant Armor");
		}
	}, {
		p: 0.065,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scroll of Remove Curse");
		}
	}, {
		p: 0.053,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scroll of Confuse Monster");
		}
	}, {
		p: 0.045,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scroll of Destroy Armor");
		}
	}, {
		p: 0.03,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scroll of Fire");
		}
	}, {
		p: 0.025,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scroll of Food Detection");
		}
	}, {
		p: 0.033,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scroll of Gold Detection");
		}
	}, {
		p: 0.045,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scroll of Magic Mapping");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scroll of Scare Monster");
		}
	}, {
		p: 0.055,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scroll of Teleportaion");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scroll of Amnesia");
		}
	}, {
		p: 0.045,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scroll of Create Monster");
		}
	}, {
		p: 0.018,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scroll of Earth");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scroll of Taming");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scroll of Charging");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scroll of Genocide");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scroll of Punishment");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Scroll of Stinking Cloud");
		}
	});

	probabilityobject();
}

function calculateSpellbook() {
	var text = "spellbookInput";
	var B = .03;
	var U = .94;
	var C = .03;
	var probabilityobject = new Probability({
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Force Bolt");
		}
	}, {
		p: 0.01,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Drain Life");
		}
	}, {
		p: 0.045,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Magic Missile");
		}
	}, {
		p: 0.01,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Cone Of Cold");
		}
	}, {
		p: 0.02,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Fireball");
		}
	}, {
		p: 0.005,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Finger of Death");
		}
	}, {
		p: 0.018,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Protection");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Create Monster");
		}
	}, {
		p: 0.025,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Remove Curse");
		}
	}, {
		p: 0.01,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Create Familiar");
		}
	}, {
		p: 0.016,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Turn Undead");
		}
	}, {
		p: 0.043,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Detect Monster");
		}
	}, {
		p: 0.045,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Light");
		}
	}, {
		p: 0.03,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Detect Food");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Clairvoyance");
		}
	}, {
		p: 0.02,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Detect Unseen");
		}
	}, {
		p: 0.02,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Identify");
		}
	}, {
		p: 0.02,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Detect Treasure");
		}
	}, {
		p: 0.018,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Magic Mapping");
		}
	}, {
		p: 0.05,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Sleep");
		}
	}, {
		p: 0.03,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Confuse Monster");
		}
	}, {
		p: 0.03,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Slow Monster");
		}
	}, {
		p: 0.025,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Cause Fear");
		}
	}, {
		p: 0.02,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Charm Monster");
		}
	}, {
		p: 0.02,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Jumping");
		}
	}, {
		p: 0.033,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Haste Self");
		}
	}, {
		p: 0.025,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Invisability");
		}
	}, {
		p: 0.02,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Levitation");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Teleport Away");
		}
	}, {
		p: 0.04,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Healing");
		}
	}, {
		p: 0.025,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Cure blindness");
		}
	}, {
		p: 0.032,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Cure sickness");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Extra Healing");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Stone to Flesh");
		}
	}, {
		p: 0.025,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Restore Ability");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Knock");
		}
	}, {
		p: 0.03,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Wizard Lock");
		}
	}, {
		p: 0.02,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Dig");
		}
	}, {
		p: 0.01,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Polymorph");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Spellbook of Cancellation");
		}
	});

	probabilityobject();
}

function calculateWand() {
	var text = "wandInput";
	var B = .03;
	var U = .94;
	var C = .03;
	var probabilityobject = new Probability({
		p: 0.095,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Light");
		}
	}, {
		p: 0.025,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Nothing");
		}
	}, {
		p: 0.055,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Digging");
		}
	}, {
		p: 0.015,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Enlightenment");
		}
	}, {
		p: 0.025,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Locking");
		}
	}, {
		p: 0.05,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Magic Missile");
		}
	}, {
		p: 0.045,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Make Invisible");
		}
	}, {
		p: 0.025,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Opening");
		}
	}, {
		p: 0.03,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Probing");
		}
	}, {
		p: 0.05,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Secret Door Detection");
		}
	}, {
		p: 0.05,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Slow Monster");
		}
	}, {
		p: 0.05,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Speed Monster");
		}
	}, {
		p: 0.075,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Striking");
		}
	}, {
		p: 0.05,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Undead Turning");
		}
	}, {
		p: 0.04,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Cold");
		}
	}, {
		p: 0.04,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Fire");
		}
	}, {
		p: 0.04,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Lightning");
		}
	}, {
		p: 0.05,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Sleep");
		}
	}, {
		p: 0.045,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Cancellation");
		}
	}, {
		p: 0.045,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Create Monster");
		}
	}, {
		p: 0.045,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Polymorph");
		}
	}, {
		p: 0.045,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Teleportaion");
		}
	}, {
		p: 0.005,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Death");
		}
	}, {
		p: 0.005,
		f: function() {
			setBUCAndItem(B, U, C, text, "Wand of Wishing");
		}
	});

	probabilityobject();
}

function calculateRing() {
	var text = "ringInput";
	var B = .16;
	var U = .42;
	var C = .42;
	var probabilityobject = new Probability({
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Adorment");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(0, .1, .9, text, "Ring of Hunger");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Protection");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Protection from Shape Shifting");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Stealth");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Sustain Ability");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Warning");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(0, .1, .9, text, "Ring of Aggravate Monster");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Cold Resistance");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Gain Strength");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Increase Accuracy");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Increase Damage");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Invisability");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Poison Resistance");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of See Invisible");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Shock Resistance");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Fire Resistance");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Free Action");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Levitation");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Regeneration");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Searching");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Slow Digestion");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(0, .1, .9, text, "Ring of Teleportaion");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Conflict");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(0, .1, .9, text, "Ring of Polymorph");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Polymorph Control");
		}
	}, {
		p: 0.035,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ring of Teleportaion Control");
		}
	});

	probabilityobject();
}

function calculateAmulet() {
	var text = "amuletInput";
	var B = .05;
	var U = .9;
	var C = .05;
	var probabilityobject = new Probability({
		p: 0.13,
		f: function() {
			setBUCAndItem(.005, .09, .905, text, "Amulet of Change");
		}
	}, {
		p: 0.175,
		f: function() {
			setBUCAndItem(B, U, C, text, "Amulet of ESP");
		}
	}, {
		p: 0.075,
		f: function() {
			setBUCAndItem(B, U, C, text, "Amulet of Life Saving");
		}
	}, {
		p: 0.065,
		f: function() {
			setBUCAndItem(B, U, C, text, "Amulet of Magical Breathing");
		}
	}, {
		p: 0.075,
		f: function() {
			setBUCAndItem(B, U, C, text, "Amulet of Reflection");
		}
	}, {
		p: 0.135,
		f: function() {
			setBUCAndItem(.005, .09, .905, text, "Amulet of Restful Sleep");
		}
	}, {
		p: 0.135,
		f: function() {
			setBUCAndItem(.005, .09, .905, text, "Amulet of Strangulation");
		}
	}, {
		p: 0.045,
		f: function() {
			setBUCAndItem(B, U, C, text, "Amulet of Unchanging");
		}
	}, {
		p: 0.165,
		f: function() {
			setBUCAndItem(B, U, C, text, "Amulet of Versus Poison");
		}
	});

	probabilityobject();
}

function calculateGem() {
	var text = "gemInput";
	var B = 0;
	var U = 1;
	var C = 0;
	var probabilityobject = new Probability({
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Dilithium Crystal");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Diamond");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Ruby");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Jacinth Stone");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Sapphire");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Black Opal");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Emerald");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Turquoise Stone");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Citrine Stone");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Aquamarine Stone");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Amber Stone");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Topaz Stone");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Jet Stone");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Opal");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Chrysoberyl Stone");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Garnet Stone");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Amathyst Stone");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Jasper Stone");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Fluorite Stone");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Jade Stone");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Obsidian Stone");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Agate Stone");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Worthless Piece of White Glass");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Worthless Piece of Blue Glass");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Worthless Piece of Red Glass");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Worthless Piece of Yellowish Brown Glass");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Worthless Piece of Orange Glass");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Worthless Piece of Yellow Glass");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Worthless Piece of Black Glass");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Worthless Piece of Green Glass");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Worthless Piece of Violet Glass");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Luckstone");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(0, 0, 1, text, "Loadstone");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Touchstone");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Flint Stone");
		}
	}, {
		p: 0.027,
		f: function() {
			setBUCAndItem(B, U, C, text, "Rock");
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
	var totalMonsterFreq = 0;
	var elementId = "MonsterType"
	var location = document.getElementById('Locations').value;
	var floorLevel = document.getElementById('FloorLevel').value;
	var playerLevel = document.getElementById('PlayerLevel').value;
	var numRooms = document.getElementById('NumRooms').value;

	if (location === '' || numRooms == '' || numRooms < 1 || floorLevel == '' || 
		floorLevel < 1 || playerLevel == '' || playerLevel < 1) {
		resultText = 'Error: Need Valid Inputs, Dummy';
		setText(elementId, resultText);
		return;
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

	var playerAndFloorAvg = (parseFloat(playerLevel) + parseFloat(floorLevel)) / 2;
	var sixthOfFloorLevel = parseFloat(floorLevel / 6);

	for (let i = 0; i < listOfMonsters.length; i++) 
	{
		if (listOfMonsters[i].difficulty <= playerAndFloorAvg &&
			listOfMonsters[i].difficulty > sixthOfFloorLevel)
		{
			if (location === 'Gehennom')
			{
				if (listOfMonsters[i].generatedInGehennom == 1 || listOfMonsters[i].generatedInGehennom == 2 && listOfMonsters[i].alignment <= 0)
				{
					totalMonsterFreq += listOfMonsters[i].frequency;
				}
				else
				{
					listOfMonsters[i].frequency = 0;
				}
			}
			else
			{
				if (listOfMonsters[i].generatedInGehennom != 2)
				{
					if (location === 'Gnome') {
						var monsterAlighnmet = parseFloat(listOfMonsters[i].alignment);
						if (monsterAlighnmet >= -12 && monsterAlighnmet <= -5) {
							listOfMonsters[i].frequency += 1;
						}
						else if (monsterAlighnmet >= -4 && monsterAlighnmet <= 3) {
							listOfMonsters[i].frequency += 2;
						}
						else if (monsterAlighnmet >= 4 && monsterAlighnmet <= 11) {
							listOfMonsters[i].frequency += 3;
						}
						else if (monsterAlighnmet >= 12 && monsterAlighnmet <= 19) {
							listOfMonsters[i].frequency += 4;
						}
						else {
							listOfMonsters[i].frequency += 5;
						}
					}
					totalMonsterFreq += listOfMonsters[i].frequency;
				}
				else
				{
					listOfMonsters[i].frequency = 0;
				}
			}
		}
		else
		{
			listOfMonsters[i].frequency = 0;
		}
	}

	var probabilityobject = new Probability({
		p: parseFloat(listOfMonsters[0].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Giant Ant');
		}
	}, {
		p: parseFloat(listOfMonsters[1].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Soldier Ant');
		}
	}, {
		p: parseFloat(listOfMonsters[2].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Fire Ant');
		}
	}, {
		p: parseFloat(listOfMonsters[3].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Killer Bee');
		}
	}, {
		p: parseFloat(listOfMonsters[4].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Giant Beetle');
		}
	}, {
		p: parseFloat(listOfMonsters[5].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Acid Blob');
		}
	}, {
		p: parseFloat(listOfMonsters[6].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Quivering Blob');
		}
	}, {
		p: parseFloat(listOfMonsters[7].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Gelatinous Cube');
		}
	}, {
		p: parseFloat(listOfMonsters[8].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Chickatrice');
		}
	}, {
		p: parseFloat(listOfMonsters[9].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Cockatrice');
		}
	}, {
		p: parseFloat(listOfMonsters[10].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Pyrolisk');
		}
	}, {
		p: parseFloat(listOfMonsters[11].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Jackal');
		}
	}, {
		p: parseFloat(listOfMonsters[12].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Fox');
		}
	}, {
		p: parseFloat(listOfMonsters[13].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Coyote');
		}
	}, {
		p: parseFloat(listOfMonsters[14].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Dingo');
		}
	}, {
		p: parseFloat(listOfMonsters[15].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Little Dog');
		}
	}, {
		p: parseFloat(listOfMonsters[16].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Dog');
		}
	}, {
		p: parseFloat(listOfMonsters[17].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Large Dog');
		}
	}, {
		p: parseFloat(listOfMonsters[18].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Wolf');
		}
	}, {
		p: parseFloat(listOfMonsters[19].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Werewolf');
		}
	}, {
		p: parseFloat(listOfMonsters[20].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Werejackal');
		}
	}, {
		p: parseFloat(listOfMonsters[21].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Wererat');
		}
	}, {
		p: parseFloat(listOfMonsters[22].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Warg');
		}
	}, {
		p: parseFloat(listOfMonsters[23].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Winter Wolf Cub');
		}
	}, {
		p: parseFloat(listOfMonsters[24].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Winter Wolf');
		}
	}, {
		p: parseFloat(listOfMonsters[25].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Hell Hound Pup');
		}
	}, {
		p: parseFloat(listOfMonsters[26].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Hell Hound');
		}
	}, {
		p: parseFloat(listOfMonsters[27].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Gas Spore');
		}
	}, {
		p: parseFloat(listOfMonsters[28].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Floating Eye');
		}
	}, {
		p: parseFloat(listOfMonsters[29].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Freezing Sphere');
		}
	}, {
		p: parseFloat(listOfMonsters[30].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Flaming Sphere');
		}
	}, {
		p: parseFloat(listOfMonsters[31].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Shocking Sphere');
		}
	}, {
		p: parseFloat(listOfMonsters[32].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Kitten');
		}
	}, {
		p: parseFloat(listOfMonsters[33].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Housecat');
		}
	}, {
		p: parseFloat(listOfMonsters[34].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Large Cat');
		}
	}, {
		p: parseFloat(listOfMonsters[35].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Jaguar');
		}
	}, {
		p: parseFloat(listOfMonsters[36].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Lynx');
		}
	}, {
		p: parseFloat(listOfMonsters[37].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Panther');
		}
	}, {
		p: parseFloat(listOfMonsters[38].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Tiger');
		}
	}, {
		p: parseFloat(listOfMonsters[39].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Gremlin');
		}
	}, {
		p: parseFloat(listOfMonsters[40].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Gargoyle');
		}
	}, {
		p: parseFloat(listOfMonsters[41].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Winged Gargoyle');
		}
	}, {
		p: parseFloat(listOfMonsters[42].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Hobbit');
		}
	}, {
		p: parseFloat(listOfMonsters[43].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Dwarf');
		}
	}, {
		p: parseFloat(listOfMonsters[44].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Bugbear');
		}
	}, {
		p: parseFloat(listOfMonsters[45].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Dwarf Lord');
		}
	}, {
		p: parseFloat(listOfMonsters[46].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Dwarf King');
		}
	}, {
		p: parseFloat(listOfMonsters[47].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Mind Flayer');
		}
	}, {
		p: parseFloat(listOfMonsters[48].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Master Mind Flayer');
		}
	}, {
		p: parseFloat(listOfMonsters[49].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Manes');
		}
	}, {
		p: parseFloat(listOfMonsters[50].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Homunculus');
		}
	}, {
		p: parseFloat(listOfMonsters[51].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Imp');
		}
	}, {
		p: parseFloat(listOfMonsters[52].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Lemure');
		}
	}, {
		p: parseFloat(listOfMonsters[53].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Quasit');
		}
	}, {
		p: parseFloat(listOfMonsters[54].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Tengu');
		}
	}, {
		p: parseFloat(listOfMonsters[55].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Blue Jelly');
		}
	}, {
		p: parseFloat(listOfMonsters[56].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Spotted Jelly');
		}
	}, {
		p: parseFloat(listOfMonsters[57].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Ochre Jelly');
		}
	}, {
		p: parseFloat(listOfMonsters[58].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Kobold');
		}
	}, {
		p: parseFloat(listOfMonsters[59].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Large Kobold');
		}
	}, {
		p: parseFloat(listOfMonsters[60].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Kobold Lord');
		}
	}, {
		p: parseFloat(listOfMonsters[61].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Kobold Shaman');
		}
	}, {
		p: parseFloat(listOfMonsters[62].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Leprechaun');
		}
	}, {
		p: parseFloat(listOfMonsters[63].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Small Mimic');
		}
	}, {
		p: parseFloat(listOfMonsters[64].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Large Mimic');
		}
	}, {
		p: parseFloat(listOfMonsters[65].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Giant Mimic');
		}
	}, {
		p: parseFloat(listOfMonsters[66].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Nymph');
		}
	}, {
		p: parseFloat(listOfMonsters[67].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Goblin');
		}
	}, {
		p: parseFloat(listOfMonsters[68].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Hobgoblin');
		}
	}, {
		p: parseFloat(listOfMonsters[69].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Hill Orc');
		}
	}, {
		p: parseFloat(listOfMonsters[70].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Mordor Orc');
		}
	}, {
		p: parseFloat(listOfMonsters[71].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Urukhai');
		}
	}, {
		p: parseFloat(listOfMonsters[72].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Orc Shaman');
		}
	}, {
		p: parseFloat(listOfMonsters[73].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Orc Captain');
		}
	}, {
		p: parseFloat(listOfMonsters[74].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Rock Piercer');
		}
	}, {
		p: parseFloat(listOfMonsters[75].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Iron Piercer');
		}
	}, {
		p: parseFloat(listOfMonsters[76].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Glass Piercer');
		}
	}, {
		p: parseFloat(listOfMonsters[77].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Rothe');
		}
	}, {
		p: parseFloat(listOfMonsters[78].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Mumak');
		}
	}, {
		p: parseFloat(listOfMonsters[79].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Leocrotta');
		}
	}, {
		p: parseFloat(listOfMonsters[80].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Wumpus');
		}
	}, {
		p: parseFloat(listOfMonsters[81].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Titanothere');
		}
	}, {
		p: parseFloat(listOfMonsters[82].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Baluchitherium');
		}
	}, {
		p: parseFloat(listOfMonsters[83].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Mastodon');
		}
	}, {
		p: parseFloat(listOfMonsters[84].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Sewer Rat');
		}
	}, {
		p: parseFloat(listOfMonsters[85].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Giant Rat');
		}
	}, {
		p: parseFloat(listOfMonsters[86].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Rabid Rat');
		}
	}, {
		p: parseFloat(listOfMonsters[87].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Rock Mole');
		}
	}, {
		p: parseFloat(listOfMonsters[88].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Cave Spider');
		}
	}, {
		p: parseFloat(listOfMonsters[89].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Centipede');
		}
	}, {
		p: parseFloat(listOfMonsters[90].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Giant Spider');
		}
	}, {
		p: parseFloat(listOfMonsters[91].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Scorpion');
		}
	}, {
		p: parseFloat(listOfMonsters[92].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Lurker Above');
		}
	}, {
		p: parseFloat(listOfMonsters[93].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Trapper');
		}
	}, {
		p: parseFloat(listOfMonsters[94].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'White Unicorn');
		}
	}, {
		p: parseFloat(listOfMonsters[95].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Gray Unicorn');
		}
	}, {
		p: parseFloat(listOfMonsters[96].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Black Unicorn');
		}
	}, {
		p: parseFloat(listOfMonsters[97].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Pony');
		}
	}, {
		p: parseFloat(listOfMonsters[98].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Horse');
		}
	}, {
		p: parseFloat(listOfMonsters[99].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Warhorse');
		}
	}, {
		p: parseFloat(listOfMonsters[100].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Fog Cloud');
		}
	}, {
		p: parseFloat(listOfMonsters[101].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Dust Vortex');
		}
	}, {
		p: parseFloat(listOfMonsters[102].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Ice Vortex');
		}
	}, {
		p: parseFloat(listOfMonsters[103].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Energy Vortex');
		}
	}, {
		p: parseFloat(listOfMonsters[104].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Steam Vortex');
		}
	}, {
		p: parseFloat(listOfMonsters[105].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Fire Vortex');
		}
	}, {
		p: parseFloat(listOfMonsters[106].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Long Worm');
		}
	}, {
		p: parseFloat(listOfMonsters[107].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Purple Worm');
		}
	}, {
		p: parseFloat(listOfMonsters[108].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Grid Bug');
		}
	}, {
		p: parseFloat(listOfMonsters[109].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Xan');
		}
	}, {
		p: parseFloat(listOfMonsters[110].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Yellow Light');
		}
	}, {
		p: parseFloat(listOfMonsters[111].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Black Light');
		}
	}, {
		p: parseFloat(listOfMonsters[112].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Zruty');
		}
	}, {
		p: parseFloat(listOfMonsters[113].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Couatl');
		}
	}, {
		p: parseFloat(listOfMonsters[114].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Aleax');
		}
	}, {
		p: parseFloat(listOfMonsters[115].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Angel');
		}
	}, {
		p: parseFloat(listOfMonsters[116].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'KiRin');
		}
	}, {
		p: parseFloat(listOfMonsters[117].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Archon');
		}
	}, {
		p: parseFloat(listOfMonsters[118].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Bat');
		}
	}, {
		p: parseFloat(listOfMonsters[119].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Giant Bat');
		}
	}, {
		p: parseFloat(listOfMonsters[120].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Vampire Bat');
		}
	}, {
		p: parseFloat(listOfMonsters[121].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Raven');
		}
	}, {
		p: parseFloat(listOfMonsters[122].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Plains Centaur');
		}
	}, {
		p: parseFloat(listOfMonsters[123].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Forest Centaur');
		}
	}, {
		p: parseFloat(listOfMonsters[124].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Mountain Centaur');
		}
	}, {
		p: parseFloat(listOfMonsters[125].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Gray Dragon');
		}
	}, {
		p: parseFloat(listOfMonsters[126].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Silver Dragon');
		}
	}, {
		p: parseFloat(listOfMonsters[127].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Red Dragon');
		}
	}, {
		p: parseFloat(listOfMonsters[128].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'White Dragon');
		}
	}, {
		p: parseFloat(listOfMonsters[129].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Black Dragon');
		}
	}, {
		p: parseFloat(listOfMonsters[130].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Blue Dragon');
		}
	}, {
		p: parseFloat(listOfMonsters[131].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Orange Dragon');
		}
	}, {
		p: parseFloat(listOfMonsters[132].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Green Dragon');
		}
	}, {
		p: parseFloat(listOfMonsters[133].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Yellow Dragon');
		}
	}, {
		p: parseFloat(listOfMonsters[134].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Stalker');
		}
	}, {
		p: parseFloat(listOfMonsters[135].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Air Elemental');
		}
	}, {
		p: parseFloat(listOfMonsters[136].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Earth Elemental');
		}
	}, {
		p: parseFloat(listOfMonsters[137].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Fire Elemental');
		}
	}, {
		p: parseFloat(listOfMonsters[138].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Water Elemental');
		}
	}, {
		p: parseFloat(listOfMonsters[139].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Lichen');
		}
	}, {
		p: parseFloat(listOfMonsters[140].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Brown Mold');
		}
	}, {
		p: parseFloat(listOfMonsters[141].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Green Mold');
		}
	}, {
		p: parseFloat(listOfMonsters[142].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Red Mold');
		}
	}, {
		p: parseFloat(listOfMonsters[143].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Yellow Mold');
		}
	}, {
		p: parseFloat(listOfMonsters[144].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Shrieker');
		}
	}, {
		p: parseFloat(listOfMonsters[145].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Violet Fungus');
		}
	}, {
		p: parseFloat(listOfMonsters[146].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Gnome');
		}
	}, {
		p: parseFloat(listOfMonsters[147].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Gnome Lord');
		}
	}, {
		p: parseFloat(listOfMonsters[148].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Gnomish Wizard');
		}
	}, {
		p: parseFloat(listOfMonsters[149].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Gnome King');
		}
	}, {
		p: parseFloat(listOfMonsters[150].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Stone Giant');
		}
	}, {
		p: parseFloat(listOfMonsters[151].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Hill Giant');
		}
	}, {
		p: parseFloat(listOfMonsters[152].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Fire Giant');
		}
	}, {
		p: parseFloat(listOfMonsters[153].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Frost Giant');
		}
	}, {
		p: parseFloat(listOfMonsters[154].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Storm Giant');
		}
	}, {
		p: parseFloat(listOfMonsters[155].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Ettin');
		}
	}, {
		p: parseFloat(listOfMonsters[156].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Titan');
		}
	}, {
		p: parseFloat(listOfMonsters[157].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Jabberwock');
		}
	}, {
		p: parseFloat(listOfMonsters[158].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Lich');
		}
	}, {
		p: parseFloat(listOfMonsters[159].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Demilich');
		}
	}, {
		p: parseFloat(listOfMonsters[160].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Master Lich');
		}
	}, {
		p: parseFloat(listOfMonsters[161].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'ArchLich');
		}
	}, {
		p: parseFloat(listOfMonsters[162].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Kobold Mummy');
		}
	}, {
		p: parseFloat(listOfMonsters[163].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Gnome Mummy');
		}
	}, {
		p: parseFloat(listOfMonsters[164].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Orc Mummy');
		}
	}, {
		p: parseFloat(listOfMonsters[165].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Dwarf Mummy');
		}
	}, {
		p: parseFloat(listOfMonsters[166].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Elf Mummy');
		}
	}, {
		p: parseFloat(listOfMonsters[167].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Human Mummy');
		}
	}, {
		p: parseFloat(listOfMonsters[168].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Ettin Mummy');
		}
	}, {
		p: parseFloat(listOfMonsters[169].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Giant Mummy');
		}
	}, {
		p: parseFloat(listOfMonsters[170].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Red Naga');
		}
	}, {
		p: parseFloat(listOfMonsters[171].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Black Naga');
		}
	}, {
		p: parseFloat(listOfMonsters[172].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Golden Naga');
		}
	}, {
		p: parseFloat(listOfMonsters[173].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Gardian Naga');
		}
	}, {
		p: parseFloat(listOfMonsters[174].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Ogre');
		}
	}, {
		p: parseFloat(listOfMonsters[175].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Ogre Lord');
		}
	}, {
		p: parseFloat(listOfMonsters[176].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Ogre King');
		}
	}, {
		p: parseFloat(listOfMonsters[177].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Gray Ooze');
		}
	}, {
		p: parseFloat(listOfMonsters[178].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Brown Pudding');
		}
	}, {
		p: parseFloat(listOfMonsters[179].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Black Pudding');
		}
	}, {
		p: parseFloat(listOfMonsters[180].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Green Slime');
		}
	}, {
		p: parseFloat(listOfMonsters[181].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Quantum Mechanic');
		}
	}, {
		p: parseFloat(listOfMonsters[182].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Rust Monster');
		}
	}, {
		p: parseFloat(listOfMonsters[183].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Disenchanter');
		}
	}, {
		p: parseFloat(listOfMonsters[184].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Garter Snake');
		}
	}, {
		p: parseFloat(listOfMonsters[185].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Snake');
		}
	}, {
		p: parseFloat(listOfMonsters[186].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Pit Viper');
		}
	}, {
		p: parseFloat(listOfMonsters[187].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Python');
		}
	}, {
		p: parseFloat(listOfMonsters[188].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Cobra');
		}
	}, {
		p: parseFloat(listOfMonsters[189].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Troll');
		}
	}, {
		p: parseFloat(listOfMonsters[190].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Ice Troll');
		}
	}, {
		p: parseFloat(listOfMonsters[191].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Rock Troll');
		}
	}, {
		p: parseFloat(listOfMonsters[192].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'OlogHai');
		}
	}, {
		p: parseFloat(listOfMonsters[193].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Umber Hulk');
		}
	}, {
		p: parseFloat(listOfMonsters[194].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Vampire');
		}
	}, {
		p: parseFloat(listOfMonsters[195].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Vampire Lord');
		}
	}, {
		p: parseFloat(listOfMonsters[196].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Barrow Wight');
		}
	}, {
		p: parseFloat(listOfMonsters[197].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Wraith');
		}
	}, {
		p: parseFloat(listOfMonsters[198].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Nazgul');
		}
	}, {
		p: parseFloat(listOfMonsters[199].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Xorn');
		}
	}, {
		p: parseFloat(listOfMonsters[200].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Monkey');
		}
	}, {
		p: parseFloat(listOfMonsters[201].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Ape');
		}
	}, {
		p: parseFloat(listOfMonsters[202].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Owlbear');
		}
	}, {
		p: parseFloat(listOfMonsters[203].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Yeti');
		}
	}, {
		p: parseFloat(listOfMonsters[204].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Carnivorous Ape');
		}
	}, {
		p: parseFloat(listOfMonsters[205].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Sasquatch');
		}
	}, {
		p: parseFloat(listOfMonsters[206].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Kobold Zombie');
		}
	}, {
		p: parseFloat(listOfMonsters[207].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Gnome Zombie');
		}
	}, {
		p: parseFloat(listOfMonsters[208].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Orc Zombie');
		}
	}, {
		p: parseFloat(listOfMonsters[209].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Wolf Zombie');
		}
	}, {
		p: parseFloat(listOfMonsters[210].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Elf Zombie');
		}
	}, {
		p: parseFloat(listOfMonsters[211].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Human Zombie');
		}
	}, {
		p: parseFloat(listOfMonsters[212].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Ettin Zombie');
		}
	}, {
		p: parseFloat(listOfMonsters[213].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Giant Zombie');
		}
	}, {
		p: parseFloat(listOfMonsters[214].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Ghoul');
		}
	}, {
		p: parseFloat(listOfMonsters[215].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Straw Golem');
		}
	}, {
		p: parseFloat(listOfMonsters[216].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Clay Golem');
		}
	}, {
		p: parseFloat(listOfMonsters[217].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Paper Golem');
		}
	}, {
		p: parseFloat(listOfMonsters[218].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Rope Golem');
		}
	}, {
		p: parseFloat(listOfMonsters[219].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Gold Golem');
		}
	}, {
		p: parseFloat(listOfMonsters[220].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Leather Golem');
		}
	}, {
		p: parseFloat(listOfMonsters[221].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Wood Golem');
		}
	}, {
		p: parseFloat(listOfMonsters[222].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Flesh Golem');
		}
	}, {
		p: parseFloat(listOfMonsters[223].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Stone Golem');
		}
	}, {
		p: parseFloat(listOfMonsters[224].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Glass Golem');
		}
	}, {
		p: parseFloat(listOfMonsters[225].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Iron Golem');
		}
	}, {
		p: parseFloat(listOfMonsters[226].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Woodland Elf');
		}
	}, {
		p: parseFloat(listOfMonsters[227].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Gray Elf');
		}
	}, {
		p: parseFloat(listOfMonsters[228].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Green Elf');
		}
	}, {
		p: parseFloat(listOfMonsters[229].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Elf Lord');
		}
	}, {
		p: parseFloat(listOfMonsters[230].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Elven King');
		}
	}, {
		p: parseFloat(listOfMonsters[231].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Soldier');
		}
	}, {
		p: parseFloat(listOfMonsters[232].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Sergeant');
		}
	}, {
		p: parseFloat(listOfMonsters[233].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Lieutenant');
		}
	}, {
		p: parseFloat(listOfMonsters[234].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Captain');
		}
	}, {
		p: parseFloat(listOfMonsters[235].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Horned Devil');
		}
	}, {
		p: parseFloat(listOfMonsters[236].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Succubus');
		}
	}, {
		p: parseFloat(listOfMonsters[237].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Incubus');
		}
	}, {
		p: parseFloat(listOfMonsters[238].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Erinys');
		}
	}, {
		p: parseFloat(listOfMonsters[239].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Barbed Devil');
		}
	}, {
		p: parseFloat(listOfMonsters[240].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Marilith');
		}
	}, {
		p: parseFloat(listOfMonsters[241].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Vrock');
		}
	}, {
		p: parseFloat(listOfMonsters[242].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Hezrou');
		}
	}, {
		p: parseFloat(listOfMonsters[243].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Bone Devil');
		}
	}, {
		p: parseFloat(listOfMonsters[244].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Ice Devil');
		}
	}, {
		p: parseFloat(listOfMonsters[245].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Nalfeshnee');
		}
	}, {
		p: parseFloat(listOfMonsters[246].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Pit Fiend');
		}
	}, {
		p: parseFloat(listOfMonsters[247].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Balrog');
		}
	}, {
		p: parseFloat(listOfMonsters[248].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Sandestin');
		}
	}, {
		p: parseFloat(listOfMonsters[249].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Newt');
		}
	}, {
		p: parseFloat(listOfMonsters[250].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Gecko');
		}
	}, {
		p: parseFloat(listOfMonsters[251].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Iguana');
		}
	}, {
		p: parseFloat(listOfMonsters[252].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Crocodile');
		}
	}, {
		p: parseFloat(listOfMonsters[253].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Lizard');
		}
	}, {
		p: parseFloat(listOfMonsters[254].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Chameleon');
		}
	}, {
		p: parseFloat(listOfMonsters[255].frequency) / totalMonsterFreq,
		f: function() {
			setText(elementId, 'Salamander');
		}
	});

	probabilityobject();
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

            sum = parseFloat(parseFloat(sum) + parseFloat(p)).toFixed(3);

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