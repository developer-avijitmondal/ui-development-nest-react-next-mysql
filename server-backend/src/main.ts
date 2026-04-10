import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS (for React frontend)
  app.enableCors();

  // ✅ Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Auth API')
    .setDescription('Login & Register API')
    .setVersion('1.0')
    .addBearerAuth() // 🔐 JWT support
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // ✅ Database check
  const dataSource = app.get(DataSource);

  if (dataSource.isInitialized) {
    console.log('✅ Database Connected Successfully');
  } else {
    console.log('❌ Database Not Connected');
  }

  await app.listen(3000);

  console.log(`🚀 App running on: http://localhost:3000`);
  console.log(`📘 Swagger docs: http://localhost:3000/api`);
}

bootstrap();