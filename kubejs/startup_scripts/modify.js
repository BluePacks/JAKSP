ItemEvents.modification((e) => {
    e.modify("kubejs:saruix_sword", (item) => {
        item.attackDamage = 15;
        item.attackSpeed = -2.4;
        item.maxDamage = -1;
    });
    e.modify("kubejs:saruix_pickaxe", (item) => {
        item.digSpeed = 10;
        item.maxDamage = -1;
    });
    e.modify("kubejs:saruix_axe", (item) => {
        item.digSpeed = 10;
        item.maxDamage = -1;
    });
    e.modify("kubejs:saruix_shovel", (item) => {
        item.digSpeed = 10;
        item.maxDamage = -1;
    });
    e.modify("kubejs:saruix_hoe", (item) => {
        item.digSpeed = 10;
        item.maxDamage = -1;
    });
    e.modify("kubejs:saruix_paxel", (item) => {
        item.digSpeed = 10;
        item.maxDamage = -1;
    });

    e.modify("create:shadow_steel_sword", (item) => {
        item.attackDamage = 24;
        item.attackSpeed = -3.2;
        item.setTier((tier) => {
            tier.repairIngredient = "create:shadow_steel";
        });
    });
    e.modify("create:shadow_steel_pickaxe", (item) => {
        item.digSpeed = 10;
        item.setTier((item) => {
            item.repairIngredient = "create:shadow_steel";
        });
    });
    e.modify("create:shadow_steel_axe", (item) => {
        item.digSpeed = 10;
        item.setTier((item) => {
            item.repairIngredient = "create:shadow_steel";
        });
    });
    e.modify("create:shadow_steel_shovel", (item) => {
        item.digSpeed = 10;
        item.setTier((item) => {
            item.repairIngredient = "create:shadow_steel";
        });
    });
    e.modify("create:shadow_steel_hoe", (item) => {
        item.digSpeed = 10;
        item.setTier((item) => {
            item.repairIngredient = "create:shadow_steel";
        });
    });
    e.modify("create:shadow_steel_paxel", (item) => {
        item.digSpeed = 10;
        item.setTier((item) => {
            item.repairIngredient = "create:shadow_steel";
        });
    });

    e.modify("create:refined_radiance_sword", (item) => {
        item.attackDamage = 10;
        item.attackSpeed = 10;
        item.setTier((item) => {
            item.repairIngredient = "create:refined_radiance";
        });
    });
    e.modify("create:refined_radiance_pickaxe", (item) => {
        item.digSpeed = 10;
        item.setTier((item) => {
            item.repairIngredient = "create:refined_radiance";
        });
    });
    e.modify("create:refined_radiance_axe", (item) => {
        item.digSpeed = 10;
        item.setTier((item) => {
            item.repairIngredient = "create:refined_radiance";
        });
    });
    e.modify("create:refined_radiance_shovel", (item) => {
        item.digSpeed = 10;
        item.setTier((item) => {
            item.repairIngredient = "create:refined_radiance";
        });
    });
    e.modify("create:refined_radiance_hoe", (item) => {
        item.digSpeed = 10;
        item.setTier((item) => {
            item.repairIngredient = "create:refined_radiance";
        });
    });
    e.modify("create:refined_radiance_paxel", (item) => {
        item.digSpeed = 10;
        item.setTier((item) => {
            item.repairIngredient = "create:refined_radiance";
        });
    });
});
