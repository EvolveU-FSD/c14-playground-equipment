import { MongoClient } from 'mongodb';

const client = new MongoClient("mongodb://localhost:27017/c14-park-equipment");
await client.connect()

const equipmentCollection = client.db().collection('equipment')

export async function findEquipmentByType(equipmentType) {
    const cursor = await equipmentCollection.find({ TYPE_DESCRIPTION: equipmentType })
    const equipment = await cursor.toArray()    
    return equipment
}

// await client.close()