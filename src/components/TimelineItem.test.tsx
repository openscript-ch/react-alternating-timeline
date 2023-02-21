import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TimelineItem } from './TimelineItem';

describe('<TimelineItem>', () => {
  it('should render props', () => {
    const component = render(<TimelineItem date="some date">Some children</TimelineItem>);

    expect(component.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="timeline-item "
        >
          <div
            class="timeline-item__marker "
          />
          <div
            class="timeline-card"
          >
            <div
              class="timeline-card__pointer "
            />
            <p
              class="timeline-card__date"
            >
              some date
            </p>
            Some children
          </div>
        </div>
      </div>
    `);
  });
});
