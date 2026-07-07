# 🌙 Midnight-Ash Theme Pack

> **A sleek, feature-rich Discord theme combining the best of dark aesthetics and modern functionality**

---

## ⚠️ Aliucord Branch — No Active Support ⚠️

This branch contains the **Aliucord Themer** port of Midnight Ash.

It exists for users who prefer Aliucord's native JSON theming system.

**This branch is not actively maintained.**

The main Midnight Ash project is developed on the [`main`](https://github.com/Ash1421/Midnight-Ash/tree/main) branch.

Updates may arrive later than the primary project or only when compatibility requires them.

> For documentation, support, customization, releases, and issue reporting, refer to the main branch:
> **https://github.com/Ash1421/Midnight-Ash**

---

## ✨ Socials & Stars

[![Discord Server Invite](https://img.shields.io/badge/Discord-Server%20Invite-7289DA?style=for-the-badge&logo=discord&logoColor=white&color=blueviolet&labelColor=1c1917)](https://rb.ash1421.com/discord) [![GitHub Stars](https://img.shields.io/github/stars/Ash1421/Midnight-Ash?style=for-the-badge&color=gold&labelColor=1c1917&logo=github&logoColor=white)](https://github.com/Ash1421/Midnight-Ash/stargazers)

---

## 📦 What's in This Branch

This branch contains:

- `Midnight-Ash.json` — The complete Aliucord Themer theme file, translated from `midnight-ash.css`.
- `UNSUPPORTED.md` — A list of Midnight Ash / BetterDiscord-style features that Aliucord's Themer plugin has no equivalent for.

This is a **from-scratch color port**, not a build output of the CSS. Aliucord's Themer plugin uses a fixed set of native Android resource keys (`simple_colors`, `colors`, `drawable_tints`) rather than CSS custom properties, so every value below was individually mapped from Midnight Ash's OKLCH/HSL palette to a signed 32-bit ARGB integer.

---

## 🚀 Installation

1. Install the [Themer plugin](https://github.com/Vendicated/AliucordPlugins/tree/main/Themer) for Aliucord.
2. Download `Midnight-Ash.json` from this branch (or use the raw link below).
3. Move the file into your Aliucord `themes` folder, **or** open Themer's settings and import it directly.
4. Enable **Full Transparency** in the Themer plugin settings (required for the theme's dark surfaces to render correctly).
5. Enable the theme in the Themer plugin list and restart Discord.

### 🔗 Direct raw link (for manual download / updater)

```
https://raw.githubusercontent.com/Ash1421/Midnight-Ash/aliucord/Midnight-Ash.json
```

### 🌙 Optional: restore the moon home icon

Aliucord's Themer plugin can't swap the home/DMs icon's shape (see `UNSUPPORTED.md`), but the separate [**HomeIconSwitcher**](https://github.com/nyakowint/AliuPlugins/tree/main/HomeIconSwitcher) plugin can:

1. Install [HomeIconSwitcher](https://github.com/nyakowint/AliuPlugins) (part of `nyakowint/AliuPlugins` — grab it from the [`builds`](https://github.com/nyakowint/AliuPlugins/tree/builds) branch, or via the in-app plugin browser if listed there).
2. Open the plugin's settings and set the icon URL to Midnight Ash's own moon icon, matching the main theme's `--dms-icon-svg-url`:
   ```
   https://refact0r.github.io/midnight-discord/assets/Font_Awesome_5_solid_moon.svg
   ```
3. Restart Discord. Your home/DMs button will now match the desktop CSS theme's moon icon instead of Aliucord's default.

(You can of course point it at any other image — this is just the closest match to Midnight Ash's own branding.)

---

## 🔄 Updater Information

The theme's `manifest.updater` field points to the raw JSON on this branch:

```
https://raw.githubusercontent.com/Ash1421/Midnight-Ash/aliucord/Midnight-Ash.json
```

The Themer plugin checks this URL and compares `manifest.version` to offer updates. Because this branch is not actively maintained, updates here will lag behind `main` and will typically only happen when:

- Midnight Ash's core color palette changes significantly on `main`, or
- Aliucord's Themer plugin changes its supported key set in a breaking way.

---

## ✅ Supported Features

The following aspects of Midnight Ash are faithfully reproduced using Aliucord's native theming keys:

- **AMOLED backgrounds** — true black (`#000000`) primary background, matching the source theme's OLED-optimized surfaces.
- **Layered surfaces** — channel list, member list, headers, cards, and modals reproduce the same near-black elevation scale (`bg-1` → `bg-4`) as the CSS.
- **Purple accent identity** — the theme's signature purple (`oklch(70% 0.11 310deg)`) drives the brand/accent color scale, buttons, mentions, links, and the settings/plugin accent color.
- **Text hierarchy** — primary, secondary, tertiary, and muted text tones are mapped from the CSS's cool-toned `--text-1` through `--text-5` scale.
- **Status colors** — online (green), DND (red), idle (yellow), and streaming (purple) indicators match the CSS's semantic color assignments.
- **Hover / pressed / selected states** — channel list selection and press states are computed by flattening the CSS's translucent white overlays onto the theme's background color, since Aliucord drawable tints don't support live alpha-compositing over arbitrary content.
- **Mentions & reactions** — mention highlight and reaction/voice-speaking accents use the same purple/green accents as the source CSS.
- **Borders & scrollbars** — scrollbar thumb and code-block border colors match the `.theme-midnight` class overrides in the CSS.
- **Custom font** — the theme's `figtree` font family is applied globally via the `fonts."*"` key.
- **Fully populated color tables** — all Aliucord-documented `simple_colors`, accent/primary/general/uikit `colors`, and `drawable_tints` keys are overridden (105 keys total) rather than left to Discord defaults.

See `UNSUPPORTED.md` for the parts of Midnight Ash that Aliucord's Themer plugin has no equivalent key for.

---

## ⚙️ Customization

Aliucord's Themer plugin includes its own in-app **Theme Editor** — you don't need to hand-edit the JSON:

1. Open Aliucord → Plugins → Themer → your imported theme.
2. Browse the `simple_colors`, `colors`, and `drawable_tints` categories.
3. Tap any entry to open the color picker.
4. Save and restart to see changes.

If you'd rather edit the raw file, every value is a **signed 32-bit ARGB integer** (`0xAARRGGBB` interpreted as a signed int). Refer to the [Aliucord Themer documentation](https://github.com/Aliucord/documentation/blob/main/theme-dev/README.md) for the full key reference.

For the original CSS variables this theme was translated from, see the [Customization Documentation](https://github.com/Ash1421/Midnight-Ash/blob/main/README.md#️-customization-documentation) in the main README.

---

## 📜 Licensed Under

[![License: GPL v3.0](https://img.shields.io/badge/License-GPL%20v3.0-6829B1.svg?style=for-the-badge&labelColor=1c1917&logo=gnu&logoColor=white)](https://github.com/Ash1421/Midnight-Ash/blob/main/LICENSE)

This project is licensed under the [GPL v3.0](https://github.com/Ash1421/Midnight-Ash/blob/main/LICENSE). It incorporates components from other open-source projects — see the [license table](https://github.com/Ash1421/Midnight-Ash/blob/main/README.md#-license) in the main README for details.

The Aliucord Themer plugin itself is a separate, independently licensed project (Vendicated/AliucordPlugins) and is not distributed as part of this repository.

---

## 🙏 Credits

- **Midnight Theme** — [@refact0r](https://github.com/refact0r)
- **AMOLED-Cord** — [@LuckFire](https://github.com/LuckFire)
- **Settings Modal** — [@DevilBro](https://github.com/mwittrien)
- **Radial Status** — [@Gibbu](https://github.com/DiscordStyles)
- **Horizontal Server List** — [@Gibbu](https://github.com/DiscordStyles)
- **Emoji Replace** — [@DevilBro](https://github.com/mwittrien)
- **Aliucord Themer plugin** — [@Vendicated](https://github.com/Vendicated)

---

**Made with 💜 by [@Ash1421](https://github.com/Ash1421), for the Discord community.**
