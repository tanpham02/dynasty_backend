"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var type_1 = require("@app/exception/type");
var user_1 = __importDefault(require("@app/models/user"));
var user_2 = __importDefault(require("@app/services/user"));
var userService = new user_2.default(user_1.default, 'user');
var userController = {
    // SEARCH PAGINATION
    search: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, pageIndex, pageSize, fullName, role, params, result, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.query, pageIndex = _a.pageIndex, pageSize = _a.pageSize, fullName = _a.fullName, role = _a.role;
                    params = {
                        pageIndex: pageIndex ? Number(pageIndex) : 0,
                        pageSize: pageSize ? Number(pageSize) : 10,
                        fullName: fullName === null || fullName === void 0 ? void 0 : fullName.toString(),
                        role: role === null || role === void 0 ? void 0 : role.toString(),
                    };
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userService.getPaginationExcludePw(params)];
                case 2:
                    result = _b.sent();
                    res.status(type_1.HttpStatusCode.OK).json(result);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    next(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    // CREATE USER
    create: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, userService.createOverriding(req)];
                case 1:
                    result = _a.sent();
                    res.status(type_1.HttpStatusCode.OK).json(result);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    next(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    // UPDATE USER
    update: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var id, message, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userService.updateOverriding(id, req)];
                case 2:
                    message = (_a.sent()).message;
                    res.status(type_1.HttpStatusCode.OK).json(message);
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    next();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    // GET USER BY ID
    getById: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var id, result, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userService.getByIdOverriding(id)];
                case 2:
                    result = _a.sent();
                    res.status(type_1.HttpStatusCode.OK).json(result);
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    next(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    // GET USER BY ID
    delete: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var ids, message, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ids = req.query.ids;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userService.delete(ids)];
                case 2:
                    message = (_a.sent()).message;
                    res.status(type_1.HttpStatusCode.OK).json(message);
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    next(error_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); },
};
exports.default = userController;
