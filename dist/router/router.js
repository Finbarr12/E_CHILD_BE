"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const childController_1 = require("../controller/childController");
const router = (0, express_1.Router)();
router.post("/registerchild", childController_1.registerChild);
router.post("/loginchild", childController_1.loginChild);
router.get("/:childId/getchild", childController_1.getonechild);
exports.default = router;
