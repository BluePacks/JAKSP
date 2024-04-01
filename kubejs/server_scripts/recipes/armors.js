ServerEvents.recipes((e) => {
    const energizing = (input, output, energy) => {
        e.custom({
            type: "powah:energizing",
            ingredients: [
                {
                    item: input,
                },
            ],
            energy: energy,
            result: {
                item: output,
            },
        });
        e.custom({
            type: "createaddition:charging",
            input: {
                item: input,
                count: 1,
            },
            result: {
                item: output,
                count: 1,
            },
            energy: energy,
            maxChargeRate: energy,
        });
        e.custom({
            type: "create_new_age:energising",
            energy_needed: energy,
            ingredients: [
                {
                    item: input,
                },
            ],
            results: [
                {
                    item: output,
                },
            ],
        });
        e.custom({
            type: "ae2:charger",
            ingredient: {
                item: input,
            },
            result: {
                item: output,
            },
        });
    };

    /**
     * @param {Internal.Item} input
     * @param {Internal.Item} output
     * @param {Internal.Item[]} pedestal
     * @param {number} source
     */
    const imbumentChamber = (input, output, pedestal, source) => {
        let pedestalItemsList = [];

        for (let item of pedestal) {
            pedestalItemsList.push({
                item: {
                    item: item,
                },
            });
        }
        e.custom({
            type: "ars_nouveau:imbuement",
            count: 1,
            input: {
                item: input,
            },
            output: output,
            pedestalItems: pedestalItemsList,
            source: source,
        });
    };

    imbumentChamber(
        "create:chromatic_compound",
        "kubejs:saruix",
        ["thermal:ruby", "thermal:sapphire", "kubejs:charged_fluix"],
        10000
    );
    energizing("ae2:fluix_crystal", "kubejs:charged_fluix", 10000);
});
