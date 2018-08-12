import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FilterPipe } from './app.pipes';
import { FormsModule } from '@angular/forms';
describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                AppComponent,
                FilterPipe
            ],
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
