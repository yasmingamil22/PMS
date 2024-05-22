/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProjectsTableService } from './projects-table.service';

describe('Service: ProjectsTable', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsTableService]
    });
  });

  it('should ...', inject([ProjectsTableService], (service: ProjectsTableService) => {
    expect(service).toBeTruthy();
  }));
});
