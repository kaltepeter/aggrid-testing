import { AgGridModule } from '@ag-grid-community/angular';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { setSensibleGlobalStyles } from './sensible-global-styles';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe(`AppComponent`, () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          NoopAnimationsModule,
          AgGridModule.withComponents([])
        ],
        declarations: [AppComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Add some global styles to allow grid to be displayed
    setSensibleGlobalStyles<AppComponent>(fixture);

    // await fixture.whenRenderingDone();
    // fixture.detectChanges();
  });

  it('should not have access to grid api until detect changes', () => {
    expect(component).toBeTruthy();
    expect(component.aggrid.api).not.toBeTruthy();
  });

  // it('grid API is available after `detectChanges`', () => {
  //   fixture.detectChanges();
  //   expect(component.aggrid.api).toBeTruthy();
  // });
});
