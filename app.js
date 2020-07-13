const fs = require('fs')
// получить список уникальных предметов
// к каждому предмету добавить ученика
// к каждому ученику добавить его оценки

function getSchoolers(fileName) {
    let content = readFile(fileName)
    let lines = getLines(content)

    let result = []
    for (let i = 1; i < lines.length; i++) {
        let names = lines[i].split(',')
        result.push({name: names[0], subject: names[1], mark: names[2], group: names[3]})
    }
    return result
}

// вернуть содержимое текстового файла
function readFile(fileName) {
    return fs.readFileSync(fileName, 'utf8')
}

function getLines(content) {
    let result = content.split('\n')
    return result
}

console.log(getSchoolers("schoolchild.csv"))