import Dexie from "dexie"

const db = new Dexie('AppDatabase')

// Declare tables, IDs and indexes
db.version(1).stores({
  assalaf: '++id, volumeId, gender',
  details: '++id',
  volumes: '++volumeId',
  preferences: '++key',
  records: 'id',
  meta: 'key'
})

export default db