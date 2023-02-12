import { TestBed } from '@angular/core/testing';

import { MyinterceptorInterceptor } from './myinterceptor.interceptor';

describe('MyinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MyinterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MyinterceptorInterceptor = TestBed.inject(MyinterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
