ServerEvents.recipes((e) => {
    // https://discord.com/channels/@me/1182199681665736774/1223153736860438538

    const mekOreProcessing = (input, name, output) => {
        e.custom({
            type: "mekanism:dissolution",
            gasInput: {
                amount: 1,
                gas: "mekanism:sulfuric_acid",
            },
            itemInput: {
                ingredient: {
                    item: input,
                },
            },
            output: {
                amount: 1000,
                chemicalType: "slurry",
                slurry: `kubejs:dirty_${name}_slurry`,
            },
        });

        e.custom({
            type: "mekanism:washing",
            fluidInput: {
                amount: 5,
                tag: "minecraft:water",
            },
            output: {
                amount: 1,
                slurry: `kubejs:clean_${name}_slurry`,
            },
            slurryInput: {
                amount: 1,
                slurry: `kubejs:dirty_${name}_slurry`,
            },
        });

        e.custom({
            type: "mekanism:crystallizing",
            chemicalType: "slurry",
            input: {
                amount: 200,
                slurry: `kubejs:clean_${name}_slurry`,
            },
            output: {
                item: `kubejs:${name}_crystal`,
            },
        });

        e.custom({
            type: "mekanism:injecting",
            chemicalInput: {
                amount: 1,
                gas: "mekanism:hydrogen_chloride",
            },
            itemInput: {
                ingredient: {
                    item: `kubejs:${name}_crystal`,
                },
            },
            output: {
                item: `kubejs:${name}_shard`,
            },
        });

        e.custom({
            type: "mekanism:purifying",
            chemicalInput: {
                amount: 1,
                gas: "mekanism:oxygen",
            },
            itemInput: {
                ingredient: {
                    item: `kubejs:${name}_shard`,
                },
            },
            output: {
                item: `kubejs:${name}_clump`,
            },
        });

        e.custom({
            type: "mekanism:crushing",
            input: {
                ingredient: {
                    item: `kubejs:${name}_clump`,
                },
            },
            output: {
                item: `kubejs:${name}_dirty_dust`,
            },
        });

        e.custom({
            type: "mekanism:enriching",
            input: {
                ingredient: {
                    item: `kubejs:${name}_dirty_dust`,
                },
            },
            output: {
                item: `kubejs:${name}_dust`,
            },
        });

        e.smelting(output, `kubejs:${name}_dust`);
    };
    for (let itemName in global.mekProcessing) {
        let item = global.mekProcessing[itemName];
        mekOreProcessing(item.ore, item.name, item.item);
    }
});
