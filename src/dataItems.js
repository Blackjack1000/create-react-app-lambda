const allItems = {
  redPotion: {
    name: "red potion",
    itemsPerCraft: 1,
    craftTime: 5,
    madeAt: "assembler",
    requires: ["1 ironGearWheel", "1 copperPlate"],
  },

  magicPotion: {
    name: "magic potion",
    itemsPerCraft: 1,
    craftTime: 0,
    madeAt: "assembler",
    requires: [
      "1 redPotion",
      "1 greenPotion",
      "1 blackPotion",
      "1 bluePotion",
      "1 purplePotion",
      "1 yellowPotion",
    ],
  },

  greenPotion: {
    name: "green potion",
    itemsPerCraft: 2,
    craftTime: 10,
    madeAt: "assembler",
    requires: ["2 transportBelt", "1 inserter"],
  },

  blackPotion: {
    name: "black potion",
    itemsPerCraft: 2,
    craftTime: 10,
    madeAt: "assembler",
    requires: ["1 piercingRoundsMagazine", "1 grenade", "2 stoneWall"],
  },

  bluePotion: {
    name: "blue potion",
    itemsPerCraft: 2,
    craftTime: 24,
    madeAt: "assembler",
    requires: ["3 advancedCircuit", "2 multiCylinderEngine", "1 sulfur"],
  },

  purplePotion: {
    name: "purple potion",
    itemsPerCraft: 3,
    craftTime: 21,
    madeAt: "assembler",
    requires: ["30 rail", "1 electricFurnace", "1 productivityModule"],
  },

  yellowPotion: {
    name: "yellow potion",
    itemsPerCraft: 5,
    craftTime: 35,
    madeAt: "assembler",
    requires: [
      "3 processingUnit",
      "1 flyingRobotFrame",
      "3 lowDensityStructure",
    ],
  },

  ironGearWheel: {
    name: "iron gear wheel",
    itemsPerCraft: 1,
    craftTime: 0.5,
    madeAt: "assembler",
    requires: ["2 ironPlate"],
  },

  transportBelt: {
    name: "transport belt",
    itemsPerCraft: 2,
    craftTime: 0.5,
    madeAt: "assembler",
    requires: ["1 singleCylinderEngine", "1 ironPlate"],
  },

  singleCylinderEngine: {
    name: "single cylinder engine",
    itemsPerCraft: 1,
    craftTime: 0.6,
    madeAt: "assembler",
    requires: ["1 ironGearWheel", "1 ironPlate"],
  },

  inserter: {
    name: "inserter",
    itemsPerCraft: 1,
    craftTime: 0.5,
    madeAt: "assembler",
    requires: ["1 smallElectricMotor", "1 burnerInserter"],
  },

  burnerInserter: {
    name: "burner inserter",
    itemsPerCraft: 1,
    craftTime: 0.5,
    madeAt: "assembler",
    requires: ["2 ironStick", "1 singleCylinderEngine"],
  },

  ironStick: {
    name: "iron stick",
    itemsPerCraft: 2,
    craftTime: 0.5,
    madeAt: "assembler",
    requires: ["1 ironPlate"],
  },

  smallElectricMotor: {
    name: "small electric motor",
    itemsPerCraft: 1,
    craftTime: 0.8,
    madeAt: "assembler",
    requires: ["6 copperCable", "1 ironGearWheel", "1 ironPlate"],
  },

  copperCable: {
    name: "copper cable",
    itemsPerCraft: 2,
    craftTime: 0.5,
    madeAt: "assembler",
    requires: ["1 copperPlate"],
  },

  piercingRoundsMagazine: {
    name: "piercing rounds magazine",
    itemsPerCraft: 1,
    craftTime: 3,
    madeAt: "assembler",
    requires: ["5 copperPlate", "1 steelPlate", "1 fireArmMagazine"],
  },

  fireArmMagazine: {
    name: "firearm magazine",
    itemsPerCraft: 1,
    craftTime: 1,
    madeAt: "assembler",
    requires: ["4 ironPlate"],
  },

  steelPlate: {
    name: "steel plate",
    itemsPerCraft: 1,
    craftTime: 16,
    madeAt: "furnace",
    requires: ["5 ironPlate"],
  },

  grenade: {
    name: "grenade",
    itemsPerCraft: 1,
    craftTime: 8,
    madeAt: "assembler",
    requires: ["5 ironPlate", "10 coal"],
  },

  stoneWall: {
    name: "stone wall",
    itemsPerCraft: 1,
    craftTime: 0.5,
    madeAt: "assembler",
    requires: ["5 stoneBrick"],
  },

  stoneBrick: {
    name: "stone brick",
    itemsPerCraft: 1,
    craftTime: 3.2,
    madeAt: "furnace",
    requires: ["2 stone"],
  },

  advancedCircuit: {
    name: "advanced circuit",
    itemsPerCraft: 1,
    craftTime: 6,
    madeAt: "assembler",
    requires: ["4 copperCable", "2 electronicCircuit", "2 plasticBar"],
  },

  electronicCircuit: {
    name: "electronic circuit",
    itemsPerCraft: 1,
    craftTime: 0.5,
    madeAt: "assembler",
    requires: ["3 copperCable", "1 stoneTablet"],
  },

  stoneTablet: {
    name: "stone tablet",
    itemsPerCraft: 4,
    craftTime: 0.5,
    madeAt: "assembler",
    requires: ["1 stoneBrick"],
  },

  plasticBar: {
    name: "plastic bars",
    itemsPerCraft: 2,
    craftTime: 1,
    madeAt: "chemicalLab",
    requires: ["1 coal", "20 petroleumGas"],
  },

  multiCylinderEngine: {
    name: "multi-cylinder engine",
    itemsPerCraft: 1,
    craftTime: 10,
    madeAt: "assembler",
    requires: ["2 ironGearWheel", "2 singleCylinderEngine", "2 steelPlate"],
  },

  sulfur: {
    name: "sulfur",
    itemsPerCraft: 2,
    craftTime: 1,
    madeAt: "chemicalLab",
    requires: ["30 water", "30 petroleumGas"],
  },

  rail: {
    name: "rail",
    itemsPerCraft: 2,
    craftTime: 0.5,
    madeAt: "assembler",
    requires: ["1 ironStick", "1 steelPlate", "1 stone"],
  },

  electricFurnace: {
    name: "electric furnace",
    itemsPerCraft: 1,
    craftTime: 5,
    madeAt: "assembler",
    requires: [
      "5 advancedCircuit",
      "2 heatShielding",
      "1 steelFurnace",
      "5 steelPlate",
    ],
  },

  heatShielding: {
    name: "heat shielding",
    itemsPerCraft: 1,
    craftTime: 10,
    madeAt: "assembler",
    requires: ["20 stoneTablet", "2 steelPlate", "8 sulfur"],
  },

  steelFurnace: {
    name: "steel furnace",
    itemsPerCraft: 1,
    craftTime: 3,
    madeAt: "assembler",
    requires: ["6 stoneBrick", "1 stoneFurnace", "6 steelPlate"],
  },

  stoneFurnace: {
    name: "stone furnace",
    itemsPerCraft: 1,
    craftTime: 0.5,
    madeAt: "assembler",
    requires: ["5 stone"],
  },

  productivityModule: {
    name: "productivity module",
    itemsPerCraft: 1,
    craftTime: 2,
    madeAt: "assembler",
    requires: ["5 electronicCircuit", "1 advancedCircuit"],
  },

  processingUnit: {
    name: "processing unit",
    itemsPerCraft: 1,
    craftTime: 10,
    madeAt: "assembler",
    requires: ["20 electronicCircuit", "2 advancedCircuit", "5 sulfuricAcid"],
  },

  sulfuricAcid: {
    name: "sulfuric acid",
    itemsPerCraft: 50,
    craftTime: 1,
    madeAt: "chemicalLab",
    requires: ["1 ironPlate", "5 sulfur", "100 water"],
  },

  flyingRobotFrame: {
    name: "flying robot frame",
    itemsPerCraft: 1,
    craftTime: 20,
    madeAt: "assembler",
    requires: [
      "4 electronicCircuit",
      "4 bigElectricMotor",
      "4 battery",
      "4 steelPlate",
    ],
  },

  bigElectricMotor: {
    name: "big electric motor",
    itemsPerCraft: 1,
    craftTime: 10,
    madeAt: "assembler",
    requires: [
      "4 electronicCircuit",
      "2 smallElectricMotor",
      "2 steelPlate",
      "40 lubricant",
    ],
  },

  battery: {
    name: "battery",
    itemsPerCraft: 1,
    craftTime: 4,
    madeAt: "chemicalLab",
    requires: ["1 ironPlate", "1 copperPlate", "20 sulfuricAcid"],
  },

  lowDensityStructure: {
    name: "low density structure",
    itemsPerCraft: 1,
    craftTime: 20,
    madeAt: "assembler",
    requires: ["10 glass", "10 copperPlate", "5 steelPlate", "10 plasticBar"],
  },

  glass: {
    name: "glass",
    itemsPerCraft: 1,
    craftTime: 4,
    madeAt: "furnace",
    requires: ["4 sand"],
  },

  sand: {
    name: "sand",
    itemsPerCraft: 2,
    craftTime: 0.5,
    madeAt: "assembler",
    requires: ["1 stone"],
  },
};

export default allItems;
