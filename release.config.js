module.exports = {
  branches: [
    {
      name: "master",
      channel: "rc",
    },
    {
      name: "develop",
      channel: "beta",
      prerelease: "beta"
    }
  ],
  tagFormat: `v\${version}`,
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md'
      }
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: false
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: ['docs/CHANGELOG.md', 'package.json'],
        message: 'chore: xxx-000 release ${nextRelease.version} \n\n${nextRelease.notes}'
      }
    ]
  ]
}
