const { resolve, join } = require('path')
const { existsSync, fstatSync, readFile, writeFile } = require('fs-extra')

const logInfo = (...args) => console.info('\x1B[33m', ...args, '\x1B[0m')
const logError = (...args) => console.error('\x1B[31m', ...args, '\x1B[0m')

const compName = fetchCompName()
const displayName = `F${changeCase(compName, 'upper-camel-case')}`
const outputDir = resolve(
  __dirname,
  '../../packages/fighting-components',
  compName
)
const updatedFiles = []
const mainFilePath = join(
  'packages/fighting-components',
  compName,
  `${compName}.vue`
)
