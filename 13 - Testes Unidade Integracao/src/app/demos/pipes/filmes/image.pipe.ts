import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'imageformater'
})
export class ImageFormaterPipe implements PipeTransform {
    transform(imagem: string, caminho: string = '', substituir: boolean = true) {
        
        if (caminho == 'default')
            caminho = 'assets';
        else 
            caminho = 'padrao'

        if (imagem.length == 0 && substituir) {
            imagem = 'semCapa.jpg'
        }

        return "/" + caminho + "/" + imagem
    }
}