import { TestBed } from '@angular/core/testing';

import { ServiceGalleryService } from './service-gallery.service';

describe('ServiceGalleryService', () => {
  let service: ServiceGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
