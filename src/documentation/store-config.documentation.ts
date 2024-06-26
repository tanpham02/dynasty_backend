// NOTE: Store Setting
/**
 * @swagger
 * components:
 *   schemas:
 *     StoreSetting:
 *       type: object
 *       properties:
 *         feeShip:
 *             type: number
 *         transferContent:
 *             type: string
 *         reasonOrderCancel:
 *             type: array
 *             items:
 *                type: string
 *         hotlineSupport:
 *             type: object
 *             properties:
 *                order:
 *                   type: string
 *                customerCareHotline:
 *                   type: string
 */

// NOTE: Frequently Asked Questions
/**
 * @swagger
 * components:
 *   schemas:
 *     FrequentlyAskedQuestions:
 *       type: object
 *       properties:
 *         question:
 *           type: string
 *         answer:
 *           type: string
 */

// NOTE: Term And Policy
/**
 * @swagger
 * components:
 *   schemas:
 *     TermAndPolicy:
 *       type: object
 *       properties:
 *         deliveryPolicy:
 *           type: string
 *         privatePolicy:
 *           type: string
 *         termAndCondition:
 *           type: string
 */

// NOTE: Store Information
/**
 * @swagger
 * components:
 *   schemas:
 *     StoreInformation:
 *       type: object
 *       required:
 *         - name
 *         - phoneNumber
 *         - email
 *       properties:
 *          brandStore:
 *             type: string
 *          logo:
 *             type: string
 *          name:
 *             type: string
 *          description:
 *             type: string
 *          email:
 *             type: string
 *          phoneNumber:
 *             type: string
 *          taxCode:
 *             type: string
 *       allOf:
 *           - $ref: '#/components/schemas/LocationBase'
 */

// NOTE: Back Account Config
/**
 * @swagger
 * components:
 *   schemas:
 *     BackAccountConfig:
 *       type: object
 *       required:
 *         - bankName
 *         - bankCode
 *         - bankNumber
 *       properties:
 *         bankCode:
 *           type: string
 *         bankNumber:
 *           type: string
 *         bankName:
 *           type: string
 *         bankBranch:
 *           type: string
 */

// NOTE: Email Config
/**
 * @swagger
 * components:
 *   schemas:
 *     EmailConfig:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *         password:
 *           type: string
 *         mailServer:
 *           type: string
 *         port:
 *           type: number
 */

// NOTE: Store Config
/**
 * @swagger
 * components:
 *   schemas:
 *      StoreConfig:
 *         allOf:
 *           - $ref: '#/components/schemas/BaseModel'
 *         type: object
 *         properties:
 *            storeSetting:
 *                $ref: '#/components/schemas/StoreSetting'
 *            storeInformation:
 *                $ref: '#/components/schemas/StoreInformation'
 *            faqs:
 *                $ref: '#/components/schemas/FrequentlyAskedQuestions'
 *            termAndPolicy:
 *                $ref: '#/components/schemas/TermAndPolicy'
 *            emailConfig:
 *                $ref: '#/components/schemas/EmailConfig'
 *            bankAccountConfig:
 *                $ref: '#/components/schemas/BackAccountConfig'
 *
 */
