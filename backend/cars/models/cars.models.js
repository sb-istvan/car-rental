import db from '../../db/db.js'

export const getItem = id => {
    try {
        const car = db?.cars?.filter(car => car?.id === id)[0]
        return car
    } catch (err) {
        console.log('Error', err)
    }
}

export const listItems = () => {
    try {
        return db?.cars
    } catch (err) {
        console.log('Error', err)
    }
}

export const editItem = (id, data) => {
    try {
        const index = db.cars.findIndex(car => car.id === id)
        if (index === -1) throw new Error('Car not found')
        else {
            db.cars[index] = data
            return db.cars[index]
        }            
    } catch (err) {
        console.log('Error', err)
    }
}

export const addItem = data => {
    try {
        const listOfIds = db.cars.map(item => item.id)
        const highestId = listOfIds.reduce((a, b) => Math.max(a, b), -Infinity)
        const newCar = { id: highestId + 1, ...data }
        db.cars.push(newCar)
        return newCar
    } catch (err) {
        console.log('Error', err)
    }
}

export const deleteItem = id => {
    try {
        const index = db.cars.findIndex(car => car.id === id)
        if (index === -1) throw new Error('Car not found')
        else {
            db.cars.splice(index, 1)
            return db.cars
        }
    } catch (error) {
        
    }
}