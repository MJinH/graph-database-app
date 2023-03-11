import * as path from 'path'
import fs from 'fs'

export const getQuery = (name) => {
    const rootPath = path.join(__dirname, '../sql')
    const sqlPath = path.join(rootPath,`${name}.sql`)
    if (!fs.existsSync(sqlPath)) {
        throw new Error(`SQL file ${name} does not exist`)
    }

    return fs.readFileSync(sqlPath, 'utf8')
}