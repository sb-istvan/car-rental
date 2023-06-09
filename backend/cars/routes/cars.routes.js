import express from "express";
import {
  listCars,
  getCar,
  editCar,
  addCar,
  deleteCar,
} from "../controllers/cars.controllers.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Car:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  description: Car id
 *              make:
 *                  type: string
 *                  description: Car make
 *              model:
 *                  type: string
 *                  description: Car model
 *              year:
 *                  type: integer
 *                  description: Car year of  manufacture
 *              color:
 *                  type: string
 *                  description: Car color
 *      example:
 *          id: 1
 *          make: Porsche
 *          model: Panamera
 *          year: 2015
 *          color: white
 */

/**
 * @swagger
 * /cars:
 *  get:
 *      summary: Get all cars
 *      description: Get all cars
 *      responses:
 *          200:
 *              description: Success
 *          500:
 *              description: Internal Server Error
 */
router.get("/", listCars);

/**
 * @swagger
 * /cars/{id}:
 *  get:
 *      summary: Get car detail
 *      description: Get car detail
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Car id
 *      responses:
 *          200:
 *              description: Success
 *          500:
 *              description: Internal Server Error
 */
router.get("/:id", getCar);

/**
 * @swagger
 * /cars/{id}:
 *  put:
 *     summary: Edit car
 *     description: Edit car
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Car id
 *     requestBody:
 *       description: A JSON object containing car information
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/Car'
 *           example:
 *              make: Porsche
 *              model: Panamera
 *              year: 2015
 *              color: white
 *     responses:
 *     200:
 *        description: Success
 *     500:
 *       description: Internal Server Error
 *
 */
router.put("/:id", editCar);

/**
 * @swagger
 * /cars:
 *  post:
 *      summary: Add car
 *      description: Add car
 *      requestBody:
 *          description: A JSON object containing pet information
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Car'
 *                  example:
 *                      make: Porsche
 *                      model: Panamera
 *                      year: 2015
 *                      color: white
 *      responses:
 *          200:
 *              description: Success
 *          500:
 *              description: Internal Server Error
 */
router.post("/", addCar);

/**
 * @swagger
 * /cars/{id}:
 *  delete:
 *      summary: Delete car
 *      description: Delete car
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Car id
 *      responses:
 *          200:
 *              description: Success
 *          500:
 *              description: Internal Server Error
 */
router.delete("/:id", deleteCar);

export default router;
