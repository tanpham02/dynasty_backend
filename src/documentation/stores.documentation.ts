// NOTE: Store Config
/**
 * @swagger
 * components:
 *   schemas:
 *     StoreConfig:
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

// NOTE: Stores
/**
 * @swagger
 * components:
 *   schemas:
 *      Stores:
 *         type: object
 *         properties:
 *            storeConfig:
 *                $ref: '#/components/schemas/StoreConfig'
 *            storeInformation:
 *                $ref: '#/components/schemas/StoreInformation'
 *            faqs:
 *                $ref: '#/components/schemas/FrequentlyAskedQuestions'
 *            termAndPolicy:
 *                $ref: '#/components/schemas/TermAndPolicy'
 *
 */