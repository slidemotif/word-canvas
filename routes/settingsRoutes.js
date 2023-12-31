/**
 * @swagger
 * tags:
 *   - name: Settings
 *     description: Operations related to settings
 */

const express = require("express");

const router = express.Router();
const settingsController = require("../controllers/settingsController");
const { check } = require("express-validator");

/**
 * @swagger
 * /api/settings:
 *   get:
 *     summary: Get all settings
 *     description: Get all settings from database
 *     tags:
 *       - Settings
 *     responses:
 *       '200':
 *         description: Get all settings
 *       '500':
 *         description: Server error
 */
router.get("/", settingsController.getSettings);

/**
 * @swagger
 * /api/settings:
 *   post:
 *     summary: Add settings
 *     description: Add a new settings to the database
 *     tags:
 *       - Settings
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - minFontSize
 *               - maxFontSize
 *               - lineSpace
 *               - wordSpace
 *               - canvasHeight
 *               - canvasWidth
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the setting
 *                 example: "default"
 *               minFontSize:
 *                 type: integer
 *                 description: Minimum font size
 *                 example: 66
 *               maxFontSize:
 *                 type: integer
 *                 description: Maximum font size
 *                 example: 114
 *               lineSpace:
 *                 type: integer
 *                 description: Line spacing
 *                 example: 40
 *               wordSpace:
 *                 type: integer
 *                 description: Word spacing
 *                 example: 20
 *               canvasHeight:
 *                 type: integer
 *                 description: Canvas height
 *                 example: 2430
 *               canvasWidth:
 *                 type: integer
 *                 description: Canvas width
 *                 example: 1770
 *               padding:
 *                 type: integer
 *                 description: Canvas width
 *                 example: 120
 *     responses:
 *       '200':
 *         description: Settings successfully added
 *       '400':
 *         description: Bad request (e.g., missing required fields)
 *       '500':
 *         description: Server error
 */
router.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check("minFontSize", "minFontSize is required").not().isEmpty(),
    check("maxFontSize", "maxFontSize is required").not().isEmpty(),
    check("lineSpace", "lineSpace is required").not().isEmpty(),
    check("wordSpace", "wordSpace is required").not().isEmpty(),
    check("canvasHeight", "canvasHeight is required").not().isEmpty(),
    check("canvasWidth", "canvasWidth is required").not().isEmpty(),
    check("padding", "padding is required").not().isEmpty(),
  ],
  settingsController.createSettings
);

/**
 * @swagger
 * /api/settings:
 *   put:
 *     summary: Update settings
 *     description:
 *     tags:
 *       - Settings
 *     responses:
 *       '200':
 *         description: Settings is successfully submitted
 *       '500':
 *         description: Server error
 */

router.put("/:settingsId", settingsController.updateSettings);

/**
 * @swagger
 * /api/settings/set-default:
 *   put:
 *     summary: Set settings as default
 *     description:
 *     tags:
 *       - Settings
 *     parameters:
 *       - in: query
 *         name: settingsId
 *         description: Internal settingsId
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Settings successfully set as default
 *       '404':
 *         description: Settings not found
 *       '500':
 *         description: Server error
 */
router.put("/set-default/:settingsId", settingsController.setDefault);

/**
 * @swagger
 * /api/settings/:
 *   delete:
 *     summary: Delete settings
 *     description: Delete settings with id
 *     tags:
 *       - Settings
 *     parameters:
 *       - in: query
 *         name: settingsId
 *         description: Internal settings id
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Settings deleted successfully
 *       '500':
 *         description: Server error
 */
router.delete("/:settingsId", settingsController.deleteSettings);

module.exports = router;
