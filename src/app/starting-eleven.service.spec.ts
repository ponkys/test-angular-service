import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StartingElevenService } from './starting-eleven.service';
import { Player } from './player.model';
import { mockPlayer, STARTERS, PLAYERS } from './mock-data';

describe('StartingElevenService', () => {
  let service: StartingElevenService;
  beforeEach(() => {
      TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    TestBed.get(HttpTestingController);
    service = TestBed.get(StartingElevenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
