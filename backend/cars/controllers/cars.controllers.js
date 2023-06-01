import {
    getItem,
    listItems,
    editItem,
    addItem,
    deleteItem
} from '../models/cars.models.js'

export const getCar = (req, res) => {
    try {
        const resp = getItem(parseInt(req.params.id))
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const listCars = (req, res) => {
    try {
        const resp = listItems()
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const editCar = (req, res) => {
    try {
        const resp = editItem(parseInt(req.params.id), req.body)
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const addCar = (req, res) => {
    try {
        const resp = addItem(req.body)
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteCar = (req, res) => {
    try {
        const resp = deleteItem(parseInt(req.params.id))
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}