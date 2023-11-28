export default defineAppConfig({
  docus: {
    title: 'Handy Script',
		titleTemplate: '%s - Handy Script',
		url: 'https://handyscript.tech',
    description: 'A set of useful Javascript modules that extends the javascript core context.',
    image: 'https://github.com/handyscript/weboc/blob/1639d0069064170c1e7d0beda8d63bc91bbd83b5/public/cover.png?raw=true',
    socials: {
      twitter: 'vvhybe',
      github: 'handyscript/handyscript',
    },
    github: {
      dir: './content/',
      branch: 'main',
      repo: 'weboc',
      owner: 'handyscript',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
			title: "Handy Script",
      logo: {
				light: "https://github.com/handyscript/weboc/blob/2ac5e0b31b4025b9531f041f428cf78f4ee98f2d/public/logo-dark.png?raw=true",
				dark: "https://raw.githubusercontent.com/handyscript/weboc/2ac5e0b31b4025b9531f041f428cf78f4ee98f2d/public/logo-light.png",
			},
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
		footer: {
			fluid: true,
			credits: {
				icon: "©️",
				text: 'Handy Script',
				href: 'https://handyscript.tech'
			},
			exclude: []
		},
  }
})
