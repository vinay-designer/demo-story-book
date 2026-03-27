import { Component, Prop, Event, EventEmitter, State, h, Host } from '@stencil/core';

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

export type SortOrder = 'asc' | 'desc' | 'none';

export interface SortEvent {
  key: string;
  order: SortOrder;
}

@Component({
  tag: 'ds-table',
  styleUrl: 'ds-table.css',
  shadow: true,
})
export class DsTable {
  @Prop() columns: TableColumn[] = [];
  @Prop() data: Record<string, unknown>[] = [];
  @Prop({ mutable: true }) sortBy?: string;
  @Prop({ mutable: true }) sortOrder: SortOrder = 'none';
  @Prop({ reflect: true }) striped: boolean = false;
  @Prop({ reflect: true }) hoverable: boolean = true;
  @Prop({ reflect: true }) compact: boolean = false;

  @Event() dsSort: EventEmitter<SortEvent>;
  @Event() dsRowClick: EventEmitter<Record<string, unknown>>;

  private handleSort(column: TableColumn) {
    if (!column.sortable) return;

    if (this.sortBy === column.key) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : this.sortOrder === 'desc' ? 'none' : 'asc';
    } else {
      this.sortBy = column.key;
      this.sortOrder = 'asc';
    }

    if (this.sortOrder === 'none') {
      this.sortBy = undefined;
    }

    this.dsSort.emit({ key: column.key, order: this.sortOrder });
  }

  private get sortedData(): Record<string, unknown>[] {
    if (!this.sortBy || this.sortOrder === 'none') return this.data;

    return [...this.data].sort((a, b) => {
      const aVal = a[this.sortBy!];
      const bVal = b[this.sortBy!];

      if (aVal == null && bVal == null) return 0;
      if (aVal == null) return 1;
      if (bVal == null) return -1;

      const comparison = String(aVal).localeCompare(String(bVal), undefined, { numeric: true });
      return this.sortOrder === 'desc' ? -comparison : comparison;
    });
  }

  private handleRowClick(row: Record<string, unknown>) {
    this.dsRowClick.emit(row);
  }

  render() {
    const rows = this.sortedData;

    return (
      <Host>
        <div class="table-wrapper" part="wrapper">
          <table
            class={{
              'table': true,
              'table--striped': this.striped,
              'table--hoverable': this.hoverable,
              'table--compact': this.compact,
            }}
            part="table"
          >
            <thead class="table__head" part="head">
              <tr>
                {this.columns.map((col) => (
                  <th
                    class={{
                      'table__th': true,
                      'table__th--sortable': !!col.sortable,
                      [`table__th--${col.align || 'left'}`]: true,
                    }}
                    style={col.width ? { width: col.width } : {}}
                    onClick={() => this.handleSort(col)}
                    aria-sort={
                      this.sortBy === col.key
                        ? this.sortOrder === 'asc' ? 'ascending' : this.sortOrder === 'desc' ? 'descending' : 'none'
                        : undefined
                    }
                    part="th"
                  >
                    <span class="table__th-content">
                      {col.label}
                      {col.sortable && (
                        <span class="table__sort-icon">
                          {this.sortBy === col.key && this.sortOrder === 'asc' && (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15" /></svg>
                          )}
                          {this.sortBy === col.key && this.sortOrder === 'desc' && (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9" /></svg>
                          )}
                          {(this.sortBy !== col.key || this.sortOrder === 'none') && (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" opacity="0.3"><polyline points="6 9 12 15 18 9" /></svg>
                          )}
                        </span>
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody class="table__body" part="body">
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={this.columns.length} class="table__empty">
                    <slot name="empty">No data available</slot>
                  </td>
                </tr>
              ) : (
                rows.map((row) => (
                  <tr
                    class="table__row"
                    onClick={() => this.handleRowClick(row)}
                    part="row"
                  >
                    {this.columns.map((col) => (
                      <td
                        class={{
                          'table__td': true,
                          [`table__td--${col.align || 'left'}`]: true,
                        }}
                        part="td"
                      >
                        {String(row[col.key] ?? '')}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Host>
    );
  }
}
