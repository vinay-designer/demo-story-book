import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Examples/Analytics Dashboard',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj;

export const FullDashboard: Story = {
  name: 'Full Dashboard',
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'max-width: 1100px; margin: 0 auto; padding: 32px 24px; font-family: "Plus Jakarta Sans", sans-serif; display: flex; flex-direction: column; gap: 24px;';

    // Header
    const header = document.createElement('div');
    header.style.cssText = 'display: flex; justify-content: space-between; align-items: center;';
    header.innerHTML = `
      <div>
        <h1 style="margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.03em; color: var(--ds-color-fg-primary, #141414);">Dashboard</h1>
        <p style="margin: 4px 0 0; font-size: 14px; color: var(--ds-color-fg-secondary, #545454); font-weight: 500;">Welcome back, here's your overview</p>
      </div>
      <div style="display: flex; gap: 10px;">
        <ds-button variant="outline" size="sm">Export</ds-button>
        <ds-button variant="primary" size="sm">+ New Listing</ds-button>
      </div>
    `;
    wrapper.appendChild(header);

    // Stats Row
    const statsRow = document.createElement('div');
    statsRow.style.cssText = 'display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;';
    statsRow.innerHTML = `
      <ds-stat-card label="Revenue" value="$48,200" change="+12.5%" trend="up" description="vs last month"></ds-stat-card>
      <ds-stat-card label="Bookings" value="328" change="+8.1%" trend="up" description="23 today"></ds-stat-card>
      <ds-stat-card label="Occupancy" value="87%" change="-2.4%" trend="down" description="vs last week"></ds-stat-card>
      <ds-stat-card label="Rating" value="4.87" change="0%" trend="neutral" description="1,247 reviews"></ds-stat-card>
    `;
    wrapper.appendChild(statsRow);

    // Charts Row
    const chartsRow = document.createElement('div');
    chartsRow.style.cssText = 'display: grid; grid-template-columns: 2fr 1fr; gap: 16px;';

    // Line Chart Card
    const lineCard = document.createElement('div');
    lineCard.style.cssText = 'padding: 24px; border-radius: 24px; border: 1.5px solid var(--ds-color-border-subtle, #EFEFEF); background: var(--ds-color-bg-primary, #fff);';
    const lineTitle = document.createElement('div');
    lineTitle.style.cssText = 'font-size: 16px; font-weight: 700; color: var(--ds-color-fg-primary, #141414); margin-bottom: 16px; letter-spacing: -0.02em;';
    lineTitle.textContent = 'Revenue Trend';
    lineCard.appendChild(lineTitle);
    const lineChart = document.createElement('ds-chart-line') as any;
    lineChart.series = [
      { name: 'This Year', color: '#FF385C', data: [{ label: 'Jan', value: 4200 }, { label: 'Feb', value: 5800 }, { label: 'Mar', value: 4900 }, { label: 'Apr', value: 7200 }, { label: 'May', value: 6100 }, { label: 'Jun', value: 8400 }] },
      { name: 'Last Year', color: '#CBCBCB', data: [{ label: 'Jan', value: 3100 }, { label: 'Feb', value: 4200 }, { label: 'Mar', value: 3800 }, { label: 'Apr', value: 5100 }, { label: 'May', value: 4600 }, { label: 'Jun', value: 6200 }] },
    ];
    lineChart.setAttribute('height', '220');
    lineChart.setAttribute('show-area', '');
    lineChart.setAttribute('show-dots', '');
    lineChart.setAttribute('show-grid', '');
    lineChart.setAttribute('animated', '');
    lineCard.appendChild(lineChart);
    chartsRow.appendChild(lineCard);

    // Donut Chart Card
    const donutCard = document.createElement('div');
    donutCard.style.cssText = 'padding: 24px; border-radius: 24px; border: 1.5px solid var(--ds-color-border-subtle, #EFEFEF); background: var(--ds-color-bg-primary, #fff); display: flex; flex-direction: column; align-items: center;';
    const donutTitle = document.createElement('div');
    donutTitle.style.cssText = 'font-size: 16px; font-weight: 700; color: var(--ds-color-fg-primary, #141414); margin-bottom: 16px; letter-spacing: -0.02em; align-self: flex-start;';
    donutTitle.textContent = 'Traffic Sources';
    donutCard.appendChild(donutTitle);
    const donutChart = document.createElement('ds-chart-donut') as any;
    donutChart.data = [
      { label: 'Direct', value: 42, color: '#FF385C' },
      { label: 'Organic', value: 28, color: '#10b981' },
      { label: 'Referral', value: 18, color: '#8b5cf6' },
      { label: 'Social', value: 12, color: '#f59e0b' },
    ];
    donutChart.setAttribute('size', '170');
    donutChart.setAttribute('thickness', '24');
    donutChart.setAttribute('show-center', '');
    donutChart.setAttribute('center-value', '5.2K');
    donutChart.setAttribute('center-label', 'Visitors');
    donutChart.setAttribute('animated', '');
    donutCard.appendChild(donutChart);
    chartsRow.appendChild(donutCard);
    wrapper.appendChild(chartsRow);

    // Bottom Row: Bar Chart + Recent Activity
    const bottomRow = document.createElement('div');
    bottomRow.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 16px;';

    // Bar Chart Card
    const barCard = document.createElement('div');
    barCard.style.cssText = 'padding: 24px; border-radius: 24px; border: 1.5px solid var(--ds-color-border-subtle, #EFEFEF); background: var(--ds-color-bg-primary, #fff);';
    const barTitle = document.createElement('div');
    barTitle.style.cssText = 'font-size: 16px; font-weight: 700; color: var(--ds-color-fg-primary, #141414); margin-bottom: 16px; letter-spacing: -0.02em;';
    barTitle.textContent = 'Bookings by Region';
    barCard.appendChild(barTitle);
    const barChart = document.createElement('ds-chart-bar') as any;
    barChart.data = [
      { label: 'Americas', value: 4200, color: '#FF385C' },
      { label: 'Europe', value: 3800, color: '#8b5cf6' },
      { label: 'Asia', value: 2900, color: '#10b981' },
      { label: 'Africa', value: 1200, color: '#f59e0b' },
      { label: 'Oceania', value: 900, color: '#4a4a7a' },
    ];
    barChart.setAttribute('height', '200');
    barChart.setAttribute('show-values', '');
    barChart.setAttribute('animated', '');
    barCard.appendChild(barChart);
    bottomRow.appendChild(barCard);

    // Timeline Card
    const timelineCard = document.createElement('div');
    timelineCard.style.cssText = 'padding: 24px; border-radius: 24px; border: 1.5px solid var(--ds-color-border-subtle, #EFEFEF); background: var(--ds-color-bg-primary, #fff);';
    const timelineTitle = document.createElement('div');
    timelineTitle.style.cssText = 'font-size: 16px; font-weight: 700; color: var(--ds-color-fg-primary, #141414); margin-bottom: 16px; letter-spacing: -0.02em;';
    timelineTitle.textContent = 'Recent Activity';
    timelineCard.appendChild(timelineTitle);
    const timeline = document.createElement('ds-timeline') as any;
    timeline.items = [
      { title: 'New booking received', description: 'Sarah Chen booked Oceanfront Villa for 5 nights.', time: '2h ago', variant: 'success' },
      { title: 'Payment processed', description: '$1,250 received for booking #4821.', time: '3h ago', variant: 'info' },
      { title: 'Review posted', description: '5-star review from James Wilson.', time: '5h ago', variant: 'success' },
      { title: 'Listing updated', description: 'Mountain Retreat photos refreshed.', time: '8h ago', variant: 'default' },
    ];
    timelineCard.appendChild(timeline);
    bottomRow.appendChild(timelineCard);
    wrapper.appendChild(bottomRow);

    return wrapper;
  },
};
