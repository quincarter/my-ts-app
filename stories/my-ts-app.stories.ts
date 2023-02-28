import { html, TemplateResult } from 'lit';
import '../src/my-ts-app.js';

export default {
  title: 'MyTsApp',
  component: 'my-ts-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <my-ts-app style="--my-ts-app-background-color: ${backgroundColor}" .title=${title}></my-ts-app>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
