import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { MatButtonModule, MatMenuModule } from '@angular/material';
import { FormsModule } from '../../node_modules/@angular/forms';
describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatButtonModule,
                MatMenuModule,
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
