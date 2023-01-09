import { css } from '@emotion/react';
import { PropsWithChildren, useEffect } from 'react';
import { useCollapsibleTimeline } from '../features/context';

const style = css`
  background-color: blue;
`;

type Props = PropsWithChildren<{
  timestamp: number;
}>;

export function TimelineEntry({ timestamp, children }: Props) {
  const [, dispatch] = useCollapsibleTimeline();

  useEffect(() => {
    dispatch({ type: 'addEntry', entry: { timestamp } });
  }, [timestamp]);

  return <div css={style}>{children}</div>;
}
