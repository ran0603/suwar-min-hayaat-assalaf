import db from './schema'

interface RecordType {
  id: string
  // add other fields as needed
  [key: string]: any
}

interface IndexJson {
  schemaVersion: number
  records: RecordType[]
}

const recordsTable = db.table<RecordType, string>('records')
const metaTable = db.table<{ key: string; value: any }, string>('meta')

export async function ingestData() {
  // Fetch index.json
  const response = await fetch('/data/index.json')
  const data: IndexJson = await response.json()

  // Get current schemaVersion from Dexie
  const meta = await metaTable.get('schemaVersion')
  const currentVersion = meta?.value ?? 0

  if (data.schemaVersion > currentVersion) {
    // Upsert records
    await db.transaction('rw', recordsTable, metaTable, async () => {
      for (const record of data.records) {
        await recordsTable.put(record)
      }
      await metaTable.put({ key: 'schemaVersion', value: data.schemaVersion })
    })
  }
}