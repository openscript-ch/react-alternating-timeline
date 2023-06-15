import './Timeline.stories.css';
import { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';
import { Timeline, TimelineItemsProps } from '..';
import { defaultTimelineConfig } from './Timeline';

const meta: Meta<typeof Timeline> = {
  component: Timeline,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '80rem', marginInline: 'auto' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

const items: TimelineItemsProps = [
  {
    key: 1,
    title: '1 First date',
    date: new Date(),
    children: (
      <Fragment>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ut aspernatur quidem blanditiis quibusdam cum deserunt debitis
        recusandae quisquam fuga, aut numquam tempora consequatur doloremque! Nobis ipsam nisi omnis officiis
      </Fragment>
    ),
  },
  {
    key: 2,
    title: '2 Another date',
    date: new Date(),
    children: (
      <Fragment>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error explicabo obcaecati praesentium tenetur, perspiciatis tempora,
        distinctio quod voluptate a aliquam aspernatur nulla inventore quas unde, nostrum deserunt architecto commodi quidem tempore itaque
        molestias. Praesentium asperiores, tempore voluptatibus eveniet assumenda autem libero magni, eaque repudiandae quasi harum quas
        illum saepe corporis?
      </Fragment>
    ),
  },
  {
    key: 3,
    title: '3 A cool event',
    date: new Date(),
    children: (
      <Fragment>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quia illum? Quam sint unde ratione deleniti incidunt eos eaque eum
        numquam tempore asperiores recusandae porro, odit qui. Fugiat fuga obcaecati architecto? Earum laborum itaque maiores eveniet quam?
        Numquam, dolorem cumque laboriosam natus perspiciatis quo nam ea exercitationem illum veniam aspernatur, commodi pariatur, eligendi
        maiores et porro incidunt optio molestias nisi voluptatibus quidem mollitia. Cum illo fugiat iste dolorum voluptatibus debitis?
        <img src="/example-image.jpg" alt="test" />
      </Fragment>
    ),
  },
  {
    key: 4,
    title: '4 Something else happend',
    date: new Date(),
    children: (
      <Fragment>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis eius earum tempora sit vitae odit id voluptatem quam, explicabo
        quisquam assumenda laudantium doloribus facere, perspiciatis amet molestiae ad accusamus omnis. Explicabo repellendus deserunt omnis
        doloribus eum velit aperiam illo excepturi.
      </Fragment>
    ),
  },
  {
    key: 5,
    title: '5 Another event',
    date: new Date(),
    children: (
      <Fragment>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt nulla, nisi sed molestiae veritatis officia architecto quam ea
        eos exercitationem rerum possimus debitis suscipit. Accusamus eveniet recusandae molestias nihil facere molestiae error quas harum
        incidunt delectus et ducimus provident quos, ipsa repellat iste beatae maiores voluptas at voluptates illo fugit aperiam alias. At
        expedita aut itaque! Labore minus quam excepturi fuga accusantium amet a error vero animi necessitatibus delectus eveniet sit
        explicabo tenetur laboriosam, voluptates dolorem veritatis doloremque sed nisi quia molestiae, cumque minima earum. Fuga dignissimos
        veniam dicta, mollitia totam officia dolor earum id unde recusandae aliquid ullam, numquam esse atque, nemo laboriosam? Dolorum unde
        dolores incidunt ipsam ad eligendi quod ut pariatur exercitationem quam aperiam nostrum excepturi nam perspiciatis odit impedit
        eaque eum, delectus distinctio nihil totam blanditiis. Placeat aliquid sunt a rerum odit suscipit facilis qui sit voluptatem,
        dolores provident ea velit quam omnis pariatur officiis. Eos fugiat libero a laborum quo eum, eaque quis, impedit cupiditate
        perspiciatis aliquam repudiandae eligendi voluptas. Dolore sed, numquam eveniet reprehenderit minus id rerum possimus itaque
        voluptate temporibus atque earum soluta deserunt provident necessitatibus? Perspiciatis, natus doloribus dolores sequi provident
        corporis quae soluta libero aut esse numquam consequuntur optio eius reiciendis!{' '}
      </Fragment>
    ),
  },
  {
    key: 6,
    title: '6 This happend aswell',
    date: new Date(),
    children: (
      <Fragment>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In ducimus deserunt, nam recusandae amet sit quo nobis ut aliquam
        similique?
      </Fragment>
    ),
  },
  {
    key: 7,
    title: '7 Interessting date here',
    date: new Date(),
    children: (
      <Fragment>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque debitis sint ratione et id nisi quo error? Doloremque fugit
        provident accusamus optio autem, ex maxime voluptas perferendis tenetur temporibus alias reiciendis itaque quisquam! Asperiores
        voluptates laboriosam vel necessitatibus, ipsum reprehenderit sed eum eaque optio fugit blanditiis illo qui quisquam architecto quo
        nihil, quidem illum amet fugiat eos! Distinctio temporibus enim animi laborum mollitia exercitationem inventore natus iure maiores
        aliquam? Officia odio, iure dicta suscipit natus ratione cupiditate odit ipsa commodi enim voluptas doloribus nemo adipisci.
        Debitis, corrupti qui omnis, veritatis eaque, porro sapiente vitae aliquam eligendi inventore maxime excepturi voluptates.
      </Fragment>
    ),
  },
  {
    key: 8,
    title: '8 Cool stuff going on',
    date: new Date(),
    children: (
      <Fragment>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum modi iure, corporis ea sequi placeat hic. Ea esse quos dolorum eius,
        similique ipsum facilis illum nemo! Obcaecati tenetur in voluptatem.
      </Fragment>
    ),
  },
  {
    key: 9,
    title: '9 No more ideas',
    date: new Date(),
    children: (
      <Fragment>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorum ex assumenda voluptate aliquam quo possimus saepe libero
        expedita ipsa fugit nesciunt amet sint earum culpa veritatis vero dolor eaque consectetur! Ex quasi nemo provident, minus quis ipsam
        sint adipisci ut quisquam culpa ipsa obcaecati quo possimus assumenda. Repellat, obcaecati, accusamus saepe voluptatibus minus nisi
        exercitationem maxime non assumenda nulla iusto et facere ullam nostrum temporibus consequuntur ipsa quibusdam, eius possimus.
        Porro, nemo harum ipsa totam dignissimos sit voluptatibus dolorem?
      </Fragment>
    ),
  },
  {
    key: 10,
    title: '10 Christmas',
    date: new Date(),
    children: (
      <Fragment>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempora quia corrupti facere in. Blanditiis quae sunt corrupti
        beatae vitae nobis nisi, architecto dolorum explicabo, veniam libero maiores quo nihil distinctio in totam vero quibusdam
        voluptatem. Provident tempora quam quos.
      </Fragment>
    ),
  },
];

export const Basic: StoryObj<typeof Timeline> = { args: { items, ...defaultTimelineConfig } };

export const SpacingOptions: StoryObj<typeof Timeline> = {
  args: {
    items,
    ...defaultTimelineConfig,
    styleConfig: {
      gap: '5rem',
      offset: {
        left: '10rem',
        right: '3rem',
      },
      pointer: {
        offset: '4rem',
      },
    },
    minMarkerGap: 150,
  },
};

export const LeftPositioning: StoryObj<typeof Timeline> = { args: { items, ...defaultTimelineConfig, positioning: 'left' } };

export const RightPositioning: StoryObj<typeof Timeline> = { args: { items, ...defaultTimelineConfig, positioning: 'right' } };

export const CustomStyle: StoryObj<typeof Timeline> = {
  args: {
    items,
    ...defaultTimelineConfig,
    styleConfig: {
      card: {
        padding: '2rem',
        background: 'white',
        radius: '.2rem',
        shadow: '.1rem .1rem .5rem rgb(0,0,0,0.1)',
        offset: '2rem',
      },
      line: {
        width: '.1rem',
        color: 'gray',
      },
      marker: {
        color: 'hotpink',
        radius: '.2rem',
        size: '1.2rem',
      },
      pointer: {
        width: '2rem',
        height: '2rem',
      },
    },
  },
};

export const CustomCSS: StoryObj<typeof Timeline> = {
  args: {
    items,
    ...defaultTimelineConfig,
    className: 'timeline--styled',
    styleConfig: {
      card: {
        padding: '2rem',
        background: 'white',
        radius: '.2rem',
        shadow: '.1rem .1rem .5rem rgb(0,0,0,0.1)',
      },
      line: {
        width: '.1rem',
        color: 'gray',
      },
    },
  },
};

export const CustomContent: StoryObj<typeof Timeline> = {
  args: {
    items: [
      {
        key: '1',
        date: new Date(),
        title: 'Lorem, ipsum dolor.',
        children: (
          <Fragment>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis voluptatum at deleniti ut et incidunt eos ab.
              Cumque, atque. <a href="https://google.com">Go here!</a>
            </p>
            <img src="/example-image.jpg" alt="test" />
            <p />
            <button type="button">Learn more &gt;</button>
          </Fragment>
        ),
      },
    ],
  },
};

const customItems = [...items];
customItems[3] = {
  ...items[3],
  customMarker: <span style={{ fontSize: '2rem' }}>😵‍💫</span>,
  customPointer: <div className="pointy" style={{ backgroundColor: 'green' }} />,
};

export const CustomMarkerAndPointer: StoryObj<typeof Timeline> = {
  args: {
    items: customItems,
    ...defaultTimelineConfig,
    customMarker: <span style={{ fontSize: '2rem' }}>🔥</span>,
    customPointer: <div className="pointy" />,
  },
};

export const DateFormatting: StoryObj<typeof Timeline> = {
  args: {
    items,
    ...defaultTimelineConfig,
    formatDate: (date) => date.toDateString(),
  },
};
