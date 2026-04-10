"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Auth API')
        .setDescription('Login & Register API')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const dataSource = app.get(typeorm_1.DataSource);
    if (dataSource.isInitialized) {
        console.log('✅ Database Connected Successfully');
    }
    else {
        console.log('❌ Database Not Connected');
    }
    await app.listen(3000);
    console.log(`🚀 App running on: http://localhost:3000`);
    console.log(`📘 Swagger docs: http://localhost:3000/api`);
}
bootstrap();
//# sourceMappingURL=main.js.map