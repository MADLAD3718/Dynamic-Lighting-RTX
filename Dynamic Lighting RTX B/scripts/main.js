import { world, Vector, BlockLocation, MinecraftBlockTypes, Player } from "@minecraft/server";

class Main {
    lightingItems = [
        'minecraft:torch',
        'minecraft:beacon',
        'minecraft:glow_berries',
        'minecraft:brewing_stand',
        'minecraft:campfire',
        'minecraft:glowstone_dust',
        'minecraft:end_rod',
        'minecraft:glow_frame',
        'minecraft:glowstone',
        'minecraft:glow_ink_sac',
        'minecraft:lit_pumpkin',
        'minecraft:lantern',
        'minecraft:magma',
        'minecraft:crying_obsidian',
        'minecraft:redstone_torch',
        'minecraft:shroomlight',
        'minecraft:soul_campfire',
        'minecraft:soul_lantern',
        'minecraft:soul_torch',
        'minecraft:sea_lantern',
        'minecraft:ochre_froglight',
        'minecraft:pearlescent_froglight',
        'minecraft:verdant_froglight',
        'minecraft:nether_star',
        'minecraft:ender_eye',
        'minecraft:sea_pickle',
        'minecraft:lava_bucket',
        'minecraft:experience_bottle',
        'minecraft:dragon_breath',
        'minecraft:fire_charge',
        'minecraft:echo_shard',
        'minecraft:end_crystal',
        'minecraft:glow_lichen',
        'dlrtx:torch',
        'dlrtx:soul_torch',
        'dlrtx:redstone_torch'
    ]
    groupedLightingItems = {
        blaze_rod: [
            'minecraft:blaze_rod',
            'minecraft:blaze_powder'
        ],
        amethyst_cluster: [
            'minecraft:amethyst_cluster',
            'minecraft:large_amethyst_bud',
            'minecraft:medium_amethyst_bud',
            'minecraft:small_amethyst_bud'
        ],
        // Chroma Tech Compatibility
        chroma_light_strip: [
            'chroma_tech:light_strip',
            'chroma_tech:light_strip_door',
            'chroma_tech:light_strip_trapdoor',
            'chroma_tech:light_strip_fence',
            'chroma_tech:light_strip_fence_gate',
            'chroma_tech:starting_soon',
            'chroma_tech:be_right_back'
        ],
        black_light_strip: [
            'chroma_tech:black_light_strip',
            'chroma_tech:black_light_strip_door',
            'chroma_tech:black_light_strip_trapdoor',
            'chroma_tech:black_light_strip_fence',
            'chroma_tech:black_light_strip_fence_gate'
        ],
        blue_light_strip: [
            'chroma_tech:blue_light_strip',
            'chroma_tech:blue_light_strip_door',
            'chroma_tech:blue_light_strip_trapdoor',
            'chroma_tech:blue_light_strip_fence',
            'chroma_tech:blue_light_strip_fence_gate'
        ],
        brown_light_strip: [
            'chroma_tech:brown_light_strip',
            'chroma_tech:brown_light_strip_door',
            'chroma_tech:brown_light_strip_trapdoor',
            'chroma_tech:brown_light_strip_fence',
            'chroma_tech:brown_light_strip_fence_gate'
        ],
        cyan_light_strip: [
            'chroma_tech:cyan_light_strip',
            'chroma_tech:cyan_light_strip_door',
            'chroma_tech:cyan_light_strip_trapdoor',
            'chroma_tech:cyan_light_strip_fence',
            'chroma_tech:cyan_light_strip_fence_gate'
        ],
        gray_light_strip: [
            'chroma_tech:gray_light_strip',
            'chroma_tech:gray_light_strip_door',
            'chroma_tech:gray_light_strip_trapdoor',
            'chroma_tech:gray_light_strip_fence',
            'chroma_tech:gray_light_strip_fence_gate'
        ],
        green_light_strip: [
            'chroma_tech:green_light_strip',
            'chroma_tech:green_light_strip_door',
            'chroma_tech:green_light_strip_trapdoor',
            'chroma_tech:green_light_strip_fence',
            'chroma_tech:green_light_strip_fence_gate'
        ],
        light_blue_light_strip: [
            'chroma_tech:light_blue_light_strip',
            'chroma_tech:light_blue_light_strip_door',
            'chroma_tech:light_blue_light_strip_trapdoor',
            'chroma_tech:light_blue_light_strip_fence',
            'chroma_tech:light_blue_light_strip_fence_gate'
        ],
        light_gray_light_strip: [
            'chroma_tech:light_gray_light_strip',
            'chroma_tech:light_gray_light_strip_door',
            'chroma_tech:light_gray_light_strip_trapdoor',
            'chroma_tech:light_gray_light_strip_fence',
            'chroma_tech:light_gray_light_strip_fence_gate'
        ],
        lime_light_strip: [
            'chroma_tech:lime_light_strip',
            'chroma_tech:lime_light_strip_door',
            'chroma_tech:lime_light_strip_trapdoor',
            'chroma_tech:lime_light_strip_fence',
            'chroma_tech:lime_light_strip_fence_gate'
        ],
        magenta_light_strip: [
            'chroma_tech:magenta_light_strip',
            'chroma_tech:magenta_light_strip_door',
            'chroma_tech:magenta_light_strip_trapdoor',
            'chroma_tech:magenta_light_strip_fence',
            'chroma_tech:magenta_light_strip_fence_gate'
        ],
        orange_light_strip: [
            'chroma_tech:orange_light_strip',
            'chroma_tech:orange_light_strip_door',
            'chroma_tech:orange_light_strip_trapdoor',
            'chroma_tech:orange_light_strip_fence',
            'chroma_tech:orange_light_strip_fence_gate'
        ],
        pink_light_strip: [
            'chroma_tech:pink_light_strip',
            'chroma_tech:pink_light_strip_door',
            'chroma_tech:pink_light_strip_trapdoor',
            'chroma_tech:pink_light_strip_fence',
            'chroma_tech:pink_light_strip_fence_gate'
        ],
        purple_light_strip: [
            'chroma_tech:purple_light_strip',
            'chroma_tech:purple_light_strip_door',
            'chroma_tech:purple_light_strip_trapdoor',
            'chroma_tech:purple_light_strip_fence',
            'chroma_tech:purple_light_strip_fence_gate'
        ],
        red_light_strip: [
            'chroma_tech:red_light_strip',
            'chroma_tech:red_light_strip_door',
            'chroma_tech:red_light_strip_trapdoor',
            'chroma_tech:red_light_strip_fence',
            'chroma_tech:red_light_strip_fence_gate'
        ],
        white_light_strip: [
            'chroma_tech:white_light_strip',
            'chroma_tech:white_light_strip_door',
            'chroma_tech:white_light_strip_trapdoor',
            'chroma_tech:white_light_strip_fence',
            'chroma_tech:white_light_strip_fence_gate'
        ],
        yellow_light_strip: [
            'chroma_tech:yellow_light_strip',
            'chroma_tech:yellow_light_strip_door',
            'chroma_tech:yellow_light_strip_trapdoor',
            'chroma_tech:yellow_light_strip_fence',
            'chroma_tech:yellow_light_strip_fence_gate'
        ]
    }

    constructor() {
        world.events.tick.subscribe(event => {
            this.dynamicLighting();
        })
    }

    dynamicLighting() {
        // For every player that isn't in spectator mode
        const queryOptions = { excludeGameModes: [6] }
        for (const player of world.getPlayers(queryOptions)) {
            const heldItem = player.getComponent('minecraft:inventory').container.getItem(player.selectedSlot);
            const relativeBlock = this.getRelativeBlock(player);
            if (relativeBlock === null) continue;
            // Test if the player is holding an 'emissive' item
            if (this.lightingItems.includes(heldItem?.typeId) === true)
                this.normalDynamicLight(heldItem?.typeId, relativeBlock);
            else this.groupDynamicLight(heldItem?.typeId, relativeBlock);
            // Test in offhand slot as well
            this.lightingItems.forEach(id => {
                player.runCommandAsync(`testfor @s[hasitem={location=slot.weapon.offhand,item=${id}}]`).then(result => {
                    if (result.successCount > 0)
                        this.normalDynamicLight(id, relativeBlock);
                });
            })
        }
    }

    groupDynamicLight(id, relativeBlock) {
        for (const key in this.groupedLightingItems)
            if (this.groupedLightingItems[key].includes(id))
                this.placeDynamicLight(relativeBlock, key);
    }

    normalDynamicLight(id, relativeBlock) {
        this.placeDynamicLight(relativeBlock, id.slice(id.indexOf(':') + 1));
    }

    placeDynamicLight(relativeBlock, id) {
        if (relativeBlock.type.id === 'minecraft:air' || relativeBlock.hasTag('dynamic_light'))
            relativeBlock.setType(MinecraftBlockTypes.get(`dlrtx:${id}_light`));
        if ((relativeBlock.type.id === 'minecraft:water' && relativeBlock.permutation.getProperty('liquid_depth').value === 0) || relativeBlock.hasTag('water_dynamic_light'))
            relativeBlock.setType(MinecraftBlockTypes.get(`dlrtx:underwater_${id}_light`));
    }

    /**
     * Gets the blocklocation that will be used to place the lighting block
     * @param {Player} player 
     * @returns 
     */
    getRelativeBlock(player) {
        const getVector = () => {
            if (player.location.y < 319 && player.dimension.getBlock(new BlockLocation(Math.floor(player.location.x), Math.floor(player.location.y + 1), Math.floor(player.location.z)))?.type.id !== 'minecraft:air') {
                // console.warn(`Not in air`)
                return Vector.multiply(player.viewDirection, -2.15);
            };
            return Vector.multiply(player.viewDirection, -1.15);
        };
        const relativeBlockVector = getVector();
        // Modify x y z coords according to player velocity to prevent making the lighting block clip into the player's view
        const relativeBlockX = this.getRelativeBlockX(player, relativeBlockVector);
        const relativeBlockY = this.getRelativeBlockY(player, relativeBlockVector);
        const relativeBlockZ = this.getRelativeBlockZ(player, relativeBlockVector);
        if (relativeBlockY < -64 || relativeBlockY >= 320) return null;
        return player.dimension.getBlock(new BlockLocation(relativeBlockX, relativeBlockY, relativeBlockZ));
    }

    /**
     * @param {Player} player 
     * @param {Vector} relativeBlockVector 
     * @returns 
     */
    getRelativeBlockX(player, relativeBlockVector) {
        let relativeBlockX = player.headLocation.x + relativeBlockVector.x;
        if (player.headLocation.x < 0) relativeBlockX--;
        if (player.viewDirection.x > 0.5)
            if (player.velocity.x < -0.1)
                relativeBlockX += player.velocity.x * 3 - 1;
        if (player.viewDirection.x < -0.5)
            if (player.velocity.x > 0.1)
                relativeBlockX += player.velocity.x * 3 + 1;
        return relativeBlockX;
    }
    getRelativeBlockY(player, relativeBlockVector) {
        let relativeBlockY = player.location.y + relativeBlockVector.y + 1.5;
        if (player.headLocation.y < 0) relativeBlockY--;
        if (player.viewDirection.y > 0.5)
            if (player.velocity.y < -0.1)
                relativeBlockY += player.velocity.y * 3 - 1;
        if (player.viewDirection.y < -0.5)
            if (player.velocity.y > 0.1)
                relativeBlockY += player.velocity.y * 3 + 1;
        return relativeBlockY;
    }
    getRelativeBlockZ(player, relativeBlockVector) {
        let relativeBlockZ = player.headLocation.z + relativeBlockVector.z;
        if (player.headLocation.z < 0) relativeBlockZ--;
        if (player.viewDirection.z > 0.5)
            if (player.velocity.z < -0.1)
                relativeBlockZ += player.velocity.z * 3 - 1;
        if (player.viewDirection.z < -0.5)
            if (player.velocity.z > 0.1)
                relativeBlockZ += player.velocity.z * 3 + 1;
        return relativeBlockZ;
    }

    removeOtherLightBlocks(dimension, location) {
        const startPosition = new BlockLocation(location.x + 4, location.y + 4, location.z + 4);
        const endPosition = new BlockLocation(location.x - 4, location.y - 4, location.z - 4);
        const blockPositions = startPosition.blocksBetween(endPosition);
        blockPositions.forEach((position) => {
            if (dimension.getBlock(position).hasTag('dynamic_light')) {
                dimension.getBlock(position).setType(MinecraftBlockTypes.air);
            }
        })
    }
}

new Main();