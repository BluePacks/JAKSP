// priority: 0

ServerEvents.recipes((e) => {
    /** @param {string} r */
    const i = (r) => e.remove({ id: r });

    i("thermal:compat/create/smelter_create_alloy_chromatic_compound");
});
