import { TestBed, async, inject } from '@angular/core/testing';

import { ProjectAccessGuard } from './project-access.guard';

describe('ProjectAccessGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectAccessGuard]
    });
  });

  it('should ...', inject([ProjectAccessGuard], (guard: ProjectAccessGuard) => {
    expect(guard).toBeTruthy();
  }));
});
