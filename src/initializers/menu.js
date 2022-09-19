import { getArrayOfNumbers } from "../lib/arrayOfNumbers";

const tabMap = {
  mash: [
    {
      name: "mash_state",
      label: "Mash Toggles",
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
      name: "attack_angle",
      label: "Attack Angle",
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
      options: getArrayOfNumbers(0, 150, 5).map((number, index) => ({
        label: number,
        value: index === 0 ? 1 : 2 ** index,
      })),
      isSingleOption: false,
    },
    {
      name: "pummel_delay",
      label: "Pummel Delay",
      options: getArrayOfNumbers(0, 150, 5).map((number, index) => ({
        label: number,
        value: index === 0 ? 1 : 2 ** index,
      })),
      isSingleOption: false,
    },
    {
      name: "falling_aerials",
      label: "Falling Aerials",
      options: [
        { label: "True", value: 1 },
        { label: "False", value: 2 },
      ],
      isSingleOption: false,
    },
    {
      name: "full_hop",
      label: "Full Hop",
      options: [
        { label: "True", value: 1 },
        { label: "False", value: 2 },
      ],
      isSingleOption: false,
    },
    {
      name: "aerial_delay",
      label: "Aerial Delay",
      options: getArrayOfNumbers(0, 30, 1).map((number, index) => ({
        label: number,
        value: index === 0 ? 1 : 2 ** index,
      })),
      isSingleOption: false,
    },
    {
      name: "fast_fall",
      label: "Fast Fall",
      options: [
        { label: "True", value: 1 },
        { label: "False", value: 2 },
      ],
      isSingleOption: false,
    },
    {
      name: "fast_fall_delay",
      label: "Fast Fall Delay",
      options: getArrayOfNumbers(0, 30, 1).map((number, index) => ({
        label: number,
        value: index === 0 ? 1 : 2 ** index,
      })),
      isSingleOption: false,
    },
    {
      name: "oos_offset",
      label: "OoS Offset",
      options: getArrayOfNumbers(0, 30, 1).map((number, index) => ({
        label: number,
        value: index === 0 ? 1 : 2 ** index,
      })),
      isSingleOption: false,
    },
    {
      name: "reaction_time",
      label: "Reaction Time",
      options: getArrayOfNumbers(0, 30, 1).map((number, index) => ({
        label: number,
        value: index === 0 ? 1 : 2 ** index,
      })),
      isSingleOption: false,
    },
    {
      name: "mash_in_neutral",
      label: "Mash In neutral",
      options: [
        { label: "On", value: 1 },
        { label: "Off", value: 0 },
      ],
      isSingleOption: true,
    },
  ],
  defensive: [
    {
      name: "air_dodge_dir",
      label: "Airdodge Direction",
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
      options: getArrayOfNumbers(0, 300, 10).map((number, index) => ({
        label: number,
        value: index === 0 ? 1 : 2 ** index,
      })),
      isSingleOption: false,
    },
    {
      name: "tech_state",
      label: "Tech Options",
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
      name: "defensive_state",
      label: "Escape Toggles",
      options: [
        {
          label: "Spotdodge",
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
          label: "Jab",
          value: 8,
        },
        {
          label: "Shield",
          value: 16,
        },
      ],
      isSingleOption: false,
    },
    {
      name: "buff_state",
      label: "Buff Options",
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
  ],
  misc: [
    {
      name: "save_state_mirroring",
      label: "Mirroring",
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
      options: getArrayOfNumbers(0, 30, 1).map((number, index) => ({
        label: number,
        value: index === 0 ? 1 : 2 ** index,
      })),
      isSingleOption: true,
    },
    {
      name: "stage_hazards",
      label: "Stage Hazards",
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

const getMenuObjectFromUrl = () => {
  const queryParams = new URLSearchParams(window.location.search);

  return Array.from(queryParams).reduce(
    (accumulator, [key, value]) => ({
      ...accumulator,
      [key]: parseInt(value),
    }),
    {}
  );
};

const getTabFromMenuObject = (menu, tabName) =>
  tabMap[tabName].reduce((accumulator, menuItem) => {
    const mask = menu[menuItem.name];
    accumulator.push({ ...menuItem, mask });

    return accumulator;
  }, []);

const getMenu = () => {
  const menu = getMenuObjectFromUrl();
  const mash = getTabFromMenuObject(menu, "mash");
  const defensive = getTabFromMenuObject(menu, "defensive");
  const misc = getTabFromMenuObject(menu, "misc");

  return {
    mash,
    defensive,
    misc,
  };
};

export const loadMenu = () => getMenu();
