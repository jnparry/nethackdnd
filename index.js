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
			setBUCAndItem(B, U, C, text, "Helm of Opposite Alignment");
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
			setBUCAndItem(B, U, C, text, "Gauntlets of Fumbling");
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
			setBUCAndItem(B, U, C, text, "Fumble Boots");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(B, U, C, text, "Levitation Boots");
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

function CalculateTool() {
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
		p: 0.008,
		f: function() {
			setBUCAndItem(B, U, C, text, "Mirror");
		}
	}, {
		p: 0.006,
		f: function() {
			setBUCAndItem(B, U, C, text, "Gems");
		}
	}, {
		p: 0.002,
		f: function() {
			setBUCAndItem(B, U, C, text, "Gems");
		}
	}, {
		p: 0.002,
		f: function() {
			setBUCAndItem(B, U, C, text, "Gems");
		}
	}, {
		p: 0.002,
		f: function() {
			setBUCAndItem(B, U, C, text, "Gems");
		}
	}, {
		p: 0.004,
		f: function() {
			setBUCAndItem(B, U, C, text, "Gems");
		}
	}, {
		p: 0.007,
		f: function() {
			setBUCAndItem(B, U, C, text, "Gems");
		}
	}, {
		p: 0.003,
		f: function() {
			setBUCAndItem(B, U, C, text, "Gems");
		}
	}, {
		p: 0.025,
		f: function() {
			setBUCAndItem(B, U, C, text, "Gems");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(B, U, C, text, "Gems");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(B, U, C, text, "Gems");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(B, U, C, text, "Gems");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(B, U, C, text, "Gems");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(B, U, C, text, "Gems");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(B, U, C, text, "Gems");
		}
	}, {
		p: 0.012,
		f: function() {
			setBUCAndItem(B, U, C, text, "Gems");
		}
	}, {
		p: 0.015, 
		f: function() {
			setBUCAndItem(B, U, C, text, "Gems");
		}
	}, {
		p: 0.007,
		f: function() {
			setBUCAndItem(B, U, C, text, "Gems");
		}
	});

	probabilityobject();
}

function setBUCAndItem(B, U, C, text, item) {
	if (item === "Helm of Opposite Alignment" || 
		item === "Gauntlets of Fumbling" || 
		item === "Fumble Boots" || 
		item === "Levitation Boots") {
		B = .01;
		U = .09;
		C = .9;
	}

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