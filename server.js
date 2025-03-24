import express from 'express'
import { findEquipmentByType } from './equipment.js'

const app = express()

app.use(express.static('public'))

app.get('/api/equipment/:equipmentType', async (request, response) => {
    const { equipmentType } = request.params
    const equipment = await findEquipmentByType(equipmentType)
    response.send(equipment)
})

app.listen(3000, () => {
    console.log('Playground equipment server listening on port ' + 3000)
})