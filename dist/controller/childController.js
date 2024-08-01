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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getonechild = exports.loginChild = exports.registerChild = void 0;
const childSchema_1 = __importDefault(require("../model/childSchema"));
const registerChild = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, age, email, password, Class } = req.body;
        const child = yield childSchema_1.default.create({
            name,
            age,
            email,
            password,
            Class,
        });
        return res.status(200).json({
            message: "Success",
            data: child,
        });
    }
    catch (error) {
        res.status(404).json({
            message: "An error occured",
            data: error,
        });
    }
});
exports.registerChild = registerChild;
const loginChild = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const getuser = yield childSchema_1.default.findOne({ email, password });
        if (!getuser) {
            return res.status(404).json({
                message: "Invalid credentials",
            });
        }
        return res.status(200).json({
            message: "Login success",
            data: getuser,
        });
    }
    catch (error) {
        res.status(404).json({
            message: "An error occured",
            data: error,
        });
    }
});
exports.loginChild = loginChild;
const getonechild = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { childId } = req.params;
        const getuser = yield childSchema_1.default.findById(childId);
        if (!getuser) {
            return res.status(404).json({
                message: "User not found",
            });
        }
        return res.status(200).json({
            message: "Login success",
            data: getuser,
        });
    }
    catch (error) {
        res.status(404).json({
            message: "An error occured",
            data: error,
        });
    }
});
exports.getonechild = getonechild;
