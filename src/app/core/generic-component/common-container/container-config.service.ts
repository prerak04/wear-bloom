import { BehaviorSubject } from 'rxjs';
import { ContainerConfig } from './container-config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContainerConfigService {
  private configSubject = new BehaviorSubject<ContainerConfig | null>(null);
  public config$ = this.configSubject.asObservable();

  constructor() {}

  set = (config: ContainerConfig) => {
    this.configSubject.next(config);
  };

  get = (): ContainerConfig => {
    if (this.configSubject.value === null) {
      throw new Error('ContainerConfig is not set.');
    }
    return this.configSubject.value;
  };

  reset(): void {
    this.configSubject.next(null);
  }
}
