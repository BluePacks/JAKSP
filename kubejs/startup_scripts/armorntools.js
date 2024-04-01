// priority: 0

StartupEvents.registry("item", (event) => {
    const packMaterials = {
        "thermal:sapphire": "Sapphire",
        "thermal:ruby": "Ruby",
        "create:shadow_steel": "Shadow Steel",
        "create:refined_radiance": "Refined Radiance",
        "create:chromatic_compound": "Chromatic Compound",
        charged_fluix: "Charged Fluix",
        saruix: "Saruix",
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
     */
    function armor(m, t, d) {
        const id = m;
        const displayName = packMaterials[id];

        d = d ?? 256; // default

        r(id, displayName, "helmet", t, d * 0.8);
        r(id, displayName, "chestplate", t, d);
        r(id, displayName, "leggings", t, d * 0.9);
        r(id, displayName, "boots", t, d * 0.7);
    }

    /**
     * Creates tools for a material
     * @param {keyof typeof packMaterials} m Material
     * @param {Internal.ArmorMaterial_} t Tier
     * @param {number} d Durability (defaults to 256, each item got the same durability value)
     */
    function toolset(m, t, d) {
        const id = m;
        const displayName = packMaterials[id];

        d = d ?? 256; // default

        r(id, displayName, "pickaxe", t, d);
        r(id, displayName, "shovel", t, d);
        r(id, displayName, "axe", t, d);
        r(id, displayName, "hoe", t, d);
        r(id, displayName, "paxel", t, d);
        r(id, displayName, "sword", t, d);
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

    armor("thermal:sapphire", "iron", 1024);
    toolset("thermal:sapphire", "iron", 1024);

    armor("thermal:ruby", "iron", 1024);
    toolset("thermal:ruby", "iron", 1024);

    armor("charged_fluix", "netherite", 4096);
    toolset("charged_fluix", "netherite", 4096);

    armor("saruix", "netherite", 16384);
    toolset("saruix", "netherite", 16384);

    toolset("create:shadow_steel", "netherite", 16384);
    armor("create:shadow_steel", "netherite", 16384);

    toolset("create:refined_radiance", "netherite", 16384);
    armor("create:refined_radiance", "netherite", 16384);
});
