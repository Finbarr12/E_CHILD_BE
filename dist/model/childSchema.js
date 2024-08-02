"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const childSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    Class: {
        type: String,
        required: true,
    },
});
exports.default = (0, mongoose_1.model)("child", childSchema);
