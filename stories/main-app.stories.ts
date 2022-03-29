import { html, TemplateResult } from 'lit';
import '../src/main-app.js';

export default {
  title: 'MainApp',
  component: 'main-app',
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
  <main-app style="--main-app-background-color: ${backgroundColor}" .title=${title}></main-app>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
