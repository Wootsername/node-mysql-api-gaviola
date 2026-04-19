import express from 'express;';
const router = express.Router();
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamlsjs';
const swaggerDocumnet = YAML.load('./swagger.yaml');

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocumment));

export default router;