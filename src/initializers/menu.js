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
      options: [],
      isSingleOption: false,
    },
    {
      name: "di_state",
      label: "DI Direction",
      options: [],
      isSingleOption: false,
    },
    {
      name: "sdi_state",
      label: "SDI Direction",
      options: [],
      isSingleOption: false,
    },
    {
      name: "sdi_strength",
      label: "SDI Strength",
      options: [],
      isSingleOption: false,
    },
    {
      name: "clatter_strength",
      label: "Clatter Strength",
      options: [],
      isSingleOption: false,
    },
    {
      name: "ledge_state",
      label: "Ledge Options",
      options: [],
      isSingleOption: false,
    },
    {
      name: "ledge_delay",
      label: "Ledge Delay",
      options: [],
      isSingleOption: false,
    },
    {
      name: "tech_state",
      label: "Tech Options",
      options: [],
      isSingleOption: false,
    },
    {
      name: "miss_tech_state",
      label: "Mistech Options",
      options: [],
      isSingleOption: false,
    },
    {
      name: "shield_state",
      label: "Shield Toggles",
      options: [],
      isSingleOption: false,
    },
    {
      name: "shield_tilt",
      label: "Shield Tilt",
      options: [],
      isSingleOption: false,
    },
    {
      name: "defensive_state",
      label: "Escape Toggles",
      options: [],
      isSingleOption: false,
    },
    {
      name: "buff_state",
      label: "Buff Options",
      options: [],
      isSingleOption: false,
    },
    {
      name: "character_item",
      label: "Character Item",
      options: [],
      isSingleOption: false,
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
