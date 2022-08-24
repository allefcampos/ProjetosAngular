import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { PhotoFrameComponent } from './photo-frame.component';
import { PhotoFrameModule } from './photo-frame.module';

describe(PhotoFrameComponent.name, () => {
  let fixture: ComponentFixture<PhotoFrameComponent> = null;
  let component: PhotoFrameComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it(`${PhotoFrameComponent.prototype.like.name}
     should trigger (@Output liked) once when called mutiple times within debounce time`, fakeAsync(() => {
    fixture.detectChanges();

    let times = 0;
    component.liked.subscribe(() => times++);

    component.like();
    component.like();

    // controlar o tempo do debounce
    tick(500);

    expect(times).toBe(1);
  }));

  it(`${PhotoFrameComponent.prototype.like.name}
      should trigger(@Output liked) two times when called outside debounce time`, fakeAsync(() => {
    fixture.detectChanges();

    let times = 0;
    component.liked.subscribe(() => times++);

    component.like();
    component.like();
    tick(500);

    component.like();
    tick(500);

    expect(times).toBe(2);
  }));

  it(`Should display number of (@Input likes) when 'likes' is incremented`, () => {
    fixture.detectChanges();
    component.likes++;
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement.querySelector('.like-widget-container span');
    expect(element.textContent.trim()).toBe('1');
  });

  it(`(D) Should display image with src and description when bound to properties`, () => {
    const description = 'some description';
    const src = 'http://somesite.com/img.jpg';

    component.description = description;
    component.src = src;
    fixture.detectChanges();

    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('src')).toBe(src);
    expect(img.getAttribute('alt')).toBe(description);
  });
});
