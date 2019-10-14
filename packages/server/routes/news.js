const express = require('express');
const httpStatus = require('http-status');
const NewsController = require('../models/news/controller');
const { sendSuccess, sendError } = require('../utils/responses');
const { validate } = require('../utils/validator');
const { newsValidationRules } = require('../models/news/newsValidator');

const router = express.Router();

router

  .route('/')
  /**
   * @swagger
   * /news:
   *   get:
   *     description: Retrieve the full list of news
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
      .catch(e => sendError(res, httpStatus.INTERNAL_SERVER_ERROR)(e)),
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

  .post(newsValidationRules(), validate, (req, res) =>
    NewsController.create(req.body)
      .then(news => sendSuccess(res, httpStatus.CREATED)(news))
      .catch(e => sendError(res, httpStatus.INTERNAL_SERVER_ERROR)(e)),
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
      .catch(e => sendError(res, httpStatus.INTERNAL_SERVER_ERROR)(e)),
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

  .put(newsValidationRules(), validate, (req, res) =>
    NewsController.updateById(req.params.id, req.body)
      .then(city => sendSuccess(res)(city))
      .catch(e => sendError(res, httpStatus.INTERNAL_SERVER_ERROR)(e)),
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
      .catch(e => sendError(res, httpStatus.INTERNAL_SERVER_ERROR)(e)),
  );

module.exports = router;
