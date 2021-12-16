import { render } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';

import * as TaskListStories from '../stories/TaskList.stories';

const { WithPinnedTasks } = composeStories(TaskListStories);

const { WithArchivedTasks } = composeStories(TaskListStories);

it('renders pinned tasks at the start of the list', () => {
  const { container } = render(<WithPinnedTasks />);

  expect(
    container.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]')
  ).not.toBe(null);
})

it('renders archived tasks at the end of the list', () => {
  const { container } = render(<WithArchivedTasks />);

  expect(
    container.querySelector('.list-item:last-of-type input[value="Task 6 (archived)"]')
  ).not.toBe(null);
})