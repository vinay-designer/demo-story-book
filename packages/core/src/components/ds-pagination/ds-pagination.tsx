import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-pagination',
  styleUrl: 'ds-pagination.css',
  shadow: true,
})
export class DsPagination {
  @Prop() total: number = 0;
  @Prop() pageSize: number = 10;
  @Prop({ mutable: true }) currentPage: number = 1;
  @Prop() siblingCount: number = 1;

  @Event() dsPageChange: EventEmitter<number>;

  private get totalPages(): number {
    return Math.max(1, Math.ceil(this.total / this.pageSize));
  }

  private getPageNumbers(): (number | '...')[] {
    const total = this.totalPages;
    const current = this.currentPage;
    const siblings = this.siblingCount;

    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const leftSibling = Math.max(current - siblings, 1);
    const rightSibling = Math.min(current + siblings, total);
    const showLeftDots = leftSibling > 2;
    const showRightDots = rightSibling < total - 1;

    const pages: (number | '...')[] = [1];

    if (showLeftDots) {
      pages.push('...');
    } else {
      for (let i = 2; i < leftSibling; i++) pages.push(i);
    }

    for (let i = leftSibling; i <= rightSibling; i++) {
      if (i !== 1 && i !== total) pages.push(i);
    }

    if (showRightDots) {
      pages.push('...');
    } else {
      for (let i = rightSibling + 1; i < total; i++) pages.push(i);
    }

    if (total > 1) pages.push(total);

    return pages;
  }

  private goToPage(page: number) {
    if (page < 1 || page > this.totalPages || page === this.currentPage) return;
    this.currentPage = page;
    this.dsPageChange.emit(page);
  }

  render() {
    const pages = this.getPageNumbers();
    const hasPrev = this.currentPage > 1;
    const hasNext = this.currentPage < this.totalPages;

    return (
      <Host>
        <nav class="pagination" aria-label="Pagination" part="nav">
          <button
            class="pagination__btn pagination__prev"
            disabled={!hasPrev}
            aria-label="Previous page"
            onClick={() => this.goToPage(this.currentPage - 1)}
            part="prev"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>

          {pages.map((page) =>
            page === '...' ? (
              <span class="pagination__ellipsis" aria-hidden="true">...</span>
            ) : (
              <button
                class={{
                  'pagination__btn': true,
                  'pagination__page': true,
                  'pagination__page--active': page === this.currentPage,
                }}
                aria-current={page === this.currentPage ? 'page' : undefined}
                aria-label={`Page ${page}`}
                onClick={() => this.goToPage(page)}
                part="page"
              >
                {page}
              </button>
            ),
          )}

          <button
            class="pagination__btn pagination__next"
            disabled={!hasNext}
            aria-label="Next page"
            onClick={() => this.goToPage(this.currentPage + 1)}
            part="next"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </nav>
      </Host>
    );
  }
}
