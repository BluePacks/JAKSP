ServerEvents.recipes((e) => {
    for (let itemName in global.packMaterials) {
        e.shaped(itemName + "_pickaxe", ["AAA", " B ", " B "], {
            A: itemName,
            B: "#forge:rods/wooden",
        });
        e.shaped(itemName + "_shovel", ["A", "B", "B"], {
            A: itemName,
            B: "#forge:rods/wooden",
        });
        e.shaped(itemName + "_axe", ["AA", "AB", " B"], {
            A: itemName,
            B: "#forge:rods/wooden",
        });
        e.shaped(itemName + "_hoe", ["AA", " B", " B"], {
            A: itemName,
            B: "#forge:rods/wooden",
        });
        e.shaped(itemName + "_sword", ["A", "A", "B"], {
            A: itemName,
            B: "#forge:rods/wooden",
        });
        e.shaped(itemName + "_paxel", ["APS", " B ", " B "], {
            A: `${itemName}_axe`,
            P: `${itemName}_pickaxe`,
            S: `${itemName}_shovel`,
            B: "#forge:rods/wooden",
        });
    }
});
