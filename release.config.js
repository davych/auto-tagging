module.exports = {
  branches: [
    {
      name: "master",
      channel: "rc",
      prerelease: true
    },
    {
      name: "develop",
      channel: "beta"
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
        message: 'chore: xxx-000 release ${nextRelease.version} \n\n${nextRelease.notes}'
      }
    ]
  ]
}
