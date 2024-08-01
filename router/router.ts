import { Router } from "express";
import {
  getonechild,
  loginChild,
  registerChild,
} from "../controller/childController";

const router = Router();

router.post("/registerchild", registerChild);
router.post("/loginchild", loginChild);
router.get("/:childId/getchild", getonechild);

export default router;
