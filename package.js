Package.describe({
  name: 'apollo',
  version: '4.1.0',
  summary: 'Basic Apollo integration for Meteor apps',
  git: 'https://github.com/meteor/apollo',
})

Package.onUse(function (api) {
  api.versionsFrom(['1.12', '2.3'])
  api.use(['ecmascript', 'accounts-base', 'check'])

  api.mainModule('src/server.js', 'server')
  api.mainModule('src/client.js', 'client', { lazy: true })
})

Npm.depends({
  '@apollo/client': '3.3.19',
})

Package.onTest(function (api) {
  api.use([
    'ecmascript',
    'meteortesting:mocha',
    'practicalmeteor:chai',
    'accounts-base',
    'apollo',
  ])

  api.mainModule('tests/server.js', 'server')
})
