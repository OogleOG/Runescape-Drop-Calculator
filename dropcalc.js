// Luck Enhancer Data
const luckEnhancers = {
    rs3: [
        {
            id: 'lotd',
            name: 'Luck of the Dwarves',
            tier: 4,
            effect: '1-3% increased rare drop chance, access to super rare table',
            dropBoost: 0.03,
            affectsBosses: true,
            affectsSlayer: true,
            affectsRDT: true
        },
        {
            id: 'lotd_relic',
            name: 'LotD Relic Power',
            tier: 4,
            effect: 'Passive T4 luck without wearing ring',
            dropBoost: 0.03,
            affectsBosses: true,
            affectsSlayer: true,
            affectsRDT: true
        },
        {
            id: 'hsr',
            name: "Hazelmere's Signet Ring",
            tier: 4,
            effect: 'T4 luck + 1/1000 chance to double drops',
            dropBoost: 0.03,
            doubleChance: 0.001,
            affectsBosses: true,
            affectsSlayer: true,
            affectsRDT: true
        },
        {
            id: 'ring_of_fortune',
            name: 'Ring of Fortune',
            tier: 3,
            effect: '2% increased chance for T3 bosses',
            dropBoost: 0.02,
            affectsBosses: true,
            affectsSlayer: true,
            affectsRDT: true
        },
        {
            id: 'rof_relic',
            name: 'Ring of Fortune Relic',
            tier: 3,
            effect: 'Passive T3 luck without wearing ring',
            dropBoost: 0.02,
            affectsBosses: true,
            affectsSlayer: true,
            affectsRDT: true
        },
        {
            id: 'ring_of_wealth',
            name: 'Ring of Wealth',
            tier: 2,
            effect: '1% increased chance for T2 bosses',
            dropBoost: 0.01,
            affectsBosses: true,
            affectsSlayer: true,
            affectsRDT: true
        },
        {
            id: 'row_relic',
            name: 'Ring of Wealth Relic',
            tier: 2,
            effect: 'Passive T2 luck without wearing ring',
            dropBoost: 0.01,
            affectsBosses: true,
            affectsSlayer: true,
            affectsRDT: true
        },
        {
            id: 'ring_of_luck',
            name: 'Ring of Luck',
            tier: 1,
            effect: 'Basic luck for low-tier content',
            dropBoost: 0.01,
            affectsBosses: true,
            affectsSlayer: true,
            affectsRDT: true
        },
        {
            id: 'rol_relic',
            name: 'Ring of Luck Relic',
            tier: 1,
            effect: 'Passive T1 luck without wearing ring',
            dropBoost: 0.01,
            affectsBosses: true,
            affectsSlayer: true,
            affectsRDT: true
        },
        {
            id: 'collectors_insignia',
            name: "Collector's Insignia (Charged)",
            tier: 3,
            effect: 'T3 luck from pocket slot',
            dropBoost: 0.02,
            affectsBosses: true,
            affectsSlayer: true,
            affectsRDT: true
        },
        {
            id: 'enhanced_luck_potion',
            name: 'Enhanced Luck Potion',
            tier: 3,
            effect: 'T3 luck for 1 hour',
            dropBoost: 0.02,
            affectsBosses: true,
            affectsSlayer: true,
            affectsRDT: true
        },
        {
            id: 'luck_potion',
            name: 'Luck Potion',
            tier: 2,
            effect: 'T2 luck for 1 hour',
            dropBoost: 0.01,
            affectsBosses: true,
            affectsSlayer: true,
            affectsRDT: true
        }
    ],
    osrs: [
        {
            id: 'ring_of_wealth_osrs',
            name: 'Ring of Wealth',
            tier: 1,
            effect: 'Removes empty slots from RDT, ~8.5x mega-rare chance',
            dropBoost: 0,
            rdtMultiplier: 8.5,
            affectsRDT: true,
            affectsBosses: false
        },
        {
            id: 'row_imbued',
            name: 'Ring of Wealth (i)',
            tier: 2,
            effect: 'RoW effect + 2x clue chance in Wilderness',
            dropBoost: 0,
            rdtMultiplier: 8.5,
            clueBoost: 2.0,
            affectsRDT: true,
            affectsBosses: false,
            wildernessOnly: true
        }
    ]
};

// Boss and Drop Data
const bossData = {
    rs3: {
        "Telos": {
            tier: "High",
            baseKillTime: 300,
            soloOnly: true,
            luckTier: 4,
            drops: [
                { name: "Dormant Seren Godbow", rate: 200, value: 850000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Dormant Staff of Sliske", rate: 200, value: 1200000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Dormant Zaros Godsword", rate: 200, value: 750000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Reprisal Codex", rate: 500, value: 120000000, rarity: "very-rare", luckAffected: true },
                { name: "Anima Core of Seren", rate: 50, value: 8000000, rarity: "rare", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 500000, rarity: "common", luckAffected: false }
            ],
            commonGp: 500000
        },
        "Araxxor": {
            tier: "High",
            baseKillTime: 240,
            soloOnly: false,
            luckTier: 4,
            drops: [
                { name: "Araxxi's Fang", rate: 120, value: 180000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Araxxi's Eye", rate: 120, value: 200000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Araxxi's Web", rate: 120, value: 160000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Spider Leg Top", rate: 40, value: 50000000, rarity: "very-rare", luckAffected: true },
                { name: "Spider Leg Middle", rate: 40, value: 45000000, rarity: "very-rare", luckAffected: true },
                { name: "Spider Leg Bottom", rate: 40, value: 48000000, rarity: "very-rare", luckAffected: true },
                { name: "Araxyte Pheromone", rate: 50, value: 25000000, rarity: "rare", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 350000, rarity: "common", luckAffected: false }
            ],
            commonGp: 350000
        },
        "Nex": {
            tier: "High",
            baseKillTime: 180,
            soloOnly: false,
            luckTier: 3,
            drops: [
                { name: "Torva Platebody", rate: 384, value: 85000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Torva Platelegs", rate: 384, value: 78000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Torva Full Helm", rate: 384, value: 65000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Pernix Body", rate: 384, value: 72000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Virtus Robe Top", rate: 384, value: 45000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Zaryte Bow", rate: 384, value: 120000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Virtus Wand", rate: 384, value: 35000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 250000, rarity: "common", luckAffected: false }
            ],
            commonGp: 250000
        },
        "Vorago": {
            tier: "High",
            baseKillTime: 900,
            soloOnly: false,
            minTeam: 4,
            luckTier: 4,
            drops: [
                { name: "Seismic Wand", rate: 200, value: 350000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Seismic Singularity", rate: 200, value: 280000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Vitalis", rate: 5000, value: 0, rarity: "ultra-rare", note: "Pet", luckAffected: false },
                { name: "Tectonic Energy", rate: 20, value: 15000000, rarity: "rare", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 600000, rarity: "common", luckAffected: false }
            ],
            commonGp: 600000
        },
        "Solak": {
            tier: "High",
            baseKillTime: 600,
            soloOnly: false,
            minTeam: 2,
            luckTier: 4,
            drops: [
                { name: "Blightbound Crossbow", rate: 500, value: 850000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Erethdor's Grimoire", rate: 200, value: 450000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Merethiel's Stave", rate: 500, value: 0, rarity: "ultra-rare", note: "Cosmetic", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 400000, rarity: "common", luckAffected: false }
            ],
            commonGp: 400000
        },
        "Kerapac (HM)": {
            tier: "High",
            baseKillTime: 360,
            soloOnly: false,
            luckTier: 4,
            drops: [
                { name: "Scripture of Jas", rate: 180, value: 280000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Greater Concentrated Blast", rate: 250, value: 180000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Staff of Armadyl Piece", rate: 300, value: 150000000, rarity: "very-rare", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 450000, rarity: "common", luckAffected: false }
            ],
            commonGp: 450000
        },
        "Arch-Glacor (HM)": {
            tier: "High",
            baseKillTime: 300,
            soloOnly: true,
            luckTier: 4,
            drops: [
                { name: "Frozen Core of Leng", rate: 400, value: 650000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Leng Artefact", rate: 400, value: 600000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Scripture of Wen", rate: 200, value: 150000000, rarity: "very-rare", luckAffected: true },
                { name: "Glacor Remnants", rate: 30, value: 8000000, rarity: "rare", luckAffected: true },
                { name: "Dark Nilas", rate: 17, value: 5000000, rarity: "uncommon", luckAffected: true, note: "Luck increases quantity" },
                { name: "Common Loot", rate: 1, value: 300000, rarity: "common", luckAffected: false }
            ],
            commonGp: 300000
        },
        "Zamorak (500%+)": {
            tier: "High",
            baseKillTime: 420,
            soloOnly: false,
            luckTier: 4,
            drops: [
                { name: "Bow of the Last Guardian", rate: 900, value: 2500000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Chaos Roar", rate: 400, value: 350000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Vestments Pieces", rate: 150, value: 80000000, rarity: "very-rare", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 600000, rarity: "common", luckAffected: false }
            ],
            commonGp: 600000
        },
        "Nex: AoD": {
            tier: "Mid-High",
            baseKillTime: 240,
            soloOnly: false,
            minTeam: 7,
            luckTier: 4,
            drops: [
                { name: "Praesul Codex", rate: 1000, value: 120000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Wand of the Praesul", rate: 1000, value: 750000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Imperium Core", rate: 1000, value: 650000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Chest Pieces", rate: 70, value: 25000000, rarity: "rare", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 800000, rarity: "common", luckAffected: false }
            ],
            commonGp: 800000
        },
        "Raksha": {
            tier: "High",
            baseKillTime: 240,
            soloOnly: false,
            luckTier: 4,
            drops: [
                { name: "Greater Ricochet", rate: 200, value: 250000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Greater Chain", rate: 200, value: 180000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Divert", rate: 200, value: 120000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Fleeting Boots", rate: 500, value: 40000000, rarity: "very-rare", luckAffected: true },
                { name: "Blast Diffusion Boots", rate: 500, value: 35000000, rarity: "very-rare", luckAffected: true },
                { name: "Laceration Boots", rate: 500, value: 30000000, rarity: "very-rare", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 350000, rarity: "common", luckAffected: false }
            ],
            commonGp: 350000
        },
        "ED1 - Seiryu": {
            tier: "Mid",
            baseKillTime: 900,
            soloOnly: false,
            luckTier: 0,
            drops: [
                { name: "Masuta's Warspear", rate: 55, value: 12000000, rarity: "rare", luckAffected: false },
                { name: "Seiryu's Claw", rate: 55, value: 15000000, rarity: "rare", luckAffected: false },
                { name: "Ancient Scales", rate: 20, value: 4000000, rarity: "uncommon", luckAffected: false },
                { name: "Dungeon Tokens", rate: 1, value: 1500000, rarity: "common", luckAffected: false }
            ],
            commonGp: 1500000
        },
        "ED2 - Black Stone Dragon": {
            tier: "Mid",
            baseKillTime: 1080,
            soloOnly: false,
            luckTier: 0,
            drops: [
                { name: "Amulet of Souls (or)", rate: 100, value: 25000000, rarity: "rare", luckAffected: false },
                { name: "Draconic Energy", rate: 30, value: 8000000, rarity: "uncommon", luckAffected: false },
                { name: "Dungeon Tokens", rate: 1, value: 2000000, rarity: "common", luckAffected: false }
            ],
            commonGp: 2000000
        },
        "ED3 - Ambassador": {
            tier: "Mid",
            baseKillTime: 1200,
            soloOnly: false,
            luckTier: 0,
            drops: [
                { name: "Eldritch Crossbow Piece", rate: 55, value: 120000000, rarity: "very-rare", luckAffected: false },
                { name: "Dungeon Tokens", rate: 1, value: 2500000, rarity: "common", luckAffected: false }
            ],
            commonGp: 2500000
        },
        "Croesus": {
            tier: "Mid",
            baseKillTime: 600,
            soloOnly: false,
            minTeam: 4,
            luckTier: 4,
            drops: [
                { name: "Scripture of Bik", rate: 512, value: 200000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Cryptbloom Top", rate: 300, value: 350000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Cryptbloom Bottoms", rate: 300, value: 320000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Cryptbloom Helm", rate: 300, value: 180000000, rarity: "ultra-rare", luckAffected: true },
                { name: "Spore Seed", rate: 50, value: 10000000, rarity: "rare", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 300000, rarity: "common", luckAffected: false }
            ],
            commonGp: 300000
        },
        "GWD2 - Vindicta": {
            tier: "Low-Mid",
            baseKillTime: 50,
            soloOnly: false,
            luckTier: 3,
            drops: [
                { name: "Crest of Zaros", rate: 512, value: 18000000, rarity: "very-rare", luckAffected: true },
                { name: "Dragon Rider Lance", rate: 512, value: 15000000, rarity: "very-rare", luckAffected: true },
                { name: "Dormant Anima Core", rate: 50, value: 800000, rarity: "rare", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 100000, rarity: "common", luckAffected: false }
            ],
            commonGp: 100000
        },
        "GWD2 - Twin Furies": {
            tier: "Low-Mid",
            baseKillTime: 45,
            soloOnly: false,
            luckTier: 3,
            drops: [
                { name: "Crest of Zamorak", rate: 512, value: 12000000, rarity: "very-rare", luckAffected: true },
                { name: "Blade of Nymora", rate: 512, value: 6000000, rarity: "very-rare", luckAffected: true },
                { name: "Blade of Avaryss", rate: 512, value: 5000000, rarity: "very-rare", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 90000, rarity: "common", luckAffected: false }
            ],
            commonGp: 90000
        },
        "GWD2 - Gregorovic": {
            tier: "Low-Mid",
            baseKillTime: 55,
            soloOnly: false,
            luckTier: 3,
            drops: [
                { name: "Crest of Sliske", rate: 512, value: 10000000, rarity: "very-rare", luckAffected: true },
                { name: "Shadow Glaive", rate: 512, value: 7000000, rarity: "very-rare", luckAffected: true },
                { name: "Off-hand Shadow Glaive", rate: 512, value: 5000000, rarity: "very-rare", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 85000, rarity: "common", luckAffected: false }
            ],
            commonGp: 85000
        },
        "GWD1 - Kree'arra": {
            tier: "Low",
            baseKillTime: 30,
            soloOnly: false,
            luckTier: 2,
            drops: [
                { name: "Armadyl Chestplate", rate: 384, value: 4000000, rarity: "rare", luckAffected: true },
                { name: "Armadyl Chainskirt", rate: 384, value: 3500000, rarity: "rare", luckAffected: true },
                { name: "Armadyl Helmet", rate: 384, value: 2500000, rarity: "rare", luckAffected: true },
                { name: "Armadyl Hilt", rate: 512, value: 6000000, rarity: "very-rare", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 40000, rarity: "common", luckAffected: false }
            ],
            commonGp: 40000
        },
        "GWD1 - K'ril": {
            tier: "Low",
            baseKillTime: 25,
            soloOnly: false,
            luckTier: 2,
            drops: [
                { name: "Zamorakian Spear", rate: 512, value: 2500000, rarity: "very-rare", luckAffected: true },
                { name: "Subjugation Robe Top", rate: 384, value: 3000000, rarity: "rare", luckAffected: true },
                { name: "Staff of Light", rate: 512, value: 800000, rarity: "rare", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 35000, rarity: "common", luckAffected: false }
            ],
            commonGp: 35000
        },
        "Kalphite King": {
            tier: "Mid",
            baseKillTime: 60,
            soloOnly: false,
            luckTier: 3,
            drops: [
                { name: "Drygore Longsword", rate: 256, value: 25000000, rarity: "very-rare", luckAffected: true },
                { name: "Drygore Rapier", rate: 256, value: 28000000, rarity: "very-rare", luckAffected: true },
                { name: "Drygore Mace", rate: 256, value: 22000000, rarity: "very-rare", luckAffected: true },
                { name: "Off-hand Drygores", rate: 256, value: 18000000, rarity: "very-rare", luckAffected: true },
                { name: "Perfect Chitin", rate: 100, value: 8000000, rarity: "rare", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 150000, rarity: "common", luckAffected: false }
            ],
            commonGp: 150000
        },
        "Queen Black Dragon": {
            tier: "Low",
            baseKillTime: 120,
            soloOnly: true,
            luckTier: 2,
            drops: [
                { name: "Royal Crossbow Piece", rate: 60, value: 1500000, rarity: "uncommon", luckAffected: true },
                { name: "Dragonbone Upgrade Kit", rate: 500, value: 5000000, rarity: "rare", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 150000, rarity: "common", luckAffected: false }
            ],
            commonGp: 150000
        }
    },
    osrs: {
        "Theatre of Blood": {
            tier: "High",
            baseKillTime: 1500,
            soloOnly: false,
            minTeam: 3,
            luckTier: 0,
            drops: [
                { name: "Scythe of Vitur", rate: 172.9, value: 500000000, rarity: "ultra-rare", luckAffected: false },
                { name: "Ghrazi Rapier", rate: 86.45, value: 120000000, rarity: "very-rare", luckAffected: false },
                { name: "Sanguinesti Staff", rate: 86.45, value: 65000000, rarity: "very-rare", luckAffected: false },
                { name: "Justiciar Pieces", rate: 86.45, value: 20000000, rarity: "rare", luckAffected: false },
                { name: "Avernic Defender Hilt", rate: 86.45, value: 85000000, rarity: "very-rare", luckAffected: false },
                { name: "Common Loot", rate: 1, value: 250000, rarity: "common", luckAffected: false }
            ],
            commonGp: 250000
        },
        "Chambers of Xeric": {
            tier: "High",
            baseKillTime: 1800,
            soloOnly: false,
            luckTier: 0,
            drops: [
                { name: "Twisted Bow", rate: 34.65, value: 1200000000, rarity: "ultra-rare", luckAffected: false },
                { name: "Kodai Insignia", rate: 17.32, value: 60000000, rarity: "very-rare", luckAffected: false },
                { name: "Elder Maul", rate: 17.32, value: 45000000, rarity: "very-rare", luckAffected: false },
                { name: "Dragon Hunter Crossbow", rate: 17.32, value: 55000000, rarity: "very-rare", luckAffected: false },
                { name: "Dexterous Prayer Scroll", rate: 17.32, value: 95000000, rarity: "very-rare", luckAffected: false },
                { name: "Arcane Prayer Scroll", rate: 17.32, value: 130000000, rarity: "very-rare", luckAffected: false },
                { name: "Ancestral Pieces", rate: 17.32, value: 40000000, rarity: "very-rare", luckAffected: false },
                { name: "Common Loot", rate: 1, value: 150000, rarity: "common", luckAffected: false }
            ],
            commonGp: 150000
        },
        "Tombs of Amascut": {
            tier: "High",
            baseKillTime: 2100,
            soloOnly: false,
            luckTier: 0,
            drops: [
                { name: "Tumeken's Shadow", rate: 504, value: 1300000000, rarity: "ultra-rare", luckAffected: false },
                { name: "Masori Mask", rate: 168, value: 35000000, rarity: "very-rare", luckAffected: false },
                { name: "Masori Body", rate: 168, value: 55000000, rarity: "very-rare", luckAffected: false },
                { name: "Masori Chaps", rate: 168, value: 48000000, rarity: "very-rare", luckAffected: false },
                { name: "Elidinis' Ward", rate: 168, value: 120000000, rarity: "very-rare", luckAffected: false },
                { name: "Lightbearer", rate: 84, value: 15000000, rarity: "rare", luckAffected: false },
                { name: "Osmumten's Fang", rate: 84, value: 75000000, rarity: "rare", luckAffected: false },
                { name: "Common Loot", rate: 1, value: 200000, rarity: "common", luckAffected: false }
            ],
            commonGp: 200000
        },
        "Nex": {
            tier: "High",
            baseKillTime: 180,
            soloOnly: false,
            luckTier: 0,
            drops: [
                { name: "Zaryte Crossbow", rate: 258, value: 120000000, rarity: "ultra-rare", luckAffected: false },
                { name: "Torva Platebody", rate: 172, value: 340000000, rarity: "ultra-rare", luckAffected: false },
                { name: "Torva Platelegs", rate: 172, value: 280000000, rarity: "ultra-rare", luckAffected: false },
                { name: "Torva Full Helm", rate: 172, value: 250000000, rarity: "ultra-rare", luckAffected: false },
                { name: "Ancient Hilt", rate: 516, value: 45000000, rarity: "very-rare", luckAffected: false },
                { name: "Nihil Horn", rate: 258, value: 15000000, rarity: "rare", luckAffected: false },
                { name: "Common Loot", rate: 1, value: 80000, rarity: "common", luckAffected: false }
            ],
            commonGp: 80000
        },
        "Nightmare": {
            tier: "High",
            baseKillTime: 600,
            soloOnly: false,
            luckTier: 0,
            drops: [
                { name: "Nightmare Staff", rate: 400, value: 35000000, rarity: "very-rare", luckAffected: false },
                { name: "Inquisitor's Mace", rate: 600, value: 550000000, rarity: "ultra-rare", luckAffected: false },
                { name: "Inquisitor's Hauberk", rate: 600, value: 200000000, rarity: "ultra-rare", luckAffected: false },
                { name: "Inquisitor's Plateskirt", rate: 600, value: 180000000, rarity: "ultra-rare", luckAffected: false },
                { name: "Inquisitor's Great Helm", rate: 600, value: 150000000, rarity: "ultra-rare", luckAffected: false },
                { name: "Eldritch Orb", rate: 1800, value: 120000000, rarity: "ultra-rare", luckAffected: false },
                { name: "Common Loot", rate: 1, value: 50000, rarity: "common", luckAffected: false }
            ],
            commonGp: 50000
        },
        "Corporeal Beast": {
            tier: "Mid",
            baseKillTime: 180,
            soloOnly: false,
            luckTier: 0,
            drops: [
                { name: "Spectral Spirit Shield", rate: 1365, value: 55000000, rarity: "ultra-rare", luckAffected: false },
                { name: "Arcane Spirit Shield", rate: 1365, value: 120000000, rarity: "ultra-rare", luckAffected: false },
                { name: "Elysian Spirit Shield", rate: 4095, value: 650000000, rarity: "ultra-rare", luckAffected: false },
                { name: "Holy Elixir", rate: 171, value: 2500000, rarity: "rare", luckAffected: false },
                { name: "Spirit Shield", rate: 64, value: 50000, rarity: "uncommon", luckAffected: false },
                { name: "Common Loot", rate: 1, value: 30000, rarity: "common", luckAffected: false }
            ],
            commonGp: 30000
        },
        "Vorkath": {
            tier: "Mid",
            baseKillTime: 120,
            soloOnly: true,
            luckTier: 0,
            drops: [
                { name: "Draconic Visage", rate: 5000, value: 6000000, rarity: "very-rare", luckAffected: false },
                { name: "Skeletal Visage", rate: 5000, value: 25000000, rarity: "very-rare", luckAffected: false },
                { name: "Dragonbone Necklace", rate: 1000, value: 1000000, rarity: "rare", luckAffected: false },
                { name: "Common Loot", rate: 1, value: 120000, rarity: "common", luckAffected: false }
            ],
            commonGp: 120000
        },
        "Zulrah": {
            tier: "Mid",
            baseKillTime: 90,
            soloOnly: true,
            luckTier: 0,
            drops: [
                { name: "Tanzanite Fang", rate: 512, value: 3500000, rarity: "very-rare", luckAffected: false },
                { name: "Magic Fang", rate: 512, value: 2500000, rarity: "very-rare", luckAffected: false },
                { name: "Serpentine Visage", rate: 512, value: 3000000, rarity: "very-rare", luckAffected: false },
                { name: "Uncut Onyx", rate: 512, value: 2000000, rarity: "very-rare", luckAffected: false },
                { name: "Mutagen", rate: 13106, value: 8000000, rarity: "ultra-rare", luckAffected: false },
                { name: "Common Loot", rate: 1, value: 100000, rarity: "common", luckAffected: false }
            ],
            commonGp: 100000
        },
        "Cerberus": {
            tier: "Mid",
            baseKillTime: 75,
            soloOnly: true,
            luckTier: 0,
            drops: [
                { name: "Primordial Crystal", rate: 512, value: 25000000, rarity: "very-rare", luckAffected: false },
                { name: "Pegasian Crystal", rate: 512, value: 18000000, rarity: "very-rare", luckAffected: false },
                { name: "Eternal Crystal", rate: 512, value: 8000000, rarity: "very-rare", luckAffected: false },
                { name: "Smouldering Stone", rate: 512, value: 2500000, rarity: "very-rare", luckAffected: false },
                { name: "Common Loot", rate: 1, value: 35000, rarity: "common", luckAffected: false }
            ],
            commonGp: 35000
        },
        "Alchemical Hydra": {
            tier: "Mid",
            baseKillTime: 120,
            soloOnly: true,
            luckTier: 0,
            drops: [
                { name: "Hydra's Claw", rate: 1001, value: 50000000, rarity: "ultra-rare", luckAffected: false },
                { name: "Hydra Leather", rate: 514, value: 7000000, rarity: "very-rare", luckAffected: false },
                { name: "Hydra Tail", rate: 514, value: 2000000, rarity: "very-rare", luckAffected: false },
                { name: "Hydra's Eye/Fang/Heart", rate: 181, value: 3500000, rarity: "rare", luckAffected: false },
                { name: "Common Loot", rate: 1, value: 80000, rarity: "common", luckAffected: false }
            ],
            commonGp: 80000
        },
        "Grotesque Guardians": {
            tier: "Low-Mid",
            baseKillTime: 120,
            soloOnly: true,
            luckTier: 0,
            drops: [
                { name: "Black Tourmaline Core", rate: 1000, value: 6000000, rarity: "ultra-rare", luckAffected: false },
                { name: "Granite Gloves", rate: 500, value: 150000, rarity: "rare", luckAffected: false },
                { name: "Granite Ring", rate: 500, value: 200000, rarity: "rare", luckAffected: false },
                { name: "Granite Hammer", rate: 750, value: 3000000, rarity: "very-rare", luckAffected: false },
                { name: "Common Loot", rate: 1, value: 25000, rarity: "common", luckAffected: false }
            ],
            commonGp: 25000
        },
        "General Graardor": {
            tier: "Low-Mid",
            baseKillTime: 30,
            soloOnly: false,
            luckTier: 1,
            drops: [
                { name: "Bandos Chestplate", rate: 381, value: 18000000, rarity: "very-rare", luckAffected: true },
                { name: "Bandos Tassets", rate: 381, value: 25000000, rarity: "very-rare", luckAffected: true },
                { name: "Bandos Boots", rate: 381, value: 300000, rarity: "rare", luckAffected: true },
                { name: "Bandos Hilt", rate: 508, value: 8000000, rarity: "very-rare", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 25000, rarity: "common", luckAffected: false }
            ],
            commonGp: 25000
        },
        "Commander Zilyana": {
            tier: "Low-Mid",
            baseKillTime: 30,
            soloOnly: false,
            luckTier: 1,
            drops: [
                { name: "Armadyl Crossbow", rate: 508, value: 25000000, rarity: "very-rare", luckAffected: true },
                { name: "Saradomin Sword", rate: 127, value: 150000, rarity: "rare", luckAffected: true },
                { name: "Saradomin's Light", rate: 254, value: 1000000, rarity: "rare", luckAffected: true },
                { name: "Saradomin Hilt", rate: 508, value: 1500000, rarity: "very-rare", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 20000, rarity: "common", luckAffected: false }
            ],
            commonGp: 20000
        },
        "Kree'arra": {
            tier: "Low-Mid",
            baseKillTime: 30,
            soloOnly: false,
            luckTier: 1,
            drops: [
                { name: "Armadyl Chestplate", rate: 381, value: 35000000, rarity: "very-rare", luckAffected: true },
                { name: "Armadyl Chainskirt", rate: 381, value: 32000000, rarity: "very-rare", luckAffected: true },
                { name: "Armadyl Helmet", rate: 381, value: 8000000, rarity: "very-rare", luckAffected: true },
                { name: "Armadyl Hilt", rate: 508, value: 12000000, rarity: "very-rare", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 30000, rarity: "common", luckAffected: false }
            ],
            commonGp: 30000
        },
        "K'ril Tsutsaroth": {
            tier: "Low-Mid",
            baseKillTime: 25,
            soloOnly: false,
            luckTier: 1,
            drops: [
                { name: "Zamorakian Spear", rate: 127, value: 2000000, rarity: "rare", luckAffected: true },
                { name: "Staff of the Dead", rate: 508, value: 6000000, rarity: "very-rare", luckAffected: true },
                { name: "Zamorak Hilt", rate: 508, value: 2500000, rarity: "very-rare", luckAffected: true },
                { name: "Steam Battlestaff", rate: 127, value: 100000, rarity: "rare", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 20000, rarity: "common", luckAffected: false }
            ],
            commonGp: 20000
        },
        "Dagannoth Rex": {
            tier: "Low",
            baseKillTime: 45,
            soloOnly: false,
            luckTier: 1,
            drops: [
                { name: "Berserker Ring", rate: 128, value: 3500000, rarity: "rare", luckAffected: true },
                { name: "Warrior Ring", rate: 128, value: 50000, rarity: "rare", luckAffected: true },
                { name: "Dragon Axe", rate: 128, value: 4000000, rarity: "rare", luckAffected: true },
                { name: "Common Loot", rate: 1, value: 15000, rarity: "common", luckAffected: false }
            ],
            commonGp: 15000
        },
        "Sarachnis": {
            tier: "Low",
            baseKillTime: 60,
            soloOnly: false,
            luckTier: 0,
            drops: [
                { name: "Sarachnis Cudgel", rate: 384, value: 1000000, rarity: "rare", luckAffected: false },
                { name: "Giant Egg Sac", rate: 20, value: 10000, rarity: "uncommon", luckAffected: false },
                { name: "Common Loot", rate: 1, value: 20000, rarity: "common", luckAffected: false }
            ],
            commonGp: 20000
        },
        "Giant Mole": {
            tier: "Low",
            baseKillTime: 45,
            soloOnly: true,
            luckTier: 0,
            drops: [
                { name: "Baby Mole", rate: 3000, value: 0, rarity: "ultra-rare", note: "Pet", luckAffected: false },
                { name: "Mole Claw", rate: 1, value: 8000, rarity: "common", luckAffected: false },
                { name: "Mole Skin", rate: 1, value: 8000, rarity: "common", luckAffected: false }
            ],
            commonGp: 40000
        }
    }
};

// State
let currentGame = 'rs3';
let selectedBoss = null;
let teamSize = 1;
let inputMode = 'hours';
let activeLuckEnhancers = new Set();

// DOM Elements
let gameBtns, bossGrid, bossSearch, teamBtns, tabBtns, hoursGroup, killsGroup;
let killTimeInput, hoursInput, killsInput, calculateBtn, luckEnhancersContainer;

// Initialize
function init() {
    gameBtns = document.querySelectorAll('.game-btn');
    bossGrid = document.getElementById('bossGrid');
    bossSearch = document.getElementById('bossSearch');
    teamBtns = document.querySelectorAll('.team-btn');
    tabBtns = document.querySelectorAll('.tab-btn');
    hoursGroup = document.getElementById('hoursGroup');
    killsGroup = document.getElementById('killsGroup');
    killTimeInput = document.getElementById('killTime');
    hoursInput = document.getElementById('hoursInput');
    killsInput = document.getElementById('killsInput');
    calculateBtn = document.getElementById('calculateBtn');
    luckEnhancersContainer = document.getElementById('luckEnhancersContainer');
    
    renderBossGrid();
    renderLuckEnhancers();
    setupEventListeners();
}

function renderBossGrid(filter = '') {
    const bosses = bossData[currentGame];
    const filteredBosses = Object.entries(bosses).filter(([name]) => 
        name.toLowerCase().includes(filter.toLowerCase())
    );

    bossGrid.innerHTML = filteredBosses.map(([name, data]) => `
        <div class="boss-card ${selectedBoss === name ? 'selected' : ''}" data-boss="${name}">
            <div class="boss-name">${name}</div>
            <div class="boss-tier">${data.tier}${data.luckTier > 0 ? ` • T${data.luckTier} Luck` : ''}</div>
        </div>
    `).join('');

    // Add click listeners
    document.querySelectorAll('.boss-card').forEach(card => {
        card.addEventListener('click', () => selectBoss(card.dataset.boss));
    });
}

function renderLuckEnhancers() {
    const enhancers = luckEnhancers[currentGame];
    
    luckEnhancersContainer.innerHTML = enhancers.map(enhancer => `
        <div class="luck-toggle-group">
            <div class="luck-toggle ${activeLuckEnhancers.has(enhancer.id) ? 'active' : ''}" data-enhancer="${enhancer.id}">
                <div class="luck-checkbox"></div>
                <div class="luck-info">
                    <div class="luck-name">
                        ${enhancer.name}
                        <span class="luck-tier-badge tier-${enhancer.tier}">T${enhancer.tier}</span>
                    </div>
                    <div class="luck-effect">${enhancer.effect}</div>
                </div>
            </div>
        </div>
    `).join('');

    // Add click listeners
    document.querySelectorAll('.luck-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => toggleLuckEnhancer(toggle.dataset.enhancer));
    });

    updateLuckSummary();
}

function toggleLuckEnhancer(enhancerId) {
    if (activeLuckEnhancers.has(enhancerId)) {
        activeLuckEnhancers.delete(enhancerId);
    } else {
        // For RS3, only allow one tier 4 luck item at a time (they don't stack)
        const enhancer = luckEnhancers[currentGame].find(e => e.id === enhancerId);
        if (currentGame === 'rs3' && enhancer) {
            // Remove other enhancers of same or lower tier that don't stack
            const sameTypeEnhancers = luckEnhancers[currentGame].filter(e => 
                e.tier <= enhancer.tier && e.affectsBosses === enhancer.affectsBosses
            );
            sameTypeEnhancers.forEach(e => activeLuckEnhancers.delete(e.id));
        }
        activeLuckEnhancers.add(enhancerId);
    }
    renderLuckEnhancers();
}

function getActiveLuckBoost() {
    let maxBoost = 0;
    let maxTier = 0;
    let doubleChance = 0;
    
    activeLuckEnhancers.forEach(id => {
        const enhancer = luckEnhancers[currentGame].find(e => e.id === id);
        if (enhancer) {
            if (enhancer.dropBoost > maxBoost) {
                maxBoost = enhancer.dropBoost;
            }
            if (enhancer.tier > maxTier) {
                maxTier = enhancer.tier;
            }
            if (enhancer.doubleChance) {
                doubleChance = enhancer.doubleChance;
            }
        }
    });
    
    return { boost: maxBoost, tier: maxTier, doubleChance };
}

function updateLuckSummary() {
    const summaryEl = document.getElementById('luckSummary');
    const { boost, tier, doubleChance } = getActiveLuckBoost();
    
    if (tier === 0) {
        summaryEl.innerHTML = `
            <div class="luck-summary-title">Active Luck Bonus</div>
            <div class="luck-summary-value" style="color: var(--text-secondary);">None</div>
            <div class="luck-summary-detail">Enable a luck enhancer to boost drop rates</div>
        `;
    } else {
        let details = `+${(boost * 100).toFixed(1)}% rare drop chance`;
        if (doubleChance > 0) {
            details += ` • ${(doubleChance * 100).toFixed(1)}% double drop chance`;
        }
        
        summaryEl.innerHTML = `
            <div class="luck-summary-title">Active Luck Bonus</div>
            <div class="luck-summary-value">Tier ${tier} Luck Active</div>
            <div class="luck-summary-detail">${details}</div>
        `;
    }
}

function selectBoss(bossName) {
    selectedBoss = bossName;
    const boss = bossData[currentGame][bossName];
    
    // Update UI
    document.querySelectorAll('.boss-card').forEach(card => {
        card.classList.toggle('selected', card.dataset.boss === bossName);
    });

    // Set default kill time
    if (boss.baseKillTime) {
        killTimeInput.value = boss.baseKillTime;
    }

    // Adjust team buttons for solo-only bosses
    if (boss.soloOnly) {
        teamSize = 1;
        teamBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.size === '1');
            btn.disabled = btn.dataset.size !== '1';
            btn.style.opacity = btn.dataset.size !== '1' ? '0.5' : '1';
        });
    } else if (boss.minTeam) {
        teamBtns.forEach(btn => {
            const size = parseInt(btn.dataset.size);
            const disabled = size !== 0 && size < boss.minTeam;
            btn.disabled = disabled;
            btn.style.opacity = disabled ? '0.5' : '1';
            if (disabled && btn.classList.contains('active')) {
                btn.classList.remove('active');
                teamBtns.forEach(b => {
                    if (parseInt(b.dataset.size) === boss.minTeam) {
                        b.classList.add('active');
                        teamSize = boss.minTeam;
                    }
                });
            }
        });
    } else {
        teamBtns.forEach(btn => {
            btn.disabled = false;
            btn.style.opacity = '1';
        });
    }
}

function setupEventListeners() {
    // Game selection
    gameBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            gameBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentGame = btn.dataset.game;
            selectedBoss = null;
            activeLuckEnhancers.clear();
            renderBossGrid();
            renderLuckEnhancers();
            clearResults();
        });
    });

    // Boss search
    bossSearch.addEventListener('input', (e) => {
        renderBossGrid(e.target.value);
    });

    // Team size
    teamBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.disabled) return;
            teamBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            teamSize = parseInt(btn.dataset.size);
        });
    });

    // Input mode tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            inputMode = btn.dataset.tab;
            hoursGroup.classList.toggle('hidden', inputMode !== 'hours');
            killsGroup.classList.toggle('hidden', inputMode !== 'kills');
        });
    });

    // Calculate
    calculateBtn.addEventListener('click', calculate);
}

function calculate() {
    if (!selectedBoss) {
        alert('Please select a boss first!');
        return;
    }

    const boss = bossData[currentGame][selectedBoss];
    const killTime = parseInt(killTimeInput.value) || boss.baseKillTime;
    const luckBoost = getActiveLuckBoost();
    
    let totalKills;
    if (inputMode === 'hours') {
        const hours = parseFloat(hoursInput.value) || 1;
        totalKills = Math.floor((hours * 3600) / killTime);
    } else {
        totalKills = parseInt(killsInput.value) || 1;
    }

    // Calculate kills per hour
    const kph = Math.floor(3600 / killTime);

    // Adjust drop rates for team size
    const effectiveTeamSize = teamSize === 0 ? 20 : teamSize;
    const dropRateMultiplier = effectiveTeamSize > 1 ? effectiveTeamSize : 1;

    // Calculate expected drops and GP
    let totalExpectedGp = 0;
    let expectedRares = 0;
    let rareDropRate = null;

    // Check if luck affects this boss
    const luckApplies = luckBoost.tier >= boss.luckTier && boss.luckTier > 0;

    const dropsWithExpected = boss.drops.map(drop => {
        let adjustedRate = drop.rate * dropRateMultiplier;
        let baseAdjustedRate = adjustedRate;
        let luckAppliedToDrop = false;
        
        // Apply luck boost if applicable
        if (luckApplies && drop.luckAffected && luckBoost.boost > 0) {
            // Luck reduces the effective drop rate (makes it more common)
            adjustedRate = adjustedRate / (1 + luckBoost.boost);
            luckAppliedToDrop = true;
        }
        
        let expected = totalKills / adjustedRate;
        
        // Apply HSR double chance if applicable
        if (luckAppliedToDrop && luckBoost.doubleChance > 0) {
            expected = expected * (1 + luckBoost.doubleChance);
        }
        
        const expectedGp = expected * drop.value;
        totalExpectedGp += expectedGp;

        if (drop.rarity === 'ultra-rare' || drop.rarity === 'very-rare') {
            expectedRares += expected;
            if (!rareDropRate || drop.rate < rareDropRate) {
                rareDropRate = drop.rate;
            }
        }

        return {
            ...drop,
            baseAdjustedRate,
            adjustedRate,
            expected,
            expectedGp,
            luckApplied: luckAppliedToDrop,
            probability: 1 - Math.pow(1 - (1 / adjustedRate), totalKills)
        };
    });

    // Add common GP
    totalExpectedGp += totalKills * boss.commonGp;

    // Calculate GP/hour
    const totalHours = (totalKills * killTime) / 3600;
    const gpPerHour = totalExpectedGp / totalHours;

    // Time to get a rare (at rate)
    let adjustedRareRate = (rareDropRate || 100) * dropRateMultiplier;
    if (luckApplies && luckBoost.boost > 0) {
        adjustedRareRate = adjustedRareRate / (1 + luckBoost.boost);
    }
    const hoursForRare = (adjustedRareRate * killTime) / 3600;

    // Update stats
    document.getElementById('kphValue').textContent = kph.toLocaleString();
    document.getElementById('gphValue').textContent = formatGp(gpPerHour);
    document.getElementById('rareValue').textContent = expectedRares.toFixed(2);
    document.getElementById('timeValue').textContent = formatTime(hoursForRare);

    // Render drops table
    renderDropsTable(dropsWithExpected, dropRateMultiplier, luckApplies);

    // Update luck analysis
    updateLuckAnalysis(totalKills, adjustedRareRate);
}

function renderDropsTable(drops, rateMultiplier, luckApplies) {
    const container = document.getElementById('dropsContainer');
    const luckBoost = getActiveLuckBoost();
    
    container.innerHTML = `
        <table class="drops-table">
            <thead>
                <tr>
                    <th>Drop</th>
                    <th>Rate${rateMultiplier > 1 || luckApplies ? ' (Adjusted)' : ''}</th>
                    <th>Value</th>
                    <th>Expected</th>
                    <th>Chance to Get</th>
                </tr>
            </thead>
            <tbody>
                ${drops.map(drop => `
                    <tr class="animate-in">
                        <td>
                            <div class="drop-name">
                                <span class="rarity-dot rarity-${drop.rarity}"></span>
                                ${drop.name}
                                ${drop.note ? `<span style="color: var(--text-secondary); font-size: 0.8rem;">(${drop.note})</span>` : ''}
                                ${drop.luckApplied ? `<span class="luck-boost-badge">🍀 Boosted</span>` : ''}
                            </div>
                        </td>
                        <td class="drop-rate">
                            ${drop.luckApplied ? `
                                <div class="drop-rate-comparison">
                                    <span class="base-rate">1/${Math.round(drop.baseAdjustedRate).toLocaleString()}</span>
                                    <span class="boosted-rate">1/${Math.round(drop.adjustedRate).toLocaleString()}</span>
                                </div>
                            ` : `1/${Math.round(drop.adjustedRate).toLocaleString()}`}
                        </td>
                        <td class="drop-value">${drop.value > 0 ? formatGp(drop.value) : '-'}</td>
                        <td class="drop-expected">${drop.expected.toFixed(2)}</td>
                        <td>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <div class="probability-bar" style="width: 100px;">
                                    <div class="probability-fill" style="width: ${Math.min(drop.probability * 100, 100)}%"></div>
                                </div>
                                <span style="font-size: 0.85rem;">${(drop.probability * 100).toFixed(1)}%</span>
                            </div>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function updateLuckAnalysis(kills, rareRate) {
    // Probability of getting at least one drop
    const chanceAtRate = 1 - Math.pow(1 - (1/rareRate), rareRate);
    const chance2x = 1 - Math.pow(1 - (1/rareRate), rareRate * 2);
    const chance3x = 1 - Math.pow(1 - (1/rareRate), rareRate * 3);
    const yourChance = 1 - Math.pow(1 - (1/rareRate), kills);

    document.getElementById('chanceAtRate').textContent = `${(chanceAtRate * 100).toFixed(1)}%`;
    document.getElementById('chance2xRate').textContent = `${(chance2x * 100).toFixed(1)}%`;
    document.getElementById('chance3xRate').textContent = `${(chance3x * 100).toFixed(1)}%`;
    
    const yourChanceEl = document.getElementById('yourChance');
    yourChanceEl.textContent = `${(yourChance * 100).toFixed(1)}%`;
    yourChanceEl.className = 'luck-value';
    if (yourChance >= 0.63) yourChanceEl.classList.add('good');
    else if (yourChance < 0.3) yourChanceEl.classList.add('bad');
}

function clearResults() {
    document.getElementById('kphValue').textContent = '-';
    document.getElementById('gphValue').textContent = '-';
    document.getElementById('rareValue').textContent = '-';
    document.getElementById('timeValue').textContent = '-';
    document.getElementById('dropsContainer').innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">🎲</div>
            <p>Select a boss and configure your settings to see drop calculations</p>
        </div>
    `;
    document.getElementById('yourChance').textContent = '-';
}

function formatGp(value) {
    if (value >= 1000000000) {
        return (value / 1000000000).toFixed(2) + 'B';
    } else if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + 'M';
    } else if (value >= 1000) {
        return (value / 1000).toFixed(0) + 'K';
    }
    return value.toFixed(0);
}

function formatTime(hours) {
    if (hours < 1) {
        return Math.round(hours * 60) + 'm';
    } else if (hours < 24) {
        return hours.toFixed(1) + 'h';
    } else {
        return (hours / 24).toFixed(1) + 'd';
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
