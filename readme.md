# Bondage College Cheats

This will add a set of cheat options to Bondage College.

## Usage

Press the 'C' key to open/close the cheat menu.

## Setup

### Automated

This section will help setup automatic injection of the scripts.

1. **Install** a script injector
    1. For **Firefox**, install the [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey) plugin
    1. For **Chrome**, install the [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) plugin
1. **Add** the injection script
    1. **Copy** the content from [src/inject.js](src/inject.js)
    1. **Create** a new script in the script injector
    1. **Paste** the copied content to the newly created script
1. All set, just **navigate** to an instance of Bondage College, and the script will do all the work

### Manual

1. **Navigate** to an instance of Bondage College
1. **Copy** the content from [src/inject.js](src/inject.js)
1. **Paste** the content into your browser's console

## FAQ

### Can I run this against a different version?

Yes. This should work on any version. You may need to add a domain to the script injector depending on where you accessing the other version from.

### Why can't I just navigate to a different website to get the "cheat edition"?

This method of injecting a script doesn't need to be packaged with Bondage College, meaning this works with any version.

Nowadays, modern browsers prevent websites from altering cross-domain content. I won't get into the technical details here, but this basically prevents this kind of injection from navigating to a facade website pointing to the original. And although there are some exploits available, they probably wont be available for long.

### Can I get a feature added?

Sure. You can create an [issue](issues), or reach out to me if you know where I am.
And as always, I take [pull requests](pulls).