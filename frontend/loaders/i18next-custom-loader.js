module.exports = function (source) {

  // remove 'module.exports = ' and parse as array of records
  // e.g.: [{"key":"Language","eng":"English","rus":"Русский"}]
  const parse = JSON.parse(source.substr(17))

  const languages = Object.keys(parse[0]).filter(lang => lang !== 'key')
  const translations = languages.reduce((o, lang) => {
    o[lang] = {}
    return o
  }, {})

  parse.forEach(record => languages.forEach(lang => translations[lang][record['key']] = record[lang]))

  return 'module.exports = ' + JSON.stringify(Object.entries(translations).reduce((o, [lang, t]) => {
    o[lang] = { translation: t }
    return o
  }, {}))
}
