import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('inicial')
  getHello(): object {
    
    let pessoas = [
      {nome: 'Natália Fernandes', email: 'criativosnatalia@gmail.com'},
      {nome: 'Heitor Fernandes', email: 'heitorfernandes@gmail.com'},
      {nome: 'Andressa Marinho', email: 'andressamarinho@gmail.com'},
      {nome: 'João Teixeira', email: 'ajoao@gmail.com'},
    ];
    
    return {
      titulo: 'AppWeb com NestJs',
      horaAgora: new Date(),
      listaPessoas: pessoas
    };
  }
  
  @Get()
  @Render('/contato')
  getContato(): object {
    let dadosContato = [
      {contato: '69 9 92034804'}
    ];

    return {
      titulo: 'Contate-me',
      listaContatos: dadosContato
    };
  }
  
}
