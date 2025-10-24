import { Router } from "express";
import { gerarRelatorio } from "./reportController.js";

const router = Router();

router.get("/relatorio", gerarRelatorio);

export default router;