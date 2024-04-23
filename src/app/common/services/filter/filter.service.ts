import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private readonly filterStore = signal<string | null>(null);
  public filter = computed(() => this.filterStore());
  public setFilter(value: string | null) {
    this.filterStore.set(value);
  }
  public clearFilter() {
    this.setFilter(null);
  }
}
