const express = require('express');
const httpStatus = require('http-status');
const NewsController = require('../models/news/controller');
const { sendSuccess, sendError } = require('../utils/responses');

const router = express.Router();

router

  .route('/')
  /**
   * @swagger
   * /cities:
   *   get:
   *     description: Retrieve the full list of cities
   *     tags:
   *       - news
   *     produces:
   *       - application/json
   *     responses:
   *       '200':
   *         schema:
   *          $ref: '#/responses/getAllNews'
   *
   */
  .get((req, res) =>
    NewsController.findAll()
      .then(news => sendSuccess(res)(news))
      .catch(e => sendError(res, httpStatus.BAD_REQUEST)(e)),
  )
  /**
   * @swagger
   * /news:
   *   post:
   *     description: Add news
   *     tags:
   *       - news
   *     produces:
   *       - application/json
   *     parameters:
   *      - $ref: '#/parameters/news'
   *     responses:
   *       '200':
   *         schema:
   *          $ref: '#/responses/createNews'
   *
   */

  .post((req, res) =>
    NewsController.create(req.body)
      .then(news => sendSuccess(res, httpStatus.CREATED)(news))
      .catch(e => sendError(res, httpStatus.BAD_REQUEST)(e)),
  );

router
  .route('/:id')
  /**
   * @swagger
   * /news/{id}:
   *   get:
   *     description: Get news by a specified id
   *     tags:
   *       - news
   *     produces:
   *       - application/json
   *     parameters:
   *      - $ref: '#/parameters/id'
   *     responses:
   *       '200':
   *         schema:
   *          $ref: '#/responses/getNews'
   *
   */

  .get((req, res) =>
    NewsController.findById(req.params.id)
      .then(product => sendSuccess(res)(product))
      .catch(e => sendError(res, httpStatus.BAD_REQUEST)(e)),
  )
  /**
   * @swagger
   * /news/{id}:
   *   put:
   *     description: Update news by a specified id
   *     tags:
   *       - news
   *     produces:
   *       - application/json
   *     parameters:
   *      - $ref: '#/parameters/id'
   *      - $ref: '#/parameters/news'
   *     responses:
   *       '200':
   *         schema:
   *          $ref: '#/responses/updateNews'
   *
   */

  .put((req, res) =>
    NewsController.updateById(req.params.id, req.body)
      .then(city => sendSuccess(res)(city))
      .catch(e => sendError(res, httpStatus.BAD_REQUEST)(e)),
  )
  /**
   * @swagger
   * /news/{id}:
   *   delete:
   *     description: Remove news by a specified id
   *     tags:
   *       - news
   *     produces:
   *       - application/json
   *     parameters:
   *      - $ref: '#/parameters/id'
   *     responses:
   *       '200':
   *         schema:
   *          $ref: '#/responses/removeNews'
   *
   */

  .delete((req, res) =>
    NewsController.removeById(req.params.id)
      .then(city => sendSuccess(res)(city))
      .catch(e => sendError(res, httpStatus.BAD_REQUEST)(e)),
  );

module.exports = router;
