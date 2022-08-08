import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Component } from "@angular/core";
import { ImageFormaterPipe } from "./image.pipe";

describe("ImageFormaterPipe", () => {
  const imagePipe = new ImageFormaterPipe();

  it("Deve transformar o caminho da imagem padrão", () => {
    expect(imagePipe.transform("", "default", true)).toEqual(
      "/assets/semCapa.jpg"
    );
  });

  it("Deve validar o caminho padrão do teste", () => {
    expect(imagePipe.transform("teste.png", "img", false)).not.toEqual(
      "/assets/semCapa.jpg"
    );
  });

  describe("testando comportamental do pipe", () => {
    @Component({
      template: `Imagem: {{ img | imageformater:teste }} `,
    })

    class ImagemComponent {
      img = "teste.png";
      caminho = "allef";
    }

    let component: ImagemComponent;
    let fixture: ComponentFixture<ImagemComponent>;
    let el: HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ImageFormaterPipe, ImagemComponent],
      });

      fixture = TestBed.createComponent(ImagemComponent);
      component = fixture.componentInstance;
      el = fixture.nativeElement;
    });

    //TODO: Finalizar implementação do teste.
  });
});
