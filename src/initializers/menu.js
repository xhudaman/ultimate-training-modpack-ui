import { getArrayOfNumbers } from "../lib";

const devFallbackConfig = {
  aerial_delay: 0,
  air_dodge_dir: 0,
  attack_angle: 0,
  buff_state: 0,
  character_item: 0,
  clatter_strength: 0,
  crouch: 0,
  di_state: 0,
  falling_aerials: 0,
  fast_fall_delay: 0,
  fast_fall: 0,
  follow_up: 0,
  frame_advantage: 0,
  full_hop: 0,
  hitbox_vis: 1,
  input_delay: 0,
  ledge_delay: 0,
  ledge_state: 0,
  mash_state: 0,
  mash_triggers: 0,
  miss_tech_state: 0,
  oos_offset: 0,
  pummel_delay: 0,
  quick_menu: 0,
  reaction_time: 0,
  save_damage: 0,
  save_state_autoload: 0,
  save_state_enable: 0,
  save_state_mirroring: 0,
  sdi_state: 0,
  sdi_strength: 0,
  shield_state: 0,
  shield_tilt: 0,
  stage_hazards: 0,
  tech_state: 0,
  throw_delay: 0,
  throw_state: 0,
};

const tabMap = {
  mash: [
    {
      name: "mash_state",
      label: "Mash Toggles",
      helpText: "Mash Toggles: Actions to be performed as soon as possible",
      options: [
        {
          label: "Airdodge",
          value: 1,
        },
        {
          label: "Jump",
          value: 2,
        },
        {
          label: "Shield",
          value: 4,
        },
        {
          label: "Spotdodge",
          value: 8,
        },
        {
          label: "Roll Forwards",
          value: 16,
        },
        {
          label: "Roll Backwards",
          value: 32,
        },
        {
          label: "Neutral Aerial",
          value: 64,
        },
        {
          label: "Forward Aerial",
          value: 128,
        },
        {
          label: "Backward Aerial",
          value: 256,
        },
        {
          label: "Up Aerial",
          value: 512,
        },
        {
          label: "Down Aerial",
          value: 1024,
        },
        {
          label: "Neutral Special",
          value: 2048,
        },
        {
          label: "Side Special",
          value: 4096,
        },
        {
          label: "Up Special",
          value: 8192,
        },
        {
          label: "Down Special",
          value: 16384,
        },
        {
          label: "Forward Smash",
          value: 32768,
        },
        {
          label: "Up Smash",
          value: 65536,
        },
        {
          label: "Down Smash",
          value: 131072,
        },
        {
          label: "Jab",
          value: 262144,
        },
        {
          label: "Forward Tilt",
          value: 524288,
        },
        {
          label: "Up Tilt",
          value: 1048576,
        },
        {
          label: "Down Tilt",
          value: 2097152,
        },
        {
          label: "Grab",
          value: 4194304,
        },
        {
          label: "Dash",
          value: 8388608,
        },
        {
          label: "Dash Attack",
          value: 16777216,
        },
      ],
      isSingleOption: false,
    },
    {
      name: "follow_up",
      label: "Follow Up Toggles",
      helpText:
        "Followup Toggles: Actions to be performed after the Mash option",
      options: [
        {
          label: "Airdodge",
          value: 1,
        },
        {
          label: "Jump",
          value: 2,
        },
        {
          label: "Shield",
          value: 4,
        },
        {
          label: "Spotdodge",
          value: 8,
        },
        {
          label: "Roll Forwards",
          value: 16,
        },
        {
          label: "Roll Backwards",
          value: 32,
        },
        {
          label: "Neutral Aerial",
          value: 64,
        },
        {
          label: "Forward Aerial",
          value: 128,
        },
        {
          label: "Backward Aerial",
          value: 256,
        },
        {
          label: "Up Aerial",
          value: 512,
        },
        {
          label: "Down Aerial",
          value: 1024,
        },
        {
          label: "Neutral Special",
          value: 2048,
        },
        {
          label: "Side Special",
          value: 4096,
        },
        {
          label: "Up Special",
          value: 8192,
        },
        {
          label: "Down Special",
          value: 16384,
        },
        {
          label: "Forward Smash",
          value: 32768,
        },
        {
          label: "Up Smash",
          value: 65536,
        },
        {
          label: "Down Smash",
          value: 131072,
        },
        {
          label: "Jab",
          value: 262144,
        },
        {
          label: "Forward Tilt",
          value: 524288,
        },
        {
          label: "Up Tilt",
          value: 1048576,
        },
        {
          label: "Down Tilt",
          value: 2097152,
        },
        {
          label: "Grab",
          value: 4194304,
        },
        {
          label: "Dash",
          value: 8388608,
        },
        {
          label: "Dash Attack",
          value: 16777216,
        },
      ],
      isSingleOption: false,
    },
    {
      name: "mash_triggers",
      label: "Mash Triggers",
      helpText: "Mash triggers: When the Mash Option will be performed",
      options: [
        {
          label: "Hitstun",
          value: 1,
        },
        {
          label: "Shieldstun",
          value: 2,
        },
        {
          label: "Parry",
          value: 4,
        },
        {
          label: "Tumble",
          value: 8,
        },
        {
          label: "Landing",
          value: 16,
        },
        {
          label: "Ledge Trump",
          value: 32,
        },
        {
          label: "Footstool",
          value: 64,
        },
        {
          label: "Clatter",
          value: 128,
        },
        {
          label: "Ledge Option",
          value: 256,
        },
        {
          label: "Tech Option",
          value: 512,
        },
        {
          label: "Mistech Option",
          value: 1024,
        },
        {
          label: "Grounded",
          value: 2048,
        },
        {
          label: "Airborne",
          value: 4096,
        },
        {
          label: "Distance: Close",
          value: 8192,
        },
        {
          label: "Distance: Mid",
          value: 16384,
        },
        {
          label: "Distance: Far",
          value: 32768,
        },
        {
          label: "Always",
          value: 65536,
        },
      ],
      isSingleOption: false,
    },
    {
      name: "attack_angle",
      label: "Attack Angle",
      helpText:
        "Attack Angle: For attacks that can be angled, such as some forward tilts",
      options: [
        {
          label: "Neutral",
          value: 1,
        },
        {
          label: "Up",
          value: 2,
        },
        {
          label: "Down",
          value: 4,
        },
      ],
      isSingleOption: false,
    },
    {
      name: "throw_state",
      label: "Throw Options",
      helpText: "Throw Options: Throw to be performed when a grab is landed",
      options: [
        {
          label: "None",
          value: 1,
        },
        {
          label: "Forward Throw",
          value: 2,
        },
        {
          label: "Back Throw",
          value: 4,
        },
        {
          label: "Up Throw",
          value: 8,
        },
        {
          label: "Down Throw",
          value: 16,
        },
      ],
      isSingleOption: false,
    },
    {
      name: "throw_delay",
      label: "Throw Delay",
      helpText: "Throw Delay: How many frames to delay the throw option",
      options: getArrayOfNumbers(0, 150, 5).map((number, index) => ({
        label: number,
        value: index === 0 ? 1 : 2 ** index,
      })),
      isSingleOption: false,
    },
    {
      name: "pummel_delay",
      label: "Pummel Delay",
      helpText:
        "Pummel Delay: How many frames after a grab to wait before starting to pummel",
      options: getArrayOfNumbers(0, 150, 5).map((number, index) => ({
        label: number,
        value: index === 0 ? 1 : 2 ** index,
      })),
      isSingleOption: false,
    },
    {
      name: "falling_aerials",
      label: "Falling Aerials",
      helpText:
        "Falling Aerials: Should aerials be performed when rising or when falling",
      options: [
        { label: "True", value: 1 },
        { label: "False", value: 2 },
      ],
      isSingleOption: false,
    },
    {
      name: "full_hop",
      label: "Full Hop",
      helpText: "Full Hop: Should the CPU perform a full hop or a short hop",
      options: [
        { label: "True", value: 1 },
        { label: "False", value: 2 },
      ],
      isSingleOption: false,
    },
    {
      name: "aerial_delay",
      label: "Aerial Delay",
      helpText: "Aerial Delay: How long to delay a Mash aerial attack",
      options: getArrayOfNumbers(0, 30, 1).map((number, index) => ({
        label: number,
        value: index === 0 ? 1 : 2 ** index,
      })),
      isSingleOption: false,
    },
    {
      name: "fast_fall",
      label: "Fast Fall",
      helpText: "Fast Fall: Should the CPU fastfall during a jump",
      options: [
        { label: "True", value: 1 },
        { label: "False", value: 2 },
      ],
      isSingleOption: false,
    },
    {
      name: "fast_fall_delay",
      label: "Fast Fall Delay",
      helpText:
        "Fast Fall Delay: How many frames the CPU should delay their fastfall",
      options: getArrayOfNumbers(0, 30, 1).map((number, index) => ({
        label: number,
        value: index === 0 ? 1 : 2 ** index,
      })),
      isSingleOption: false,
    },
    {
      name: "oos_offset",
      label: "OoS Offset",
      helpText:
        "OoS Offset: How many times the CPU shield can be hit before performing a Mash option",
      options: getArrayOfNumbers(0, 30, 1).map((number, index) => ({
        label: number,
        value: index === 0 ? 1 : 2 ** index,
      })),
      isSingleOption: false,
    },
    {
      name: "reaction_time",
      label: "Reaction Time",
      helpText:
        "Reaction Time: How many frames to delay before performing a mash option",
      options: getArrayOfNumbers(0, 30, 1).map((number, index) => ({
        label: number,
        value: index === 0 ? 1 : 2 ** index,
      })),
      isSingleOption: false,
    },
  ],
  defensive: [
    {
      name: "air_dodge_dir",
      label: "Airdodge Direction",
      helpText: "Airdodge Direction: Direction to angle airdodges",
      options: [
        {
          label: "Away",
          value: 1,
        },
        {
          label: "Up and Away",
          value: 2,
        },
        {
          label: "Up",
          value: 4,
        },
        {
          label: "Up and In",
          value: 8,
        },
        {
          label: "In",
          value: 16,
        },
        {
          label: "Down and In",
          value: 32,
        },
        {
          label: "Down",
          value: 64,
        },
        {
          label: "Down and Away",
          value: 128,
        },
        {
          label: "Neutral",
          value: 256,
        },
        {
          label: "Left",
          value: 512,
        },
        {
          label: "Right",
          value: 1024,
        },
      ],
      isSingleOption: false,
    },
    {
      name: "di_state",
      label: "DI Direction",
      helpText:
        "DI Direction: Direction to angle the directional influence during hitlag",
      options: [
        {
          label: "Away",
          value: 1,
        },
        {
          label: "Up and Away",
          value: 2,
        },
        {
          label: "Up",
          value: 4,
        },
        {
          label: "Up and In",
          value: 8,
        },
        {
          label: "In",
          value: 16,
        },
        {
          label: "Down and In",
          value: 32,
        },
        {
          label: "Down",
          value: 64,
        },
        {
          label: "Down and Away",
          value: 128,
        },
        {
          label: "Neutral",
          value: 256,
        },
        {
          label: "Left",
          value: 512,
        },
        {
          label: "Right",
          value: 1024,
        },
      ],
      isSingleOption: false,
    },
    {
      name: "sdi_state",
      label: "SDI Direction",
      helpText:
        "SDI Direction: Direction to angle the smash directional influence during hitlag",
      options: [
        {
          label: "Away",
          value: 1,
        },
        {
          label: "Up and Away",
          value: 2,
        },
        {
          label: "Up",
          value: 4,
        },
        {
          label: "Up and In",
          value: 8,
        },
        {
          label: "In",
          value: 16,
        },
        {
          label: "Down and In",
          value: 32,
        },
        {
          label: "Down",
          value: 64,
        },
        {
          label: "Down and Away",
          value: 128,
        },
        {
          label: "Neutral",
          value: 256,
        },
        {
          label: "Left",
          value: 512,
        },
        {
          label: "Right",
          value: 1024,
        },
      ],
      isSingleOption: false,
    },
    {
      name: "sdi_strength",
      label: "SDI Strength",
      helpText:
        "SDI Strength: Relative strength of the smash directional influence inputs",
      options: [
        {
          label: "None",
          value: 0,
        },
        {
          label: "Normal",
          value: 1,
        },
        {
          label: "Medium",
          value: 2,
        },
        {
          label: "High",
          value: 4,
        },
      ],
      isSingleOption: true,
    },
    {
      name: "clatter_strength",
      label: "Clatter Strength",
      helpText:
        "Clatter Strength: Relative strength of the mashing out of grabs, buries, etc.",
      options: [
        {
          label: "None",
          value: 0,
        },
        {
          label: "Normal",
          value: 1,
        },
        {
          label: "Medium",
          value: 2,
        },
        {
          label: "High",
          value: 4,
        },
      ],
      isSingleOption: true,
    },
    {
      name: "ledge_state",
      label: "Ledge Options",
      helpText: "Ledge Options: Actions to be taken when on the ledge",
      options: [
        {
          label: "Neutral Getup",
          value: 1,
        },
        {
          label: "Roll",
          value: 2,
        },
        {
          label: "Jump",
          value: 4,
        },
        {
          label: "Getup Attack",
          value: 8,
        },
        {
          label: "Wait",
          value: 16,
        },
      ],
      isSingleOption: false,
    },
    {
      name: "ledge_delay",
      label: "Ledge Delay",
      helpText: "Ledge Delay: How many frames to delay the ledge option",
      options: getArrayOfNumbers(0, 300, 10).map((number, index) => ({
        label: number,
        value: index === 0 ? 1 : 2 ** index,
      })),
      isSingleOption: false,
    },
    {
      name: "tech_state",
      label: "Tech Options",
      helpText:
        "Tech Options: Actions to take when slammed into a hard surface",
      options: [
        {
          label: "No Tech",
          value: 1,
        },
        {
          label: "Roll Forwards",
          value: 2,
        },
        {
          label: "Roll Backwards",
          value: 4,
        },
        {
          label: "Tech In Place",
          value: 8,
        },
      ],
      isSingleOption: false,
    },
    {
      name: "miss_tech_state",
      label: "Mistech Options",
      helpText: "Mistech Options: Actions to take after missing a tech",
      options: [
        {
          label: "Neutral Getup",
          value: 1,
        },
        {
          label: "Getup Attack",
          value: 2,
        },
        {
          label: "Roll Forwards",
          value: 4,
        },
        {
          label: "Roll Backwards",
          value: 8,
        },
      ],
      isSingleOption: false,
    },
    {
      name: "shield_state",
      label: "Shield Toggles",
      helpText: "Shield Toggles: CPU Shield Behavior",
      options: [
        {
          label: "None",
          value: 0,
        },
        {
          label: "Infinite",
          value: 1,
        },
        {
          label: "Hold",
          value: 2,
        },
        {
          label: "Constant",
          value: 4,
        },
      ],
      isSingleOption: true,
    },
    {
      name: "shield_tilt",
      label: "Shield Tilt",
      helpText: "Shield Tilt: Direction to tilt the shield",
      options: [
        {
          label: "Away",
          value: 1,
        },
        {
          label: "Up and Away",
          value: 2,
        },
        {
          label: "Up",
          value: 4,
        },
        {
          label: "Up and In",
          value: 8,
        },
        {
          label: "In",
          value: 16,
        },
        {
          label: "Down and In",
          value: 32,
        },
        {
          label: "Down",
          value: 64,
        },
        {
          label: "Down and Away",
          value: 128,
        },
        {
          label: "Neutral",
          value: 256,
        },
        {
          label: "Left",
          value: 512,
        },
        {
          label: "Right",
          value: 1024,
        },
      ],
      isSingleOption: false,
    },
    {
      name: "buff_state",
      label: "Buff Options",
      helpText:
        "Buff Options: Buff(s) to be applied to respective character when loading save states",
      options: [
        {
          label: "Acceleratle",
          value: 1,
        },
        {
          label: "Oomph",
          value: 2,
        },
        {
          label: "Psyche Up",
          value: 4,
        },
        {
          label: "Bounce",
          value: 8,
        },
        {
          label: "Arsene",
          value: 16,
        },
        {
          label: "Deep Breathing",
          value: 32,
        },
        {
          label: "Limit Break",
          value: 64,
        },
        {
          label: "KO Punch",
          value: 128,
        },
        {
          label: "One-Winged Angel",
          value: 256,
        },
      ],
      isSingleOption: false,
    },
    {
      name: "character_item",
      label: "Character Item",
      helpText:
        "Character Item: CPU/Player item to hold when loading a save state",
      options: [
        {
          label: "None",
          value: 0,
        },
        {
          label: "Player 1st Var.",
          value: 1,
        },
        {
          label: "Player 2nd Var.",
          value: 2,
        },
        {
          label: "Player 3rd Var.",
          value: 4,
        },
        {
          label: "Player 4th Var.",
          value: 8,
        },
        {
          label: "Player 5th Var.",
          value: 16,
        },
        {
          label: "Player 6th Var.",
          value: 32,
        },
        {
          label: "Player 7th Var.",
          value: 64,
        },
        {
          label: "Player 8th Var.",
          value: 128,
        },
        {
          label: "CPU 1st Var.",
          value: 256,
        },
        {
          label: "CPU 2nd Var.",
          value: 512,
        },
        {
          label: "CPU 3rd Var.",
          value: 1024,
        },
        {
          label: "CPU 4th Var.",
          value: 2048,
        },
        {
          label: "CPU 5th Var.",
          value: 4096,
        },
        {
          label: "CPU 6th Var.",
          value: 8192,
        },
        {
          label: "CPU 7th Var.",
          value: 16384,
        },
        {
          label: "CPU 8th Var.",
          value: 32768,
        },
      ],
      isSingleOption: true,
    },
    {
      name: "crouch",
      label: "Crouch",
      helpText: "Crouch: Should the CPU crouch when on the ground",
      options: [
        {
          label: "Off",
          value: 0,
        },
        {
          label: "On",
          value: 1,
        },
      ],
      isSingleOption: true,
    },
  ],
  misc: [
    {
      name: "save_state_mirroring",
      label: "Mirroring",
      helpText:
        "Mirroring: Flips save states in the left-right direction across the stage center",
      options: [
        {
          label: "None",
          value: 0,
        },
        {
          label: "Alternate",
          value: 1,
        },
        {
          label: "Random",
          value: 2,
        },
      ],
      isSingleOption: true,
    },
    {
      name: "save_damage",
      label: "Save Damage",
      helpText: "Save Damage: Should save states retain player/CPU damage",
      options: [
        {
          label: "On",
          value: 1,
        },
        {
          label: "Off",
          value: 0,
        },
      ],
      isSingleOption: true,
    },
    {
      name: "save_state_enable",
      label: "Enable Save States",
      helpText:
        "Save States: Enable save states! Save a state with Grab+Down Taunt, load it with Grab+Up Taunt.",
      options: [
        {
          label: "On",
          value: 1,
        },
        {
          label: "Off",
          value: 0,
        },
      ],
      isSingleOption: true,
    },
    {
      name: "save_state_autoload",
      label: "Save States Autoload",
      helpText: "Save States Autoload: Load save state when any fighter dies",
      options: [
        {
          label: "On",
          value: 1,
        },
        {
          label: "Off",
          value: 0,
        },
      ],
      isSingleOption: true,
    },
    {
      name: "frame_advantage",
      label: "Frame Advantage",
      helpText:
        "Frame Advantage: Display the time difference between when the player is actionable and the CPU is actionable",
      options: [
        {
          label: "On",
          value: 1,
        },
        {
          label: "Off",
          value: 0,
        },
      ],
      isSingleOption: true,
    },
    {
      name: "hitbox_vis",
      label: "Hitbox Visualization",
      helpText:
        "Hitbox Visualization: Should hitboxes be displayed, hiding other visual effects",
      options: [
        {
          label: "On",
          value: 1,
        },
        {
          label: "Off",
          value: 0,
        },
      ],
      isSingleOption: true,
    },
    {
      name: "input_delay",
      label: "Input Delay",
      helpText: "Input Delay: Frames to delay player inputs by",
      options: getArrayOfNumbers(0, 30, 1).map((number, index) => ({
        label: number,
        value: index === 0 ? 1 : 2 ** index,
      })),
      isSingleOption: true,
    },
    {
      name: "stage_hazards",
      label: "Stage Hazards",
      helpText: "Stage Hazards: Should stage hazards be present",
      options: [
        {
          label: "On",
          value: 1,
        },
        {
          label: "Off",
          value: 0,
        },
      ],
      isSingleOption: true,
    },
    {
      name: "quick_menu",
      label: "Quick Menu",
      helpText: "Quick Menu: Should use quick or web menu",
      options: [
        {
          label: "On",
          value: 1,
        },
        {
          label: "Off",
          value: 0,
        },
      ],
      isSingleOption: true,
    },
  ],
};

export const getTabFromMenuObject = (menu, tabName) =>
  tabMap[tabName].reduce((accumulator, menuItem) => {
    const mask = menu[menuItem.name];
    accumulator.push({ ...menuItem, mask });

    return accumulator;
  }, []);

const getMenuFromConfig = (config = devFallbackConfig) => {
  const mash = getTabFromMenuObject(config, "mash");
  const defensive = getTabFromMenuObject(config, "defensive");
  const misc = getTabFromMenuObject(config, "misc");

  return {
    mash,
    defensive,
    misc,
  };
};

export const getConfigFromMenu = (menu) => {
  const config = Object.keys(menu)
    .map((key) => menu[key])
    .flat()
    .reduce(
      (accumulator, { name, mask }) => ({ ...accumulator, [name]: mask }),
      {}
    );

  return config;
};

export const loadMenu = (config) => getMenuFromConfig(config);
