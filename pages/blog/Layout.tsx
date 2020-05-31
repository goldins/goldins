import * as React from 'react';

export const Layout = (props: React.PropsWithChildren<Record<string, unknown>>) => {
  return (
    <section>
      <main>{props.children}</main>
    </section>
  );
};
