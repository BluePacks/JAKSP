// requires: create

const $ConversionRecipe = Java.loadClass(
    "com.simibubi.create.compat.jei.ConversionRecipe"
);

JEIEvents.removeRecipes(() => {
    const mysteryConversion = global.jeiRuntime.jeiHelpers
        .getRecipeType("create:mystery_conversion")
        .get();

    /**
     * Adds a new mysterious conversion recipe
     * @param {string} from The input item
     * @param {string} to The output item
     */
    const r = (from, to) =>
        global.jeiRuntime.recipeManager.addRecipes(mysteryConversion, [
            new $ConversionRecipe.create(from, to),
        ]);

    r("create:chromatic_compound", "create:shadow_steel");
    r("create:chromatic_compound", "create:refined_radiance");
});
