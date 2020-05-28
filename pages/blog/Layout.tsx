import * as React from 'react';

export const Layout = (props: React.PropsWithChildren<{}>) => {
  return (
    <section>
      <main>{props.children}</main>
    </section>
  );
};
