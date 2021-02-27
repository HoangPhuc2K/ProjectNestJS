import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/Logger.middleware';
import { UserModule } from './user/user.module';
import { PhotoController } from './photo/photo.controller';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [UserModule,TypeOrmModule.forRoot(), PhotoModule,],
  controllers: [AppController, PhotoController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'users', method: RequestMethod.GET });
  }

}
