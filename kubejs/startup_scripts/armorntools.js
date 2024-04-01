// priority: 0

StartupEvents.registry("item", (event) => {
    global.packMaterials = {
        "thermal:sapphire": "Sapphire",
        "thermal:ruby": "Ruby",
        "create:shadow_steel": "Shadow Steel",
        "create:refined_radiance": "Refined Radiance",
        "kubejs:burnt_fluix": "Burnt Fluix",
        "kubejs:saruix": "Saruix",
    };

    /**
     * Registers an item
     * @param {string} id ID
     * @param {string} displayName Display Name
     * @param {string} type Type
     * @param {Internal.ArmorMaterial_} t Tier
     * @param {number} d Durability
     */
    const r = (id, displayName, type, t, d) =>
        event
            .create(id + "_" + type, type)
            .displayName(
                displayName + " " + type.charAt(0).toUpperCase() + type.slice(1)
            )
            .tier(t)
            .maxDamage(d);

    /**
     * Creates armor for a material
     * @param {keyof typeof packMaterials} m Material
     * @param {Internal.ArmorMaterial_} t Tier
     * @param {number} d Durability (defaults to 256, each item got a slightly different durability value)
     * @param {number} c Color of the item
     */
    function armor(m, t, d, c) {
        const id = m;
        const displayName = global.packMaterials[id];

        d = d ?? 256; // default

        c = c ?? 0xffffff; // default

        r(id, displayName, "helmet", t, d * 0.8)
            .texture("layer0", "kubejs:item/armor/helmet")
            .color(0, c);
        r(id, displayName, "chestplate", t, d)
            .texture("layer0", "kubejs:item/armor/chestplate")
            .color(0, c);
        r(id, displayName, "leggings", t, d * 0.9)
            .texture("layer0", "kubejs:item/armor/leggings")
            .color(0, c);
        r(id, displayName, "boots", t, d * 0.7)
            .texture("layer0", "kubejs:item/armor/boots")
            .color(0, c);
    }

    /**
     * Creates tools for a material
     * @param {keyof typeof packMaterials} m Material
     * @param {Internal.ArmorMaterial_} t Tier
     * @param {number} d Durability (defaults to 256, each item got the same durability value)
     * @param {number} c Color of the item
     */
    function toolset(m, t, d, c) {
        const id = m;
        const displayName = global.packMaterials[id];

        d = d ?? 256; // default

        c = c ?? 0xffffff; // default

        r(id, displayName, "pickaxe", t, d)
            .texture("layer0", "kubejs:item/tools/pickaxe_handle")
            .texture("layer1", "kubejs:item/tools/pickaxe_head")
            .color(1, c);
        r(id, displayName, "shovel", t, d)
            .texture("layer0", "kubejs:item/tools/shovel_handle")
            .texture("layer1", "kubejs:item/tools/shovel_head")
            .color(1, c);
        r(id, displayName, "axe", t, d)
            .texture("layer0", "kubejs:item/tools/axe_handle")
            .texture("layer1", "kubejs:item/tools/axe_head")
            .color(1, c);
        r(id, displayName, "hoe", t, d)
            .texture("layer0", "kubejs:item/tools/hoe_handle")
            .texture("layer1", "kubejs:item/tools/hoe_head")
            .color(1, c);
        r(id, displayName, "paxel", t, d)
            .texture("layer0", "cucumberjs:item/paxel_handle")
            .texture("layer1", "cucumberjs:item/paxel")
            .color(1, c);
        r(id, displayName, "sword", t, d)
            .texture("layer0", "kubejs:item/tools/sword_hilt")
            .texture("layer1", "kubejs:item/tools/sword_blade")
            .color(1, c);
    }

    /*
Multi cursor improvements
Ctrl+D - sel next word
Ctrl+K Ctrl+D - skip this; moves current cursor to next word
Ctrl+U - undo
Ctrl+Alt+Up / Ctrl+Alt+Down - move cursor up / down
Alt+Click - select
more - https://code.visualstudio.com/docs/editor/codebasics
*/

    armor("thermal:sapphire", "iron", 1024, 0x246cec);
    toolset("thermal:sapphire", "iron", 1024, 0x246cec);

    armor("thermal:ruby", "iron", 1024, 0xc61736);
    toolset("thermal:ruby", "iron", 1024, 0xc61736);

    armor("kubejs:burnt_fluix", "diamond", 4096, 0x604da9);
    toolset("kubejs:burnt_fluix", "diamond", 4096, 0x604da9);

    armor("kubejs:saruix", "netherite", 16384, 0x4b4042);
    toolset("kubejs:saruix", "netherite", 16384, 0x4b4042);

    toolset("create:shadow_steel", "netherite", 16384, 0x372f4c);
    armor("create:shadow_steel", "netherite", 16384, 0x372f4c);

    toolset("create:refined_radiance", "netherite", 16384, 0xfffcff);
    armor("create:refined_radiance", "netherite", 16384, 0xfffcff);
});
