Platform.mods.kubejs.name = "JAKSP";

const $Slurry = Java.loadClass("mekanism.api.chemical.slurry.Slurry");
const $SlurryBuilder = Java.loadClass(
    "mekanism.api.chemical.slurry.SlurryBuilder"
);
const $Gas = Java.loadClass("mekanism.api.chemical.gas.Gas");
const $GasBuilder = Java.loadClass("mekanism.api.chemical.gas.GasBuilder");

global.mekProcessing = {
    ruby: {
        item: "thermal:ruby",
        ore: "thermal:ruby_ore",
        name: "ruby",
        color: 0xc61736,
    },
    sapphire: {
        item: "thermal:sapphire",
        ore: "thermal:sapphire_ore",
        name: "sapphire",
        color: 0x246cec,
    },
};

StartupEvents.registry("item", (event) => {
    for (let itemName in global.mekProcessing) {
        let item = global.mekProcessing[itemName];
        event
            .create(item.name + "_crystal")
            .texture("mekanism:item/crystal")
            .color(item.color);
        event
            .create(item.name + "_shard")
            .texture("mekanism:item/shard")
            .color(item.color);
        event
            .create(item.name + "_clump")
            .texture("mekanism:item/clump")
            .color(item.color);
        event
            .create("dirty_" + item.name + "_dust")
            .texture("mekanism:item/dirty_dust")
            .color(item.color);
        event
            .create(item.name + "_dust")
            .texture("mekanism:item/dust")
            .color(item.color);
    }
});

StartupEvents.registry("mekanism:slurry", (event) => {
    for (let itemName in global.mekProcessing) {
        let item = global.mekProcessing[itemName];
        event.createCustom("clean_" + item.name + "_slurry", () =>
            $Slurry(
                $SlurryBuilder
                    .clean()
                    .ore("forge:ores/" + item.name)
                    .tint(Color.of(item.color).getRgbJS())
            )
        );
        event.createCustom("dirty_" + item.name + "_slurry", () =>
            $Slurry(
                $SlurryBuilder
                    .dirty()
                    .ore("forge:ores/" + item.name)
                    .tint(Color.of(item.color).getRgbJS())
            )
        );
    }
});
